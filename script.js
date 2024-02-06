// Gsap Animation
let tl = gsap.timeline();
tl.from('#logo,nav h3,#nav-part-2 h4,#nav-part-2 button',{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
tl.from('#main h1',{
    opacity:0,
    y:300,
    stagger:0.4,
})
tl.from('#main>img',{
    x:-100,
    opacity:0,
    scale:1,
    stagger:0.4,
})
tl.from('h5',{
    scale:0,
    opacity:0
})
tl.to('h5',{
    y:40,
    repeat:-1,
    duration:0.7,
    yoyo:true
})