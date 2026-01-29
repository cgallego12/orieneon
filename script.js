// =========================
// Estado Global
// =========================
let cart = [];
let products = [];
let currentPage = 'home';
let isLoggedIn = false;
let currentUser = null;
let activeColorOption = '#ff0000';
let currentCustomPrice = 480000;

const sampleProducts = [
  {
    id: 1,
    name: 'Letrero "Open" Neonflex',
    price: 150000,
    oldPrice: 180000,
    category: 'letras',
    images: [
      'public/open.png',
      'public/open2.png',
      'public/open3.png'
    ],
    description: 'Letrero "Open" en neonflex para tu negocio. Disponible en varios colores y tamaños.',
    rating: 4.8,
    reviews: 124,
    availability: 'En stock',
    colors: ['#ff0000', '#0000ff', '#ffffff', '#00ff00'],
    sizes: ['Pequeño', 'Mediano', 'Grande'],
    isFeatured: true
  },
    {
        id: 2,
        name: 'Corazón Neonflex',
        price: 30000,
        oldPrice: null,
        category: 'figuras',
        images: [
            'public/corazon.png',
            'public/photo1762489697.jpg',
            'public/Neonheartdecoration.jpg'
        ],
        description: 'Corazón de neonflex perfecto para decoración o regalo. Luz brillante y uniforme.',
        rating: 4.5,
        reviews: 87,
        availability: 'En stock',
        colors: ['#ff0000', '#ff00ff', '#ffffff'],
        sizes: ['Pequeño', 'Grande'],
        isFeatured: true
    },
    {
        id: 3,
        name: 'Letras Personalizadas',
        price: 100000,
        oldPrice: 150000,
        category: 'letras',
        images: [
            'public/Letras.png',
            'public/LetrasCursivas.png',
            'public/LetrasLujo.png'
        ],
        description: 'Crea tus propias letras o frases en neonflex. Personaliza color, tamaño y estilo.',
        rating: 4.9,
        reviews: 210,
        availability: 'Personalizado',
        colors: ['#ff0000', '#0000ff', '#ffffff', '#00ff00', '#ff00ff', '#00ffff'],
        sizes: ['Pequeño', 'Mediano', 'Grande', 'Extra Grande'],
        isFeatured: true
    },
    {
        id: 4,
        name: 'Mariposa Neonflex',
        price: 90000,
        oldPrice: null,
        category: 'figuras',
        images: [
            'public/mariposas.jpg',
            'public/mariposa-neon-2.png',
            'public/mariposa-neon-3.jpg'
        ],
        description: 'Mariposa de neonflex para decoración de habitación. Diseño elegante y moderno.',
        rating: 4.7,
        reviews: 65,
        availability: 'En stock',
        colors: ['#ff00ff', '#0000ff', '#00ffff'],
        sizes: ['Mediano', 'Grande'],
        isFeatured: false
    },
    {
        id: 5,
        name: 'Logo Personalizado',
        price: 250000,
        oldPrice: 300000,
        category: 'logos',
        images: [
            'public/logo.png',
            'public/CustomLogo.jpg',
            'public/NeonLogo.jpg'
        ],
        description: 'Convierte el logo de tu empresa en un impresionante aviso de neonflex.',
        rating: 5.0,
        reviews: 42,
        availability: 'Personalizado',
        colors: ['#ff0000', '#0000ff', '#ffffff', '#00ff00', '#ff00ff', '#00ffff'],
        sizes: ['Pequeño', 'Mediano', 'Grande', 'Personalizado'],
        isFeatured: true
    },
    {
        id: 6,
        name: 'Nube Neonflex',
        price: 40000,
        oldPrice: null,
        category: 'figuras',
        images: [
            'public/NeonCloudDecoration.png',
            'public/photo1762489698.jpg',
            'public/NeonCloud.jpg'
        ],
        description: 'Nube de neonflex para decoración infantil. Luz suave y acogedora.',
        rating: 4.6,
        reviews: 53,
        availability: 'En stock',
        colors: ['#ffffff', '#00ffff', '#ff00ff'],
        sizes: ['Pequeño', 'Mediano'],
        isFeatured: false
    },
    {
        id: 7,
        name: 'Rayo Neonflex',
        price: 50000,
        oldPrice: 340000,
        category: 'figuras',
        images: [
            'public/NeonLight.png',
            'public/Neonlight.jpg',
            'public/NeonLight.jpg'
        ],
        description: 'Rayo de neonflex con brillo intenso. Ideal para darle energía a tu espacio.',
        rating: 4.5,
        reviews: 38,
        availability: 'En stock',
        colors: ['#ff9900', '#ffff00', '#ffffff'],
        sizes: ['Pequeño', 'Grande'],
        isFeatured: false
    },
    
    {
        id: 8,
        name: 'Luna Neonflex',
        price: 40000,
        oldPrice: null,
        category: 'figuras',
        images: [
            'public/Luna-Neonflex.png',
            'public/NeonWallDecoration.jpg',
            'public/NeonMoonDecoration.jpg'
        ],
        description: 'Luna creciente de neonflex para decoración de pared. Luz tenue y relajante.',
        rating: 4.8,
        reviews: 72,
        availability: 'En stock',
        colors: ['#ffffff', '#00ffff', '#ff00ff'],
        sizes: ['Mediano', 'Grande'],
        isFeatured: false
    },
    {
        id: 9,
        name: 'Balon basket Neonflex',
        price: 130000,
        oldPrice: 180000,
        category: 'figuras',
        images: [
            'public/basket-Neonflex.png',
            'public/Neonlight.jpg',
            'public/NeonLight.jpg'
        ],
        description: 'Balón de basket de neonflex con brillo intenso. Ideal para darle energía a tu espacio.',
        rating: 4.5,
        reviews: 38,
        availability: 'En stock',
        colors: ['#ff9900', '#ffff00', '#ffffff'],
        sizes: ['Pequeño', 'Grande'],
        isFeatured: false
    },
    {
        id: 10,
        name: 'colores Neonflex',
        price: 280000,
        oldPrice: 340000,
        category: 'figuras',
        images: [
            'public/colores-Neonflex.png',
            'public/Neonlight.jpg',
            'public/NeonLight.jpg'
        ],
        description: 'Colores de neonflex con brillo intenso. Ideal para darle energía a tu espacio.',
        rating: 4.5,
        reviews: 38,
        availability: 'En stock',
        colors: ['#ff9900', '#ffff00', '#ffffff'],
        sizes: ['Pequeño', 'Grande'],
        isFeatured: false
    },
    {
        id: 11,
        name: 'decorativos Neonflex',
        price: 280000,
        oldPrice: 340000,
        category: 'Decorativos',
        images: [
            'public/happy-birthday.png',
            'public/Neonlight.jpg',
            'public/NeonLight.jpg'
        ],
        description: 'Colores de neonflex con brillo intenso. Ideal para darle energía a tu espacio.',
        rating: 4.5,
        reviews: 38,
        availability: 'En stock',
        colors: ['#ff9900', '#ffff00', '#ffffff'],
        sizes: ['Pequeño', 'Grande'],
        isFeatured: false
    },
];

