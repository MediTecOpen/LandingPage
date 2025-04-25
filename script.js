const heroImage = document.querySelector('.hero-image');
    const indicators = document.querySelectorAll('.indicator');
    const images = [
        './assets/img/cuidadores1.jpg',
        './assets/img/cuidadores2.jpg',
        './assets/img/cuidadores3.jpg'
    ];

    let currentIndex = 0;
    let intervalId;

    function setImage(index) {
        currentIndex = index;
        heroImage.style.backgroundImage = `url(${images[index]})`;
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function startSlider() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setImage(currentIndex);
        }, 3000);
    }

    indicators.forEach(indicator => {
        indicator.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
            setImage(parseInt(indicator.dataset.index));
        });

        indicator.addEventListener('mouseleave', () => {
            startSlider();
        });
    });

    // Inicia el slider al cargar la página
    setImage(currentIndex);
    startSlider();

// Toggle del menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navParts = document.querySelector('.nav-parts');

menuToggle.addEventListener('click', () => {
    navParts.classList.toggle('show');
});
