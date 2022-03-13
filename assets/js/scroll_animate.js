gsap.timeline({
    scrollTrigger:{
        trigger: ".its_words",
        start: "center center",
        end: "bottom center",
        markers: true,
        scrub: true,
        pin: true,
    }
})
.from(".its_p", { x : innerWidth * 1})
 
gsap.timeline({
    scrollTrigger:{
        trigger: ".bottom_dnd",
        start: "center center",
        end: "bottom center",
        markers: true,
        scrub: true,
        pin: true,
    }
})
.from(".dnd_tage", { x : innerWidth * -1})
.from(".desc_donwload", { x : innerWidth * 1})
.from(".dnd_button", { y : innerHeight * 1})

