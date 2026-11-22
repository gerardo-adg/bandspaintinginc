import { services, servicePath } from './service-pages';

export const siteOrigin = new URL(import.meta.env.SITE_URL || 'https://bandspaintinginc.com').origin;
export const absoluteUrl = (path: string) => new URL(path, siteOrigin).href;
const company = 'B&S Painting Inc.';
const businessId = absoluteUrl('/#business');
const websiteId = absoluteUrl('/#website');
const serviceId = (slug: string) => absoluteUrl(servicePath(slug) + '#service');

export type PageSeo = {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  image?: string;
  service?: (typeof services)[number];
  breadcrumbs?: { name: string; path: string }[];
};

export function structuredData(path: string, title: string, description: string, seo: PageSeo) {
  const url = absoluteUrl(path);
  const breadcrumbs = seo.breadcrumbs ?? [{ name: 'Home', path: '/' }, { name: title, path }];
  const areaServed = { '@type': 'City', name: 'Sacramento', containedInPlace: { '@type': 'State', name: 'California' } };
  const graph: Record<string, unknown>[] = [{
    '@type': 'HousePainter',
    '@id': businessId,
    name: company,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/images/bs-painting-logo.webp'),
    image: absoluteUrl('/images/7141150-el-dorado-hills-interior-work.webp'),
    telephone: '+1-916-868-9188',
    email: 'Bryana@bspaintinc.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA', addressCountry: 'US' },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting and related services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': serviceId(service.slug), name: service.name, url: absoluteUrl(servicePath(service.slug)) },
      })),
    },
  }, {
    '@type': 'WebSite',
    '@id': websiteId,
    name: company,
    url: absoluteUrl('/'),
    publisher: { '@id': businessId },
  }, {
    '@type': seo.type ?? 'WebPage',
    '@id': url + '#webpage',
    url,
    name: title,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': websiteId },
    ...(seo.service ? { mainEntity: { '@id': serviceId(seo.service.slug) } } : { about: { '@id': businessId } }),
    ...(seo.image && { primaryImageOfPage: { '@type': 'ImageObject', contentUrl: absoluteUrl(seo.image) } }),
    ...(path !== '/' && { breadcrumb: { '@id': url + '#breadcrumb' } }),
  }];
  if (path !== '/') graph.push({
    '@type': 'BreadcrumbList',
    '@id': url + '#breadcrumb',
    itemListElement: breadcrumbs.map(({ name, path }, index) => ({
      '@type': 'ListItem', position: index + 1, name, item: absoluteUrl(path),
    })),
  });
  if (seo.service) graph.push({
    '@type': 'Service',
    '@id': serviceId(seo.service.slug),
    name: seo.service.name,
    serviceType: seo.service.name,
    url,
    description,
    areaServed,
    provider: { '@id': businessId },
  });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
