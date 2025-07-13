// Modern JavaScript for Rocketseat Clone
class RocketseatApp {
  constructor() {
    this.activeFilter = 'all';
    this.isLoading = false;
    this.content = this.initializeContent();
    
    this.init();
  }

  init() {
    this.initializeIcons();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupScrollEffects();
    this.renderContent();
    this.setupPerformanceOptimizations();
  }

  initializeIcons() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  initializeContent() {
    return {
      formations: [
        {
          id: 1,
          title: "Fullstack JavaScript",
          description: "Domine o desenvolvimento web completo com JavaScript, desde o frontend com React até o backend com Node.js.",
          level: "Intermediário",
          duration: "120h",
          students: 45000,
          rating: 4.9,
          price: "R$ 497",
          tags: ["JavaScript", "React", "Node.js", "MongoDB"],
          technologies: ["javascript", "react", "nodejs"],
          highlights: [
            "Projetos práticos do mundo real",
            "Mentoria especializada",
            "Certificado de conclusão",
            "Acesso vitalício"
          ],
          isFeatured: true
        },
        {
          id: 2,
          title: "React Native",
          description: "Desenvolva aplicativos mobile nativos para iOS e Android usando React Native e TypeScript.",
          level: "Avançado",
          duration: "80h",
          students: 28000,
          rating: 4.8,
          price: "R$ 397",
          tags: ["React Native", "TypeScript", "Mobile"],
          technologies: ["react", "javascript"],
          highlights: [
            "Apps para iOS e Android",
            "Integração com APIs",
            "Publicação nas stores",
            "Performance otimizada"
          ]
        },
        {
          id: 3,
          title: "Python para Data Science",
          description: "Aprenda análise de dados, machine learning e visualização com Python, Pandas e Scikit-learn.",
          level: "Iniciante",
          duration: "100h",
          students: 32000,
          rating: 4.7,
          price: "R$ 447",
          tags: ["Python", "Data Science", "Machine Learning"],
          technologies: ["python"],
          highlights: [
            "Análise de dados reais",
            "Modelos de ML",
            "Visualizações interativas",
            "Portfolio completo"
          ]
        }
      ],
      courses: [
        {
          id: 1,
          title: "JavaScript ES6+",
          description: "Aprenda as funcionalidades modernas do JavaScript e como aplicá-las em projetos reais.",
          type: "Curso",
          level: "Iniciante",
          duration: "20h",
          students: 85000,
          rating: 4.9,
          tags: ["JavaScript", "ES6", "Async/Await"],
          technologies: ["javascript"],
          isFree: true,
          ctaText: "Começar grátis"
        },
        {
          id: 2,
          title: "React Hooks Avançado",
          description: "Domine os React Hooks e crie aplicações mais performáticas e organizadas.",
          type: "Curso",
          level: "Intermediário",
          duration: "15h",
          students: 42000,
          rating: 4.8,
          tags: ["React", "Hooks", "Performance"],
          technologies: ["react", "javascript"],
          price: "R$ 197"
        },
        {
          id: 3,
          title: "Node.js API REST",
          description: "Construa APIs robustas e escaláveis com Node.js, Express e bancos de dados.",
          type: "Curso",
          level: "Intermediário",
          duration: "25h",
          students: 38000,
          rating: 4.7,
          tags: ["Node.js", "Express", "API"],
          technologies: ["nodejs", "javascript"],
          price: "R$ 247"
        },
        {
          id: 4,
          title: "Angular Fundamentals",
          description: "Aprenda os conceitos fundamentais do Angular e desenvolva SPAs modernas.",
          type: "Curso",
          level: "Iniciante",
          duration: "30h",
          students: 25000,
          rating: 4.6,
          tags: ["Angular", "TypeScript", "SPA"],
          technologies: ["angular", "javascript"],
          price: "R$ 297"
        },
        {
          id: 5,
          title: "Python Web com Django",
          description: "Desenvolva aplicações web robustas e escaláveis usando Django framework.",
          type: "Curso",
          level: "Intermediário",
          duration: "35h",
          students: 18000,
          rating: 4.5,
          tags: ["Python", "Django", "Web"],
          technologies: ["python"],
          price: "R$ 347"
        },
        {
          id: 6,
          title: "Java Spring Boot",
          description: "Construa microserviços e APIs enterprise com Java e Spring Boot.",
          type: "Curso",
          level: "Avançado",
          duration: "40h",
          students: 15000,
          rating: 4.4,
          tags: ["Java", "Spring Boot", "Microservices"],
          technologies: ["java"],
          price: "R$ 397"
        }
      ],
      events: [
        {
          id: 1,
          title: "Ignite Lab - React",
          description: "3 dias intensivos construindo uma aplicação completa com React, TypeScript e muito mais.",
          type: "Workshop",
          date: "15-17 Dezembro",
          duration: "3 dias",
          participants: 25000,
          tags: ["React", "TypeScript", "Vite"],
          technologies: ["react", "javascript"],
          isFree: true,
          ctaText: "Garantir vaga",
          highlights: [
            "Projeto completo do zero",
            "Certificado de participação",
            "Networking com devs",
            "Mentoria ao vivo"
          ]
        },
        {
          id: 2,
          title: "NLW Expert - Node.js",
          description: "Uma semana intensa de código criando uma API completa com Node.js e tecnologias modernas.",
          type: "Evento",
          date: "22-26 Janeiro",
          duration: "5 dias",
          participants: 35000,
          tags: ["Node.js", "Prisma", "Fastify"],
          technologies: ["nodejs", "javascript"],
          isFree: true,
          ctaText: "Participar grátis"
        },
        {
          id: 3,
          title: "Masterclass Python",
          description: "Aprenda técnicas avançadas de Python para Data Science e desenvolvimento web.",
          type: "Masterclass",
          date: "10 Fevereiro",
          duration: "4h",
          participants: 8000,
          tags: ["Python", "Data Science", "FastAPI"],
          technologies: ["python"],
          price: "R$ 97",
          ctaText: "Inscrever-se"
        }
      ],
      complementary: [
        {
          id: 1,
          title: "Como configurar seu ambiente de desenvolvimento",
          description: "Tutorial completo para configurar VS Code, Git, Node.js e outras ferramentas essenciais.",
          type: "Tutorial",
          duration: "45min",
          views: 125000,
          tags: ["Setup", "VS Code", "Git"],
          technologies: ["javascript", "nodejs"],
          isFree: true,
          ctaText: "Assistir"
        },
        {
          id: 2,
          title: "Deploy de aplicações React na Vercel",
          description: "Aprenda a fazer deploy de suas aplicações React de forma rápida e eficiente.",
          type: "Tutorial",
          duration: "30min",
          views: 89000,
          tags: ["Deploy", "Vercel", "React"],
          technologies: ["react", "javascript"],
          isFree: true,
          ctaText: "Assistir"
        },
        {
          id: 3,
          title: "Otimização de performance em Node.js",
          description: "Técnicas avançadas para otimizar a performance de aplicações Node.js em produção.",
          type: "Artigo",
          duration: "15min",
          views: 67000,
          tags: ["Performance", "Node.js", "Optimization"],
          technologies: ["nodejs", "javascript"],
          isFree: true,
          ctaText: "Ler"
        },
        {
          id: 4,
          title: "Introdução ao Machine Learning com Python",
          description: "Primeiros passos no mundo do ML usando Python, Pandas e Scikit-learn.",
          type: "Workshop",
          duration: "2h",
          views: 45000,
          tags: ["Python", "ML", "Scikit-learn"],
          technologies: ["python"],
          price: "R$ 47",
          ctaText: "Acessar"
        }
      ]
    };
  }

