<template>
  <section class="bg-secondary position-relative pt-140 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="hero-content-wrapper">
                            <span class="font-Syne text-dark fw-bold lh-1 text-2xl d-flex flex-wrap align-items-center hello-iam"
                                  data-aos="fade-right" data-aos-delay="300">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                <path d="M0 1H65" stroke="#080808"/>
              </svg>
            </span>

                            Hello, I’m
                            <img src="/images/icon/victory.png" alt="icon">
                            </span>
            <h1 class="hero-title font-Syne fw-bold position-relative z-1 circle-shape"
                data-aos="fade-right" data-aos-delay="400">
              Md Yusuf
              <!-- <br /> Henry -->
            </h1>
            <h2 class="hero-title font-Syne fw-bold mb-20" data-aos="fade-right" data-aos-delay="600">
              Bin Nur</h2>
            <br>
            <p class="font-Syne fw-bold text-lg leading-tight iam-designer mb-30" data-aos="fade-right"
               data-aos-delay="800">
              Software
              Engineer </p>

            <div class="d-flex flex-wrap hero-btn-wraper">
              <!-- Link Start -->
              <span data-aos="fade-right" data-aos-delay="1000">
              <a @click.prevent="goto('contact')" class="d-flex align-items-center flex-wrap btn-primary">Let’s
                Talk
                <span class="animate-arrow-up">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                                </a>
                                </span>
              <!-- Link End -->

              <!-- Link Start -->
              <span data-aos="fade-right" data-aos-delay="1200">
              <a @click.prevent="goto('projects')" class="d-flex align-items-center flex-wrap btn-primary-outline">
                My Work
                <span class="animate-arrow-up">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                                </a>
                                </span>
              <!-- Link End -->
            </div>

            <div class="d-flex flex-wrap align-items-center" data-aos="fade-right" data-aos-delay="1400">
              <div class="d-flex flex-wrap align-items-center">
                                    <span class="font-Syne text-dark fw-bold text-counter lh-1">
                <span class="counter">50</span>+</span>

                <span class="text-worldwide text-lg">Worldwide client</span>
                <span class="mx-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                  <path d="M1 0L1 14" stroke="#080808" stroke-opacity="0.4"/>
                </svg>
              </span>
              </div>

              <div class="social-links">
                <ul class="d-flex flex-wrap align-items-center list-unstyled">

                  <li><a href="https://www.linkedin.com/in/yusuf-bin-nur-506402162/" target="_blank"
                         class="text-dark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
                            fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                  </a></li>
                  <li><a href="https://github.com/MdYusufBinNur" target="_blank" class="text-dark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
                            fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                  </a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-none d-md-block">
      <img class="position-absolute top-0 end-0 hero-image" data-aos="fade-left" src="/images/hero/hero.png"
           alt="hero Image">

      <a @click.prevent="goto('contact')" class="contact-spin">
        <svg class="position-absolute" width="180" height="180" viewBox="0 0 180 180" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <g class="animate-spin">

            <path d="M157.631 90C157.631 127.352 127.352 157.632 89.9995 157.632C52.6476 157.632 22.3678 127.352 22.3678 90C22.3678 52.6481 52.6476 22.3683 89.9995 22.3683C127.352 22.3683 157.631 52.6481 157.631 90Z"
                  fill="#080808" stroke="#FFB646" stroke-width="2.08333" stroke-miterlimit="10"/>
            <path d="M43.7883 74.5846C43.5199 75.4042 43.1104 76.0554 42.5597 76.5383C42.0037 77.0107 41.3536 77.3039 40.6095 77.4181C39.8574 77.5296 39.0598 77.4474 38.2165 77.1713C37.3654 76.8927 36.6735 76.4873 36.141 75.9552C35.6005 75.4205 35.2458 74.7983 35.0767 74.0886C34.9103 73.3709 34.9612 72.6023 35.2295 71.7827C35.5469 70.8133 36.0426 70.0987 36.7167 69.6388C37.3908 69.1789 38.1805 69.0055 39.0858 69.1186L38.6292 70.5135C38.1123 70.4665 37.6527 70.5778 37.2503 70.8474C36.8479 71.1171 36.5474 71.5553 36.3487 72.1622C36.0778 72.9897 36.1474 73.7367 36.5574 74.4032C36.9596 75.0671 37.6532 75.5603 38.6384 75.8828C39.6156 76.2027 40.4627 76.2139 41.1796 75.9163C41.8965 75.6188 42.3905 75.0562 42.6614 74.2287C42.86 73.6219 42.8847 73.0934 42.7354 72.6431C42.5862 72.1929 42.2971 71.8365 41.8682 71.5739L42.3249 70.179C43.0903 70.6128 43.6049 71.2132 43.8687 71.9801C44.1324 72.7471 44.1056 73.6152 43.7883 74.5846Z"
                  fill="white"/>
            <path d="M50.1726 61.9256C49.6756 62.6305 49.0849 63.1374 48.4004 63.4462C47.7159 63.7551 46.9941 63.8651 46.2348 63.7763C45.4688 63.6826 44.7232 63.3802 43.998 62.8689C43.2728 62.3576 42.7408 61.7594 42.4021 61.0741C42.0566 60.3841 41.9143 59.6648 41.9752 58.9163C42.0362 58.1679 42.3151 57.4412 42.812 56.7363C43.309 56.0315 43.8997 55.5246 44.5842 55.2158C45.2687 54.9069 45.9915 54.8027 46.7528 54.9031C47.512 54.9919 48.2542 55.292 48.9794 55.8032C49.7046 56.3145 50.24 56.9152 50.5855 57.6052C50.929 58.2837 51.0703 58.9972 51.0094 59.7456C50.9484 60.4941 50.6695 61.2208 50.1726 61.9256ZM49.2067 61.2447C49.5508 60.7567 49.741 60.2567 49.7774 59.7446C49.8185 59.2257 49.7074 58.7212 49.4441 58.2312C49.1808 57.7411 48.7679 57.2978 48.2053 56.9012C47.6428 56.5046 47.0865 56.2646 46.5365 56.1812C45.9865 56.0979 45.474 56.1627 44.9991 56.3758C44.529 56.5821 44.1219 56.9293 43.7779 57.4173C43.4338 57.9053 43.2412 58.4087 43.2001 58.9276C43.1589 59.4465 43.27 59.951 43.5333 60.441C43.8014 60.9242 44.2167 61.3642 44.7793 61.7608C45.3418 62.1574 45.8957 62.4008 46.4409 62.4909C46.9909 62.5743 47.5034 62.5094 47.9783 62.2963C48.4532 62.0832 48.8627 61.7327 49.2067 61.2447Z"
                  fill="white"/>
            <path d="M57.1532 53.6456L51.7944 46.7785L52.8343 45.967L60.3121 48.4499L56.2777 43.28L57.3175 42.4685L62.6763 49.3356L61.6365 50.1471L54.1587 47.6642L58.1931 52.8341L57.1532 53.6456Z"
                  fill="white"/>
            <path d="M70.5729 45.1508L67.6243 38.1023L65.248 39.0964L64.835 38.1092L70.793 35.6168L71.206 36.604L68.8412 37.5933L71.7898 44.6418L70.5729 45.1508Z"
                  fill="white"/>
            <path d="M78.8716 42.2432L80.7576 33.1533L82.1851 32.9397L86.6248 41.083L85.2465 41.2892L84.1931 39.2953L80.6734 39.822L80.2499 42.0369L78.8716 42.2432ZM80.8879 38.733L83.6692 38.3168L81.6911 34.599L80.8879 38.733Z"
                  fill="white"/>
            <path d="M96.3093 41.6882C95.4534 41.5795 94.7363 41.3002 94.1579 40.8504C93.5887 40.3935 93.1778 39.8103 92.925 39.1008C92.6734 38.3831 92.6034 37.584 92.7153 36.7034C92.8282 35.8146 93.0957 35.0584 93.5178 34.4346C93.9409 33.8026 94.4851 33.3366 95.1504 33.0364C95.824 32.7373 96.5887 32.6421 97.4445 32.7508C98.4568 32.8794 99.2525 33.2313 99.8317 33.8066C100.411 34.382 100.73 35.125 100.79 36.0357L99.3337 35.8507C99.2823 35.3341 99.0861 34.9036 98.7452 34.5592C98.4042 34.2149 97.9169 34.0025 97.2832 33.922C96.4191 33.8122 95.6984 34.0217 95.1212 34.5505C94.5449 35.071 94.1915 35.8456 94.0608 36.8743C93.9312 37.8948 94.0803 38.7291 94.5081 39.3772C94.9359 40.0252 95.5818 40.4041 96.4459 40.5139C97.0796 40.5944 97.6035 40.5188 98.0176 40.287C98.4317 40.0553 98.7272 39.704 98.9041 39.2331L100.361 39.4181C100.079 40.252 99.5866 40.871 98.8831 41.275C98.1795 41.679 97.3216 41.8168 96.3093 41.6882Z"
                  fill="white"/>
            <path d="M108.074 44.5801L110.985 37.5128L108.603 36.5314L109.01 35.5415L114.984 38.0021L114.576 38.992L112.205 38.0153L109.294 45.0827L108.074 44.5801Z"
                  fill="white"/>
            <path d="M123.795 54.407L130.354 48.6754L131.378 49.8467L128.952 55.883L135.251 54.2787L136.274 55.45L129.715 61.1815L128.847 60.1883L133.692 55.9552L128.032 57.3643L127.361 56.596L129.498 51.1752L124.663 55.4002L123.795 54.407Z"
                  fill="white"/>
            <path d="M133.257 67.1066L141.164 63.4523L143.487 68.4788L142.516 68.9278L140.746 65.0986L138.283 66.2366L139.897 69.727L138.948 70.1655L137.335 66.6752L134.782 67.855L136.552 71.6842L135.58 72.1332L133.257 67.1066Z"
                  fill="white"/>
            <path d="M137.181 86.6396L138.426 86.6423L138.411 93.4738L137.167 93.4711L137.181 86.6396Z"
                  fill="white"/>
            <path d="M133.683 111.594C134.061 110.818 134.556 110.229 135.168 109.826C135.783 109.434 136.468 109.232 137.221 109.221C137.981 109.213 138.761 109.404 139.558 109.792C140.364 110.185 140.994 110.681 141.449 111.282C141.912 111.885 142.178 112.55 142.248 113.277C142.315 114.011 142.16 114.766 141.782 115.541C141.335 116.458 140.746 117.099 140.015 117.462C139.284 117.826 138.477 117.89 137.596 117.654L138.239 116.334C138.745 116.451 139.215 116.404 139.651 116.192C140.087 115.979 140.445 115.586 140.724 115.012C141.106 114.229 141.139 113.479 140.824 112.763C140.516 112.05 139.896 111.466 138.964 111.012C138.04 110.561 137.202 110.434 136.45 110.631C135.699 110.828 135.133 111.318 134.751 112.101C134.471 112.675 134.375 113.195 134.461 113.662C134.547 114.128 134.785 114.521 135.174 114.84L134.531 116.16C133.832 115.625 133.404 114.96 133.247 114.164C133.091 113.368 133.236 112.511 133.683 111.594Z"
                  fill="white"/>
            <path d="M125.614 123.254C126.204 122.624 126.859 122.203 127.58 121.991C128.3 121.78 129.031 121.77 129.771 121.962C130.517 122.161 131.214 122.563 131.862 123.169C132.51 123.776 132.955 124.442 133.197 125.167C133.444 125.898 133.486 126.631 133.323 127.364C133.159 128.097 132.783 128.779 132.194 129.409C131.604 130.039 130.949 130.46 130.228 130.672C129.508 130.884 128.777 130.887 128.037 130.683C127.297 130.491 126.602 130.091 125.954 129.485C125.306 128.878 124.858 128.21 124.611 127.478C124.364 126.759 124.322 126.032 124.485 125.299C124.649 124.566 125.025 123.884 125.614 123.254ZM126.478 124.062C126.07 124.498 125.812 124.967 125.706 125.47C125.594 125.978 125.634 126.493 125.828 127.015C126.021 127.537 126.369 128.033 126.872 128.503C127.375 128.974 127.893 129.288 128.427 129.446C128.96 129.605 129.477 129.611 129.977 129.465C130.471 129.325 130.922 129.037 131.33 128.601C131.738 128.165 131.998 127.693 132.111 127.184C132.223 126.676 132.182 126.161 131.989 125.639C131.789 125.123 131.439 124.63 130.936 124.16C130.433 123.689 129.918 123.372 129.39 123.208C128.856 123.049 128.339 123.043 127.84 123.189C127.34 123.335 126.886 123.626 126.478 124.062Z"
                  fill="white"/>
            <path d="M117.563 130.504L121.936 138.038L120.795 138.7L113.725 135.221L117.017 140.893L115.876 141.555L111.503 134.021L112.644 133.358L119.714 136.838L116.422 131.166L117.563 130.504Z"
                  fill="white"/>
            <path d="M103.11 137.094L105.066 144.482L107.557 143.822L107.831 144.857L101.586 146.511L101.312 145.476L103.79 144.819L101.834 137.431L103.11 137.094Z"
                  fill="white"/>
            <path d="M94.5093 138.832L91.3962 147.578L89.9528 147.594L86.6703 138.92L88.0639 138.904L88.8342 141.024L92.3929 140.984L93.1157 138.848L94.5093 138.832ZM92.0312 142.033L89.2191 142.065L90.6695 146.018L92.0312 142.033Z"
                  fill="white"/>
            <path d="M77.1843 137.002C78.0177 137.224 78.6908 137.597 79.2035 138.121C79.7061 138.65 80.0349 139.283 80.1901 140.02C80.3432 140.764 80.3052 141.566 80.0762 142.423C79.8451 143.289 79.4785 144.002 78.9766 144.563C78.4725 145.133 77.8707 145.521 77.1713 145.73C76.4638 145.936 75.6933 145.927 74.8599 145.705C73.8742 145.441 73.133 144.986 72.6364 144.338C72.1397 143.69 71.9228 142.911 71.9857 142.001L73.4041 142.38C73.3858 142.898 73.5224 143.351 73.814 143.738C74.1055 144.125 74.5598 144.401 75.1769 144.566C76.0183 144.791 76.7605 144.68 77.4035 144.233C78.0443 143.795 78.4984 143.075 78.766 142.073C79.0314 141.079 78.9956 140.233 78.6588 139.533C78.3219 138.834 77.7327 138.372 76.8913 138.147C76.2742 137.982 75.745 137.987 75.3036 138.161C74.8622 138.335 74.5223 138.643 74.2838 139.086L72.8654 138.707C73.2563 137.919 73.8274 137.372 74.5787 137.066C75.3301 136.76 76.1986 136.739 77.1843 137.002Z"
                  fill="white"/>
            <path d="M65.8866 132.522L62.0282 139.116L64.2512 140.417L63.7107 141.34L58.1373 138.079L58.6777 137.155L60.8899 138.45L64.7483 131.856L65.8866 132.522Z"
                  fill="white"/>
            <path d="M51.6575 120.629L44.3842 125.419L43.5287 124.121L46.7486 118.469L40.2915 119.206L39.436 117.907L46.7093 113.116L47.4348 114.218L42.0629 117.756L47.8604 117.126L48.4216 117.978L45.5706 123.059L50.9321 119.527L51.6575 120.629Z"
                  fill="white"/>
            <path d="M44.0233 106.773L35.696 109.316L34.0791 104.022L35.1022 103.71L36.3339 107.743L38.9273 106.95L37.8045 103.275L38.8038 102.969L39.9266 106.645L42.6151 105.824L41.3833 101.791L42.4064 101.479L44.0233 106.773Z"
                  fill="white"/>
            <path d="M38.2513 95.1897L37.1449 95.2462L36.8866 90.1867L37.993 90.1302L38.2513 95.1897Z"
                  fill="white"/>

          </g>
          <g>

            <path d="M89.9999 123.016C108.234 123.016 123.016 108.234 123.016 89.9999C123.016 71.7654 108.234 56.9834 89.9999 56.9834C71.7654 56.9834 56.9834 71.7654 56.9834 89.9999C56.9834 108.234 71.7654 123.016 89.9999 123.016Z"
                  fill="#FFB646"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M89.0556 105.833H88.7517C88.7517 102.454 87.0878 100.016 84.9217 98.2993C82.7319 96.5641 80.0806 95.6169 78.3337 95.2864L78.721 93.2394C80.7295 93.6194 83.7111 94.6819 86.2156 96.6665C87.1483 97.4056 88.0215 98.2792 88.7523 99.2971V74.1667H90.8356V99.7399C91.622 98.5303 92.6098 97.5106 93.6751 96.6665C96.1795 94.6819 99.1612 93.6194 101.17 93.2394L101.557 95.2864C99.8101 95.6169 97.1587 96.5641 94.969 98.2993C92.8028 100.016 91.1389 102.454 91.1389 105.833H90.835H89.0556Z"
                  fill="#080808" fill-opacity="0.9"/>
          </g>
        </svg>
      </a>

    </div>

  </section>

  <section class="py-120">
    <div class="container">

      <div class="row mb-12 align-items-center" data-aos="fade-up" data-aos-delay="400">
        <div class="col-12 col-lg-6">
          <div class="fw-bold font-Syne lh-1 d-flex flex-wrap flex-column gap-y-2">
            <span class="text-warning text-xl">Services</span>
            <h3 class="text-dark section-title position-relative circle-shape">
              My specialties
            </h3>
          </div>

        </div>
        <div class="col-12 col-lg-6">
          <p class="paragraph">
            "As a full-stack developer, I bring ideas to life from concept to deployment. With expertise in
            both front-end and back-end technologies, I create seamless, responsive applications that
            deliver exceptional user experiences. Whether it's building dynamic interfaces or architecting
            robust back-end systems, I ensure every layer of your project is crafted with precision and
            purpose, driving results and innovation at every step."
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-xl-8">
          <div class="row row-gap-24">

            <!-- service Item -->
            <div class="col-12 col-sm-6 col-md-4">
              <div class="service-card" data-aos="fade-up" data-aos-delay="900">
                <!-- Icon -->
                <div class="d-flex flex-wrap align-items-center justify-content-center service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1513_4939)">
                      <path d="M5.06177 4.21875C5.37243 4.21875 5.62427 3.96691 5.62427 3.65625C5.62427 3.34559 5.37243 3.09375 5.06177 3.09375C4.75111 3.09375 4.49927 3.34559 4.49927 3.65625C4.49927 3.96691 4.75111 4.21875 5.06177 4.21875Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M7.11975 4.21875C7.43041 4.21875 7.68225 3.96691 7.68225 3.65625C7.68225 3.34559 7.43041 3.09375 7.11975 3.09375C6.80909 3.09375 6.55725 3.34559 6.55725 3.65625C6.55725 3.96691 6.80909 4.21875 7.11975 4.21875Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M8.99774 4.21875C9.3084 4.21875 9.56024 3.96691 9.56024 3.65625C9.56024 3.34559 9.3084 3.09375 8.99774 3.09375C8.68708 3.09375 8.43524 3.34559 8.43524 3.65625C8.43524 3.96691 8.68708 4.21875 8.99774 4.21875Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M15.891 14.5388C16.2017 14.5388 16.4535 14.287 16.4535 13.9763C16.4535 13.6657 16.2017 13.4138 15.891 13.4138C15.5803 13.4138 15.3285 13.6657 15.3285 13.9763C15.3285 14.287 15.5803 14.5388 15.891 14.5388Z"
                            fill="#FFB646"/>
                      <path d="M1.49927 9.0675C1.18877 9.0675 0.936768 8.8155 0.936768 8.505V4.5C0.936768 2.53275 2.53202 0.9375 4.49927 0.9375H13.6883C13.9988 0.9375 14.2508 1.1895 14.2508 1.5C14.2508 1.8105 13.9988 2.0625 13.6883 2.0625H4.49927C3.15302 2.0625 2.06177 3.15375 2.06177 4.5V8.505C2.06177 8.8155 1.80977 9.0675 1.49927 9.0675Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M19.4993 23.0625H4.49927C2.53202 23.0625 0.936768 21.4672 0.936768 19.5V12.5625C0.936768 12.252 1.18877 12 1.49927 12C1.80977 12 2.06177 12.252 2.06177 12.5625V19.5C2.06177 20.8462 3.15302 21.9375 4.49927 21.9375H19.4993C20.8455 21.9375 21.9368 20.8462 21.9368 19.5V13.986C21.9368 13.6755 22.1888 13.4235 22.4993 13.4235C22.8098 13.4235 23.0618 13.6755 23.0618 13.986V19.5C23.0618 21.4672 21.4665 23.0625 19.4993 23.0625Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M12.1808 6.56323H1.49927V5.43823H12.1808C12.4913 5.43823 12.7433 5.69023 12.7433 6.00073C12.7433 6.31123 12.4913 6.56323 12.1808 6.56323Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M20.9993 11.8125H16.4993C15.3615 11.8125 14.4368 10.8878 14.4368 9.75V6C14.4368 4.86225 15.3615 3.9375 16.4993 3.9375H20.9993C22.137 3.9375 23.0618 4.86225 23.0618 6V9.75C23.0618 10.8878 22.137 11.8125 20.9993 11.8125ZM16.4993 5.0625C15.9825 5.0625 15.5618 5.48325 15.5618 6V9.75C15.5618 10.2667 15.9825 10.6875 16.4993 10.6875H20.9993C21.516 10.6875 21.9368 10.2667 21.9368 9.75V6C21.9368 5.48325 21.516 5.0625 20.9993 5.0625H16.4993Z"
                            fill="#FFB646"/>
                      <path d="M19.3118 5.0625H17.2493C16.1115 5.0625 15.1868 4.13775 15.1868 3C15.1868 1.86225 16.1115 0.9375 17.2493 0.9375C18.387 0.9375 19.3118 1.86225 19.3118 3V5.0625ZM17.2493 2.0625C16.7325 2.0625 16.3118 2.48325 16.3118 3C16.3118 3.51675 16.7325 3.9375 17.2493 3.9375H18.1868V3C18.1868 2.48325 17.766 2.0625 17.2493 2.0625Z"
                            fill="#FFB646"/>
                      <path d="M20.2493 5.0625H18.1868V3C18.1868 1.86225 19.1115 0.9375 20.2493 0.9375C21.387 0.9375 22.3118 1.86225 22.3118 3C22.3118 4.13775 21.387 5.0625 20.2493 5.0625ZM19.3118 3.9375H20.2493C20.766 3.9375 21.1868 3.51675 21.1868 3C21.1868 2.48325 20.766 2.0625 20.2493 2.0625C19.7325 2.0625 19.3118 2.48325 19.3118 3V3.9375Z"
                            fill="#FFB646"/>
                      <path d="M18.1868 4.5H19.3118V11.25H18.1868V4.5Z" fill="#FFB646"/>
                      <path d="M6.02325 20.8628C4.8855 20.8628 3.96075 19.938 3.96075 18.8003C3.96075 17.6625 4.8855 16.7378 6.02325 16.7378C7.161 16.7378 8.08575 17.6625 8.08575 18.8003C8.08575 19.938 7.161 20.8628 6.02325 20.8628ZM6.02325 17.8628C5.5065 17.8628 5.08575 18.2835 5.08575 18.8003C5.08575 19.317 5.5065 19.7378 6.02325 19.7378C6.54 19.7378 6.96075 19.317 6.96075 18.8003C6.96075 18.2835 6.54 17.8628 6.02325 17.8628Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M11.3647 20.8628C10.227 20.8628 9.30225 19.938 9.30225 18.8003C9.30225 17.6625 10.227 16.7378 11.3647 16.7378C12.5025 16.7378 13.4272 17.6625 13.4272 18.8003C13.4272 19.938 12.5025 20.8628 11.3647 20.8628ZM11.3647 17.8628C10.848 17.8628 10.4272 18.2835 10.4272 18.8003C10.4272 19.317 10.848 19.7378 11.3647 19.7378C11.8815 19.7378 12.3022 19.317 12.3022 18.8003C12.3022 18.2835 11.8815 17.8628 11.3647 17.8628Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M19.2615 15.6833H15.8873C15.5766 15.6833 15.3248 15.9352 15.3248 16.2458C15.3248 16.5565 15.5766 16.8083 15.8873 16.8083H19.2615C19.5722 16.8083 19.824 16.5565 19.824 16.2458C19.824 15.9352 19.5722 15.6833 19.2615 15.6833Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M19.2615 17.9529H15.8873C15.5766 17.9529 15.3248 18.2047 15.3248 18.5154C15.3248 18.826 15.5766 19.0779 15.8873 19.0779H19.2615C19.5722 19.0779 19.824 18.826 19.824 18.5154C19.824 18.2047 19.5722 17.9529 19.2615 17.9529Z"
                            fill="#080808" fill-opacity="0.9"/>
                      <path d="M11.9175 17.8628H4.98902C4.32002 17.8628 3.75827 17.3603 3.68477 16.6958L3.06452 11.1218H1.49927C1.18877 11.1218 0.936768 10.8698 0.936768 10.5593C0.936768 10.2488 1.18877 9.99683 1.49927 9.99683H3.71402C3.91652 9.99683 4.08677 10.1491 4.10927 10.3501L4.23602 11.4893H12.453C12.834 11.4893 13.1955 11.6543 13.4445 11.9416C13.6943 12.2296 13.806 12.6106 13.7528 12.9878L13.2165 16.7363C13.1243 17.3828 12.57 17.8628 11.9175 17.8628ZM4.36127 12.6143L4.80227 16.5713C4.81277 16.6666 4.89302 16.7378 4.98827 16.7378H11.9175C12.0105 16.7378 12.09 16.6688 12.1028 16.5773L12.639 12.8288C12.6495 12.7546 12.6158 12.7036 12.5948 12.6796C12.5738 12.6556 12.528 12.6151 12.453 12.6151H4.36202L4.36127 12.6143Z"
                            fill="#080808" fill-opacity="0.9"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1513_4939">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>


                </div>

                <!-- Icon End -->
                <h4>
                  <a @click.prevent="goto('projects')"
                     class="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                    Website <br/> Development

                    <span class="animate-arrow-up">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path class="transition-all" d="M7 17L17 7" stroke="currentColor"
                                                  stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path class="transition-all" d="M7 7H17V17" stroke="currentColor"
                                                  stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>

                                    </span>
                  </a>
                </h4>
              </div>

            </div>

            <!-- service Item End -->


            <!-- service Item -->
            <div class="col-12 col-sm-6 col-md-4">
              <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <!-- Icon -->
                <div class="d-flex flex-wrap align-items-center justify-content-center service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 2.25C6.61523 2.25 2.25 6.61523 2.25 12C2.25 17.3848 6.61523 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61523 17.3848 2.25 12 2.25ZM12 20.25C7.44365 20.25 3.75 16.5564 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5564 3.75 20.25 7.44365 20.25 12C20.25 16.5564 16.5564 20.25 12 20.25Z"
                          fill="#080808" fill-opacity="0.9"/>
                    <path d="M15 8.25C15 8.66421 14.6642 9 14.25 9H9.75C9.33579 9 9 8.66421 9 8.25C9 7.83579 9.33579 7.5 9.75 7.5H14.25C14.6642 7.5 15 7.83579 15 8.25ZM15 11.25C15 11.6642 14.6642 12 14.25 12H9.75C9.33579 12 9 11.6642 9 11.25C9 10.8358 9.33579 10.5 9.75 10.5H14.25C14.6642 10.5 15 10.8358 15 11.25ZM15 14.25C15 14.6642 14.6642 15 14.25 15H9.75C9.33579 15 9 14.6642 9 14.25C9 13.8358 9.33579 13.5 9.75 13.5H14.25C14.6642 13.5 15 13.8358 15 14.25Z"
                          fill="#FFB646"/>
                    <path d="M12 6C11.4477 6 11 6.44772 11 7V12H7C6.44772 12 6 12.4477 6 13V18C6 18.5523 6.44772 19 7 19H12V24C12 24.5523 12.4477 25 13 25C13.5523 25 14 24.5523 14 24V19H18C18.5523 19 19 18.5523 19 18V13C19 12.4477 18.5523 12 18 12H14V7C14 6.44772 13.5523 6 13 6H12Z"
                          fill="#FFB646"/>
                  </svg>

                </div>
                <!-- Icon End -->
                <h4>
                  <a @click.prevent="goto('projects')"
                     class="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                    API <br/> Development
                    <span class="animate-arrow-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </span>
                  </a>
                </h4>
              </div>
            </div>

            <!-- service Item End -->
            <!-- service Item -->
            <div class="col-12 col-sm-6 col-md-4">

              <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <!-- Icon -->
                <div class="d-flex flex-wrap align-items-center justify-content-center service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M4.875 3.75C4.875 2.09314 6.21814 0.75 7.875 0.75H16.125C17.7819 0.75 19.125 2.09314 19.125 3.75V20.25C19.125 21.9069 17.7819 23.25 16.125 23.25H7.875C6.21814 23.25 4.875 21.9069 4.875 20.25V3.75ZM7.875 2.25C7.04659 2.25 6.375 2.92157 6.375 3.75V20.25C6.375 21.0784 7.04659 21.75 7.875 21.75H16.125C16.9534 21.75 17.625 21.0784 17.625 20.25V3.75C17.625 2.92157 16.9534 2.25 16.125 2.25H7.875Z"
                          fill="#080808" fill-opacity="0.9"/>
                    <path d="M12.75 4.5C12.75 4.91422 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91422 11.25 4.5C11.25 4.08578 11.5858 3.75 12 3.75C12.4142 3.75 12.75 4.08578 12.75 4.5Z"
                          fill="#FFB646"/>
                    <path d="M13.5 19.875C13.9142 19.875 14.25 19.5392 14.25 19.125C14.25 18.7108 13.9142 18.375 13.5 18.375H10.5C10.0858 18.375 9.75 18.7108 9.75 19.125C9.75 19.5392 10.0858 19.875 10.5 19.875H13.5Z"
                          fill="#FFB646"/>
                  </svg>

                </div>

                <!-- Icon End -->
                <h4>
                  <a @click.prevent="goto('projects')"
                     class="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                    Mobile Apps <br/> Development

                    <span class="animate-arrow-up">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path class="transition-all" d="M7 17L17 7" stroke="currentColor"
                                                  stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path class="transition-all" d="M7 7H17V17" stroke="currentColor"
                                                  stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>

                                    </span>
                  </a>
                </h4>
              </div>

            </div>

            <!-- service Item End -->

            <!-- service Item -->

            <div class="col-12 col-sm-6 col-md-4">
              <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <!-- Icon -->
                <div class="d-flex flex-wrap align-items-center justify-content-center service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 2.25C6.61523 2.25 2.25 6.61523 2.25 12C2.25 17.3848 6.61523 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61523 17.3848 2.25 12 2.25ZM12 20.25C7.44365 20.25 3.75 16.5564 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5564 3.75 20.25 7.44365 20.25 12C20.25 16.5564 16.5564 20.25 12 20.25Z"
                          fill="#080808" fill-opacity="0.9"/>
                    <path d="M15 9.75C15 10.1642 14.6642 10.5 14.25 10.5H9.75C9.33579 10.5 9 10.1642 9 9.75C9 9.33579 9.33579 9 9.75 9H14.25C14.6642 9 15 9.33579 15 9.75Z"
                          fill="#FFB646"/>
                    <path d="M15 14.25C15 14.6642 14.6642 15 14.25 15H9.75C9.33579 15 9 14.6642 9 14.25C9 13.8358 9.33579 13.5 9.75 13.5H14.25C14.6642 13.5 15 13.8358 15 14.25Z"
                          fill="#FFB646"/>
                  </svg>
                </div>
                <!-- Icon End -->
                <h4>
                  <a @click.prevent="goto('projects')"
                     class="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                    DevOps <br/> Services
                    <span class="animate-arrow-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </span>
                  </a>
                </h4>
              </div>
            </div>

            <!-- service Item End -->

            <div class="col-12 col-sm-6 col-md-4">
              <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <!-- Icon -->
                <div class="d-flex flex-wrap align-items-center justify-content-center service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3 5.25C3 4.05964 4.05964 3 5.25 3H18.75C19.9404 3 21 4.05964 21 5.25V18.75C21 19.9404 19.9404 21 18.75 21H5.25C4.05964 21 3 19.9404 3 18.75V5.25ZM5.25 4.5C4.55964 4.5 4 5.05964 4 5.75V18.75C4 19.4404 4.55964 20 5.25 20H18.75C19.4404 20 20 19.4404 20 18.75V5.75C20 5.05964 19.4404 4.5 18.75 4.5H5.25Z"
                          fill="#080808" fill-opacity="0.9"/>
                    <path d="M6 7H18V8.5H6V7ZM6 10.5H18V12H6V10.5ZM6 13.5H18V15H6V13.5ZM6 16.5H18V18H6V16.5Z"
                          fill="#FFB646"/>
                    <path d="M10.5 6C10.0858 6 9.75 6.33579 9.75 6.75C9.75 7.16421 10.0858 7.5 10.5 7.5C10.9142 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 10.9142 6 10.5 6ZM14.25 6C13.8358 6 13.5 6.33579 13.5 6.75C13.5 7.16421 13.8358 7.5 14.25 7.5C14.6642 7.5 15 7.16421 15 6.75C15 6.33579 14.6642 6 14.25 6Z"
                          fill="#FFB646"/>
                  </svg>


                </div>
                <!-- Icon End -->
                <h4>
                  <a @click.prevent="goto('projects')"
                     class="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                    Database <br/> Management
                    <span class="animate-arrow-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </span>
                  </a>
                </h4>
              </div>
            </div>


            <div class="col-12 col-sm-6 col-md-4">
              <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <!-- Icon -->
                <div class="d-flex flex-wrap align-items-center justify-content-center service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3 3.75C3 2.23122 4.23122 1 5.75 1H18.25C19.7688 1 21 2.23122 21 3.75V20.25C21 21.7688 19.7688 23 18.25 23H5.75C4.23122 23 3 21.7688 3 20.25V3.75ZM5.75 2.5C5.05964 2.5 4.5 3.05964 4.5 3.75V20.25C4.5 20.9404 5.05964 21.5 5.75 21.5H18.25C18.9404 21.5 19.5 20.9404 19.5 20.25V3.75C19.5 3.05964 18.9404 2.5 18.25 2.5H5.75Z"
                          fill="#080808" fill-opacity="0.9"/>
                    <path d="M7 6H17V7.5H7V6ZM7 9H17V10.5H7V9ZM7 12H13V13.5H7V12Z" fill="#FFB646"/>
                    <path d="M15 16.5L17.5 14L16.5858 13.0858L15 14.6716L13.4142 13.0858L12.5 14L15 16.5Z"
                          fill="#FFB646"/>
                  </svg>

                </div>
                <!-- Icon End -->
                <h4>
                  <a @click.prevent="goto('projects')"
                     class="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                    Software <br> Architecture
                    <span class="animate-arrow-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor"
                          stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </span>
                  </a>
                </h4>
              </div>
            </div>

          </div>
        </div>


        <div class="col-12 col-xl-4" data-aos="zoom-in" data-aos-delay="1000">
          <div class="bg-dark d-flex flex-wrap flex-column justify-content-between service-contact-card">
            <div class="d-flex flex-wrap justify-content-end">
              <a @click.prevent="goto('contact')" class="animate-arrow-up">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3333 56.6666L56.6667 23.3333" stroke="#FFB646" stroke-width="3.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M23.3333 23.3333H56.6667V56.6666" stroke="#FFB646" stroke-width="3.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>

            <div class="d-flex flex-column flex-wrap gap-y-2">
              <span class="text-warning text-lg fw-normal lh-1">SAY HELLO!</span>
              <h5 class="text-white">
                mdyusufbinnur@gmail.com
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- Service end -->

  <!-- About Us Sectin Start -->
  <section class="about-section pb-120" data-aos="zoom-out" data-aos-delay="800">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="position-relative">
            <img src="/images/about/about1.png" alt="">
            <div class="d-flex flex-wrap flex-column position-absolute years-of-experience">
                                <span
                                    class="years-experience-of-number text-dark fw-bold font-Syne leading-none d-inline-block position-relative">5+</span>
              <span class="strock-text">Years of <br/> experience</span>

            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 about-grid-space-right">

          <div class="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2">
            <span class="text-warning text-xl">Hello I’m</span>
            <h4 class="section-title circle-shape text-dark position-relative">
              Md Yusuf Bin Nur <br> - Software Engineer
            </h4>

            <p class="paragraph mb-5">
              "I'm here to bring your vision to life through the power of words. As a lover of language
              and a master of copy, I craft content that not only embodies who you are and what you stand
              for, but also resonates deeply with your audience. My words don't just tell your story—they
              invite your readers in, creating a connection that leaves a lasting impression."
            </p>
            <ul class="award-lists d-flex flex-wrap p-0 list-unstyled">
              <li class="award-lists-item">

                <span class="text-dark text-32 fw-bold font-Syne position-relative">08</span>
                <p class="paragraph">Certification</p>
              </li>
              <li class="award-lists-item">

                <span class="text-dark text-32 fw-bold font-Syne position-relative">50+</span>
                <p class="paragraph">Worldwide client</p>
              </li>
            </ul>

            <div class="d-flex flex-wrap">
              <a @click.prevent="goto('contact')" class="d-flex flex-wrap align-items-center btn-primary">Download my
                resume
                <span class="d-inline-block animate-arrow-up">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Us Sectin End -->


  <!-- tabs start -->
  <section class="featured-properties">
    <div class="container">
      <div class="row">

        <div class="col-12 col-lg-5 col-2xl-4" data-aos="fade-up" data-aos-delay="300">

          <div class="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 mb-4">
            <h3 class="section-title circle-shape text-dark position-relative">
              All over my details find here...
            </h3>

          </div>
          <div class="tabs nav nav-pills flex-wrap flex-lg-column">
            <button data-bs-toggle="pill" data-bs-target="#about_me_tab"
                    class="tab-btn justify-content-between align-items-center d-inline-flex active">
              About me
              <span class="inline-block animate-arrow-up">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
            </button>
            <button class="tab-btn tab-btn justify-content-between align-items-center d-inline-flex"
                    data-bs-toggle="pill" data-bs-target="#experience_tab">
              Experience
              <span class="inline-block animate-arrow-up">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
            </button>
            <button class="tab-btn tab-btn justify-content-between align-items-center d-inline-flex"
                    data-bs-toggle="pill" data-bs-target="#education_tab">
              Education
              <span class="inline-block animate-arrow-up">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
            </button>
            <button class="tab-btn tab-btn justify-content-between align-items-center d-inline-flex"
                    data-bs-toggle="pill" data-bs-target="#skills_tab">
              Skills
              <span class="inline-block animate-arrow-up">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
            </button>
          </div>
        </div>

        <div class="col-12 col-lg-7 col-2xl-8 featured-properties-space-left" data-aos="fade-up"
             data-aos-delay="600">
          <div class="tab-content">

            <div id="about_me_tab" class="tab-pane fade show active position-relative">
              <div class="tab-contents">
                <h4 class="text-dark text-2xl based-in-german-title-tab fw-bold font-Syne">
                  Information
                </h4>
                <p class="paragraph mb-7">Md Yusuf Bin Nur, <span
                    class="text-dark">Software Engineer</span>,
                  That is where I come in. A
                  lover of words, a wrangler of copy. Here to create copy that not only reflects who
                  you
                  are
                  and what you stand for,</p>
                <p class="paragraph mb-14">but words that truly land with those that read them, calling
                  your
                  audience
                  in and making them want more.</p>

                <ul class="flex-column gap-3 d-inline-flex list-unstyled p-0">
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Name</span>
                    <span class="text-dark gap-5 font-Syne leading-8">
                                        Md Yusuf Bin Nur</span>
                  </li>
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Nationality</span>
                    <span class="text-dark   font-Syne leading-8">
                                        Bangladeshi</span>
                  </li>
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Phone</span>
                    <span class="text-dark   font-Syne leading-8">
                                        +880 1815 625 375</span>
                  </li>
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Email</span>
                    <span class="text-dark   font-Syne leading-8">
                                        mdyusufbinnur@gmail.com</span>
                  </li>
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Experience</span>
                    <span class="text-dark   font-Syne leading-8">
                                        5+ years</span>
                  </li>
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Freelance</span>
                    <span class="text-dark   font-Syne leading-8">
                                        Available</span>
                  </li>
                  <li class="gap-5 d-inline-flex align-items-center">
                                            <span class="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Language</span>
                    <span class="text-dark   font-Syne leading-8">
                                            English, Bengali, Hindi</span>
                  </li>
                </ul>

              </div>
            </div>

            <div id="experience_tab" class="tab-pane fade position-relative">
              <h4 class="text-dark text-2xl based-in-german-title-tab fw-bold font-Syne">Experience</h4>

              <div class="tab-contents tab-contents-experience gap-x-4 gap-y-5">

                <div class="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">
                  <div>
                    <p class="dot text-lg fw-normal font-sans leading-7 text-dark position-relative">
                      Wedsly, Brollopsguiden</p>
                    <h4 class="fw-bold font-Syne leading-normal text-2xl text-dark">
                      Lead Software Engineer
                    </h4>
                  </div>
                </div>

                <div class="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">

                  <div>
                    <p class="dot text-lg fw-normal font-sans leading-7 text-dark position-relative">
                      Wedbox</p>
                    <h4 class="fw-bold font-Syne leading-normal text-2xl text-dark">
                      Database Refinment Instructor
                    </h4>
                  </div>
                </div>

                <div class="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">

                  <p class="dot text-lg fw-normal font-sans leading-7 text-dark position-relative">
                    Moonboon</p>
                  <h4 class="fw-bold font-Syne leading-normal text-2xl text-dark">Product
                    Manager
                  </h4>
                </div>
              </div>



            </div>
            <div id="education_tab" class="tab-pane fade">
              <h4 class="text-dark text-2xl based-in-german-title-tab fw-bold font-Syne">Education</h4>

              <div class="education-tab-contents">

                <div class="education-tab-item d-flex flex-wrap">
                                        <span class="text-sm fw-normal font-Inter leading-tight text-black-text-800">
                                            2011–2012
                                        </span>
                  <div class="flex-1">
                    <p class="dot text-lg fw-normal font-sans leading-7 text-dark position-relative">
                      Chickdair SFJ High School
                    </p>
                    <h4 class="fw-bold font-Syne leading-normal text-2xl text-dark">
                      Secondary School
                    </h4>
                  </div>
                </div>

                <div class="education-tab-item d-flex flex-wrap">
                                        <span class="text-sm fw-normal font-Inter leading-tight text-black-text-800">
                                            2012–2013
                                        </span>
                  <div class="flex-1">
                    <p class="dot text-lg fw-normal font-sans leading-7 text-dark position-relative">
                      Chittagong Laboratory College
                    </p>
                    <h4 class="fw-bold font-Syne leading-normal text-2xl text-dark">
                      Higher Secondary School
                    </h4>
                  </div>
                </div>

                <div class="education-tab-item d-flex flex-wrap">
                                        <span class="text-sm fw-normal font-Inter leading-tight text-black-text-800">
                                            2014-2019
                                        </span>
                  <div class="flex-1">
                    <p class="dot text-lg fw-normal font-sans leading-7 text-dark position-relative">
                      IIUC
                    </p>
                    <h4 class="fw-bold font-Syne leading-normal text-2xl text-dark">
                      B.Sc in CSE
                    </h4>
                  </div>
                </div>


              </div>
            </div>

            <div id="skills_tab" class="tab-pane fade">
              <h4 class="text-dark text-2xl based-in-german-title-tab fw-bold font-Syne">Skills</h4>

              <div class="skills-tab-contents">

                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">React JS (Next)</h4>
                  </div>
                </div>


                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">Node JS</h4>
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">PHP-Laravel</h4>
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">Vue JS (Nuxt)</h4>
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">Firebase</h4>
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">DevOps</h4>
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  <div class="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 class="fw-bold font-Syne leading-normal text-xl text-dark">Figma</h4>
                  </div>
                </div>


              </div>
            </div>


          </div>

          <span class="d-flex justify-content-end mt-14 -mr-3">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                            fill="#FFB646"/>
                    </svg>
                </span>
        </div>
      </div>
    </div>

  </section>
  <!-- tabs end -->


  <!-- Portfolio Section Start -->
  <section class="bg-secondary py-120">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up" data-aos-delay="400">
          <div class="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
            <span class="text-warning text-xl">Portfolio</span>
            <h3 class="section-title text-dark">
              My recent <span class="position-relative circle-shape portfolio-shape">w</span>ork
            </h3>
          </div>
        </div>

        <div class="col-12 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div class="rounded-20 overflow-hidden mb-6">
            <img src="/images/projects/project1.png" alt="project1">
          </div>
          <div class="d-flex flex-wrap flex-column gap-3">
            <div class="d-flex flex-wrap gap-2">
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >WEB</a>
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >DEVELOPMENT</a>
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >NEXT JS</a>
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >NODE JS</a>

            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-between text-dark portfolio-title">
              <h4 class="fw-bold font-Syne text-center leading-10 portfolio-link">
                <a class="transition-all" href="https://brollopsguiden.se" target="_blank">Brollopsguiden</a>
              </h4>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6" data-aos="fade-up" data-aos-delay="800">
          <div class="rounded-20 overflow-hidden mb-6">
            <img src="/images/projects/project2.png" alt="project1">
          </div>
          <div class="d-flex flex-wrap flex-column gap-3">
            <div class="d-flex flex-wrap gap-2">
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >WEB</a>
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >DevOps</a>
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >NUXT JS</a>
              <a class="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                 >LARAVEL</a>

            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-between text-dark portfolio-title">
              <h4 class="fw-bold font-Syne text-center leading-10 portfolio-link">
                <a class="transition-all" href="https://deevo.games" target="_blank">Deevo Games</a>
              </h4>
            </div>
          </div>
        </div>
      </div>


      <div class="col-12 mt-12" data-aos="fade-up" data-aos-delay="600">
        <div class="d-flex">
          <a @click.prevent="goto('projects')"
             class="d-flex align-items-center justify-content-center flex-wrap btn-primary flex-grow-1">
            View All Project
            <span class="inline-block ml-3 animate-arrow-up">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section Start -->
  <section class="bg-white pb-120" style="margin-top: 20px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-16">
            <div class="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 pricing-title-section"
                 data-aos="fade-up" data-aos-delay="400">
              <span class="text-warning text-xl">Pricing</span>
              <h3 class="section-title text-dark">
                Stay chill and pick your <span
                  class="position-relative circle-shape priceing-shape">pl</span>an
              </h3>
            </div>

            <div class="d-flex contact-for-custom-project" data-aos="fade-up" data-aos-delay="700">
              <a @click.prevent="goto('contact')" class="d-flex align-items-center flex-wrap btn-primary">
                Contact for Custom Project
                <span class="d-inline-block ml-3 animate-arrow-up">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9"
                                                  stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9"
                                                  stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="prcing-grid">

        <!-- Pricing Item Start -->

        <div class="transition-all d-flex flex-wrap flex-column pricing-item" data-aos="fade-up"
             data-aos-delay="500">

          <div class="d-flex align-items-center justify-content-between">
            <span class="text-lg fw-normal font-sans leading-none pricing-plan">Standard</span>
            <span class="fw-bold text-xl font-Syne pricing-rate">$20/h</span>
          </div>

          <div class="d-flex flex-wrap justify-content-between align-items-end">
            <div>
              <!--                            <h4 class="fw-bold font-Syne leading-10 text-32 text-dark mb-1">20 hrs-->
              <!--                            </h4>-->
              <p class="text-lg fw-normal font-sans leading-none pricing-plan">30
                hours per
                week</p>
            </div>

            <a @click.prevent="goto('projects')" class="animate-arrow-up">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>

        <!--                &lt;!&ndash; Pricing Item End &ndash;&gt;-->
        <!--                &lt;!&ndash; Pricing Item Start &ndash;&gt;-->

        <!--                <div class="transition-all d-flex flex-wrap flex-column pricing-item" data-aos="fade-up"-->
        <!--                     data-aos-delay="700">-->

        <!--                    <div class="d-flex align-items-center justify-content-between">-->
        <!--                        <span class="text-lg fw-normal font-sans leading-none pricing-plan">Premium</span>-->
        <!--                        <span class="fw-bold text-xl font-Syne pricing-rate">$60/h</span>-->
        <!--                    </div>-->

        <!--                    <div class="d-flex flex-wrap justify-content-between align-items-end">-->
        <!--                        <div>-->
        <!--                            <h4 class="fw-bold font-Syne leading-10 text-32 text-dark mb-1">30 hrs-->
        <!--                            </h4>-->
        <!--                            <p class="text-lg fw-normal font-sans leading-none pricing-plan">15-->
        <!--                                hours per-->
        <!--                                week</p>-->
        <!--                        </div>-->

        <!--                        <a href="#" class="animate-arrow-up">-->
        <!--                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
        <!--                                 xmlns="http://www.w3.org/2000/svg">-->
        <!--                                <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6"-->
        <!--                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>-->
        <!--                                <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6"-->
        <!--                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>-->
        <!--                            </svg>-->
        <!--                        </a>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--                &lt;!&ndash; Pricing Item End &ndash;&gt;-->
        <!--                &lt;!&ndash; Pricing Item Start &ndash;&gt;-->

        <!--                <div class="transition-all d-flex flex-wrap flex-column pricing-item" data-aos="fade-up"-->
        <!--                     data-aos-delay="900">-->

        <!--                    <div class="d-flex align-items-center justify-content-between">-->
        <!--                        <span class="text-lg fw-normal font-sans leading-none pricing-plan">Platinum</span>-->
        <!--                        <span class="fw-bold text-xl font-Syne pricing-rate">$60/h</span>-->
        <!--                    </div>-->

        <!--                    <div class="d-flex flex-wrap justify-content-between align-items-end">-->
        <!--                        <div>-->
        <!--                            <h4 class="fw-bold font-Syne leading-10 text-32 text-dark mb-1">20 hrs-->
        <!--                            </h4>-->
        <!--                            <p class="text-lg fw-normal font-sans leading-none pricing-plan">80-->
        <!--                                hours per-->
        <!--                                week</p>-->
        <!--                        </div>-->

        <!--                        <a href="#" class="animate-arrow-up">-->
        <!--                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
        <!--                                 xmlns="http://www.w3.org/2000/svg">-->
        <!--                                <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6"-->
        <!--                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>-->
        <!--                                <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6"-->
        <!--                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>-->
        <!--                            </svg>-->
        <!--                        </a>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--                &lt;!&ndash; Pricing Item End &ndash;&gt;-->

      </div>
    </div>
  </section>
</template>

<script setup>
import {navigateTo} from "nuxt/app";

const goto = (path) => {
  navigateTo('/'+path)
}
</script>

<style scoped>

</style>
