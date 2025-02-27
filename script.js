// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     let sections = document.querySelectorAll(".product");
    
//     sections.forEach((section, i) => {
//         let features = section.querySelectorAll(".features ul li");

//         features.forEach((feature) => {
//             gsap.fromTo(feature, 
//                 { opacity: 0, y: 50 },
//                 { 
//                     opacity: 1, y: 0, duration: 0.6, 
//                     scrollTrigger: {
//                         trigger: feature,
//                         start: "top 90%", // Fade in earlier
//                         end: "top 50%", // Fully visible in center
//                         scrub: true,
//                         toggleActions: "play reverse play reverse" // Ensures bidirectional behavior
//                     }
//                 }
//             );

//             gsap.to(feature, 
//                 { 
//                     opacity: 0, y: -50, duration: 0.6, 
//                     scrollTrigger: {
//                         trigger: feature,
//                         start: "top 10%", // Start fading out when reaching top 10%
//                         end: "top 5%", // Fully disappeared at top 5%
//                         scrub: true,
//                         toggleActions: "play reverse play reverse" // Ensures bidirectional behavior
//                     }
//                 }
//             );
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let sections = document.querySelectorAll(".product");

    sections.forEach((section) => {
        let features = section.querySelectorAll(".features ul li");

        features.forEach((feature) => {
            // **Fade In when scrolling down**
            gsap.fromTo(feature, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, y: 0, duration: 0.6, 
                    scrollTrigger: {
                        trigger: feature,
                        start: "top 90%",   // Appear when the feature is near the bottom of screen
                        end: "top 50%",    // Fully visible at middle of the product video
                        scrub: true,
                        toggleActions: "play none none reverse" // Ensures proper fade in/out
                    }
                }
            );

            // **Fade Out when scrolling down (natural fade-out)**
            gsap.to(feature, 
                { 
                    opacity: 0, y: -50, duration: 0.6, 
                    scrollTrigger: {
                        trigger: feature,
                        start: "top 10%",   // Start fading out earlier
                        end: "top 5%",     // Fully disappears when it reaches top
                        scrub: true,
                        toggleActions: "play none none reverse" // Ensures proper fade in/out
                    }
                }
            );

            // **Fade In when scrolling back up**
            gsap.fromTo(feature, 
                { opacity: 0, y: -50 },
                { 
                    opacity: 1, y: 0, duration: 0.6, 
                    scrollTrigger: {
                        trigger: feature,
                        start: "top 60%",   // Ensures it appears before reaching the middle
                        end: "top 10%",     // Fully visible before moving too high
                        scrub: true,
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // **Fade Out when scrolling back up (smooth transition)**
            gsap.to(feature, 
                { 
                    opacity: 0, y: 50, duration: 0.6, 
                    scrollTrigger: {
                        trigger: feature,
                        start: "top 30%",   // Start fading out before it reaches the middle
                        end: "top 80%",     // Fully disappears at bottom
                        scrub: true,
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let lastFeature = document.querySelector(".product-3 .features ul li:last-child"); // Last feature of last product
    let ctaSection = document.querySelector(".cta-section");

    gsap.to(ctaSection, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: lastFeature,
            start: "bottom 80%", // When last feature is near the bottom
            toggleActions: "play none none reverse", // Show when scrolling down, hide when scrolling up
        }
    });
});