// =========================
// DOM Ready
// =========================
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    setupNavigationEvents();
    setupCartEvents();
    setupModalEvents();
    setupCustomizationEvents();
    loadProducts();
    loadPopularProducts();
});

// =========================
// Inicialización
// =========================
function initApp() {
    loadCartFromStorage();
    loadAuthFromStorage();       // <<< nuevo
    updateCartCount();
    ensureAuthButtons();         // <<< nuevo
    updateAuthUI();              // <<< nuevo

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
}

// =========================
// Storage: Carrito + Auth
// =========================
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('orieneonCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart from storage:', e);
            cart = [];
        }
    }
}

function saveCartToStorage() {
    localStorage.setItem('orieneonCart', JSON.stringify(cart));
}

function loadAuthFromStorage() {
    const saved = localStorage.getItem('orieneonAuth');
    if (!saved) return;
    try {
        const data = JSON.parse(saved);
        isLoggedIn = !!data.isLoggedIn;
        currentUser = data.currentUser || null;
    } catch (e) {
        console.error('Error loading auth from storage:', e);
        isLoggedIn = false;
        currentUser = null;
    }
}

function saveAuthToStorage() {
    localStorage.setItem('orieneonAuth', JSON.stringify({
        isLoggedIn,
        currentUser
    }));
}

