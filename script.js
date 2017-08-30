(function ($) {
    'use strict';
    // Vars

    var body = $('body'),
        headerNav = $('.header .nav-menu'),
        navToggle = $('.nav-toggle'),
        hasSubmenu = $('li.has-submenu'),
        subMenu = $('ul.submenu');

    function initNavigation(){
        $(document).off('click','.nav-toggle');
        $(document).off('click','.li.has-submenu > a');

        if($(window).width() > 992){
            if(headerNav.css('display','none')){
                headerNav.css('display','');
            }
            if(navToggle.hasClass('open')){
                navToggle.removeClass('open');
            }

            $('li.has-submenu').removeClass('active');
            $('.submenu').css('display','');
        }else{
            if(headerNav.css('display','block')){
                headerNav.css('display','none');
            }
            if(navToggle.hasClass('open')){
                headerNav.css('display','block');
            }
            if(!$('li.has-submenu').hasClass('active') && $('.submenu').css('display','block')){
                $('.submenu').css('display','none');
            }

            $(document).on('click','.nav-toggle',function(event){
                event.preventDefault();
                console.log(!$(this).hasClass('open'));
                if(!$(this).hasClass('open')){
                    $(this).addClass('open');
                    console.log($(this).hasClass('open'));
                    headerNav.slideDown(500);
                }else{
                    $(this).removeClass(open);
                    headerNav.slideUp(500);
                }
            });
        }
    }

    // function dropDownOpen (){
    //     hasSubmenu.mouseover(function(){
    //         alert('鼠标悬浮在我头上');
    //         subMenu.addClass('open');
    //         a.mouseover(function(){
    //             $(this).addClass('active');
    //         })
    //     });
    //     hasSubmenu.mouseout(function (){
    //         subMenu.removeClass('open');
    //         a.mouseover(function(){
    //             $(this).addClass('active');
    //         })
    //     });
    // }


    //back to top

    // $(window).on('scroll',function(){
    //     // console.log('window`s scrollTop',$(this).scrollTop());
    //     if($(this).scrollTop() >100){
    //         $("#to-top").fadeIn();
    //
    //     } else{
    //         $("#to-top").fadeOut();
    //     }
    // });
    //
    // $("#to-top").click(function () {
    //     console.log('111');
    //     $('html,body').animate({scrollTop:0},800);
    //     // return;
    // });


    jQuery(document).ready(function(){
        $(document).off('click.bs.dropdown.data-api');
        initNavigation();
        // dropDownOpen();
    });


})(jQuery);

