/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
jQuery(document).ready(function($){


    // mobile navigation
    $('.js-main-navigation-toggle').click(function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.navigation-drawer').toggleClass('is-open');
    });
    
    // sticky nav
    if($(window).scrollTop() > 10) {
        $('.topbar').addClass('is-fixed');
    }
    $(window).scroll(function() {
        if($(window).scrollTop() > 10) {
            $('.topbar').addClass('is-fixed');
        } else  {
            $('.topbar').removeClass('is-fixed');
        }
    });

    // default slider arrow definition
    var yucca_right_arrow = '<button class="icon icon-arrow-right arrow-button arrow-button-right"></button>';
    var yucca_left_arrow = '<button class="icon icon-arrow-left arrow-button arrow-button-left"></button>';

    // how it works slider on home
    $('.js-how-it-works-slider').on('init', function(event, slick){
        $('[data-slider="js-how-it-works-slider"][data-slide="' + slick.currentSlide +'"]').addClass('is-active')
    }).slick({
        slides: '.row',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        appendDots: '.how-it-works-slider-dots-container',
        nextArrow: yucca_right_arrow,
        prevArrow: yucca_left_arrow
    }).on('beforeChange', function(event, slick, current, next) {
        $('[data-slider="js-how-it-works-slider"]').removeClass('is-active');
        $('[data-slider="js-how-it-works-slider"][data-slide="' + next + '"]').addClass('is-active');
    });

    // reused function for custom slider triggers (for home & team)
    $('[data-slider][data-slide]').click(function(eve) {
        eve.preventDefault();
        var slidername = $(this).attr('data-slider');
        var slideindex = $(this).attr('data-slide');

        $('.' + slidername).slick('slickGoTo', slideindex);
    });

    // testimonial slider, home page
    $('.js-quote-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        prevArrow: yucca_left_arrow,
        nextArrow: yucca_right_arrow,
        dots: true,
        responsive : [
            {
                breakpoint : 920,
                settings :  {
                    arrows : false
                }
            }
        ]
    });

    // pricing slider on ... pricing... duh
    $('.js-pricing-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: false,
        focusOnSelect: true,
        dots: false,
        infinite: false,
        responsive : [
            {
                breakpoint : 768, /* css: "sm" */
                settings :  {
                    slidesToShow : 1,
                    initialSlide: 1,
                    dots: true

                }
            }
        ]
    });

    // team slider on "about"
    $('.js-team-slider').on('init', function(event, slick){
        $('.team-slider-nav-item[data-slide="' + slick.currentSlide +'"]').addClass('is-selected')
    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: true,
        prevArrow: yucca_left_arrow,
        nextArrow: yucca_right_arrow,
        focusOnSelect: true,
        dots: false,
        infinite: false,
        responsive : [
            {
                breakpoint : 1200,
                settings :  {
                    arrows: false
                }
            }
        ]
    }).on('beforeChange', function(event, slick, current, next) {
        $('[data-slider="js-team-slider"]').removeClass('is-selected');
        $('[data-slider="js-team-slider"][data-slide="' + next + '"]').addClass('is-selected');
    });

    var hiddenFeaturesOpen = false;

    // pricing mobile hidden features
    $('.js-toggle-features').click(function(){
        $(this).parent().find('.js-hidden-feature').toggleClass('show-sm');
        hiddenFeaturesOpen = !hiddenFeaturesOpen;
        if (hiddenFeaturesOpen) {
            $(this).text('Show less features');
        } else {
            $(this).text('Show more features');
        }
    });

    // (faq) accordeon
    $('.js-accordeon-content').hide();
    $('.js-accordeon-button').click(function(){
        var parent = $(this).closest('.js-accordeon');
        var icon = $(this).find('.icon');
        var content= parent.children('.js-accordeon-content');

        parent.toggleClass('is-open');
        content.slideToggle();

        if(parent.hasClass('is-open')) {
            icon.addClass('icon-minus');
            icon.removeClass('icon-plus');
        } else {
            icon.addClass('icon-plus');
            icon.removeClass('icon-minus');

        }
    });

    // how-it-works read more section
    $('.js-unfold').click(function (event) {
        event.preventDefault();
        var button = $(this);
        $('.foldable').animate({
            'max-height' : $('.foldable')[0].scrollHeight
        }, 400, 'swing', function() {
            $(this).css('max-height' , null);
            $(this).removeClass('is-folded');
            button.parent('.pagefold').fadeOut();
        });
    });


    // highlight nav element depending on clicked anchor
    if(window.location.hash) {
        var footerLink = $('.footer [href*="' + window.location.hash  + '"]');

        if(footerLink.length) {
            $('.footer a').removeClass('is-current-page');
            footerLink.addClass('is-current-page');
        }
    }

    // highlight nav element depending on clicked anchor in Wordpress 
    if(window.location.pathname && window.location.pathname !== '/') {
    var url = window.location.pathname;
            urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
            $('.main-navigation a').each(function(){  
                if(urlRegExp.test(this.href.replace(/\/$/,''))){
                    $(this).addClass('is-current-page');
                }
            });   
    }

    if(window.location.pathname === "/blog") { 
        position();
    }

    function position(){
        setTimeout(function() {
        var size = $('[data-attr]:visible').size();
        var screenSize = window.innerWidth; 
        if (screenSize >= 900 ) {

            switch (size) {
                case 0:
                    $("head").children(':last').html('.grid-cell{grid-area:1/1;}');
                    break;
                case 1:
                    $("head").children(':last').html('.grid-cell{grid-area:1/2;}');
                    break;
                case 2:
                    $("head").children(':last').html('.grid-cell{grid-area:1/3;}');
                    break;
                case 3:
                    $("head").children(':last').html('.grid-cell{grid-area:1/3;}');
                    break;
                case 4:
                    $("head").children(':last').html('.grid-cell{grid-area:2/2;}');
                    break;
                default: 
                    $("head").children(':last').html('.grid-cell{grid-area:2/3;}');
            }
        }

        else if (screenSize < 900) {
            switch (size) {
                case 0:
                    $("head").children(':last').html('.grid-cell{grid-area:1/1;}');
                    break;
                case 1:
                    $("head").children(':last').html('.grid-cell{grid-area:1/2;}');
                    break;
                case 2:
                    $("head").children(':last').html('.grid-cell{grid-area:2/1;}');
                    break;
                default: 
                    $("head").children(':last').html('.grid-cell{grid-area:2/2;}');
            }
        }

        }, 1);
        
    } 

    var list = $("[data-attr]");
    var filteredList;
    var categoryIndex;
    position();
    var displayLimit = 8;
    var previousCategory;

    function filterByCategory() {
        $('[category-index]').click(function(eve) {
            $('.grid-cell').removeClass('hide');
            $('.pagefold').css('display', 'block');
            list = $("[data-attr]");
            displayLimit = 8;
            setActiveCategory($(this));
            position();
            showPosts();
        });

      } filterByCategory();
  
    function defaultCategory() {
        $("[category-index]").each(function() {
            const categoryAll = $(this).attr('category-index');
            if(categoryAll === '8' ) {
                categoryIndex = categoryAll;
                setActiveCategory($(this));
                showPosts();
                position();
            }
        });
    } defaultCategory();
    

    function setActiveCategory(element) {
        categoryIndex = element.attr('category-index');
        element.addClass('is-active');

        if (previousCategory && previousCategory != element) {
            previousCategory.removeClass('is-active');
            element.addClass('is-active');
            previousCategory = element;
        } else { previousCategory = element; }
    }

    $('#load-more').click(function(eve) {
        displayLimit += 3;
        showPosts();
        position();
    });

    function showPosts() {
        var numOfAdded = 0;
        list.each(function() {

            const categoryPost = $(this).attr('data-attr');
            const notEnoughAdded = numOfAdded < displayLimit;
            const showAll = categoryIndex === '8';
            const showCategory = categoryPost === categoryIndex;
            if (notEnoughAdded && (showAll || showCategory)) {
                $(this).removeClass('hide');
                numOfAdded++;
            } else {
                $(this).addClass('hide');
            }
        });
    }

    function searchInput() {
        $("#keyword").on("keyup", function() {
            if ($(this).val() === ""){
                checkEmptyInput(); 
                clear($(this));
            } else { checkEmptyInput(); filter($(this));}
            
            
        });
    }  searchInput();
       

    function filter(eve) {
        var value = eve.val().toLowerCase();
            list.each(function() {
                const categoryPost = $(this).attr('data-attr');
                const showAll = categoryIndex === '8';
                const showCategory = categoryPost === categoryIndex;
                if (showAll || showCategory)  {
                    $(this).removeClass('hide');
                     $(this).filter(function() {
                        $('.grid-cell').addClass('hide');
                        $('.pagefold').css('display', 'none');
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
                } else {
                    $(this).addClass('hide'); 
                }
            });
    }

    function clearField() {
        $('.close-input').on("click", function() {
            clear($(this));
        })
    } clearField();

    function clear(eve) {
        $("#keyword").val(''); 
            filter(eve);
            $('.grid-cell').removeClass('hide');
            $('.pagefold').css('display', 'block');
            showPosts();
            checkEmptyInput();
            position();

    }

    function checkEmptyInput() {
        if ($("#keyword").val() === '') {
            $('.close-input').css('display', 'none');
            $('.grid-cell').removeClass('hide');
            clearField();
            } else { $('.close-input').css('display', 'unset');}
    } checkEmptyInput();

    function positionSubscribeCard() {
            var i = 1;           
            $('h2').each(function () {
                if (i === 3) {
                    $( "#subscribe" ).insertBefore( $(this) );
                }
                i++;
           })
           
    } positionSubscribeCard();


    $('#mc-embedded-subscribe').click(function() {
         setTimeout(function() {
            if ( $('input').hasClass('parsley-success')) {
                $('input').remove();
                $('h7').remove();
                $('centered-wrapper').remove();
                $( "div.grid-cell" ).replaceWith( "<div class=grid-cell><h1>Thank you for subscribing</h1><h7>We have sent an email with a confirmation link to your email address. In order to complete the subscription process, please click the confirmation link.</h7></div>" );
                $( '.grid-cell' ).css('padding', '64px 16px');
            }
        }, 10)

      
    });
    // dot navigation in "how it works" - first 3 content sections

    if(window.innerHeight < window.innerWidth
        && window.innerWidth > 780
        && window.innerHeight > 600) {

        var pageslider_element = document.querySelector('.js-has-content-nav');

        if(pageslider_element) {

            var dots = $('.content-dotnav');

            // helper function
            function scrollToThis(element, offset) {
                $('html, body').stop().animate(
                    {'scrollTop': $(element).offset().top - offset},
                    200,
                    'swing');
            }

            // observer for highlighting the nav dots
            var fullsize_pageslides = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry, index) {
                    if (entry.intersectionRatio > 0) {

                        var id = $(entry.target).attr('data-slide-index');
                        $('.content-dotnav-dot').removeClass('is-shown');
                        $('.content-dotnav-dot[data-slide-index="' + id + '"]').addClass('is-shown');
                    }
                });
            }, {
                root: null,
                rootMargin: '-30% 0px',
            });

            // observer for showing the nav
            var fullsize_pageslider = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.target.classList.contains('js-has-content-nav') > -1) {
                        if (entry.intersectionRatio > 0) {
                            dots.addClass('is-shown');
                        } else {
                            dots.removeClass('is-shown');
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: '-45% 0px',
            })

            var count = 0;
            document.querySelectorAll('.large-section').forEach(function (element) {
                $(element).attr('data-slide-index', count);
                var dot = $('<span class="content-dotnav-dot" data-slide-index="' + count + '"></span>');
                dots.append(dot)
                dot.click(function () {
                    scrollToThis(element,75);
                })
                fullsize_pageslides.observe(element);
                count++;
            });


            fullsize_pageslider.observe(pageslider_element);
        }
    }

    // form ajax handling
    $('[data-ajaxform]').submit(function(e){
        console.log('data-ajaxform');
        e.preventDefault();
        var form = $(this);

        if (form.parsley().isValid()){

            $.ajax(
                {
                    type: 'POST',
                    url: form.attr('action'),
                    data: form.serialize(),
                    complete: function (response) {
                        form.css('height' , form.css('height'));
                        form.children().fadeOut(250);
                        form.append('<div class="form-feedback-message"><p class="text-center margin-bottom-2"><i class="icon icon-check icon-round-primary"></i></p><p>Your message was delivered successfully. Thank you for reaching out to us.</p></div>');
                    }
                }
            );
        }
    });

    // form ajax handling
    $('[data-ajaxform-signup]').submit(function(e){
        console.log('data-ajaxform-signup');
        e.preventDefault();
        var form = $(this);

        if (form.parsley().isValid()){

            $.ajax(
                {
                    type: 'POST',
                    url: form.attr('action'),
                    data: form.serialize(),
                    complete: function (response) {
                        form.css('height' , form.css('height'));
                        form.children().fadeOut(250);
                        form.append('<div class="form-feedback-message"><p class="text-center margin-bottom-2"><i class="icon icon-check icon-round-primary"></i></p><p class="centered-wrapper centered-text">Thank you for signing up. You will be notified as soon as the beta is released.</p></div>');
                    }
                }
            );
        }
    });
});