// =========================
/* UI: Auth (inicio sesión/cerrar sesión/recuperar) */

// =========================
function ensureAuthButtons() {
    const navButtons = document.querySelector('.nav-buttons');
    if (!navButtons) return;

    // Asegurar botón login
    let loginBtn = document.getElementById('login-button');
    if (!loginBtn) {
        loginBtn = document.createElement('button');
        loginBtn.id = 'login-button';
        loginBtn.innerHTML = '<i class="fas fa-user"></i> Iniciar sesión';
        navButtons.insertBefore(loginBtn, navButtons.firstChild);
        loginBtn.addEventListener('click', openAuthModal);
    }

    // Asegurar botón logout
    let logoutBtn = document.getElementById('logout-button');
    if (!logoutBtn) {
        logoutBtn = document.createElement('button');
        logoutBtn.id = 'logout-button';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Cerrar sesión';
        logoutBtn.style.display = 'none';
        navButtons.insertBefore(logoutBtn, loginBtn.nextSibling);
        logoutBtn.addEventListener('click', logout);
    }
}

function updateAuthUI() {
    const loginBtn = document.getElementById('login-button');
    const logoutBtn = document.getElementById('logout-button');

    if (isLoggedIn && currentUser) {
        if (loginBtn) loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        if (logoutBtn) logoutBtn.style.display = 'flex';
    } else {
        if (loginBtn) loginBtn.innerHTML = '<i class="fas fa-user"></i> Iniciar sesión';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function logout() {
    isLoggedIn = false;
    currentUser = null;
    saveAuthToStorage();
    updateAuthUI();
    alert('Sesión cerrada.');
}

// =========================
// Cart: contador
// =========================
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) return;

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = itemCount;
    if (itemCount > 0) cartCount.classList.add('active');
    else cartCount.classList.remove('active');
}

// =========================
// Cart: CRUD
// =========================
function addToCart(product, quantity) {
    const idx = cart.findIndex(item => String(item.id) === String(product.id));
    if (idx !== -1) {
        cart[idx].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images ? product.images[0] : null,
            quantity: quantity,
            customOptions: product.customOptions || null
        });
    }
    saveCartToStorage();
    updateCartDisplay();
    updateCartCount();
    toggleCart(true);
}

function removeFromCart(itemId) {
    const idStr = String(itemId);
    cart = cart.filter(item => String(item.id) !== idStr);
    saveCartToStorage();
    updateCartDisplay();
    updateCartCount();
}

function updateCartItemQuantity(itemId, newQuantity) {
    const idStr = String(itemId);
    const itemIndex = cart.findIndex(item => String(item.id) === idStr);

    if (itemIndex !== -1) {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            cart[itemIndex].quantity = newQuantity;
            saveCartToStorage();
            updateCartDisplay();
            updateCartCount();
        }
    }
}

function clearCartItems() {
    if (!confirm('¿Estás seguro de que deseas vaciar el carrito?')) return;
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    updateCartCount();
}

// =========================
// Cart: Render
// =========================
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    if (!cartItemsContainer || !cartTotalAmount) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotalAmount.textContent = '$0 COP';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';

        let itemImageHtml = '';
        if (item.image) {
            itemImageHtml = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
            `;
        }

        itemElement.innerHTML = `
            ${itemImageHtml}
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString('es-CO')} COP</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-quantity" data-item-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-quantity" data-item-id="${item.id}">+</button>
                </div>
            </div>
            <div class="cart-item-remove" data-item-id="${item.id}">
                <i class="fas fa-times"></i>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalAmount.textContent = `$${total.toLocaleString('es-CO')} COP`;

    // Eventos
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const removeButtons = document.querySelectorAll('.cart-item-remove');

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            const item = cart.find(x => String(x.id) === String(itemId));
            if (item) updateCartItemQuantity(itemId, item.quantity - 1);
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            const item = cart.find(x => String(x.id) === String(itemId));
            if (item) updateCartItemQuantity(itemId, item.quantity + 1);
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            removeFromCart(itemId);
        });
    });
}

