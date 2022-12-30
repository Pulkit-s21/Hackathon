var controller = new ScrollMagic.Controller() // telling the browser to use the scrollbar and trigger the animation

window.addEventListener("load", () => {

    section2()

    section3()

    section4()

    section5()

    section6()

    section7()

    section8()

    section9()
})

function section2(){
    
    //  * Section 2
    // Init scrollMagic
    // build the scene
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.section2',
        triggerHook: 0.7,
    })
    .setClassToggle('.section2','fade-in')
    .addTo(controller)

    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.section2 h2',
        triggerHook: 1,
    })
    .setClassToggle('.section2 h2','come-up')
    .addTo(controller)

    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.card1',
        triggerHook: .6,
    })
    .setClassToggle('.card1','slide-in')
    .addTo(controller)

    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.card2',
        triggerHook: .6,
    })
    .setClassToggle('.card2','slide-in')
    .addTo(controller)

    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.card3',
        triggerHook: .6,
    })
    .setClassToggle('.card3','slide-in')
    .addTo(controller)
}

function section3(){
    // * Section 3
    // build the scene
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.section3 img',
        triggerHook: .6,
    })
    .setClassToggle('.section3 img','slide-in')
    .addTo(controller)

    // build the scene
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.section3 h3',
        triggerHook: .7,
    })
    .setClassToggle('.section3 h3','slide-in')
    .addTo(controller)

    // build the scene
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.section3 p',
        triggerHook: .7,
    })
    .setClassToggle('.section3 p','slide-in')
    .addTo(controller)

    // build the scene
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.section3 .btn',
        triggerHook: .8,
    })
    .setClassToggle('.section3 .btn','slide-in')
    .addTo(controller)
}

function section4(){
    // * Section 4
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.section4 h3',
        triggerHook: .6,
    })
    .setClassToggle('.section4 h3','fade-in')
    .addTo(controller)

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.section4 p',
        triggerHook: .6,
    })
    .setClassToggle('.section4 p','fade-in')
    .addTo(controller)
    
    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.road',
        triggerHook: .6,
    })
    .setClassToggle('.road','slide-in')
    .addTo(controller)

    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.sea',
        triggerHook: .6,
    })
    .setClassToggle('.sea','slide-in')
    .addTo(controller)

    // build the scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.sky',
        triggerHook: .6,
    })
    .setClassToggle('.sky','slide-in')
    .addTo(controller)
}

function section5(){
    //  * Section 5
    // build the scene
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.section5',
        triggerHook: .6,
    })
    .setClassToggle('.section5','fade-in')
    .addTo(controller)
}

function section6(){
    //  * Section 6
    // build the scene
    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.section6 h3',
        triggerHook: .6,
    })
    .setClassToggle('.section6 h3','fade-in')
    .addTo(controller)

    // build the scene
    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.section6 img',
        triggerHook: .6,
    })
    .setClassToggle('.section6 img','fade-in')
    .addTo(controller)
}

function section7(){
    // * Section 7
    // build scene
    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.section7 h3',
        triggerHook: .6
    })
    .setClassToggle('.section7 h3','fade-in')
    .addTo(controller)

    // build scene
    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.section7 p',
        triggerHook: .6
    })
    .setClassToggle('.section7 p','fade-in')
    .addTo(controller)

    // build scene
    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.section7 .accordian',
        triggerHook: .6
    })
    .setClassToggle('.section7 .accordian','fade-in')
    .addTo(controller)
}

function section8(){
    // * Section 8
    // build scene
    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.grow h3',
        triggerHook: .7
    })
    .setClassToggle('.grow h3','fade-in')
    .addTo(controller)

    // build scene
    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.grow p',
        triggerHook: .7
    })
    .setClassToggle('.grow p','fade-in')
    .addTo(controller)

    // build scene
    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.grow .btn',
        triggerHook: .7
    })
    .setClassToggle('.grow .btn','fade-in')
    .addTo(controller)
}

function section9(){
    // * Section 9
    // build scene
    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.section9 h4',
        triggerHook: .9
    })
    .setClassToggle('.section9 h4','fade-in')
    .addTo(controller)
    
    // build scene
    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.section9 h2',
        triggerHook: .9
    })
    .setClassToggle('.section9 h2','fade-in')
    .addTo(controller)

    // build scene
    var scene8 = new ScrollMagic.Scene({
        triggerElement: '.section9 p',
        triggerHook: .9
    })
    .setClassToggle('.section9 p','fade-in')
    .addTo(controller)
}