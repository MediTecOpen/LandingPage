const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open');
const cerrar = document.querySelector('#close');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
  bloquearScroll();
})

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
  permitirScroll();
})

// Función para bloquear el scroll
const bloquearScroll = () => {
    document.body.classList.add('no-scroll');
}

// Función para permitir el scroll
const permitirScroll = () => {
    document.body.classList.remove('no-scroll');
}


const scrollToSection = (buttonId, sectionClass) => {
    const button = document.querySelector(`#${buttonId}`);
    const section = document.querySelector(`.${sectionClass}`);

    if (button && section) {
        button.addEventListener('click', e => {
            e.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
};

scrollToSection('contactanos', 'contact-section');
scrollToSection('nosotros', 'application-section');
scrollToSection('testimonios', 'testimonials-section');
scrollToSection('footer-logo-careme', 'home-banner');
scrollToSection('formulario-contacto-footer', 'contact-section');
scrollToSection('conoce-nuestra-marca-footer', 'application-section');
scrollToSection('sobre-nosotros-footer', 'application-section');