// =========================
// Navegación
// =========================
function setupNavigationEvents() {
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    const viewCatalogBtn = document.getElementById('view-catalog');
    if (viewCatalogBtn) viewCatalogBtn.addEventListener('click', () => navigateToPage('catalog'));

    const customizeNowBtn = document.getElementById('customize-now');
    if (customizeNowBtn) customizeNowBtn.addEventListener('click', () => navigateToPage('custom'));

    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            openAuthModal();
        });
    }
}

function navigateToPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');

        const navLinks = document.querySelectorAll('#main-nav a');
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`#main-nav a[data-page="${page}"]`);
        if (activeLink) activeLink.classList.add('active');

        currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const mainNav = document.getElementById('main-nav');
        if (mainNav.classList.contains('active')) mainNav.classList.remove('active');
    }
}

// =========================
// Carrito: botones/overlay
// =========================
function setupCartEvents() {
    const cartButton = document.getElementById('cart-button');
    if (cartButton) cartButton.addEventListener('click', () => toggleCart());

    const closeCart = document.getElementById('close-cart');
    if (closeCart) closeCart.addEventListener('click', () => toggleCart(false));

    const clearCart = document.getElementById('clear-cart');
    if (clearCart) clearCart.addEventListener('click', () => clearCartItems());

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Agrega algunos productos antes de proceder al pago.');
                return;
            }
            if (!isLoggedIn) {
                alert('Por favor inicia sesión o regístrate para continuar con el pago.');
                toggleCart(false);
                openAuthModal();
                return;
            }
            alert('¡Gracias por tu compra! (Simulación de checkout)');
        });
    }

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            toggleCart(false);
            closeAllModals();
        });
    }
}

function toggleCart(show = null) {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const overlay = document.getElementById('overlay');
    if (!cartSidebar || !overlay) return;

    if (show === null) {
        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    } else if (show) {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    } else {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// =========================
// Modales
// =========================
function setupModalEvents() {
    const closeModalButtons = document.querySelectorAll('.close-modal');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.closest('.modal').id;
            closeModal(modalId);
        });
    });

    // Tabs Auth
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const formId = this.getAttribute('data-form');

            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            const target = document.getElementById(formId);
            if (target) target.classList.add('active');
        });
    });

    // Login submit
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (!email || !password) {
                alert('Completa tu correo y contraseña.');
                return;
            }

            isLoggedIn = true;
            currentUser = { email, name: email.split('@')[0] };
            saveAuthToStorage();
            alert(`¡Bienvenido de nuevo, ${currentUser.name}!`);
            closeModal('auth-modal');
            updateAuthUI();
        });
    }

    // Registro submit
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('register-name').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value.trim();
            const confirmPassword = document.getElementById('register-confirm').value.trim();

            if (!name || !email || !password || !confirmPassword) {
                alert('Completa todos los campos.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            isLoggedIn = true;
            currentUser = { email, name };
            saveAuthToStorage();
            alert(`¡Gracias por registrarte, ${currentUser.name}!`);
            closeModal('auth-modal');
            updateAuthUI();
        });
    }

    // Asegurar UI de "Olvidé contraseña" (si no existe, la creo)
    ensureForgotPasswordUI();
}

