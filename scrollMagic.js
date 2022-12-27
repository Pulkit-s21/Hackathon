window.addEventListener("load", () => {
    
    // Init scrollMagic
    var controller = ScrollMagic.controller()   // telling the browser to use the scrollbar and trigger the animation

    // build the scene
    var scene = new ScrollMagic.scene({
        
    })
    .setClassToggle('','.fade-in')
    .addTo(controller)
})