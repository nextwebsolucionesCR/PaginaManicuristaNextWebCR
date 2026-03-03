/* =========================================
   START: Internationalization (i18n) Logic
   ========================================= */

const translations = {
    es: {
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_works: "Mis Trabajos",
        nav_about: "SofiDreams",
        nav_contact: "Contacto",
        hero_title: "Arte que se siente, belleza que se nota",
        hero_subtitle: "Diseños personalizados que reflejan tu estilo y tu esencia.",
        hero_subtitle_small: "Manicura Artística",
        hero_title_1: "Arte que se",
        hero_title_2: "siente,",
        hero_title_3: "belleza que se nota",
        hero_desc_new: "Diseños personalizados que reflejan tu estilo.",
        hero_btn_book_wa: "Agendar",
        hero_btn_book: "Agendar Cita",
        hero_btn_services: "Servicios",
        hero2_title: "Soy Sofia y esto es SofiDreams",
        hero2_subtitle: "Transformo tus uñas en una experiencia única",
        hero3_title: "Cada detalle cuenta",
        hero3_subtitle: "Uñas acrílicas, gel y nail art con acabado profesional y personalizado.",
        service_main_title: "Servicios Principales",
        service_clean: "Limpieza y Corte",
        service_clean_desc: "Servicio ideal para mantener tus uñas saludables y bien cuidadas. Incluye limpieza profunda de cutículas, corte, limado y forma personalizada según tu estilo.",
        service_gel: "Gel Polish",
        service_gel_desc: "Esmaltado en gel de larga duración con brillo intenso. No se descascara fácilmente y mantiene tus uñas perfectas por más tiempo.",
        service_sculpted: "Esculpidas",
        service_sculpted_desc: "Extensiones moldeadas a la medida de tus manos para lograr el largo y forma que deseas. Ideales para un acabado elegante y duradero.",
        service_art: "Diseños Personalizados",
        service_art_desc: "Creaciones únicas adaptadas a tu estilo, temporada o evento especial. Cada diseño es exclusivo para ti.",
        btn_details: "Detalles",
        btn_consult: "Consultar",
        btn_see_more: "Ver más",
        works_title: "Mis Trabajos",
        works_before_after: "Antes y Después",
        works_quality: "Calidad y Profesionalismo",
        about_title: "SofiDreams",
        about_text_1: "Hola, soy Sofía, creadora de SofiDreams, un emprendimiento costarricense que nació de mi pasión por el arte y el cuidado de las uñas. Desde hace varios años me he dedicado a perfeccionar mis técnicas en manicura, uñas acrílicas, gel y nail art, capacitándome constantemente para ofrecer siempre lo mejor a cada cliente.",
        about_text_2: "Trabajo únicamente con productos profesionales de alta calidad que garantizan durabilidad y el cuidado natural de tus uñas. La higiene es una prioridad absoluta para mí, por eso sigo protocolos estrictos de desinfección en cada servicio.",
        about_text_3: "Mi filosofía es simple: brindar atención personalizada, cuidar cada detalle y asegurar que vivas una experiencia cómoda, profesional y especial cada vez que visites SofiDreams.",
        clients_title: "Nuestros Clientes",
        contact_title: "Contacto",
        contact_name: "Nombre",
        contact_email: "Correo",
        contact_phone: "Teléfono",
        contact_service: "Servicio de interés",
        contact_service_1: "Manicura básica",
        contact_service_2: "Manicura semipermanente",
        contact_service_3: "Uñas acrílicas / gel",
        contact_service_4: "Nail Art",
        contact_service_5: "Otro",
        contact_message: "Consulta",
        contact_submit: "Enviar",
        contact_hours_title: "Horario de Atención",
        contact_hours: "Lunes a Sábado: 7:00 am - 10:00 pm - Domingo: Cerrado",
        contact_location: "Mi Local",
        footer_privacy: "Política de Privacidad",
        disclaimer: "Esta página web no es oficial y solo es una página web de ejemplo. Las imágenes y videos no buscan suplantar la identidad de nadie, ya sea vivo o muerto, y fueron generadas con inteligencia artificial.",
        tab_basic: "Manicura básica",
        tab_semi: "Manicura semipermanente",
        tab_acrylic: "Uñas acrílicas / gel",
        tab_art: "Nail Art",
        service_classic: "Esmaltado Tradicional",
        service_classic_desc: "Aplicación de esmalte clásico con acabado brillante y uniforme. Perfecto si buscas un look natural, elegante y práctico para el día a día.",
        service_reinforce: "Refuerzo Natural",
        service_reinforce_desc: "Capa protectora que fortalece tu uña natural, aportando mayor resistencia sin perder su aspecto delicado y natural.",
        service_babyboomer: "Baby Boomer",
        service_babyboomer_desc: "Diseño degradado suave entre tonos nude y blanco. Un estilo moderno, delicado y sofisticado.",
        service_french: "French",
        service_french_desc: "El clásico diseño francés reinventado. Elegante, limpio y atemporal, perfecto para cualquier ocasión.",
        service_stones: "Pedrería",
        service_stones_desc: "Aplicación de cristales y detalles brillantes que aportan glamour y un toque llamativo a tus uñas.",
        service_draw: "Dibujos a mano",
        service_draw_desc: "Arte detallado pintado cuidadosamente a mano para lograr diseños creativos, delicados y totalmente personalizados.",
        privacy_title: "Política de Privacidad y Descargo de Responsabilidad"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_works: "My Works",
        nav_about: "SofiDreams",
        nav_contact: "Contact",
        hero_title: "Art you can feel, beauty you can notice",
        hero_subtitle: "Personalized designs that reflect your style and essence.",
        hero_btn_book: "Book Appointment",
        hero_btn_services: "Services",
        hero2_title: "I am Sofia and this is SofiDreams",
        hero2_subtitle: "I transform your nails into a unique experience",
        hero3_title: "Every detail matters",
        hero3_subtitle: "Acrylic nails, gel, and nail art with a professional, personalized finish.",
        service_main_title: "Main Services",
        service_clean: "Cleaning & Trimming",
        service_clean_desc: "Ideal service to keep your nails healthy and well-cared for. Includes deep cuticle cleaning, trimming, shaping.",
        service_gel: "Gel Polish",
        service_gel_desc: "Long-lasting gel enamel with intense shine.",
        service_sculpted: "Sculpted Enhancements",
        service_sculpted_desc: "Custom molded extensions to achieve the length and shape you desire.",
        service_art: "Custom Designs",
        service_art_desc: "Unique creations tailored to your style, season, or special event.",
        btn_details: "Details",
        btn_consult: "Consult",
        btn_see_more: "See More",
        works_title: "My Works",
        works_before_after: "Before & After",
        works_quality: "Quality & Professionalism",
        about_title: "About SofiDreams",
        about_text_1: "Hello, I am Sofía, creator of SofiDreams...",
        about_text_2: "I work exclusively with high-quality professional products...",
        about_text_3: "My philosophy is simple...",
        clients_title: "Our Clients",
        contact_title: "Contact",
        contact_name: "Name",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_service: "Service of Interest",
        contact_service_1: "Basic Manicure",
        contact_service_2: "Gel Manicure",
        contact_service_3: "Acrylics / Gel",
        contact_service_4: "Nail Art",
        contact_service_5: "Other",
        contact_message: "Message",
        contact_submit: "Submit",
        contact_hours_title: "Business Hours",
        contact_hours: "Monday to Saturday: 7:00 am - 10:00 pm - Sunday: Closed",
        contact_location: "My Location",
        footer_privacy: "Privacy Policy",
        disclaimer: "This website is unofficial and serves only as an example.",
        tab_basic: "Basic Manicure",
        tab_semi: "Gel Manicure",
        tab_acrylic: "Acrylics / Gel",
        tab_art: "Nail Art",
        service_classic: "Traditional Polish",
        service_classic_desc: "Classic polish application.",
        service_reinforce: "Natural Reinforcement",
        service_reinforce_desc: "Protective layer that strengthens your natural nail.",
        service_babyboomer: "Baby Boomer",
        service_babyboomer_desc: "Soft gradient design.",
        service_french: "French Manicure",
        service_french_desc: "The classic French design reimagined.",
        service_stones: "Rhinestone Art",
        service_stones_desc: "Application of crystals.",
        service_draw: "Hand-drawn Art",
        service_draw_desc: "Intricate art delicately painted by hand.",
        privacy_title: "Privacy Policy & Disclaimer"
    },
    pt: {
        nav_home: "Início",
        nav_services: "Serviços",
        nav_works: "Meus Trabalhos",
        nav_about: "SofiDreams",
        nav_contact: "Contato",
        hero_title: "Arte que se sente, beleza que se nota",
        hero_subtitle: "Designs personalizados que refletem o seu estilo e essência.",
        hero_btn_book: "Agendar",
        hero_btn_services: "Serviços",
        hero2_title: "Sou Sofia e isso é SofiDreams",
        hero2_subtitle: "Transformo suas unhas em uma experiência única",
        hero3_title: "Cada detalhe importa",
        hero3_subtitle: "Unhas em acrílico, gel e nail art com acabamento profissional e personalizado.",
        service_main_title: "Serviços Principais",
        service_clean: "Limpeza e Corte",
        service_clean_desc: "Serviço ideal para manter as suas unhas saudáveis e bem cuidadas.",
        service_gel: "Gel Polish",
        service_gel_desc: "Esmaltagem em gel de longa duração com brilho intenso.",
        service_sculpted: "Esculpidas",
        service_sculpted_desc: "Extensões moldadas sob medida para as suas mãos.",
        service_art: "Designs Personalizados",
        service_art_desc: "Criações únicas adaptadas ao seu estilo ou evento especial.",
        btn_details: "Detalhes",
        btn_consult: "Consultar",
        btn_see_more: "Ver mais",
        works_title: "Meus Trabalhos",
        works_before_after: "Antes e Depois",
        works_quality: "Qualidade e Profissionalismo",
        about_title: "Sobre SofiDreams",
        about_text_1: "Olá, sou Sofia, criadora da SofiDreams...",
        about_text_2: "Trabalho apenas com produtos profissionais de alta qualidade.",
        about_text_3: "A minha filosofia é simples...",
        clients_title: "Nossos Clientes",
        contact_title: "Contato",
        contact_name: "Nome",
        contact_email: "Email",
        contact_phone: "Telefone",
        contact_service: "Serviço de interesse",
        contact_service_1: "Manicure básica",
        contact_service_2: "Manicure semipermanente",
        contact_service_3: "Unhas acrílicas / gel",
        contact_service_4: "Nail Art",
        contact_service_5: "Outro",
        contact_message: "Mensagem",
        contact_submit: "Enviar",
        contact_hours_title: "Horário de Atendimento",
        contact_hours: "Segunda a Sábado: 7:00 am - 10:00 pm - Domingo: Fechado",
        contact_location: "Meu Local",
        footer_privacy: "Política de Privacidade",
        disclaimer: "Este site não é oficial e é apenas um site de exemplo.",
        tab_basic: "Manicure básica",
        tab_semi: "Manicure semi",
        tab_acrylic: "Acrílico / gel",
        tab_art: "Nail Art",
        service_classic: "Esmalte Tradicional",
        service_classic_desc: "Aplicação do esmalte clássico com um acabamento suave.",
        service_reinforce: "Reforço Natural",
        service_reinforce_desc: "Camada protetora.",
        service_babyboomer: "Baby Boomer",
        service_babyboomer_desc: "Estilo moderno e delicado.",
        service_french: "Francesinha",
        service_french_desc: "O design clássico elegante.",
        service_stones: "Pedraria",
        service_stones_desc: "Aplicação de cristais e pormenores brilhantes.",
        service_draw: "Desenho à mão",
        service_draw_desc: "Desenhos à mão.",
        privacy_title: "Política de Privacidade e Isenção de Responsabilidade"
    },
    fr: {
        nav_home: "Accueil",
        nav_services: "Services",
        nav_works: "Mes Travaux",
        nav_about: "SofiDreams",
        nav_contact: "Contact",
        hero_title: "L'art qui se sent, la beauté qui se voit",
        hero_subtitle: "Des designs personnalisés qui reflètent votre style.",
        hero_btn_book: "Réserver",
        hero_btn_services: "Services",
        hero2_title: "Je suis Sofia et c'est SofiDreams",
        hero2_subtitle: "Je transforme vos ongles",
        hero3_title: "Chaque détail compte",
        hero3_subtitle: "Ongles en acrylique, gel et nail art.",
        service_main_title: "Services Principaux",
        service_clean: "Nettoyage",
        service_clean_desc: "Service de nettoyage.",
        service_gel: "Vernis Gel",
        service_gel_desc: "Vernis gel",
        service_sculpted: "Sculpté",
        service_sculpted_desc: "Sculpté",
        service_art: "Designs",
        service_art_desc: "Designs",
        btn_details: "Détails",
        btn_consult: "Consulter",
        btn_see_more: "Voir plus",
        works_title: "Mes Travaux",
        works_before_after: "Avant et Après",
        works_quality: "Qualité",
        about_title: "SofiDreams",
        about_text_1: "Bonjour, je m'appelle Sofía...",
        about_text_2: "Je travaille avec de bons produits.",
        about_text_3: "Philosophie.",
        clients_title: "Nos Clients",
        contact_title: "Contact",
        contact_name: "Nom",
        contact_email: "E-mail",
        contact_phone: "Téléphone",
        contact_service: "Service",
        contact_service_1: "Manucure de base",
        contact_service_2: "Manucure semi-permanente",
        contact_service_3: "Acrylique / gel",
        contact_service_4: "Nail Art",
        contact_service_5: "Autre",
        contact_message: "Message",
        contact_submit: "Envoyer",
        contact_hours_title: "Heures",
        contact_hours: "Lun - Sam: 7:00 am - 10:00 pm - Dimanche: Fermé",
        contact_location: "Mon Local",
        footer_privacy: "Confidentialité",
        disclaimer: "Non officiel.",
        tab_basic: "Basique",
        tab_semi: "Semi",
        tab_acrylic: "Acrylique",
        tab_art: "Art",
        service_classic: "Classique",
        service_classic_desc: "Classique",
        service_reinforce: "Renfort",
        service_reinforce_desc: "Renfort",
        service_babyboomer: "Baby Boomer",
        service_babyboomer_desc: "Baby Boomer",
        service_french: "French",
        service_french_desc: "French",
        service_stones: "Pierres",
        service_stones_desc: "Pierres",
        service_draw: "Dessin",
        service_draw_desc: "Dessin",
        privacy_title: "Politique de confidentialité"
    },
    zh: {
        nav_home: "主页",
        nav_services: "服务",
        nav_works: "我的作品",
        nav_about: "SofiDreams",
        nav_contact: "联系",
        hero_title: "感受艺术，发现美丽",
        hero_subtitle: "反映您的风格和精髓的个性化设计",
        hero_btn_book: "预约",
        hero_btn_services: "服务",
        hero2_title: "我是Sofia",
        hero2_subtitle: "将您的指甲变成独特的体验",
        hero3_title: "细节决定成败",
        hero3_subtitle: "丙烯酸，凝胶和美甲，专业定制的饰面",
        service_main_title: "主要服务",
        service_clean: "清洁和修剪",
        service_clean_desc: "清洁",
        service_gel: "凝胶指甲油",
        service_gel_desc: "凝胶",
        service_sculpted: "雕刻",
        service_sculpted_desc: "雕刻",
        service_art: "定制设计",
        service_art_desc: "设计",
        btn_details: "详情",
        btn_consult: "咨询",
        btn_see_more: "看更多",
        works_title: "我的作品",
        works_before_after: "之前和之后",
        works_quality: "质量",
        about_title: "SofiDreams",
        about_text_1: "关于文本1",
        about_text_2: "关于文本2",
        about_text_3: "关于文本3",
        clients_title: "我们的客户",
        contact_title: "联系",
        contact_name: "名称",
        contact_email: "电子邮件",
        contact_phone: "电话",
        contact_service: "服务",
        contact_service_1: "基本修指甲",
        contact_service_2: "半永久修指甲",
        contact_service_3: "丙烯酸/凝胶指甲",
        contact_service_4: "美甲",
        contact_service_5: "其他",
        contact_message: "信息",
        contact_submit: "送出",
        contact_hours_title: "营业时间",
        contact_hours: "周一至周六 - 周日：休息",
        contact_location: "我的位置",
        footer_privacy: "隐私政策",
        disclaimer: "本网站不是官方的，仅作为示例。AI 图像",
        tab_basic: "基本",
        tab_semi: "凝胶",
        tab_acrylic: "丙烯酸",
        tab_art: "美甲",
        service_classic: "传统的",
        service_classic_desc: "传统的",
        service_reinforce: "强化",
        service_reinforce_desc: "强化",
        service_babyboomer: "Baby Boomer",
        service_babyboomer_desc: "Baby Boomer",
        service_french: "法式",
        service_french_desc: "法式",
        service_stones: "水钻",
        service_stones_desc: "水钻",
        service_draw: "手绘",
        service_draw_desc: "手绘",
        privacy_title: "隐私政策"
    }
};