function ensureForgotPasswordUI() {
    const authModal = document.getElementById('auth-modal');
    if (!authModal) return;

    const tabs = authModal.querySelector('.auth-tabs');
    const content = authModal.querySelector('.modal-content');
    if (!tabs || !content) return;

    // Botón/tab "Recuperar" si no existe
    if (!tabs.querySelector('[data-form="forgot-form"]')) {
        const btn = document.createElement('button');
        btn.className = 'auth-tab';
        btn.setAttribute('data-form', 'forgot-form');
        btn.textContent = 'Recuperar';
        tabs.appendChild(btn);

        btn.addEventListener('click', function() {
            tabs.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            content.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            const f = document.getElementById('forgot-form');
            if (f) f.classList.add('active');
        });
    }

    // Formulario de recuperación si no existe
    if (!authModal.querySelector('#forgot-form')) {
        const formWrap = document.createElement('div');
        formWrap.className = 'auth-form';
        formWrap.id = 'forgot-form';
        formWrap.innerHTML = `
            <div style="padding:20px">
                <h3>Recuperar contraseña</h3>
                <div class="form-group">
                    <label for="forgot-email">Correo</label>
                    <input type="email" id="forgot-email" placeholder="tu@email.com">
                </div>
                <button class="btn primary" id="forgot-submit">Enviar enlace</button>
                <div class="form-link" id="back-to-login">Volver a iniciar sesión</div>
            </div>
        `;
        content.appendChild(formWrap);

        formWrap.querySelector('#forgot-submit').addEventListener('click', function() {
            const email = document.getElementById('forgot-email').value.trim();
            if (!email) {
                alert('Ingresa tu correo.');
                return;
            }
            alert('Si el correo existe, te enviaremos un enlace para restablecer tu contraseña (simulado).');
            // Volver a login
            const loginTab = authModal.querySelector('.auth-tab[data-form="login-form"]');
            const allTabs = authModal.querySelectorAll('.auth-tab');
            allTabs.forEach(t => t.classList.remove('active'));
            if (loginTab) loginTab.classList.add('active');

            const allForms = authModal.querySelectorAll('.auth-form');
            allForms.forEach(f => f.classList.remove('active'));
            const loginForm = document.getElementById('login-form');
            if (loginForm) loginForm.classList.add('active');
        });

        formWrap.querySelector('#back-to-login').addEventListener('click', function() {
            const loginTab = authModal.querySelector('.auth-tab[data-form="login-form"]');
            const allTabs = authModal.querySelectorAll('.auth-tab');
            allTabs.forEach(t => t.classList.remove('active'));
            if (loginTab) loginTab.classList.add('active');

            const allForms = authModal.querySelectorAll('.auth-form');
            allForms.forEach(f => f.classList.remove('active'));
            const loginForm = document.getElementById('login-form');
            if (loginForm) loginForm.classList.add('active');
        });
    }
}

function forgotPassword() {
    // Por si tienes un link directo <a onclick="forgotPassword()">
    openAuthModal();
    const authModal = document.getElementById('auth-modal');
    if (!authModal) return;
    ensureForgotPasswordUI();
    const tabs = authModal.querySelectorAll('.auth-tab');
    tabs.forEach(t => t.classList.remove('active'));
    const forgotTab = authModal.querySelector('.auth-tab[data-form="forgot-form"]');
    if (forgotTab) forgotTab.classList.add('active');

    const forms = authModal.querySelectorAll('.auth-form');
    forms.forEach(f => f.classList.remove('active'));
    const forgotForm = document.getElementById('forgot-form');
    if (forgotForm) forgotForm.classList.add('active');
}

