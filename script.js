var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-section",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
    }
})

tl.to("#fanta", {
    top: "120%",
    left: "0%"
}, 'animationCircle1')
tl.to("#orange-cut", {
    top: "160%",
    left: "23%"
}, 'animationCircle1')
tl.to("#orange", {
    width: "15%",
    top: "160%",
    right: "10%"
}, 'animationCircle1')
tl.to("#leaf", {
    top: "110%",
    rotate: "130deg",
    left: "70%"
}, 'animationCircle1')
tl.to("#leaf2", {
    top: "110%",
    rotate: "130deg",
    left: "0%"
}, 'animationCircle1')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".product-section",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
    }
})

tl2.from(".lemon1", {
    rotate: "-360deg",
}, 'animationCircle2')

tl2.from(".lemon2", {
    rotate: "360deg",
}, 'animationCircle2')

tl2.to("#orange-cut", {
    width: "18%",
    left: "42%",
    top: "201%"
}, 'animationCircle2')
tl2.to("#fanta", {
    width: "35%",
    top: "210%",
    left: "33%",
}, 'animationCircle2')