/* =========================================
   Main JS Logic 
   ========================================= */

// Navigation Layout
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navLinks = document.querySelectorAll('.header__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('header__nav--show');
    })
}

function linkAction() {
    navMenu.classList.remove('header__nav--show');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// Data for service modals (Index page specific)
const serviceData = {
    clean: {
        title: 'Limpieza y Corte',
        desc: 'Servicio ideal para mantener tus uñas saludables y bien cuidadas. Incluye limpieza profunda de cutículas, corte, limado y forma personalizada según tu estilo.'
    },
    gel: {
        title: 'Gel Polish',
        desc: 'Esmaltado en gel de larga duración con brillo intenso. No se descascara fácilmente y mantiene tus uñas perfectas por más tiempo.'
    },
    sculpted: {
        title: 'Esculpidas',
        desc: 'Extensiones moldeadas a la medida de tus manos para lograr el largo y forma que deseas. Ideales para un acabado elegante y duradero.'
    },
    art: {
        title: 'Diseños Personalizados',
        desc: 'Creaciones únicas adaptadas a tu estilo, temporada o evento especial. Cada diseño es exclusivo para ti.'
    }
};

// Service Modal Logic
const serviceModal = document.getElementById('service-modal');
const serviceModalTitle = document.getElementById('modal-title');
const serviceModalDesc = document.getElementById('modal-desc');
const serviceModalClose = document.getElementById('service-modal-close');

window.openServiceModal = function (id) {
    if (serviceModal && serviceData[id]) {
        // En una implementación real más completa, aquí se debe buscar la traducción activa,
        // pero usar los strings estáticos está bien por su simplicity o se pueden enlazar con getText() del i18n
        // Ya que estamos usando i18n globalmente, vamos a reasignar las keys para buscar trad.

        // Match keys in translation object
        const titleKey = `service_${id}`;
        const descKey = `service_${id}_desc`;

        let titleVal = serviceData[id].title; // fallback
        let descVal = serviceData[id].desc;

        if (window.getText && window.currentLang) {
            const t = window.getText(window.currentLang, titleKey);
            if (t) titleVal = t;
            const d = window.getText(window.currentLang, descKey);
            if (d) descVal = d;
        }

        serviceModalTitle.textContent = titleVal;
        serviceModalDesc.textContent = descVal;
        serviceModal.classList.add('modal--active');
    }
}

if (serviceModalClose) {
    serviceModalClose.addEventListener('click', () => {
        serviceModal.classList.remove('modal--active');
    });
}

// Image Modal Logic
const imageModal = document.getElementById('image-modal');
const modalImgTarget = document.getElementById('modal-img-target');
const imageModalClose = document.getElementById('image-modal-close');

window.openImageModal = function (src) {
    if (imageModal && modalImgTarget) {
        modalImgTarget.src = src;
        imageModal.classList.add('modal--active');
    }
}

if (imageModalClose) {
    imageModalClose.addEventListener('click', () => {
        imageModal.classList.remove('modal--active');
    });
}

// Close modals on outside click
window.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        serviceModal.classList.remove('modal--active');
    }
    if (e.target === imageModal) {
        imageModal.classList.remove('modal--active');
    }
});


// Infinite Review Carousel
const reviewsData = [
    { name: "Lucía P.", stars: "★★★★★", text: "El mejor servicio, mis uñas nunca se habían visto tan espectaculares." },
    { name: "María J.", stars: "★★★★★", text: "Atención al detalle increíble. ¡Me encanta!" },
    { name: "Ana Q.", stars: "★★★★☆", text: "Muy buen lugar, ambiente relajante y profesional." },
    { name: "Carla R.", stars: "★★★★★", text: "Sofia es una artista. 100% recomendado." },
    { name: "Sofia T.", stars: "★★★★★", text: "Excelente duración en el esmaltado semipermanente." },
    { name: "Valentina M.", stars: "★★★★★", text: "Higiene y calidad insuperables." },
    { name: "Elena S.", stars: "★★★★★", text: "El nail art es hermoso, captó mi idea perfectamente." },
    { name: "Isabela F.", stars: "★★★★☆", text: "Las acrílicas me duraron súper bien y no se notan gruesas." },
    { name: "Carmen L.", stars: "★★★★★", text: "Mi lugar de confianza desde hace meses." },
    { name: "Diana V.", stars: "★★★★★", text: "Excelente relación calidad-precio y muy puntuales." }
];

const reviewsContainer = document.getElementById('reviews-container');

if (reviewsContainer) {
    // Generate reviews HTML
    const createReviewHTML = (review) => `
        <div class="review-card">
            <div class="stars">${review.stars}</div>
            <p class="text">"${review.text}"</p>
            <p class="name">- ${review.name}</p>
        </div>
    `;

    // Add list twice to create continuous scroll illusion
    let html = '';
    reviewsData.forEach(r => html += createReviewHTML(r));
    reviewsData.forEach(r => html += createReviewHTML(r));

    reviewsContainer.innerHTML = html;
}

// Hero Carousel Logic
const heroSlides = document.querySelectorAll('.hero__slide');
const heroDots = document.querySelectorAll('.hero__dot');

if (heroSlides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide
    let carouselTimer;

    const showSlide = (index) => {
        // Remove active class from all
        heroSlides.forEach(slide => slide.classList.remove('hero__slide--active'));
        heroDots.forEach(dot => dot.classList.remove('active'));

        // Handle overflow/underflow bounds
        if (index >= heroSlides.length) currentSlide = 0;
        else if (index < 0) currentSlide = heroSlides.length - 1;
        else currentSlide = index;

        // Add active class to target
        heroSlides[currentSlide].classList.add('hero__slide--active');
        heroDots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    // Auto Advance
    const startCarousel = () => {
        carouselTimer = setInterval(nextSlide, slideInterval);
    };

    const stopCarousel = () => {
        clearInterval(carouselTimer);
    };

    // Click on indicators
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });

    // Start on load
    startCarousel();
}

// Disable right-click menu
document.addEventListener('contextmenu', event => event.preventDefault());
