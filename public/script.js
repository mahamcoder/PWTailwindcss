var tl=gsap.timeline();
gsap.from(".nav",{
    y:-30,
    opacity:0,
    duration:0.6,
    delay:0.2,
    stagger:0.2
})
gsap.from(".icon",{
    y:-30,
    opacity:0,
    duration:0.6,
    delay:0.8,
})
gsap.from(".t1",{
    x:-80,
    opacity:0,
    duration:2,
    delay:1
})
gsap.from(".l1",{
    x:80,
    opacity:0,
    duration:2,
    delay:1
})
gsap.from(".c1",{
    x:-30,
    opacity:0,
    duration:0.8,
    stagger:0.6,
    scrollTrigger:{
        trigger:".c1",
        scroller:"body",
        start:"top 80%",
        end:"top 0%",
        
    }
})
gsap.from(".t2",{
    x:-80,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".t2",
        scroller:"body",
        start:"top 85%",
        end:"top 0%",
        
    }
})
gsap.from(".l2",{
    x:80,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".l2",
        scroller:"body",
        start:"top 80%",
        end:"top 0%",
        
    }
})
gsap.from(".c2",{
    z:40,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:".c2",
        scroller:"body",
        start:"top 80%",
        end:"top 0%",
    }
})
gsap.from(".f1",{
    x:-30,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".f1",
        scroller:"body",
        start:"top 80%",
        end:"top 0%",
    }
},"anim")
gsap.from(".f2",{
    x:30,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".f2",
        scroller:"body",
        start:"top 80%",
        end:"top 0%",
    }
},"anim")
