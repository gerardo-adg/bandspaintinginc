import projects from '../projects.json';
import { services, servicePath } from '../service-pages';
import { absoluteUrl } from '../seo';

export function GET() {
  const routes = [
    '/', '/services/', '/projects/', '/about/', '/contact/', '/privacy-policy/', '/terms-and-conditions/',
    ...services.map(service => servicePath(service.slug)),
    ...projects.map(project => '/projects/' + project.slug + '/'),
  ];
  const entries = routes.map(path => '<url><loc>' + absoluteUrl(path) + '</loc></url>').join('\n');
  return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + entries + '\n</urlset>\n', {
    headers: { 'Content-Type': 'application/xml; charset=UTF-8' },
  });
}
