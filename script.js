/* ========================================
   Bustos Custom Cabinets - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Language Switcher
    // ========================================
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';
    
    const translations = {
        en: {
            navHome: 'Home',
            navAbout: 'About Us',
            navServices: 'Services',
            navPortfolio: 'Portfolio',
            navContact: 'Contact',
            heroTitle1: 'Transform Your Space with Custom Cabinets',
            heroDesc1: 'Handcrafted quality for your dream kitchen',
            heroBtn1: 'Get Free Estimate',
            heroTitle2: 'Elegant Bathroom Vanities',
            heroDesc2: 'Custom designs that exceed expectations',
            heroBtn2: 'View Our Work',
            heroTitle3: 'Premium Wood & Laminate Work',
            heroDesc3: 'Your dream, we can build it',
            heroBtn3: 'Our Services',
            heroTitle4: 'Expert Kitchen Remodeling',
            heroDesc4: '3D design and professional installation',
            heroBtn4: 'Contact Us Today',
            aboutTitle: 'About Us',
            aboutSubtitle: 'Professional Cabinet Makers in Dallas, TX',
            aboutP1: 'Bustos Custom Cabinets & Millwork is a professional cabinet making company with extensive experience in home remodeling. We specialize in all types of custom woodwork and laminates, bringing your vision to life with precision and quality.',
            aboutP2: 'From consulting on design to building cabinets using the best materials, and follow-up on every detail after installation, our team is dedicated to delivering top-notch craftsmanship. We work with 3D drawings and views to help you visualize your project before we begin.',
            feature1: 'Free Estimates',
            feature2: '3D Design',
            feature3: 'Quality Materials',
            feature4: 'Professional Installation',
            servicesTitle: 'Our Services',
            servicesSubtitle: 'We offer comprehensive custom cabinet and millwork services',
            service1Title: 'Custom Kitchen Cabinets',
            service1Desc: 'Beautiful, functional kitchen cabinets tailored to your style and needs. From modern to traditional designs.',
            service2Title: 'Bathroom Vanities',
            service2Desc: 'Custom bathroom vanities that combine elegance and functionality for your personal space.',
            service3Title: 'Laminate Work',
            service3Desc: 'High-quality laminate cabinets and surfaces. Durable, affordable, and available in countless finishes.',
            service4Title: 'Custom Woodwork',
            service4Desc: 'Expert woodworking for any application. Cabinets, shelving, molding, and custom architectural elements.',
            service5Title: 'Cabinet Painting & Finishing',
            service5Desc: 'Professional painting and finishing services. Transform your existing cabinets with a fresh new look.',
            service6Title: '3D Design & Consultation',
            service6Desc: 'Visualize your project before we build. Free estimates and detailed 3D drawings included.',
            portfolioTitle: 'Our Portfolio',
            portfolioSubtitle: 'Explore our latest custom cabinet projects',
            reviewsTitle: 'Customer Reviews',
            contactTitle: 'Contact Us',
            contactSubtitle: 'Get your free estimate today',
            labelAddress: 'Address',
            labelPhone: 'Phone',
            labelEmail: 'Email',
            labelHours: 'Business Hours',
            hoursValue: 'Monday - Friday: 8:00 AM - 6:00 PM',
            footerDesc: 'Professional custom cabinet maker in Dallas, TX. Quality craftsmanship and exceptional service.',
            footerHome: 'Home',
            footerAbout: 'About',
            footerServices: 'Services',
            footerPortfolio: 'Portfolio',
            footerContact: 'Contact'
        },
        es: {
            navHome: 'Inicio',
            navAbout: 'Nosotros',
            navServices: 'Servicios',
            navPortfolio: 'Portafolio',
            navContact: 'Contacto',
            heroTitle1: 'Transforme Su Espacio con Gabinetes Personalizados',
            heroDesc1: 'Calidad artesanal para la cocina de sus sueños',
            heroBtn1: 'Cotización Gratis',
            heroTitle2: 'Vanidades Elegantes para Baño',
            heroDesc2: 'Diseños personalizados que superan expectativas',
            heroBtn2: 'Ver Nuestro Trabajo',
            heroTitle3: 'Trabajo Premium en Madera y Laminados',
            heroDesc3: 'Su sueño, podemos construirlo',
            heroBtn3: 'Nuestros Servicios',
            heroTitle4: 'Expertos en Remodelación de Cocinas',
            heroDesc4: 'Diseño 3D e instalación profesional',
            heroBtn4: 'Contáctenos Hoy',
            aboutTitle: 'Nosotros',
            aboutSubtitle: 'Ebanistas Profesionales en Dallas, TX',
            aboutP1: 'Bustos Custom Cabinets & Millwork es una empresa profesional de fabricación de gabinetes con amplia experiencia en remodelación de hogares. Nos especializamos en todo tipo de trabajos en madera y laminados, dando vida a su visión con precisión y calidad.',
            aboutP2: 'Desde la consultoría en diseño hasta la fabricación de gabinetes utilizando los mejores materiales, y el seguimiento de cada detalle después de la instalación, nuestro equipo está dedicado a ofrecer una artesanía de primera calidad. Trabajamos con dibujos y vistas 3D para ayudarle a visualizar su proyecto antes de comenzar.',
            feature1: 'Cotizaciones Gratis',
            feature2: 'Diseño 3D',
            feature3: 'Materiales de Calidad',
            feature4: 'Instalación Profesional',
            servicesTitle: 'Nuestros Servicios',
            servicesSubtitle: 'Ofrecemos servicios completos de gabinetes y ebanistería personalizada',
            service1Title: 'Gabinetes de Cocina Personalizados',
            service1Desc: 'Gabinetes de cocina hermosos y funcionales adaptados a su estilo y necesidades. Desde diseños modernos hasta tradicionales.',
            service2Title: 'Vanidades de Baño',
            service2Desc: 'Vanidades de baño personalizadas que combinan elegancia y funcionalidad para su espacio personal.',
            service3Title: 'Trabajos en Laminados',
            service3Desc: 'Gabinetes y superficies de laminado de alta calidad. Duraderos, asequibles y disponibles en infinitos acabados.',
            service4Title: 'Trabajos en Madera',
            service4Desc: 'Ebanistería experta para cualquier aplicación. Gabinetes, estanterías, molduras y elementos arquitectónicos personalizados.',
            service5Title: 'Pintura y Acabados',
            service5Desc: 'Servicios profesionales de pintura y acabados. Transforme sus gabinetes existentes con un nuevo look.',
            service6Title: 'Diseño 3D y Consultoría',
            service6Desc: 'Visualice su proyecto antes de construirlo. Cotizaciones gratis y dibujos 3D detallados incluidos.',
            portfolioTitle: 'Nuestro Portafolio',
            portfolioSubtitle: 'Explore nuestros últimos proyectos de gabinetes personalizados',
            reviewsTitle: 'Reseñas de Clientes',
            contactTitle: 'Contáctenos',
            contactSubtitle: 'Obtenga su cotización gratis hoy',
            labelAddress: 'Dirección',
            labelPhone: 'Teléfono',
            labelEmail: 'Correo',
            labelHours: 'Horario',
            hoursValue: 'Lunes - Viernes: 8:00 AM - 6:00 PM',
            footerDesc: 'Ebanista profesional en Dallas, TX. Artesanía de calidad y servicio excepcional.',
            footerHome: 'Inicio',
            footerAbout: 'Nosotros',
            footerServices: 'Servicios',
            footerPortfolio: 'Portafolio',
            footerContact: 'Contacto'
        }
    };
    
    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        
        // Update nav links
        document.querySelector('.nav-link[href="#home"]').textContent = t.navHome;
        document.querySelector('.nav-link[href="#about"]').textContent = t.navAbout;
        document.querySelector('.nav-link[href="#services"]').textContent = t.navServices;
        document.querySelector('.nav-link[href="#portfolio"]').textContent = t.navPortfolio;
        document.querySelector('.nav-link[href="#contact"]').textContent = t.navContact;
        
        // Update hero section
        const heroSlides = document.querySelectorAll('.carousel-slide');
        heroSlides[0].querySelector('h1').textContent = t.heroTitle1;
        heroSlides[0].querySelector('p').textContent = t.heroDesc1;
        heroSlides[0].querySelector('.btn').textContent = t.heroBtn1;
        heroSlides[1].querySelector('h1').textContent = t.heroTitle2;
        heroSlides[1].querySelector('p').textContent = t.heroDesc2;
        heroSlides[1].querySelector('.btn').textContent = t.heroBtn2;
        heroSlides[2].querySelector('h1').textContent = t.heroTitle3;
        heroSlides[2].querySelector('p').textContent = t.heroDesc3;
        heroSlides[2].querySelector('.btn').textContent = t.heroBtn3;
        heroSlides[3].querySelector('h1').textContent = t.heroTitle4;
        heroSlides[3].querySelector('p').textContent = t.heroDesc4;
        heroSlides[3].querySelector('.btn').textContent = t.heroBtn4;
        
        // Update about section
        document.querySelector('#about .section-title').textContent = t.aboutTitle;
        document.querySelector('#about .about-text h3').textContent = t.aboutSubtitle;
        document.querySelector('#about .about-text p:nth-of-type(1)').textContent = t.aboutP1;
        document.querySelector('#about .about-text p:nth-of-type(2)').textContent = t.aboutP2;
        document.querySelectorAll('#about .feature span')[0].textContent = t.feature1;
        document.querySelectorAll('#about .feature span')[1].textContent = t.feature2;
        document.querySelectorAll('#about .feature span')[2].textContent = t.feature3;
        document.querySelectorAll('#about .feature span')[3].textContent = t.feature4;
        
        // Update services section
        document.querySelector('#services .section-title').textContent = t.servicesTitle;
        document.querySelector('#services .section-subtitle').textContent = t.servicesSubtitle;
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[0].querySelector('h3').textContent = t.service1Title;
        serviceCards[0].querySelector('p').textContent = t.service1Desc;
        serviceCards[1].querySelector('h3').textContent = t.service2Title;
        serviceCards[1].querySelector('p').textContent = t.service2Desc;
        serviceCards[2].querySelector('h3').textContent = t.service3Title;
        serviceCards[2].querySelector('p').textContent = t.service3Desc;
        serviceCards[3].querySelector('h3').textContent = t.service4Title;
        serviceCards[3].querySelector('p').textContent = t.service4Desc;
        serviceCards[4].querySelector('h3').textContent = t.service5Title;
        serviceCards[4].querySelector('p').textContent = t.service5Desc;
        serviceCards[5].querySelector('h3').textContent = t.service6Title;
        serviceCards[5].querySelector('p').textContent = t.service6Desc;
        
        // Update portfolio section
        document.querySelector('#portfolio .section-title').textContent = t.portfolioTitle;
        document.querySelector('#portfolio .section-subtitle').textContent = t.portfolioSubtitle;
        
        // Update testimonials section
        document.querySelector('.testimonials .section-title').textContent = t.reviewsTitle;
        
        // Update contact section
        document.querySelector('#contact .section-title').textContent = t.contactTitle;
        document.querySelector('#contact .section-subtitle').textContent = t.contactSubtitle;
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems[0].querySelector('h4').textContent = t.labelAddress;
        contactItems[1].querySelector('h4').textContent = t.labelPhone;
        contactItems[2].querySelector('h4').textContent = t.labelEmail;
        contactItems[3].querySelector('h4').textContent = t.labelHours;
        contactItems[3].querySelector('p').textContent = t.hoursValue;
        
        // Update footer
        document.querySelector('.footer-info p').textContent = t.footerDesc;
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks[0].textContent = t.footerHome;
        footerLinks[1].textContent = t.footerAbout;
        footerLinks[2].textContent = t.footerServices;
        footerLinks[3].textContent = t.footerPortfolio;
        footerLinks[4].textContent = t.footerContact;
        
        // Update lang buttons
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Save preference
        localStorage.setItem('preferredLang', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Always default to English on page load
    setLanguage('en');
    
    // ========================================
    // Mobile Navigation
    // ========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            scrollTopBtn.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            scrollTopBtn.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ========================================
    // Scroll to Top
    // ========================================
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================================
    // Carousel
    // ========================================
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.getElementById('carouselDots');
    const slides = document.querySelectorAll('.carousel-slide');
    
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.carousel-dot');
    
    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
        resetInterval();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    }
    
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    carouselNext.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    carouselPrev.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    // Touch support for carousel
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            nextSlide();
            resetInterval();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
            resetInterval();
        }
    }
    
    // Pause carousel on hover
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carouselTrack.addEventListener('mouseleave', () => {
        startInterval();
    });
    
    startInterval();
    
    // ========================================
    // Portfolio Grid
    // ========================================
    const portfolioGrid = document.getElementById('portfolioGrid');
    const portfolioImages = [
        { src: 'custom-cabinet-bathroom-02.jpg', alt: 'Custom Bathroom Vanity' },
        { src: 'wood-cabinet-detail-03.jpg', alt: 'Wood Cabinet Detail' },
        { src: 'laminate-cabinet-04.jpg', alt: 'Laminate Cabinet' },
        { src: 'custom-millwork-05.jpg', alt: 'Custom Millwork' },
        { src: 'kitchen-cabinet-white-06.jpg', alt: 'White Kitchen Cabinet' },
        { src: 'wood-cabinet-modern-07.jpg', alt: 'Modern Wood Cabinet' },
        { src: 'custom-cabinet-classic-08.jpg', alt: 'Classic Custom Cabinet' },
        { src: 'cabinet-installation-09.jpg', alt: 'Cabinet Installation' },
        { src: 'laminate-countertop-10.jpg', alt: 'Laminate Countertop' },
        { src: 'wood-cabinet-traditional-12.jpg', alt: 'Traditional Wood Cabinet' },
        { src: 'cabinet-painting-13.jpg', alt: 'Cabinet Painting' },
        { src: 'custom-shelving-14.jpg', alt: 'Custom Shelving' },
        { src: 'kitchen-island-15.jpg', alt: 'Kitchen Island' },
        { src: 'laminate-worktop-16.jpg', alt: 'Laminate Worktop' },
        { src: 'custom-closet-17.jpg', alt: 'Custom Closet' },
        { src: 'wood-millwork-detail-18.jpg', alt: 'Wood Millwork Detail' },
        { src: 'cabinet-hardware-19.jpg', alt: 'Cabinet Hardware' },
        { src: 'custom-entertainment-center-20.jpg', alt: 'Custom Entertainment Center' },
        { src: 'bathroom-vanity-21.jpg', alt: 'Bathroom Vanity' },
        { src: 'custom-bookcase-22.jpg', alt: 'Custom Bookcase' },
        { src: 'wood-cabinet-rustic-23.jpg', alt: 'Rustic Wood Cabinet' },
        { src: 'laminate-cabinet-modern-24.jpg', alt: 'Modern Laminate Cabinet' },
        { src: 'kitchen-remodel-25.jpg', alt: 'Kitchen Remodel' },
        { src: 'custom-bar-cabinet-26.jpg', alt: 'Custom Bar Cabinet' },
        { src: 'cabinet-molding-27.jpg', alt: 'Cabinet Molding' },
        { src: 'wood-cabinet-contemporary-28.jpg', alt: 'Contemporary Wood Cabinet' },
        { src: 'custom-office-cabinet-29.jpg', alt: 'Custom Office Cabinet' },
        { src: 'laminate-flooring-30.jpg', alt: 'Laminate Flooring' },
        { src: 'custom-drawer-31.jpg', alt: 'Custom Drawer' },
        { src: 'wood-cabinet-handcrafted-32.jpg', alt: 'Handcrafted Wood Cabinet' },
        { src: 'cabinet-finishing-33.jpg', alt: 'Cabinet Finishing' },
        { src: 'laminate-cabinet-glossy-35.jpg', alt: 'Glossy Laminate Cabinet' },
        { src: 'kitchen-cabinet-luxury-36.jpg', alt: 'Luxury Kitchen Cabinet' },
        { src: 'custom-mantel-37.jpg', alt: 'Custom Mantel' },
        { src: 'wood-cabinet-natural-38.jpg', alt: 'Natural Wood Cabinet' },
        { src: 'cabinet-crown-molding-39.jpg', alt: 'Cabinet Crown Molding' },
        { src: 'custom-laundry-cabinet-40.jpg', alt: 'Custom Laundry Cabinet' },
        { src: 'custom-wine-rack-41.jpg', alt: 'Custom Wine Rack' },
        { src: 'bathroom-cabinet-modern-42.jpg', alt: 'Modern Bathroom Cabinet' },
        { src: 'wood-cabinet-stained-43.jpg', alt: 'Stained Wood Cabinet' },
        { src: 'custom-mudroom-44.jpg', alt: 'Custom Mudroom' },
        { src: 'laminate-cabinet-matte-45.jpg', alt: 'Matte Laminate Cabinet' },
        { src: 'kitchen-cabinet-two-tone-46.jpg', alt: 'Two-Tone Kitchen Cabinet' },
        { src: 'custom-range-hood-47.jpg', alt: 'Custom Range Hood' },
        { src: 'wood-cabinet-oak-48.jpg', alt: 'Oak Wood Cabinet' },
        { src: 'cabinet-lighting-49.jpg', alt: 'Cabinet Lighting' },
        { src: 'custom-garage-cabinet-50.jpg', alt: 'Custom Garage Cabinet' },
        { src: 'laminate-cabinet-textured-51.jpg', alt: 'Textured Laminate Cabinet' }
    ];
    
    portfolioImages.forEach((image, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.innerHTML = `
            <img src="images/${image.src}" alt="${image.alt}" loading="lazy">
            <div class="portfolio-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        portfolioItem.addEventListener('click', () => openModal(index));
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // ========================================
    // Modal
    // ========================================
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    let currentModalIndex = 0;
    
    function openModal(index) {
        currentModalIndex = index;
        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateModalImage() {
        const image = portfolioImages[currentModalIndex];
        modalImage.src = `images/${image.src}`;
        modalImage.alt = image.alt;
        modalCaption.textContent = image.alt;
    }
    
    function nextModalImage() {
        currentModalIndex = (currentModalIndex + 1) % portfolioImages.length;
        updateModalImage();
    }
    
    function prevModalImage() {
        currentModalIndex = (currentModalIndex - 1 + portfolioImages.length) % portfolioImages.length;
        updateModalImage();
    }
    
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', prevModalImage);
    modalNext.addEventListener('click', nextModalImage);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevModalImage();
        if (e.key === 'ArrowRight') nextModalImage();
    });
    
    // ========================================
    // Footer Year
    // ========================================
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and testimonial cards
    document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
});
