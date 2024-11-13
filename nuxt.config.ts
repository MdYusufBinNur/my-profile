// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'AdsBot-Google', content: 'noindex follow' },
        { name: 'description', content: 'Yusuf - Personal Portfolio' }
      ],
      title: 'Yusuf - Personal Portfolio',
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Syne:wght@400;500;600;700;800&display=swap'
        },
        { rel: 'stylesheet', href: '/css/vendor/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/plugins/aos.css' },
        { rel: 'stylesheet', href: '/css/plugins/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/css/pages/home.css' }
      ],
      script: [
        { src: '/js/vendor/modernizr-3.11.7.min.js' },
        { src: '/js/vendor/jquery-3.6.0.min.js' },
        { src: '/js/vendor/jquery-migrate-3.3.2.min.js' },
        { src: '/js/vendor/bootstrap.bundle.min.js' },
        { src: '/js/plugins/aos.js' },
        { src: '/js/plugins/swiper-bundle.min.js' },
        { src: '/js/plugins/jquery.waypoints.js' },
        { src: '/js/plugins/jquery.counterup.min.js' },
        { src: '/js/main.js' }
      ]
    }
  },
  devtools: { enabled: true }
})
