<!doctype html>

<html lang="en">
<head>
   
  
    <script>
    !function(){var i,e,t,s=window.legal=window.legal||[];if(s.SNIPPET_VERSION="3.0.0",i="https://widgets.legalmonster.com/v1/legal.js",!s.__VERSION__)if(s.invoked)window.console&&console.info&&console.info("legal.js: The initialisation snippet is included more than once on this page, and does not need to be.");else{for(s.invoked=!0,s.methods=["cookieConsent","document","ensureConsent","handleWidget","signup","user"],s.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(t),s.push(e),s}},e=0;e<s.methods.length;e++)t=s.methods[e],s[t]=s.factory(t);s.load=function(e,t){var n,o=document.createElement("script");o.setAttribute("data-legalmonster","sven"),o.type="text/javascript",o.async=!0,o.src=i,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(o,n),s.__project=e,s.__loadOptions=t||{}},s.widget=function(e){s.__project||s.load(e.widgetPublicKey),s.handleWidget(e)}}}();
    legal.widget({
        type: "cookie",
        widgetPublicKey: "6sPQx5mL5Fxxgv5djvYc752X",
    });
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172985490-2"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-172985490-2');
    </script>

    <!-- Hotjar Tracking Code for https://www.yuccahr.com/ -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1908847,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>

    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index,follow">

    <title>yuccaHR | Employee onboarding software</title>

    <meta name="description" content="Boost engagement in your onboarding process and motivate new hires with YuccaHR Onboarding Software">

    <meta property="og:title" content="yuccaHR | Employee onboarding software">
    <meta property="og:description" content="Boost engagement in your onboarding process and motivate new hires with YuccaHR Onboarding Software">
    <meta property="og:site_name" content="yuccaHR onboarding software">
    <meta property="og:image" content="https://yuccahr.com/img/yuccahr-logo.png">


    <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_directory');?>/favicon-180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('template_directory');?>/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('template_directory');?>/favicon-16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fc656c">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <?php wp_head();?>

   

</head>

<body>


<nav class="topbar">
    <div class="wrapper row row-centered">

        <a class="main-logo" href="/" title="yuccahr.com - Home">
            <img src="http://wordpress.yuccahr.com/wp-content/themes/yuccahr/img/yuccaHR-logo.svg" alt="YuccaHR Onboarding Logo">
        </a>

        <div class="navigation-drawer">

            <ul class="main-navigation">
                <li>
                    <a class="a<?= $url == 'how-it-works' ? ' is-current-page' : ''?>" title="How Onboarding with yuccaHR works" href="how-it-works">How it works</a>
                </li>
                <li>
                    <a class="a<?= $url == 'pricing' ? ' is-current-page' : ''?>" title="Chose your yuccaHR pricing model" href="pricing">Pricing</a>
                </li>
                <li>
                    <a class="a<?= $url == 'blog' ? ' is-current-page' : ''?>" title="Chose your yuccaHR pricing model" href="blog">Blog</a>
                </li>
                <li>
                    <a class="a<?= $url == 'contact' ? ' is-current-page' : ''?>" title="Contact us to learn more about yuccaHR" href="contact">Contact us</a>
                </li>
            </ul>

            <!-- <a href="https://app.yucca.ai" target="_blank" class="button" title="Log in to yuccaHR">Log in</a> -->
        </div>

       

        <a target="_blank" id="modal-open-button" class="button-coral" title="Get started with YuccaHR on Slack">Get free beta</a>

        <div id="myModal" class="modal">

        <div class="modal-content">
          <span class="icon close icon-close"></span>
          <div class="centered-wrapper"><img src="http://wordpress.yuccahr.com/wp-content/themes/yuccahr/img/yuccaHR-logo.svg" alt="YuccaHR Logo" class="footer-logo margin-bottom-2"></div>
          <div class="modal-description">Ready to use yuccaHR<br>for your employee onboarding,<br>integrated with Slack?<br>    Get your Beta access now:</div>
          <form data-ajaxform-signup data-parsley-validate data-fadein>
            <input type="text"
                   required
                   class="input"
                   name="name"
                   id="sign-up-name-input"
                   placeholder="Your name">
            <input type="email"
                   required
                   class="input"
                   name="email"
                   id="sign-up-email-input"
                   placeholder="Your email">
            <div class="centered-wrapper">
              <button id="sign-up-submit-button" class="button-coral submit-button modal-button margin-top-1 sign-up-submit-button">
                Sign up
              </button>
            </div>
          </form>
            <div class="centered-wrapper">
              <span class="modal-footer">We care about data protection! Here is our <a class="link" href="privacy-policy">Privacy Policy</a>.</span>
            </div>
        </div>

        </div>

        <button class="main-navigation-toggle js-main-navigation-toggle" title="Open or close Navigation">
            <i class="icon-burger"></i>
        </button>

    </div>
</nav>