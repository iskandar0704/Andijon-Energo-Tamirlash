 $('#menu-btn').click(function(){
               $('nav .navigation ul').addClass('active')
          });
          $('#menu-close').click(function(){
               $('nav .navigation ul').removeClass('active')
          });


          $(window).scroll(function(){
               if($(window).scrollTop()){
                    $("nav").addClass("white");
               }
               else{
                    $("nav").removeClass("white");
               }
          });