function openAuthModal() { openModal('auth-modal'); }

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    if (modal) {
        modal.classList.add('active');
        if (overlay) overlay.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    if (!modal) return;

    modal.classList.remove('active');

    const activeModals = document.querySelectorAll('.modal.active');
    const activeCart = document.querySelector('.cart-sidebar.active');
    if (activeModals.length === 0 && !activeCart && overlay) {
        overlay.classList.remove('active');
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

// =========================
// Personalización (preview/precio)
// =========================
function setupCustomizationEvents() {
    const customText = document.getElementById('custom-text');
    if (customText) customText.addEventListener('input', updateCustomPreview);

    const customFont = document.getElementById('custom-font');
    if (customFont) customFont.addEventListener('change', function() {
        updateCustomPreview();
        updateFontPreview();
    });

    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            const colorInput = document.getElementById('custom-color');
            if (colorInput) colorInput.value = color;
            activeColorOption = color;
            updateCustomPreview();
        });
    });
    if (colorOptions.length > 0) colorOptions[0].classList.add('active');

    const customWidth = document.getElementById('custom-width');
    const customHeight = document.getElementById('custom-height');
    if (customWidth) customWidth.addEventListener('change', updateCustomPrice);
    if (customHeight) customHeight.addEventListener('change', updateCustomPrice);

    const customRemote = document.getElementById('custom-remote');
    const customDimmer = document.getElementById('custom-dimmer');
    if (customRemote) customRemote.addEventListener('change', updateCustomPrice);
    if (customDimmer) customDimmer.addEventListener('change', updateCustomPrice);

    const customBacking = document.getElementById('custom-backing');
    if (customBacking) customBacking.addEventListener('change', updateCustomPrice);

    const customizationForm = document.getElementById('customization-form');
    if (customizationForm) {
        customizationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const customText = document.getElementById('custom-text').value;
            const customFont = document.getElementById('custom-font').value;
            const customColor = document.getElementById('custom-color').value;
            const customWidth = document.getElementById('custom-width').value;
            const customHeight = document.getElementById('custom-height').value;
            const customBacking = document.getElementById('custom-backing').value;
            const customRemote = document.getElementById('custom-remote').checked;
            const customDimmer = document.getElementById('custom-dimmer').checked;

            const customProduct = {
                id: 'custom-' + Date.now(),
                name: `Aviso personalizado: "${customText}"`,
                price: currentCustomPrice,
                images: [],
                customOptions: {
                    text: customText,
                    font: customFont,
                    color: customColor,
                    width: customWidth,
                    height: customHeight,
                    backing: customBacking,
                    remote: customRemote,
                    dimmer: customDimmer
                }
            };

            addToCart(customProduct, 1);
            alert('¡Aviso personalizado agregado al carrito!');
        });
    }
}

function updateCustomPreview() {
    const previewText = document.getElementById('preview-text');
    const customText = document.getElementById('custom-text')?.value || 'Tu texto aquí';
    const customFont = document.getElementById('custom-font')?.value;

    if (previewText) {
        previewText.textContent = customText;
        if (customFont) previewText.style.fontFamily = customFont;
        previewText.style.color = activeColorOption;
        previewText.style.textShadow = `0 0 20px ${activeColorOption}, 0 0 40px ${activeColorOption}`;
    }
}

function updateCustomPrice() {
    const basePricePer100SqCm = 200000;
    const width = parseInt(document.getElementById('custom-width')?.value) || 50;
    const height = parseInt(document.getElementById('custom-height')?.value) || 30;

    const area = width * height;
    let price = basePricePer100SqCm * (area / 100);

    const backing = document.getElementById('custom-backing')?.value;
    switch(backing) {
        case 'acrylic': price += 100000; break;
        case 'wood': price += 160000; break;
        case 'metal': price += 240000; break;
    }
    if (document.getElementById('custom-remote')?.checked) price += 60000;
    if (document.getElementById('custom-dimmer')?.checked) price += 40000;

    price = Math.round(price);

    const priceElement = document.getElementById('custom-price');
    if (priceElement) {
        priceElement.textContent = `$${price.toLocaleString('es-CO')} COP`;
        currentCustomPrice = price;
    }
}

function updateFontPreview() {
    const customFont = document.getElementById('custom-font');
    const fontPreviewImages = document.querySelectorAll('.font-preview');
    if (!customFont) return;
    const selectedFont = customFont.value;

    fontPreviewImages.forEach(image => {
        if (image.getAttribute('data-font') === selectedFont) {
            image.classList.remove('hidden');
            image.classList.add('active');
        } else {
            image.classList.add('hidden');
            image.classList.remove('active');
        }
    });
}

// =========================
// Productos: carga/render
// =========================
function loadProducts() {
    products = [...sampleProducts];
    renderProducts(products);
    setupSearchFunctionality();
    setupCatalogFilters();
}

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function getProductById(id) {
    return products.find(p => String(p.id) === String(id));
}

