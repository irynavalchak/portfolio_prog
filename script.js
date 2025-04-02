let certification = document.getElementById("certification");
let certificationLink = document.querySelector('a[href="/certification"]');

certificationLink.addEventListener('click', e => {
    e.preventDefault();
    certification.scrollIntoView({ behavior: 'smooth' });
})