/* =========================
   Core i18n Logic
   ========================= */
const langToggleBtn = document.getElementById('lang-toggle');
const langTextSpan = langToggleBtn ? langToggleBtn.querySelector('.lang-text') : null;

const availableLangs = Object.keys(translations);
const DEFAULT_LANG = translations.es ? 'es' : (availableLangs[0] || 'es');

let currentLang = localStorage.getItem('language') || DEFAULT_LANG;
if (!translations[currentLang]) currentLang = DEFAULT_LANG;

function getText(lang, key) {
    if (translations[lang] && translations[lang][key] != null) return translations[lang][key];
    if (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key] != null) return translations[DEFAULT_LANG][key];
    return null;
}

// Expose these globally for modals
window.getText = getText;
window.currentLang = currentLang;

function updateLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getText(lang, key);
        if (value == null) return;

        // If element has no HTML element children (just text or empty), safe to replace
        if (element.children.length === 0 || (element.children.length === 1 && element.children[0].tagName === 'BR')) {
            if (value.includes("<br>")) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        } else {
            // Element has children (e.g. <li><i></i> Text</li>)
            // Replace only text nodes
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                    node.textContent = value;
                }
            });
            // Fallback for tricky elements where text node logic failed
            if (element.tagName === 'LI' && element.querySelector('i')) {
                element.innerHTML = element.querySelector('i').outerHTML + " " + value;
            }
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const value = getText(lang, key);
        if (value == null) return;
        element.placeholder = value;
    });

    if (langTextSpan) {
        langTextSpan.textContent = lang.toUpperCase();
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    localStorage.setItem('language', lang);
    currentLang = lang;
}

// Initial Load
updateLanguage(currentLang);

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const idx = availableLangs.indexOf(currentLang);
        const nextLang = availableLangs[(idx + 1) % availableLangs.length] || DEFAULT_LANG;
        updateLanguage(nextLang);
        window.currentLang = nextLang; // Also update the global reference
    });
}