// =========================
// Product Card (con cantidad en card)
// =========================
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    // estrellas
    let starsHtml = '';
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) starsHtml += '<i class="fas fa-star"></i>';
        else if (i === fullStars + 1 && halfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
        else starsHtml += '<i class="far fa-star"></i>';
    }

    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}">
            ${product.oldPrice ? '<div class="product-badge">¡Oferta!</div>' : ''}
            <div class="product-actions">
                <button class="product-action-btn quick-view" data-product-id="${product.id}">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="product-action-btn add-to-cart-quick" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                $${product.price.toLocaleString('es-CO')} COP
                ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toLocaleString('es-CO')} COP</span>` : ''}
            </div>
            <div class="product-rating">
                <div class="stars">${starsHtml}</div>
                <span>(${product.reviews})</span>
            </div>

            <!-- Selector de cantidad directo en la card -->
            <div class="option-group" style="margin-bottom:10px">
                <label style="display:block;margin-bottom:6px">Cantidad:</label>
                <div class="quantity-selector">
                    <button class="quantity-btn card-decrease" data-product-id="${product.id}">-</button>
                    <input type="number" class="card-qty" data-product-id="${product.id}" value="1" min="1" max="10" style="width:60px;text-align:center">
                    <button class="quantity-btn card-increase" data-product-id="${product.id}">+</button>
                </div>
            </div>

            <button class="btn primary add-to-cart-btn" data-product-id="${product.id}">
                Agregar al Carrito
            </button>
        </div>
    `;

    // Eventos card
    const quickViewBtn = productCard.querySelector('.quick-view');
    const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
    const quickAddBtn = productCard.querySelector('.add-to-cart-quick');
    const decBtn = productCard.querySelector('.card-decrease');
    const incBtn = productCard.querySelector('.card-increase');
    const qtyInput = productCard.querySelector('.card-qty');

    if (quickViewBtn) quickViewBtn.addEventListener('click', () => openProductModal(product));

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const qty = Math.max(1, Math.min(10, parseInt(qtyInput.value) || 1));
            addToCart(product, qty);
        });
    }

    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => addToCart(product, 1));
    }

    if (decBtn && qtyInput) {
        decBtn.addEventListener('click', () => {
            const v = Math.max(1, (parseInt(qtyInput.value) || 1) - 1);
            qtyInput.value = v;
        });
    }

    if (incBtn && qtyInput) {
        incBtn.addEventListener('click', () => {
            const v = Math.min(10, (parseInt(qtyInput.value) || 1) + 1);
            qtyInput.value = v;
        });
    }

    return productCard;
}

// =========================
// Popular (home)
// =========================
function loadPopularProducts() {
    const popularProductsContainer = document.getElementById('popular-products');
    if (!popularProductsContainer) return;

    const featuredProducts = sampleProducts.filter(p => p.isFeatured).slice(0, 4);
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        popularProductsContainer.appendChild(productCard);
    });
}

// =========================
// Filtros / Orden / Búsqueda
// =========================
function setupCatalogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            let filteredProducts = products;
            if (category !== 'all') {
                filteredProducts = products.filter(p => p.category === category);
            }
            renderProducts(filteredProducts);
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            let sortedProducts = [...products];
            switch(sortBy) {
                case 'price-low': sortedProducts.sort((a, b) => a.price - b.price); break;
                case 'price-high': sortedProducts.sort((a, b) => b.price - a.price); break;
                case 'popular': sortedProducts.sort((a, b) => b.rating - a.rating); break;
                case 'newest': sortedProducts.sort((a, b) => b.id - a.id); break;
            }
            renderProducts(sortedProducts);
        });
    }
}

function setupSearchFunctionality() {
    const searchInput = document.getElementById('search-products');
    const searchButton = document.getElementById('search-button');

    function performSearch() {
        const term = (searchInput?.value || '').toLowerCase().trim();
        if (term === '') {
            renderProducts(products);
            return;
        }
        const results = products.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );
        renderProducts(results);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
    }
    if (searchButton) searchButton.addEventListener('click', performSearch);
}

