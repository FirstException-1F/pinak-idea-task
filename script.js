const AllcardsBody=document.querySelectorAll(".card-body");

  AllcardsBody.forEach((cardsBody)=>{
    cardsBody.addEventListener("mouseenter", function() {
        gsap.to(cardsBody, {
            rotate: 360,
            duration:2,
            ease: "power2.inOut",
        });
    });
    cardsBody.addEventListener("mouseleave", function() {
        gsap.to(cardsBody, {
            rotate: 0,
            duration:2,
            ease: "power2.inOut",
        });
    });
});
