var tl = gsap.timeline()

tl.from("#page1 h1",{
    y:30,
    opacity:0,
    delay:1,
    duration:1,
})

tl.from("#page1 h2",{
    y:30,
    opacity:0,
    duration:0.8,
})

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        markers:true,
        scroller:"body",
        start:"top 50%",
        scrub:0.5
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        markers:true,
        scroller:"body",
        start:"top 50%",
        scrub:0.5
    }
})