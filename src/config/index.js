module.exports = {
  siteTitle: 'Todd Matheson | Front End Web Developer',
  siteDescription:
    'Todd Matheson is a web developer based in the bay area, CA who specializes in developing exceptional, high-quality websites and web apps.',
  siteKeywords:
    'Todd Matheson, Todd, Matheson, toddmath, web developer, front-end dev, web developer, javascript, portfolio',
  siteUrl: 'https://toddmath.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Todd Matheson',
  location: 'San Mateo, CA',
  email: 'tmatheson11186@gmail.com',
  github: 'https://github.com/toddmath',
  twitterHandle: '@tM0Nk3y',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/toddmath',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tM0Nk3y',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