  setupEventListeners() {
    // Tech filters
    const techFilters = document.getElementById('techFilters');
    if (techFilters) {
      techFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('tech-pill')) {
          this.handleFilterChange(e.target);
        }
      });
    }

    // Clear filters
    const clearFilters = document.getElementById('clearFilters');
    if (clearFilters) {
      clearFilters.addEventListener('click', () => {
        this.clearAllFilters();
      });
    }

    // Scroll to top
    const scrollToTop = document.getElementById('scrollToTop');
    const backToTop = document.getElementById('backToTop');
    
    if (scrollToTop) {
      scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
    }

    // Header scroll effect
    window.addEventListener('scroll', this.handleScroll.bind(this));

    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  handleFilterChange(filterElement) {
    // Remove active class from all filters
    document.querySelectorAll('.tech-pill').forEach(pill => {
      pill.classList.remove('active');
    });

    // Add active class to clicked filter
    filterElement.classList.add('active');

    // Update active filter
    this.activeFilter = filterElement.dataset.tech;

    // Show/hide clear filters button
    const clearFilters = document.getElementById('clearFilters');
    if (clearFilters) {
      clearFilters.style.display = this.activeFilter === 'all' ? 'none' : 'flex';
    }

    // Re-render content with filter
    this.renderContent();

    // Analytics tracking
    this.trackEvent('filter_change', { technology: this.activeFilter });
  }

  clearAllFilters() {
    this.activeFilter = 'all';
    
    // Reset active filter
    document.querySelectorAll('.tech-pill').forEach(pill => {
      pill.classList.remove('active');
    });
    
    document.querySelector('[data-tech="all"]').classList.add('active');

    // Hide clear filters button
    const clearFilters = document.getElementById('clearFilters');
    if (clearFilters) {
      clearFilters.style.display = 'none';
    }

    // Re-render content
    this.renderContent();
  }

  filterContent(content, technologies) {
    if (this.activeFilter === 'all') {
      return content;
    }
    
    return content.filter(item => 
      item.technologies && item.technologies.includes(this.activeFilter)
    );
  }

  renderContent() {
    this.renderFormations();
    this.renderCourses();
    this.renderEvents();
    this.renderComplementary();
  }

  renderFormations() {
    const grid = document.getElementById('formationsGrid');
    if (!grid) return;

    const filteredFormations = this.filterContent(this.content.formations);
    
    if (filteredFormations.length === 0) {
      grid.innerHTML = this.renderEmptyState('formações');
      return;
    }

    grid.innerHTML = filteredFormations.map(formation => `
      <div class="content-card formation-card animate-fade-in-up">
        ${formation.isFeatured ? '<div class="badge badge-new">DESTAQUE</div>' : ''}
        
        <div class="card-meta">
          <span>Formação</span>
          <span>•</span>
          <span>${formation.duration}</span>
        </div>
        
        <h3 class="card-title">${formation.title}</h3>
        
        <div class="level-badge">
          <span class="tag">${formation.level}</span>
        </div>
        
        <p class="card-description">${formation.description}</p>
        
        <div class="card-stats">
          <div class="stat-item">
            <i data-lucide="users"></i>
            <span>${formation.students.toLocaleString()} alunos</span>
          </div>
          <div class="stat-item">
            <i data-lucide="star"></i>
            <span>${formation.rating}</span>
          </div>
        </div>
        
        <div class="highlights">
          ${formation.highlights.slice(0, 3).map(highlight => `
            <div class="highlight-item">
              <i data-lucide="check"></i>
              <span>${highlight}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="card-tags">
          ${formation.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="card-action">
          <div class="price-section">
            <span class="price">${formation.price}</span>
            <span class="price-note">Acesso vitalício</span>
          </div>
          <button class="btn btn-cta" onclick="app.trackEvent('formation_click', {id: ${formation.id}})">
            <i data-lucide="play"></i>
            Começar formação
          </button>
        </div>
      </div>
    `).join('');

    this.initializeIcons();
  }

  renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;

    const filteredCourses = this.filterContent(this.content.courses);
    
    if (filteredCourses.length === 0) {
      grid.innerHTML = this.renderEmptyState('cursos');
      return;
    }

    grid.innerHTML = filteredCourses.map(course => `
      <div class="content-card animate-fade-in-up">
        ${course.isFree ? '<div class="badge badge-free">GRÁTIS</div>' : ''}
        
        <div class="card-meta">
          <span>${course.type}</span>
          <span>•</span>
          <span>${course.duration}</span>
        </div>
        
        <h3 class="card-title">${course.title}</h3>
        
        <div class="level-badge">
          <span class="tag">${course.level}</span>
        </div>
        
        <p class="card-description">${course.description}</p>
        
        <div class="card-stats">
          <div class="stat-item">
            <i data-lucide="users"></i>
            <span>${course.students.toLocaleString()} alunos</span>
          </div>
          <div class="stat-item">
            <i data-lucide="star"></i>
            <span>${course.rating}</span>
          </div>
        </div>
        
        <div class="card-tags">
          ${course.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="card-action">
          ${course.price ? `
            <div class="price-section">
              <span class="price">${course.price}</span>
            </div>
          ` : ''}
          <button class="btn ${course.isFree ? 'btn-cta' : 'btn-primary'}" onclick="app.trackEvent('course_click', {id: ${course.id}})">
            <i data-lucide="play"></i>
            ${course.ctaText || 'Acessar curso'}
          </button>
        </div>
      </div>
    `).join('');

    this.initializeIcons();
  }

  renderEvents() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;

    const filteredEvents = this.filterContent(this.content.events);
    
    if (filteredEvents.length === 0) {
      grid.innerHTML = this.renderEmptyState('eventos');
      return;
    }

    grid.innerHTML = filteredEvents.map(event => `
      <div class="content-card animate-fade-in-up">
        ${event.isFree ? '<div class="badge badge-free">GRÁTIS</div>' : ''}
        ${event.date.includes('Dezembro') ? '<div class="badge badge-live">AO VIVO</div>' : ''}
        
        <div class="card-meta">
          <span>${event.type}</span>
          <span>•</span>
          <span>${event.duration}</span>
        </div>
        
        <h3 class="card-title">${event.title}</h3>
        
        <div class="event-date">
          <i data-lucide="calendar"></i>
          <span>${event.date}</span>
        </div>
        
        <p class="card-description">${event.description}</p>
        
        <div class="card-stats">
          <div class="stat-item">
            <i data-lucide="users"></i>
            <span>${event.participants.toLocaleString()} participantes</span>
          </div>
        </div>
        
        ${event.highlights ? `
          <div class="highlights">
            ${event.highlights.slice(0, 3).map(highlight => `
              <div class="highlight-item">
                <i data-lucide="check"></i>
                <span>${highlight}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
        
        <div class="card-tags">
          ${event.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="card-action">
          ${event.price ? `
            <div class="price-section">
              <span class="price">${event.price}</span>
            </div>
          ` : ''}
          <button class="btn ${event.isFree ? 'btn-cta' : 'btn-primary'}" onclick="app.trackEvent('event_click', {id: ${event.id}})">
            <i data-lucide="calendar"></i>
            ${event.ctaText}
          </button>
        </div>
      </div>
    `).join('');

    this.initializeIcons();
  }

  renderComplementary() {
    const grid = document.getElementById('complementaryGrid');
    if (!grid) return;

    const filteredContent = this.filterContent(this.content.complementary);
    
    if (filteredContent.length === 0) {
      grid.innerHTML = this.renderEmptyState('conteúdos complementares');
      return;
    }

    grid.innerHTML = filteredContent.map(content => `
      <div class="content-card animate-fade-in-up">
        ${content.isFree ? '<div class="badge badge-free">GRÁTIS</div>' : ''}
        
        <div class="card-meta">
          <span>${content.type}</span>
          <span>•</span>
          <span>${content.duration}</span>
        </div>
        
        <h3 class="card-title">${content.title}</h3>
        
        <p class="card-description">${content.description}</p>
        
        <div class="card-stats">
          <div class="stat-item">
            <i data-lucide="eye"></i>
            <span>${content.views.toLocaleString()} visualizações</span>
          </div>
        </div>
        
        <div class="card-tags">
          ${content.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="card-action">
          ${content.price ? `
            <div class="price-section">
              <span class="price">${content.price}</span>
            </div>
          ` : ''}
          <button class="btn ${content.isFree ? 'btn-cta' : 'btn-primary'}" onclick="app.trackEvent('complementary_click', {id: ${content.id}})">
            <i data-lucide="play"></i>
            ${content.ctaText}
          </button>
        </div>
      </div>
    `).join('');

    this.initializeIcons();
  }

  renderEmptyState(contentType) {
    return `
      <div class="empty-state">
        <div class="empty-icon">
          <i data-lucide="search"></i>
        </div>
        <h3>Nenhum resultado encontrado</h3>
        <p>Não encontramos ${contentType} para a tecnologia selecionada.</p>
        <button class="btn btn-primary" onclick="app.clearAllFilters()">
          Ver todos os ${contentType}
        </button>
      </div>
    `;
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all content cards
    document.querySelectorAll('.content-card').forEach(card => {
      observer.observe(card);
    });
  }

  setupScrollEffects() {
    let ticking = false;

    const updateScrollEffects = () => {
      const scrollY = window.pageYOffset;
      
      // Header scroll effect
      const header = document.querySelector('.header');
      if (header) {
        if (scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Scroll to top button
      const scrollToTop = document.getElementById('scrollToTop');
      if (scrollToTop) {
        if (scrollY > 300) {
          scrollToTop.classList.add('visible');
        } else {
          scrollToTop.classList.remove('visible');
        }
      }

      // Parallax effect for hero
      const hero = document.querySelector('.hero');
      if (hero) {
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }

      ticking = false;
    };

    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  }

  handleScroll() {
    // Throttled scroll handler
    if (!this.scrollTimeout) {
      this.scrollTimeout = setTimeout(() => {
        // Additional scroll logic here
        this.scrollTimeout = null;
      }, 16); // ~60fps
    }
  }

  toggleMobileMenu() {
    // Mobile menu implementation
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.classList.toggle('mobile-open');
    }
  }

  handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (this.validateEmail(email)) {
      this.subscribeNewsletter(email);
    } else {
      this.showNotification('Por favor, insira um email válido.', 'error');
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async subscribeNewsletter(email) {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.showNotification('Inscrição realizada com sucesso!', 'success');
      this.trackEvent('newsletter_subscribe', { email });
      
      // Clear form
      document.querySelector('.newsletter-form input').value = '';
    } catch (error) {
      this.showNotification('Erro ao realizar inscrição. Tente novamente.', 'error');
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  handleKeyboardNavigation(e) {
    // Keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'k':
          e.preventDefault();
          // Focus search/filter
          document.querySelector('.tech-pill')?.focus();
          break;
        case '/':
          e.preventDefault();
          // Focus newsletter input
          document.querySelector('.newsletter-form input')?.focus();
          break;
      }
    }

    // Escape key
    if (e.key === 'Escape') {
      // Close mobile menu or clear filters
      this.clearAllFilters();
    }
  }

  setupPerformanceOptimizations() {
    // Lazy load images
    this.setupLazyLoading();
    
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Setup service worker for caching
    this.setupServiceWorker();
  }

  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  preloadCriticalResources() {
    // Preload hero images and critical assets
    const criticalAssets = [
      '/assets/images/rocketseat-logo.png',
      '/assets/images/javascript-icon.png',
      '/assets/images/react-icon.png'
    ];

    criticalAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = asset;
      document.head.appendChild(link);
    });
  }

  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    }
  }

  trackEvent(eventName, properties = {}) {
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    // Custom analytics
    console.log('Event tracked:', eventName, properties);
  }

  // Public API methods
  getFilteredContent(type) {
    return this.filterContent(this.content[type]);
  }

  setFilter(technology) {
    const filterElement = document.querySelector(`[data-tech="${technology}"]`);
    if (filterElement) {
      this.handleFilterChange(filterElement);
    }
  }

  // Utility methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new RocketseatApp();
});

// Add CSS for notifications and empty states
const additionalStyles = `
  .notification {
    position: fixed;
    top: 2rem;
    right: 2rem;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    color: white;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .notification.show {
    transform: translateX(0);
  }

  .notification-success {
    background: var(--success);
  }

  .notification-error {
    background: var(--error);
  }

  .notification-info {
    background: var(--primary);
  }

  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 4rem 2rem;
  }

  .empty-icon {
    width: 4rem;
    height: 4rem;
    background: var(--surface-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--text-muted);
    font-size: 1.5rem;
  }

  .empty-state h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .empty-state p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .price-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
  }

  .price-note {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .level-badge {
    margin-bottom: 1rem;
  }

  .highlights {
    margin: 1.5rem 0;
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .highlight-item i {
    color: var(--success);
    font-size: 1rem;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .event-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .nav.mobile-open {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    .nav {
      display: none;
    }
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);



// Enhanced Persuasive Features
class PersuasiveEnhancements {
  constructor() {
    this.setupCountdownTimer();
    this.setupTestimonialCarousel();
    this.setupFAB();
    this.setupProgressAnimations();
    this.setupScarcityUpdates();
  }

  setupCountdownTimer() {
    // Set target date (15 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    targetDate.setHours(23, 59, 59, 999);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
      }
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  setupTestimonialCarousel() {
    const testimonials = [
      {
        avatar: 'JS',
        text: '"Em 6 meses consegui minha primeira vaga como dev. A metodologia da Rocketseat é incrível!"',
        author: 'João Silva',
        role: 'Frontend Developer na Nubank'
      },
      {
        avatar: 'MF',
        text: '"Saí do zero e hoje trabalho como fullstack. O suporte da comunidade fez toda diferença!"',
        author: 'Maria Fernanda',
        role: 'Fullstack Developer na iFood'
      },
      {
        avatar: 'RC',
        text: '"Consegui dobrar meu salário em 1 ano. Melhor investimento que já fiz na minha carreira!"',
        author: 'Rafael Costa',
        role: 'Senior Developer na Stone'
      }
    ];

    let currentTestimonial = 0;
    const carousel = document.querySelector('.testimonial-carousel');
    
    if (carousel) {
      const updateTestimonial = () => {
        const testimonial = testimonials[currentTestimonial];
        carousel.innerHTML = `
          <div class="testimonial-slide">
            <div class="testimonial-avatar">${testimonial.avatar}</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">${testimonial.author}</div>
            <div class="testimonial-role">${testimonial.role}</div>
          </div>
        `;
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      };

      updateTestimonial();
      setInterval(updateTestimonial, 5000); // Change every 5 seconds
    }
  }

  setupFAB() {
    const fab = document.getElementById('helpFab');
    if (fab) {
      fab.addEventListener('click', () => {
        // Simulate help chat opening
        this.showNotification('Chat de suporte em breve! Entre em contato pelo WhatsApp.', 'info');
        this.trackEvent('help_fab_click');
      });
    }
  }

  setupProgressAnimations() {
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-fill-animated');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.style.width;
          progressBar.style.width = '0%';
          
          setTimeout(() => {
            progressBar.style.width = width;
          }, 500);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
  }

  setupScarcityUpdates() {
    // Simulate real-time scarcity updates
    const scarcityElement = document.querySelector('.scarcity-indicator span');
    if (scarcityElement) {
      let remainingSpots = 2847;
      
      const updateScarcity = () => {
        // Randomly decrease spots (1-3 spots every 30-60 seconds)
        const decrease = Math.floor(Math.random() * 3) + 1;
        remainingSpots = Math.max(0, remainingSpots - decrease);
        
        scarcityElement.textContent = `Apenas ${remainingSpots.toLocaleString()} vagas restantes de 25.000`;
        
        // Add urgency animation
        scarcityElement.parentElement.style.animation = 'subtle-pulse 0.5s ease-in-out';
        setTimeout(() => {
          scarcityElement.parentElement.style.animation = 'subtle-pulse 3s ease-in-out infinite';
        }, 500);
      };

      // Update every 30-60 seconds
      const interval = Math.random() * 30000 + 30000;
      setInterval(updateScarcity, interval);
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  trackEvent(eventName, properties = {}) {
    // Enhanced analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    console.log('Persuasive Event tracked:', eventName, properties);
  }
}

// Initialize persuasive enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.persuasiveEnhancements = new PersuasiveEnhancements();
});

// Add enhanced button interactions
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-ripple')) {
    // Create ripple effect
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

// Add CSS for ripple animation
const rippleStyles = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);

