import services from '../src/services.json' with { type: 'json' };

const unavailable = 'We couldn’t save your request. Please try again or call (916) 868-9188.';

function reply(request, status, message) {
  const headers = { 'Cache-Control': 'no-store' };
  if (request.headers.get('Accept')?.includes('application/json')) {
    return Response.json({ message }, { status, headers });
  }
  return new Response(message, { status, headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/estimate') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });
    if (request.headers.get('Origin') !== url.origin) return reply(request, 403, 'Please submit the form from the estimate page.');
    if (!request.headers.get('Content-Type')?.startsWith('application/x-www-form-urlencoded')) {
      return reply(request, 415, 'Please submit the form from the estimate page.');
    }
    const body = await request.text();
    if (body.length > 8192) return reply(request, 413, 'Please shorten your request.');
    const fields = new URLSearchParams(body);
    const [name, phone, email, service, address] = ['name', 'phone', 'email', 'service', 'address'].map(key => fields.get(key)?.trim() ?? '');
    const digits = phone.replace(/\D/g, '');
    if (!name || name.length > 120 || digits.length < 7 || digits.length > 15 || phone.length > 40
        || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        || !services.includes(service) || !address || address.length > 300) {
      return reply(request, 400, 'Please check that all five fields are complete and that your email and phone number are valid.');
    }
    try {
      await env.DB.prepare('INSERT INTO estimate_requests (id, name, phone, email, service, address) VALUES (?, ?, ?, ?, ?, ?)')
        .bind(crypto.randomUUID(), name, phone, email, service, address).run();
    } catch {
      return reply(request, 503, unavailable);
    }
    return reply(request, 201, 'Thanks! B&S Painting received your estimate request.');
  },
};
