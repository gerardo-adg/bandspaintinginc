import { services } from './service-pages';
import previousOptions from './services.json';

export const estimateServices = services.map(service => ({
  slug: service.slug,
  name: service.name,
  value: previousOptions.find(option => option.toLowerCase() === service.name.toLowerCase()) ?? service.name,
}));

export const acceptedServices = new Set([
  ...previousOptions,
  ...estimateServices.map(service => service.value),
]);
