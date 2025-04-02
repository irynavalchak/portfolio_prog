let certification = document.getElementById("certification");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let experience = document.getElementById("experience");
let education = document.getElementById("education");
let contact = document.getElementById("contact");
let certificationLink = document.querySelector('a[href="/certification"]');
let skillsLink = document.querySelector('a[href="/skills"]');
let experienceLink = document.querySelector('a[href="/experience"]');
let educationLink = document.querySelector('a[href="/education"]');
// let contactLink = document.querySelector('a[href="/contact"]');
let aboutLink = document.querySelector('a[href="/about"]');

certificationLink.addEventListener('click', e => {
    e.preventDefault();
    certification.scrollIntoView({ behavior: 'smooth' });
})


skillsLink.addEventListener('click', e => {
    e.preventDefault();
    skills.scrollIntoView({ behavior: 'smooth' });
})

experienceLink.addEventListener('click', e => {
    e.preventDefault();
    experience.scrollIntoView({ behavior: 'smooth' });
})

educationLink.addEventListener('click', e => {
    e.preventDefault();
    education.scrollIntoView({ behavior: 'smooth' });
})

// contactLink.addEventListener('click', e => {
//     e.preventDefault();
//     contact.scrollIntoView({ behavior: 'smooth' });
// })

aboutLink.addEventListener('click', e => {
    e.preventDefault();
    about.scrollIntoView({ behavior: 'smooth' });
})


document.addEventListener("DOMContentLoaded", function () {
    function updateActiveLink() {
        const sections = document.querySelectorAll(".about, .experience, .education, .contact, .skills, .certification");
        const navLinks = document.querySelectorAll("aside li a");

        let currentSection = "";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            if (link.getAttribute("href").includes(currentSection)) {
                link.style.color = "#fff";
                link.style.fontWeight = "bold";
                link.style.marginLeft = "1rem";
            } else {
                link.style.color = "";
                link.style.fontWeight = "normal";
                link.style.marginLeft = "";
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});

