// fontawesome plugin.
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGlobe, faBars }
                           from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun }   from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faTwitter, faGithubAlt, faInstagram, faFacebookF }
                           from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faGlobe, faSun, faMoon, faLinkedinIn, faTwitter, faGithubAlt, faInstagram, faFacebookF);

// this is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
