// Activador de jQuery - funcion principal de jQuery 
$(document).ready(function(){
  // Activation de transicion del menu principal 
  $( 'aside#menu-hamburguesa nav a, header  article nav a' ). bind('click',function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
          }, 1000, 'easeOutExpo');
          event.preventDefault();
   });

   // Abrir y Cerrar Menu Hamburguesa  
   $('#abrir').click(funtion(){   
      $('aside#menu-hamburguesa').animate({
          left: 0
      },300,'easeOutExpo');

      $('#abrir').hide();
      $('#cerrar').show();

      event.preventDefault();
   });

   $('#cerrar, aside#menu-hamburguesa nav a').click(funtion(){   
    $('aside#menu-hamburguesa').animate({
      left: -290
      },300,'easeOutExpo');

      $('#abrir').show();
      $('#cerrar').hide();

      event.preventDefault();
   });

});