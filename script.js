
document.addEventListener("DOMContentLoaded", function () {

    // NAVBAR SCROLL EFFECT
    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    // CLOSE MOBILE MENU AFTER CLICK
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const navbarCollapse = document.querySelector("#mainNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                bootstrap.Collapse.getOrCreateInstance(
                    navbarCollapse
                ).hide();
            }
        });
    });


    // SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .skill-card, .project-card"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });
    }


    // ACTIVE NAVIGATION LINK
    const sections = document.querySelectorAll("section[id]");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(function (link) {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            );
                        });
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

});
