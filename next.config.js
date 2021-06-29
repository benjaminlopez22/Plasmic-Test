
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['thNUwwm7uGXHD7mfA7oSVR'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  