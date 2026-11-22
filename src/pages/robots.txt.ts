import { absoluteUrl } from '../seo';

export function GET() {
  return new Response('User-agent: *\nDisallow: /api/\nSitemap: ' + absoluteUrl('/sitemap.xml') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=UTF-8' },
  });
}
