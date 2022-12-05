<template>
  <div class="main-wrapper">
    <body id="page-top">
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top"
            >automate.builders</a
          >
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#github">Github</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#medium">Medium</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#projects"
                  >Projects</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Online Tools
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    class="dropdown-item"
                    href="http://sieteunoseis.pythonanywhere.com/"
                    >Range 2 Pattern</a
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Support Me!
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    class="dropdown-item"
                    href="https://www.patreon.com/join/sieteunoseis/checkout"
                    >Become a Patron</a
                  >
                  <a
                    class="dropdown-item"
                    href="https://www.buymeacoffee.com/automatebldrs"
                    >Buy Me Coffee</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Header -->
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Jeremy Worden</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              Tech enthusiast and wanderlust.
            </h2>
          </div>
        </div>
      </header>

      <!-- About Section -->
      <section id="about" class="about-section text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-white mb-4">About Automate Builders</h2>
              <p class="text-white-50">
                Automate Builders is a side project of mine. It's a place where
                I can share tools that make managing and configuring
                collaboration solutions easier. Hopefully it allows us all to
                work smarter rather than harder.
              </p>
            </div>
          </div>
          <img
            src="@/assets/img/automation-5.png"
            class="img-fluid p-5"
            alt=""
          />
        </div>
      </section>

      <!-- GitHub Section -->
      <section id="github" class="project-section text-center bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-center mb-4 mt-5">Github</h2>
              <github-card
                data-user="sieteunoseis"
                data-theme="dark"
                v-pre></github-card>
            </div>
          </div>
        </div>
      </section>

      <!-- Medium Section -->
      <section id="medium" class="project-section text-center bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2 class="text-center mb-4 mt-5">Medium Stories</h2>
              <div
                id="retainable-rss-embed"
                data-rss="https://medium.com/feed/automate-builders"
                data-maxcols="2"
                data-layout="slider"
                data-poststyle="external"
                data-readmore="Read more"
                data-buttonclass="btn btn-primary"
                data-offset="-100"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects-section bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Featured Project</h2>
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7">
              <img
                src="@/assets/img/isemaker.png"
                alt=""
                class="img-fluid mb-3 mb-lg-0"
              />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>ISE Maker</h4>
                <p class="text-black-50 mb-0">
                  A better bulk administration tool for Cisco's Identity Services Engine (ISE).
                </p>
                <hr class="d-none d-lg-block mb-4 ml-0" />
                <a
                  href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/1.5.1/ISE.Maker-1.5.1.dmg"
                  class="btn btn-primary js-scroll-trigger m-1"
                  ><i class="fab fa-apple fa-2x"></i
                ></a>
                <a
                  href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/1.5.1/ISE.Maker.Setup.1.5.1.exe"
                  class="btn btn-primary js-scroll-trigger m-1"
                  ><i class="fab fa-windows fa-2x"></i
                ></a>
              </div>
            </div>
          </div>

          <h2 class="text-center mb-4">Other Projects</h2>
          <!-- Project Row Left -->
          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="@/assets/img/betterbat.png"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div
                    class="project-text w-100 my-auto text-center text-lg-left"
                  >
                    <h4 class="text-white">Better BAT</h4>
                    <p class="mb-0 text-white-50">
                  A better bulk administration tool for Cisco collaboration
                  applications.
                    </p>
                    <hr class="d-none d-lg-block mb-4 ml-0" />
                    <a
                      href="https://github.com/sieteunoseis/betterbat-public-release/releases/download/v3.0.0/Better.BAT.Tool-3.0.0.dmg"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-apple fa-lg"></i
                    ></a>
                    <a
                      href="https://github.com/sieteunoseis/betterbat-public-release/releases/download/v3.0.0/Better.BAT.Tool.Setup.3.0.0.exe"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-windows fa-lg"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Project Row Right -->
          <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
              <img class="img-fluid" src="@/assets/img/siptoolbox.png" alt="" />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div
                    class="project-text w-100 my-auto text-center text-lg-right"
                  >
                    <h4 class="text-white">SIP Toolbox</h4>
                    <p class="mb-0 text-white-50">
                      A cross platform application for running packet captures
                      and pulling logs off of Cisco Unified Communications
                      Manager.
                    </p>
                    <hr class="d-none d-lg-block mb-4 mr-0" />
                    <a
                      href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/v1.5.0/sip_toolbox-v.1.5.0.dmg"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-apple fa-2x"></i
                    ></a>
                    <a
                      href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/v1.5.0/sip-toolbox-installer_v1.5.0.exe"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-windows fa-2x"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Row Left -->
          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="@/assets/img/ucconfigurator.png"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div
                    class="project-text w-100 my-auto text-center text-lg-left"
                  >
                    <h4 class="text-white">UC Configurator</h4>
                    <p class="mb-0 text-white-50">
                      A zero day Python tool for configurating Cisco UC
                      applications. Now working for Cisco Collaboration Systems Release 14!!!!
                    </p>
                    <hr class="d-none d-lg-block mb-4 ml-0" />
                    <a
                      href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/v0.5.1/UC.Configurator-v0.5.1.dmg"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-apple fa-lg"></i
                    ></a>
                    <a
                      href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/v0.5.1/UC.Configurator-0.5.1-amd64.msi"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-windows fa-lg"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Row Right -->
          <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="@/assets/img/cerautomation.png"
                alt=""
              />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div
                    class="project-text w-100 my-auto text-center text-lg-right"
                  >
                    <h4 class="text-white">
                      Cisco Emergency Responder Automation
                    </h4>
                    <p class="mb-0 text-white-50">
                      Script that uses Google Chrome to automate adding users to
                      CER administration pages
                    </p>
                    <hr class="d-none d-lg-block mb-4 mr-0" />
                    <a
                      href="https://github.com/sieteunoseis/sieteunoseis.github.io/releases/download/v1.0/chrome_cer_automation.zip"
                      class="btn btn-primary js-scroll-trigger m-1"
                      ><i class="fab fa-python fa-2x"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section bg-black" id="signup">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a
                      href="https://goo.gl/maps/cZTNtvzsLeu7SUCq8"
                      target="_blank"
                      class="mx-2"
                      >1340 N Webster, Portland, Oregon 97217</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="mailto:jeremy@automate.builders" target="_blank"
                      >jeremy@automate.builders</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">+1 (716) 218-9797</div>
                </div>
              </div>
            </div>
          </div>

          <div class="social d-flex justify-content-center">
            <a
              href="https://twitter.com/SieteUnoSeis"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://medium.com/automate-builders/"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-medium"></i>
            </a>
            <a
              href="https://facebook.com/jeremy.worden"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://github.com/sieteunoseis/"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/jeremyworden"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jeremyworden/"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/sieteunoseis/"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.patreon.com/join/sieteunoseis/checkout"
              target="_blank"
              class="mx-2"
            >
              <i class="fab fa-patreon"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-black small text-center text-white-50">
        <div class="container">
          Copyright &copy; Jeremy Worden 2022
        </div>
      </footer>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Automate Builders",
    };
  }
};
</script>

<style></style>
