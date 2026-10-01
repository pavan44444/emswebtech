// src/data/services.js
// The 14 main services from the EMS Webtech services document.
// Images live in /public/assets/images/ (served from /assets/images/...).
// Slugs kept from the earlier version: web-design-development, cms-development,
// ecommerce-development, application-development, domain-hosting,
// internet-marketing, branding. "email-services" is now part of domain-hosting.
// `sections` (optional) = extra specialised services shown as cards on the detail page.

export const services = [
  {
    slug: 'website-design-ui-ux',
    title: 'Website Design & UI/UX',
    short: 'Clean, responsive designs built around how your visitors think and buy.',
    body:
      'From corporate and business websites to landing pages and full redesigns, we design sites that look sharp on every screen and guide visitors towards taking action.',
    image: '/assets/images/webdesign.png',
    shape: 'circle',
    color: 'olive',
    features: [
      'Corporate Website Design',
      'Business Website Design',
      'Custom Website Design',
      'Responsive / Mobile-Friendly Design',
      'UI/UX Design',
      'Landing Page Design',
      'Website Redesign & Revamp',
      'Creative & Interactive Website Design',
      'Conversion-Focused Website Design',
    ],
    outcome: 'A design that represents your brand and turns visits into enquiries.',
    sections: [
      {
        title: 'Responsive Website Design',
        text:
          'Times have changed, and websites need to move ahead with different designs. A new-age website comes with features that engage online visitors and give the best responses. We build for optimal viewing, so users can read flexibly without distractions, with simple and smart navigation links. Our optimisation process includes proper use of fonts, images and designs.',
        points: [
          'Optimal viewing on every device',
          'Flexible reading without distractions',
          'Simple and smart navigation links',
          'Proper use of fonts, images and designs',
        ],
      },
      {
        title: 'Access Diversified',
        text:
          'Your website can be accessed on computers, mobiles or any other device. User preferences have changed with time, and we have been working to meet their web needs, progressing with new concepts to bring newness, amazement and engagement to online customers. The accessibility of the site is never disturbed, so customers enjoy an elegant presence and can explore the features and benefit from them.',
        points: [
          'Accessible on computers, mobiles and other devices',
          'Built around changing user preferences',
          'Accessibility level of the site is never disturbed',
          'Elegant presence with every feature available',
        ],
      },
      {
        title: 'Timely Manipulations',
        text:
          'Using JavaScript and CSS3, we bring new kinds of user experiences to your site, and it looks equally good on whichever system you access it from. Publishing takes less time, and the web cost can be minimised considerably. More content can be viewed in one scroll, so viewers find most of the information in less time and are more likely to decide to order the product. Responsive themes display with the same clarity on tablets and smartphones.',
        points: [
          'JavaScript and CSS3 for new kinds of user experience',
          'Equally good look on every system',
          'Less time to publish, lower web cost',
          'More content visible in one scroll',
          'Same clarity on tablets and smartphones',
        ],
      },
      {
        title: 'Designed Around the Consumer Mindset',
        text:
          'With a large team, we know how to develop websites with smart inbuilt features for effective results. Responsive sites help you gain more users online, who engage and spend more time getting to know your products with minimal page scrolling. They improve customer interaction because we develop the site knowing the consumer mindset. Users today express how they want web features organised, so we work on better navigation and execute every feature in the best manner.',
        points: [
          'Smart inbuilt features for effective results',
          'Minimal page scrolling, more time on your products',
          'Better navigation and feature organisation',
          'Responsive websites for any category of business',
          'Smart coding for the landscape-to-portrait changeover on iPhone and tablet',
        ],
      },
      {
        title: 'Quick Conveniences',
        text:
          'Simple drag-and-drop facilities let anyone without coding knowledge position images and other features flexibly. This is a boon to start-up companies, who get simple alignment features on the web and can view the site on mobile devices too. You can upload a new theme and enjoy an elegant look. Cost can be saved because this is a one-time development of the website; if you later wish to introduce different products or a variety of services, only a small change is needed.',
        points: [
          'Drag-and-drop positioning of images and features',
          'A boon to start-up companies',
          'Upload a new theme for a fresh look',
          'One-time development, small changes later',
        ],
      },
      {
        title: 'Responsive Websites for Every Category',
        text:
          'Responsive websites can be developed for various categories such as education, event management, retail and much more. You can visit our web development centre to see the different portfolios we have developed earlier, evaluate the website for responsiveness and be prepared for the best business online.',
        points: [
          'Education',
          'Event management',
          'Retail and much more',
          'Earlier portfolios available to view',
        ],
      },
      {
        title: 'Website Redesign',
        text:
          'We stay a step ahead when it comes to website redesign. With changing trends, design, layout and content-writing needs change too, and visiting users expect a different style and site organisation. A redesign also improves site accessibility better than before. Some sites are considered outdated and customers do not feel like visiting often, so a change or makeover becomes necessary.',
        points: [
          'Keeps pace with changing trends in design and content',
          'Fresh style and site organisation',
          'Improved site accessibility',
          'A makeover for outdated sites',
        ],
      },
      {
        title: 'Meeting Business Goals',
        text:
          'A business in expansion needs more space to display the many products to be introduced to the market at short notice, so the website organisation and web plan need to change. Relevant data is added with modern designs, and any growth in the business is expressed on the site. The new organisation is built with the finest coding and design practice, and our design experts provide the best website redesign solution.',
        points: [
          'More space for new products and services',
          'Growth in business reflected on the site',
          'Modern designs for relevant data',
          'Finest coding and design practice',
        ],
      },
      {
        title: 'High Defined User Experience',
        text:
          'Technological evolution has created opportunities for great interactivity in websites and for making them user-friendly. Ease of use brings satisfaction to users, and quick navigation or timely interaction can be arranged by our development team.',
        points: [
          'Better interactivity',
          'User-friendly, easy-to-use site',
          'Quick navigation',
          'Timely interaction arranged by our development team',
        ],
      },
      {
        title: 'Awesome Look for the Website',
        text:
          'If you plan an e-commerce website, it is essential that it looks professional and attractive to the user. The enhanced look comes from the best coding and design practice, along with organisation features made available to site owners. An appealing site encourages visitors to come back, and finest content-writing work is executed as well. Consult our team to discuss how each web page can be presented for a professional look.',
        points: [
          'Professional, attractive look',
          'Organisation features for site owners',
          'Appealing design that promotes revisits',
          'Finest content writing',
          'Page-by-page presentation planned with you',
        ],
      },
      {
        title: 'Top Search Engine Results',
        text:
          'High ranking in search engines plays an important role in attracting users to the site, and maintaining a top position is a challenging process, so our team works through regular updates. A redesigned website helps meet the business owner\'s aspiration of gaining more customers and product sales. With the latest development techniques, we make the site match present trends. The site can be redesigned specifically as you suggest, or the whole site can be reworked for a better look and better function.',
        points: [
          'Regular updates to support search ranking',
          'Built to gain more customers and product sales',
          'Latest development techniques matching present trends',
          'Targeted redesign or complete rework',
        ],
      },
      {
        title: 'Redesign Process',
        text:
          'We begin with analysis: we analyse the functionality of the site first and then focus on design and development, checking the search engine listing and considering graphics, uploaded images and more for a complete evaluation. Next comes business requirement: every business owner has their own expectations of a site, so long discussions are held on the best web plan, and any special requirement is met with the best technical inputs. Finest design and coding is worked into effective online business processes, and users\' common expectations on visiting the site are implemented.',
        points: [
          'Analysis of site functionality, design and development',
          'Search engine listing check',
          'Evaluation of graphics and uploaded images',
          'Long discussions with the business owner on the web plan',
          'Special requirements met with best technical inputs',
          'Users\' common expectations implemented',
        ],
      },
    ],
  },
  {
    slug: 'web-design-development',
    title: 'Website Development',
    short: 'Websites built on modern web technologies for a strong, enviable online presence.',
    body:
      'We develop a strong and enviable online presence for your brand, using the latest web technologies to build sites that are simple to use, easy to navigate, and built to convert visitors into customers.',
    image: '/assets/images/web-design.jpg',
    shape: 'triangle',
    color: 'olive-light',
    features: [
      'Custom Website Development',
      'PHP Website Development',
      'WordPress Development',
      'CodeIgniter Development',
      'HTML5 / CSS3 / JavaScript Development',
      'React / Next.js / Nuxt.js Development',
      'Dynamic Website Development',
      'Custom Web Applications',
      'API Development & Integration',
      'Third-Party API Integration',
    ],
    outcome: 'A website that looks sharp, loads fast, and turns visitors into enquiries.',
    paragraphs: [
      'The expert team at EMS Webtech delivers superior results in every area that matters to a website: better access to the site, the ability to grab attention, a smooth flow of information, and accurate functioning with better features included. Web design and layout are necessary for an online presence and for business success. Our team of graphic designers and programmers does its best to provide the solution that matters for long-term success. Our solutions are a blend of science and art, and both are required for a website to be well organised and successful. Our designers know how each design decision matters, both to attention and to the actions visitors take on the web.',
      'Vector graphics skills are used to create accurate and impressive designs, which you may recognise in logos, and the latest software is used for this work. The logos we design are exceptional and made for lasting acceptance. Themes are organised beautifully for the best attention, and the images we source are of the finest quality. Along with designs, you can expect short videos, beautifully executed, as part of your product introduction. On the development side, the finest homepages are developed intelligently with smart code in PHP, and content management tools for organising web pages are built with WordPress and various others. We have been able to bring different concepts, which can be called unconventional but interesting.',
      "Responsive web design has been part of projects we have delivered for many clients, and most of today's websites are responsive. We consider different measures while developing a site so that customers can get to know your product and interact with you instantly. E-commerce sites can be developed to bring the best solution for secure product ordering, along with clear site navigation and clear disclosure of product information, and we simplify the navigation system so customers can decide quickly. Different creative inputs are checked and provided for a lasting impression, and maintenance cost can be minimised with proper planning and action. We develop websites for hospitals, hotels, e-commerce businesses and NGOs, and you can expect our dedicated efforts to lead to online business success.",
    ],
    sections: [
      {
        title: 'Web Design & Development',
        text:
          'The expert team at EMS Webtech delivers superior results for better access to your site, grabbing attention, smooth information flow and accurate functioning of websites with better features included. Web design and layout are necessary for an online presence and business success.',
        points: [
          'Better access to your site',
          'Attention-grabbing design',
          'Smooth information flow',
          'Accurate functioning with better features',
        ],
      },
      {
        title: 'Designers and Programmers, Together',
        text:
          'Our team of graphic designers and programmers does its best to provide the solution that matters for long-term success. Our solutions are a blend of science and art, both of which a website needs to be well organised and successful. Designers know how each design matters to attention and to web-related action.',
        points: [
          'Graphic designers and programmers in one team',
          'A blend of science and art',
          'Every design decision tied to attention and action',
          'Solutions aimed at long-term success',
        ],
      },
      {
        title: 'Graphics, Logos & Visuals',
        text:
          'Vector graphics skills are used for accurate and impressive designs, which you may recognise in logos, using the latest software. Logos are designed to be exceptional and to last. Themes are organised beautifully for the best attention, and images are sourced at the finest quality. Along with designs, you can expect short videos, beautifully executed, as part of product introduction.',
        points: [
          'Vector graphics for accurate, impressive designs',
          'Logos made for lasting acceptance',
          'Beautifully organised themes',
          'Finest-quality images',
          'Short product-introduction videos',
        ],
      },
      {
        title: 'Development & Content Management',
        text:
          'Finest homepages are developed intelligently with smart code in PHP. Content management tools for organising web pages are developed with WordPress and various others. We have been able to bring different concepts, which can be called unconventional but interesting.',
        points: [
          'Homepages developed with smart PHP code',
          'Content management tools with WordPress and others',
          'Unconventional but interesting concepts',
        ],
      },
      {
        title: 'Responsive & E-Commerce Websites',
        text:
          'Responsive web design has been part of projects we have worked on for many clients. Most of today\'s websites are responsive, and we consider different measures while developing a site so that customers can get to know the product and interact instantly. E-commerce sites can be developed to bring the best solution for secure product ordering, along with clear site navigation and product information disclosure. We simplify the navigation system for a quick decision.',
        points: [
          'Responsive design for many clients',
          'Secure product ordering',
          'Clear site navigation',
          'Product information disclosure',
          'Simplified navigation for quick decisions',
        ],
      },
      {
        title: 'Built for Any Sector',
        text:
          'Different creative inputs are checked and provided for a lasting impression. The maintenance cost of websites can be minimised with proper planning and action. Website development may relate to hospitals, hotels, e-commerce businesses or NGO sites, and you can expect our dedicated efforts to lead to online business success.',
        points: [
          'Creative inputs for a lasting impression',
          'Lower maintenance cost through proper planning',
          'Hospitals, hotels, e-commerce and NGO websites',
        ],
      },
    ],
  },
  {
    slug: 'cms-development',
    title: 'CMS Development',
    short: 'Full control over your own content, no developer required.',
    body:
      'Edit, delete, or publish new content yourself, without needing much technical expertise. Our CMS builds streamline how you manage your website day to day.',
    image: '/assets/images/cms-development.jpg',
    shape: 'blob',
    color: 'orange',
    features: [
      'WordPress CMS',
      'Custom CMS Development',
      'Headless CMS',
      'Content Management Systems',
      'Custom Admin Panels',
      'Website Content Management',
      'Multi-User / Role-Based CMS',
    ],
    outcome: 'Update your website whenever you like, without waiting on a developer.',
    sections: [
      {
        title: 'Manage Content Your Way',
        text:
          'Whether on WordPress or a custom admin panel, we set up simple editing screens so your team can publish and update content without touching code.',
        points: [
          'Edit pages, banners and blog posts yourself',
          'Role-based access for multiple team members',
          'Custom admin panels for products, listings and enquiries',
          'Headless CMS options for modern front-ends',
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    short: 'Online stores that turn visitors into customers.',
    body:
      'All-encompassing e-commerce solutions that convert your visitors into customers and take your brand reach to the next level.',
    image: '/assets/images/ecommerce-development.jpg',
    shape: 'square',
    color: 'olive',
    features: [
      'E-Commerce Website Development',
      'Custom Online Stores',
      'WooCommerce Development',
      'Product Catalogue Websites',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Shipping Integration',
      'Order Management',
      'Customer Management',
      'Inventory Integration',
    ],
    outcome: 'A store that is easy to run for you and easy to buy from for customers.',
    sections: [
      {
        title: 'Checkout Built for Trust',
        text:
          'A smooth, secure checkout is where a visit becomes a sale. We connect payments, shipping and order handling so buying is simple for customers and manageable for you.',
        points: [
          'Secure payment gateway integration',
          'Shipping integration and order tracking',
          'Order, customer and inventory management',
          'Product catalogues with clear navigation',
        ],
      },
    ],
  },
  {
    slug: 'application-development',
    title: 'Web Applications & Software',
    short: 'Scalable, secure web applications for any requirement.',
    body:
      'A solution for every requirement — highly scalable, performance-oriented, dynamic and secure web applications built around your business needs.',
    image: '/assets/images/application-development.jpg',
    shape: 'circle',
    color: 'olive-light',
    features: [
      'Custom Web Applications',
      'CRM Solutions',
      'ERP / Business Applications',
      'School & College Management Software',
      'Billing & Invoice Software',
      'Order Management Systems',
      'Matrimonial Software',
      'Customer Portals',
      'Employee / Admin Portals',
      'Dashboard & Reporting Systems',
    ],
    outcome: 'Software shaped around how your business actually works.',
    sections: [
      {
        title: 'Custom Web Development',
        text:
          'EMS Webtech is a web application development company with many years of experience in creating applications, and our experienced team has completed many projects for different industries and services. Our web application developers provide custom web application development services and software, including design, integration and maintenance, on a wide range of technology platforms. The applications we create for you deliver high performance that can increase your business revenue, reduce your business costs, make future maintenance easy and improve your service. Web applications help you interact more with your audience rather than simply presenting content to them, helping you achieve the success you have always dreamed of.',
        points: [
          'Many years of experience creating applications',
          'Many projects across different industries and services',
          'Design, integration and maintenance on a wide range of platforms',
          'Higher revenue, lower cost, easier future maintenance',
          'Interaction with your audience, not just presentation',
        ],
      },
      {
        title: 'Why Choose Custom Web Development?',
        text:
          'Custom web application development mainly focuses on web-based client applications designed to meet each client\'s business-specific needs, increasing productivity while saving time and money.',
        points: [
          'Designed to meet your business-specific needs, with increased productivity and savings in time and money',
          'Responsive to support cell phones and tablets natively, usable in any environment, which improves your website SEO and lowers maintenance',
          'Achieves your business goals quickly, efficiently and at a reasonable cost',
          'A very good solution for business problems; many organisations turn to customised applications for their specific IT requirements',
          'Increases revenue with streamlined audience engagement in limited time',
          'Helps set up online businesses easily and scale them up seamlessly',
          'Everything from a simple content website application to the most complex web-based application services',
          'Suited to your specific requirements, offering interactivity with your online customers\' data',
        ],
      },
      {
        title: 'Portal Development',
        text:
          'EMS Webtech has worked with distinguished concepts for website organisation and management, including better features that match current trends in sites. Portal development is much in demand because of the various functions included. Access to information is facilitated by finest portal organisation and development: a web portal can be a path to access huge amounts of information, along with services such as messaging, news listings, stock price variations, organising and managing databases, and entertainment features for online audiences.',
        points: [
          'Portal organisation and development built around current trends',
          'A path to access huge amounts of information',
          'Messaging and news listings',
          'Stock price variations',
          'Database organisation and management',
          'Entertainment features for online audiences',
        ],
      },
      {
        title: 'Portals for Better Business Decisions',
        text:
          'Multiple applications and databases can be organised brilliantly, leading to quicker, more flexible decisions by owners. Third-party tools can be integrated to improve online customer interactions and marketability, and a chat environment can be developed to promote instant results through discussion. Portals bring an enterprise look to the website with different facilities.',
        points: [
          'Multiple applications and databases organised in one place',
          'Quicker, more flexible decisions by owners',
          'Third-party tool integration for better marketability',
          'Chat environment for instant discussion',
          'Enterprise look for the website',
        ],
      },
      {
        title: 'Portal Types We Have Developed',
        text:
          'Portal development can be included for job categories, business-to-business solutions, business-to-consumer solutions, e-commerce with a finest shopping cart arrangement, knowledge-based portals and various others. There are various types of portals, which can be included for better convenience online. Communicate with us to simplify your online business processes.',
        points: [
          'Business to business solutions',
          'Business to consumer solutions',
          'Enterprise related sites',
          'E-commerce',
          'Shopping cart',
          'Job based portal',
          'Travel related sites',
          'Entertainment sites',
          'Intranet portals — corporate sites',
          'Knowledge based sites',
        ],
      },
      {
        title: 'Enterprise Related Portals',
        text:
          'Enterprise related portals include applications and corporate databases. Desired information can be disclosed to the public, and company services can be made available throughout the world with better features arranged online.',
        points: [
          'Applications and corporate databases',
          'Selected information disclosed to the public',
          'Company services available worldwide',
        ],
      },
      {
        title: 'Community Based Portals',
        text:
          'Community based portals can be considered when there are regular interactions with users.',
        points: [
          'Built for regular user interaction',
        ],
      },
      {
        title: 'Online Marketplace Portals',
        text:
          'The online marketplace portal is where buyers and sellers participate in business-related tasks. It may include inter-business transactions as well.',
        points: [
          'Buyers and sellers on one portal',
          'Business-related tasks',
          'Inter-business transactions',
        ],
      },
    ],
  },
  {
    slug: 'website-migration',
    title: 'Website Migration & Technology Upgrade',
    short: 'Move to modern hosting and technology with your content and data carried across.',
    body:
      'We migrate websites, servers, hosting and databases, and upgrade outdated technology so your site runs on a current, supported stack.',
    image: '/assets/images/webmigrate.jpg',
    shape: 'triangle',
    color: 'orange',
    features: [
      'Website Migration',
      'Server Migration',
      'Hosting Migration',
      'PHP Version Upgrade',
      'CodeIgniter Upgrade',
      'WordPress Migration',
      'Website Modernisation',
      'Legacy Website Conversion',
      'Database Migration',
      'HTTPS / SSL Migration',
    ],
    outcome: 'A modern, supported website with your existing content and data intact.',
    sections: [
      {
        title: 'A Safe Migration Process',
        text:
          'Moving a live website should not cost you content, data or search visibility. We plan each migration so your site stays intact and available.',
        points: [
          'Audit of your current site, data and hosting',
          'Full backup before any change',
          'Testing before the new site goes live',
          'Redirects to protect existing search rankings',
          'HTTPS / SSL set up on the new environment',
        ],
      },
    ],
  },
  {
    slug: 'website-security-performance',
    title: 'Website Security & Performance',
    short: 'Keep your site safe, fast and always available.',
    body:
      'We protect your website with SSL, backups, firewalls and malware removal, and tune its speed so pages load quickly for every visitor.',
    image: '/assets/images/websecurity.jpg',
    shape: 'blob',
    color: 'olive',
    features: [
      'SSL Installation',
      'Website Security',
      'Malware Detection & Removal',
      'Website Backup',
      'Firewall & Security Configuration',
      'Speed Optimization',
      'Core Web Vitals Optimization',
      'Image Optimization',
      'CDN Integration',
      'Database Optimization',
      'Website Monitoring',
    ],
    outcome: 'A secure website that loads fast and stays online.',
    sections: [
      {
        title: 'Protection and Speed, Together',
        text:
          'A slow or compromised website costs you visitors and trust. We handle security and performance together so your site stays safe and quick.',
        points: [
          'SSL and firewall configuration',
          'Regular backups and malware scanning',
          'Image, database and CDN optimisation',
          'Core Web Vitals tuning and uptime monitoring',
        ],
      },
    ],
  },
  {
    slug: 'seo-ready-development',
    title: 'SEO-Ready Website Development',
    short: 'Websites built with search visibility in mind from day one.',
    body:
      'We build the technical foundations search engines look for — clean structure, metadata, schema, sitemaps and analytics — and structure content so it is ready for AI-driven answer engines too.',
    image: '/assets/images/seo.jpg',
    shape: 'square',
    color: 'olive-light',
    features: [
      'Technical SEO Setup',
      'SEO-Friendly Architecture',
      'SEO URL Structure',
      'Meta Title & Description Setup',
      'Schema Markup',
      'XML Sitemap',
      'Robots.txt',
      'Internal Linking Structure',
      'Image SEO',
      'Local SEO Setup',
      'Google Search Console Integration',
      'Google Analytics Integration',
      'AEO / GEO-Ready Content Structure',
    ],
    outcome: 'A website that search engines and AI assistants can read and surface.',
    sections: [
      {
        title: 'AEO & GEO Services',
        text:
          'Search is changing — people now ask AI assistants directly instead of typing into a search box. We optimize your content structure and authority signals so tools like AI search and generative engines surface and cite your business.',
        points: [
          'Content structured for AI answer extraction',
          'Authority and citation-building for AI sources',
          'Generative engine visibility audits',
          'Ongoing optimization as AI search evolves',
        ],
      },
    ],
  },
  {
    slug: 'domain-hosting',
    title: 'Domain, Hosting & Business Email',
    short: 'Domains, hosting and professional email, managed for you.',
    body:
      'Full domain name search and registration, plus website hosting with unlimited bandwidth — not capped, not throttled, not "just enough for your site." Add professional business email and Google Workspace on your own domain.',
    image: '/assets/images/domain-hosting.jpg',
    shape: 'circle',
    color: 'orange',
    features: [
      'Domain Registration & Management',
      'Web Hosting',
      'Dedicated / Cloud Server Support',
      'Business Email',
      'Google Workspace',
      'Email Migration',
      'DNS Management',
      'SPF, DKIM & DMARC Configuration',
      'SSL Certificates',
      'Server Configuration',
    ],
    outcome: 'Your name, your site and your email, always online, with nothing for you to manage.',
    sections: [
      {
        title: 'Domain, Hosting & SSL',
        text:
          "Your website's foundation matters as much as its design. We handle domain registration, unlimited-bandwidth hosting, SSL certificates and proactive server management so your site stays fast, secure and available around the clock.",
        points: [
          'Domain registration & renewal management',
          'Unlimited-bandwidth, high-availability hosting',
          'SSL certificate setup and auto-renewal',
          '24/7 server monitoring and proactive patching',
        ],
      },
    ],
  },
  {
    slug: 'website-maintenance-amc',
    title: 'Website Maintenance & AMC',
    short: 'Ongoing care so your website stays updated, secure and fast.',
    body:
      'From content and banner updates to bug fixes, security updates and backups, we look after your website month after month, with annual maintenance contracts available.',
    image: '/assets/images/webmain.jpg',
    shape: 'triangle',
    color: 'olive',
    features: [
      'Website Maintenance',
      'Content Updates',
      'Image & Banner Updates',
      'Page Creation',
      'Website Bug Fixing',
      'Security Updates',
      'Plugin & CMS Updates',
      'Server Monitoring',
      'Backup Management',
      'Performance Optimization',
      'Annual Maintenance Contracts',
    ],
    outcome: 'Your website stays current without you having to chase it.',
    sections: [
      {
        title: 'Website Maintenance',
        text:
          'A website functions well when it is developed with the finest codework. Whether it is a personal or business website, it needs to be maintained, and that maintenance is done with code. Understanding the following points shows why website maintenance matters.',
        points: [
          'Good function starts with finest codework',
          'Personal and business websites both need upkeep',
          'Maintenance is done with code',
        ],
      },
      {
        title: 'When You Should Consider Website Maintenance',
        text:
          'You may not have time to learn website design, which involves a lot of coding such as PHP, CSS and more. When your colleagues are already burdened with other tasks and online business processes are held up, with little time left to respond to customers, you need to consult our team to meet online market demands. We are professional and work for our client\'s business excellence.',
        points: [
          'No time to learn website design and coding (PHP, CSS and more)',
          'Colleagues already burdened with other tasks',
          'Online business processes held up',
          'Little time to respond to customers',
          'Need to meet online market demands',
        ],
      },
      {
        title: 'Why a Website Needs Maintenance',
        text:
          'Many business people are working hard to rank at the top of search engines. When a website is regularly updated, the server is updated at the same time; if the website is not performing well with updates, the server is not updated either, which results in a lower ranking. Attention from users may also be missed, which indirectly affects product sales. Maintenance helps you move towards stable success in online business, and more users visit your site when it is more visible in search engines through regular updates and rank gained.',
        points: [
          'Regular updates keep the website and server current',
          'Better search engine ranking through regular updates',
          'Fewer missed users, protecting product sales',
          'More visitors from higher visibility',
          'Stable success in online business',
        ],
      },
    ],
  },
  {
    slug: 'internet-marketing',
    title: 'Digital Marketing & Integration',
    short: 'Landing pages, ads, WhatsApp and CRM connected so leads reach you.',
    body:
      'We build the connections that turn traffic into leads — landing pages for Google and Meta ads, and WhatsApp, CRM, Google Business Profile, email and chatbot integrations.',
    image: '/assets/images/internet-marketing.jpg',
    shape: 'blob',
    color: 'olive-light',
    features: [
      'Google Ads Integration',
      'Meta Ads Landing Pages',
      'Lead Generation Websites',
      'WhatsApp Integration',
      'CRM Lead Integration',
      'Google Business Profile Integration',
      'Social Media Integration',
      'Email Marketing Integration',
      'Email Template Design',
      'Chatbot Integration',
      'AI Chat Integration',
    ],
    outcome: 'More of your website visitors turning into leads you can follow up.',
    sections: [
      {
        title: 'Digital Marketing — SMM',
        text:
          'Social platforms reward consistency and a clear voice. We plan, create and manage social media content that builds a genuinely engaged following — not just vanity metrics.',
        points: [
          'Platform-specific content strategy',
          'Content creation and scheduled publishing',
          'Community management and engagement',
          'Monthly performance and growth reporting',
        ],
      },
      {
        title: 'Email & WhatsApp Marketing',
        text:
          'Owned channels convert best. We build segmented email and WhatsApp campaigns that nurture leads through your funnel and keep past customers coming back.',
        points: [
          'Segmented email campaign design',
          'Automated nurture and drip sequences',
          'WhatsApp broadcast and support flows',
          'Open, click and conversion tracking',
        ],
      },
      {
        title: 'Email Templates',
        text:
          'Choose from a wide range of sample designs by our highly skilled designers. These templates grab the best attention from mail receivers in the inbox, and improve your company brand with new and elegant designs.',
        points: [
          'Sample designs by highly skilled designers',
          'Attention-grabbing in the inbox',
          'New and elegant designs to improve your brand',
        ],
      },
      {
        title: 'Delivered in Less Than a Week',
        text:
          'Order an email template and be prepared for the best email campaign ahead.',
        points: [
          'Delivered in less than a week',
          'Ready for your next email campaign',
        ],
      },
      {
        title: 'Complete Task Includes',
        text:
          'Every email template order covers the full set below, and a demo will be provided to the client if required.',
        points: [
          'Template design customised',
          'Coding customised',
          'PSD allocation',
          'PDF allocation',
          'Demo provided if required',
        ],
      },
    ],
  },
  {
    slug: 'ai-website-solutions',
    title: 'AI-Powered Website Solutions',
    short: 'AI chat, support and lead qualification built into your website.',
    body:
      'We add AI to your website — chatbots, customer support, lead qualification, search and content assistance — so visitors get answers instantly and enquiries are handled automatically.',
    image: '/assets/images/aiweb.jpg',
    shape: 'square',
    color: 'orange',
    features: [
      'AI Chatbot Integration',
      'AI Customer Support',
      'AI Lead Qualification',
      'AI Content Assistance',
      'AI Search',
      'AI-Powered Website Recommendations',
      'ChatGPT / API Integration',
      'Automated Enquiry Management',
    ],
    outcome: 'Faster answers for visitors and better-qualified leads for you.',
    sections: [
      {
        title: 'AI Chatbots',
        text:
          'A well-built chatbot never sleeps. We design and train custom AI chatbots for your website and social channels that answer questions, qualify leads and hand off to your team exactly when needed.',
        points: [
          'Custom-trained chatbot on your business content',
          'Website and social channel deployment',
          'Lead qualification and handoff logic',
          'Ongoing training as your offerings change',
        ],
      },
      {
        title: 'AI Assistant for Website',
        text:
          'Turn your website into an active participant in the sales process. We build an on-site AI assistant that guides visitors to the right page, answers their questions and captures leads without waiting for a form fill.',
        points: [
          'Trained on your services and FAQs',
          'Guided navigation and lead capture',
          'Real-time answers, day or night',
          'Simple embed on any existing website',
        ],
      },
      {
        title: 'AI Automations',
        text:
          'Every business has repetitive work that quietly eats up hours. We design AI-powered automations that handle it for you — across sales follow-ups, support triage and internal operations.',
        points: [
          'Workflow mapping and automation design',
          'Integration across your existing tools',
          'Sales and support process automation',
          'Ongoing monitoring and refinement',
        ],
      },
      {
        title: 'AI Review Management',
        text:
          'Reviews shape first impressions before a customer ever contacts you. We use AI-assisted monitoring to track reviews across platforms and help you respond quickly and appropriately, protecting your reputation.',
        points: [
          'Cross-platform review monitoring',
          'AI-drafted, on-brand response suggestions',
          'Negative review alerting and escalation',
          'Monthly reputation summary reports',
        ],
      },
    ],
  },
  {
    slug: 'branding',
    title: 'Creative & Branding Services',
    short: 'Visual identity that makes your business memorable.',
    body:
      'From logo design to brochures and corporate banners, we build a consistent visual identity that carries your brand across every touchpoint.',
    image: '/assets/images/branding.jpg',
    shape: 'circle',
    color: 'olive',
    features: [
      'Logo Design',
      'Brand Identity',
      'Website Graphics',
      'Banners',
      'Brochures',
      'Social Media Creatives',
      'Infographics',
      'Presentation Design',
      'Web Content Writing',
    ],
    outcome: 'One consistent identity, recognisable everywhere your customers meet you.',
    sections: [
      {
        title: 'Web Content Writing',
        text:
          'Professional content written for websites, blogs, articles, newsletters, press releases and much more. Copywriting is different from regular content writing and involves a different way of expression: brochures and some website pages need motivational lines, and our creative writers provide better content with creative expression, especially on the home page. SEO content writers know how to write for promotion, and the work of bloggers is different from the others; bloggers write on a variety of topics in the best manner.',
        points: [
          'Website content',
          'Blogs and articles',
          'Newsletters and press releases',
          'Copywriting with motivational lines for brochures and pages',
          'Creative writing for the home page',
          'SEO content for promotion',
        ],
      },
      {
        title: 'Content Matters as Much as Images',
        text:
          'Content can be short descriptions or long pages, and we know how to put the best words in place. Apart from images, content matters a great deal: good content prepares the buyer to know the product in detail within a few minutes.',
        points: [
          'Short descriptions or long pages',
          'Best words for every page',
          'Buyers understand the product in minutes',
        ],
      },
      {
        title: 'Content for Every Purpose',
        text:
          'Writing a company profile, team members\' achievements and awards for About Us pages needs skill, and writing blogs or social media content requires a different kind of skill. Promotional writing can be expressed in an informal or friendly tone, bringing more customers or users to your attention. Newsletters are written for email promotions so that your product reaches different customers, and event announcements and press releases, including special events, can be written as well.',
        points: [
          'About Us: company profile, team achievements and awards',
          'Blogs and social media content',
          'Promotional writing in a friendly tone',
          'Newsletters for email promotions',
          'Event announcements',
          'Press releases, including special events',
        ],
      },
      {
        title: 'Experience Across Industries',
        text:
          'Our content writers have written for educational institutions, construction companies, IT-related services, medical, legal and much more, and have gained the flexibility to write content for any category of organisation.',
        points: [
          'Educational institutions',
          'Construction companies',
          'IT-related services',
          'Medical and legal',
          'Any category of organisation',
        ],
      },
      {
        title: 'Reader as a Decision Maker',
        text:
          'The reader can be the best decision maker because of the content written: the extent of your professionalism is judged by it, and well-expressed content can put readers at ease. Finest delivery of information can lead to high order placement, and our content writers know how to bring a change to your business that lasts. Major players in business appreciate the work of content writers and are keen to invest more. Information about company services needs to be presented in a mature, professional manner, and appropriate vocabulary inspires readers to get to know the company.',
        points: [
          'Professionalism shown through content',
          'Finest delivery of information leading to high order placement',
          'Change that supports long-term success',
          'Mature, professional presentation of services',
          'Vocabulary that inspires readers to know your company',
        ],
      },
      {
        title: 'Sales Copy & Company Content',
        text:
          'Whether it is a company profile, product descriptions or any other content need, it can be executed well. Some content is written for marketing and promotion: sales copy is written to help readers know your product in the best way, and it leads to better information and more engaged reading. Content can even be motivational.',
        points: [
          'Company profile',
          'Product descriptions',
          'Marketing and promotional content',
          'Sales copy',
        ],
      },
      {
        title: 'Right Fonts, Right Impression',
        text:
          'Fine font choices can make content impressive, and our content writers know how to use the right font for a website. Some fonts suit technical and development businesses, while others suit an event management company; there is a relevancy to it. Font style matters because the reader\'s perception matters: when the right font style is used, the reader is eager to read the complete content and is glad to have landed on the right, informative site.',
        points: [
          'Fonts matched to the kind of business',
          'Reader perception considered',
          'Encourages readers to read the complete content',
        ],
      },
      {
        title: 'Trends and Readers\' Enchantment',
        text:
          'Content-writing trends change with time to hold readers\' attention, so our writers discuss and bring newness to content-writing practices with creative skills. Practices have changed a great deal even in the last year because readers\' expectations have changed. We aim to enchant readers with the best flow of ideas in sentences. Repeat client business success can be backed by content writers and SEO executives, with product awareness and promotion work.',
        points: [
          'Fresh content-writing practices with creative skills',
          'Adapts to changing reader expectations',
          'Best flow of ideas in sentences',
          'Content writers and SEO executives working together on product awareness and promotion',
        ],
      },
    ],
  },
  {
    slug: 'website-audit-consulting',
    title: 'Website Audit & Consulting',
    short: "Find out what's holding your website back, and how to fix it.",
    body:
      "We review your website's design, SEO, performance and security, study your competitors, and give you a clear plan for improvement.",
    image: '/assets/images/webaudit.jpg',
    shape: 'triangle',
    color: 'olive-light',
    features: [
      'Website Audit',
      'UI/UX Audit',
      'SEO Audit',
      'Performance Audit',
      'Security Audit',
      'Competitor Analysis',
      'Conversion Rate Analysis',
      'Technology Consultation',
      'Website Improvement Strategy',
    ],
    outcome: 'A clear, prioritised plan to improve your website.',
    sections: [
      {
        title: 'What the Audit Covers',
        text:
          "We review your website from a visitor's point of view and a search engine's, then turn the findings into a prioritised plan.",
        points: [
          'UI/UX and conversion review',
          'SEO and content gaps',
          'Speed and security checks',
          'Competitor comparison',
          'Prioritised improvement plan',
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

// Services shown in the navbar dropdown (in this order)
export const menuSlugs = [
  'website-design-ui-ux',
  'SEO-Ready Website Development',
  'cms-development',
  'ecommerce-development',
  'Digital Marketing & Integration',
  'branding',
  // add / remove / reorder slugs here
];

export const menuServices = menuSlugs
  .map((slug) => getServiceBySlug(slug))
  .filter(Boolean);