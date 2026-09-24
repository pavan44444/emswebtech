// "What We Do" nav dropdown + service detail pages — content sourced from
// the original emswebtech.com site, cleaned up.
export const services = [
  {
    slug: 'web-design-development',
    title: 'Web Designing & Development',
    short: 'Websites built on modern web technologies for a strong, enviable online presence.',
    body:
      'We develop a strong and enviable online presence for your brand, using the latest web technologies to build sites that are simple to use, easy to navigate, and built to convert visitors into customers.',
    shape: 'circle',
    color: 'olive',
  },
  {
    slug: 'branding',
    title: 'Branding',
    short: 'Visual identity that makes your business memorable.',
    body:
      'From logo design to brochures and corporate banners, we build a consistent visual identity that carries your brand across every touchpoint.',
    shape: 'triangle',
    color: 'olive-light',
  },
  {
    slug: 'cms-development',
    title: 'CMS Development',
    short: 'Full control over your own content, no developer required.',
    body:
      'Edit, delete, or publish new content yourself, without needing much technical expertise. Our CMS builds streamline how you manage your website day to day.',
    shape: 'blob',
    color: 'orange',
  },
  {
    slug: 'ecommerce-development',
    title: 'Ecommerce Development',
    short: 'Online stores that turn visitors into customers.',
    body:
      'All-encompassing e-commerce solutions that convert your visitors into customers and take your brand reach to the next level.',
    shape: 'square',
    color: 'olive',
  },
  {
    slug: 'internet-marketing',
    title: 'Internet Marketing',
    short: 'SEO, PPC and social media, working together.',
    body:
      'We combine search engine optimisation, pay-per-click campaigns, and social media marketing to build brand awareness and drive qualified traffic.',
    shape: 'circle',
    color: 'olive-light',
  },
  {
    slug: 'application-development',
    title: 'Application Development',
    short: 'Scalable, secure web applications for any requirement.',
    body:
      'A solution for every requirement — highly scalable, performance-oriented, dynamic and secure web applications built around your business needs.',
    shape: 'triangle',
    color: 'orange',
  },
  {
    slug: 'domain-hosting',
    title: 'Domain & Hosting',
    short: 'Domain registration and unlimited hosting, handled for you.',
    body:
      'Full domain name search and registration, plus website hosting with unlimited bandwidth — not capped, not throttled, not "just enough for your site."',
    shape: 'blob',
    color: 'olive',
  },
  {
    slug: 'email-services',
    title: 'Email Services',
    short: 'Professional email and productivity tools for your team.',
    body:
      'Professional email, online storage, shared calendars and video meetings, built for business and designed to simplify how your team works online.',
    shape: 'square',
    color: 'olive-light',
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
