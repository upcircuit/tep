(function($) {
    var wh = window.innerHeight,
        $iphone = $('.iphone'),
        $innerS1 = $('.innerS1'),
        $innerS2 = $('.innerS2'),
        $innerS3 = $('.innerS3'),
        $innerS4 = $('.innerS4'),
        $screenHat = $('.screenHat'),
        $screenA = $('.screenA'),
        $screenB = $('.screenB'),
        $screenC = $('.screenC');

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    new ScrollMagic.Scene({
            offset: 100        // start this scene after scrolling for 50px
        })
        .setClassToggle("#ring1", "ring1_animate")
        .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
            offset: 100        // start this scene after scrolling for 50px
        })
        .setClassToggle("#ring2", "ring2_animate")
        .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
            offset: 100        // start this scene after scrolling for 50px
        })
        .setClassToggle("#ring3", "ring3_animate")
        .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
            offset: 100        // start this scene after scrolling for 50px
        })
        .setClassToggle("#ring4", "ring4_animate")
        .addTo(controller); // assign the scene to the controller        
    
    new ScrollMagic.Scene({
            offset: 100 
        })
        .setClassToggle("#logotype", "logotype_pin")
        .addTo(controller);

    lightbox.option({
      'wrapAround': true
    })
  
})(jQuery);