// =========================
// Product Modal
// =========================
function openProductModal(product) {
    let productModal = document.getElementById('product-modal');
    if (!productModal) {
        productModal = document.createElement('div');
        productModal.id = 'product-modal';
        productModal.className = 'modal';
        document.body.appendChild(productModal);
    }

    let starsHtml = '';
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) starsHtml += '<i class="fas fa-star"></i>';
        else if (i === fullStars + 1 && halfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
        else starsHtml += '<i class="far fa-star"></i>';
    }

    let colorOptionsHtml = '';
    if (product.colors?.length) {
        product.colors.forEach(color => {
            colorOptionsHtml += `<div class="color-option" data-color="${color}" style="background-color:${color}"></div>`;
        });
    }

    let sizeOptionsHtml = '';
    if (product.sizes?.length) {
        product.sizes.forEach(size => {
            sizeOptionsHtml += `<option value="${size}">${size}</option>`;
        });
    }

    let thumbnailsHtml = '';
    if (product.images?.length > 1) {
        product.images.forEach((img, index) => {
            const activeClass = index === 0 ? 'active' : '';
            thumbnailsHtml += `
                <div class="thumbnail ${activeClass}" data-image-index="${index}">
                    <img src="${img}" alt="${product.name} ${index + 1}">
                </div>
            `;
        });
    }

    productModal.innerHTML = `
        <div class="modal-content product-modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-detail">
                <div class="product-images">
                    <div class="main-image">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="thumbnail-images">
                        ${thumbnailsHtml}
                    </div>
                </div>
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <div class="product-price">
                        $${product.price.toLocaleString('es-CO')} COP
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toLocaleString('es-CO')} COP</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">${starsHtml}</div>
                        <span>(${product.reviews} reseñas)</span>
                    </div>
                    <div class="product-availability">${product.availability}</div>
                    <div class="product-description">${product.description}</div>

                    <div class="product-options">
                        <div class="option-group">
                            <label>Color:</label>
                            <div class="color-options">
                                ${colorOptionsHtml}
                            </div>
                        </div>

                        <div class="option-group">
                            <label for="product-size">Tamaño:</label>
                            <select id="product-size" class="form-control">
                                ${sizeOptionsHtml}
                            </select>
                        </div>

                        <div class="option-group">
                            <label for="product-quantity">Cantidad:</label>
                            <div class="quantity-selector">
                                <button class="quantity-btn" id="decrease-quantity">-</button>
                                <input type="number" id="product-quantity" value="1" min="1" max="10">
                                <button class="quantity-btn" id="increase-quantity">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="product-actions">
                        <button class="btn primary" id="add-to-cart-modal">
                            <i class="fas fa-shopping-cart"></i> Agregar al carrito
                        </button>
                        <button class="btn outline">
                            <i class="far fa-heart"></i> Añadir a favoritos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    openModal('product-modal');

    // Cerrar modal
    const closeBtn = productModal.querySelector('.close-modal');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal('product-modal'));

    // Colores
    const colorOptions = document.querySelectorAll('#product-modal .color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    if (colorOptions.length > 0) colorOptions[0].classList.add('active');

    // Cantidad
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('product-quantity');
    if (decreaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function() {
            const n = Math.max(1, (parseInt(quantityInput.value) || 1) - 1);
            quantityInput.value = n;
        });
    }
    if (increaseBtn && quantityInput) {
        increaseBtn.addEventListener('click', function() {
            const n = Math.min(10, (parseInt(quantityInput.value) || 1) + 1);
            quantityInput.value = n;
        });
    }

    const addToCartBtn = document.getElementById('add-to-cart-modal');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = Math.max(1, Math.min(10, parseInt(document.getElementById('product-quantity').value) || 1));
            addToCart(product, quantity);
            closeModal('product-modal');
        });
    }

    const thumbnails = document.querySelectorAll('#product-modal .thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageIndex = parseInt(this.getAttribute('data-image-index'));
            const mainImage = document.querySelector('#product-modal .main-image img');
            mainImage.src = product.images[imageIndex];
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });
}