# 🚀 Guia de Deploy - Rocketseat Clone

## Opções de Deploy Recomendadas

### 1. Netlify (Mais Fácil) ⭐

#### Passo a Passo:
1. **Acesse**: [netlify.com](https://netlify.com)
2. **Faça login** ou crie uma conta gratuita
3. **Arraste a pasta** `rocketseat-modern` para a área de deploy
4. **Aguarde o deploy** (1-2 minutos)
5. **Acesse o link** fornecido pelo Netlify

#### Configurações:
- **Build command**: (deixe vazio)
- **Publish directory**: `./`
- **Deploy automático**: Ativado

### 2. Vercel (Rápido)

#### Passo a Passo:
1. **Acesse**: [vercel.com](https://vercel.com)
2. **Conecte com GitHub** (recomendado)
3. **Faça upload** do projeto
4. **Configure**:
   - Framework Preset: `Other`
   - Build Command: (vazio)
   - Output Directory: `./`
5. **Deploy**

### 3. GitHub Pages (Gratuito)

#### Pré-requisitos:
- Conta no GitHub
- Repositório público

#### Passo a Passo:
1. **Crie repositório** no GitHub
2. **Faça upload** dos arquivos
3. **Vá em Settings** > Pages
4. **Selecione source**: Deploy from a branch
5. **Escolha branch**: main
6. **Pasta**: / (root)
7. **Save**

### 4. Firebase Hosting (Google)

#### Instalação:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Configuração:
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

#### Deploy:
```bash
firebase deploy
```

## 🔧 Configurações Avançadas

### Headers de Segurança (Netlify)

Crie arquivo `_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### Redirects (Netlify)

Crie arquivo `_redirects`:
```
# Redirect para HTTPS
http://seudominio.com/* https://seudominio.com/:splat 301!

# SPA fallback
/*    /index.html   200
```

### Cache Headers

Para otimizar performance:
```
# Cache static assets
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache CSS/JS
*.css
  Cache-Control: public, max-age=31536000
*.js
  Cache-Control: public, max-age=31536000
```

## 🌐 Domínio Personalizado

### Netlify
1. **Vá em Domain settings**
2. **Add custom domain**
3. **Configure DNS** no seu provedor
4. **SSL automático** será configurado

### Vercel
1. **Vá em Domains**
2. **Add domain**
3. **Configure DNS**:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.19.61`

### Cloudflare (Recomendado)
1. **Adicione site** no Cloudflare
2. **Configure DNS**:
   - Type: `CNAME`
   - Name: `@`
   - Target: `seu-site.netlify.app`
3. **Ative proxy** (nuvem laranja)

## 📊 Analytics e Monitoramento

### Google Analytics 4

Adicione no `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Hotjar (Heatmaps)

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HJID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🚀 Otimizações Pós-Deploy

### 1. Performance
- **Comprimir imagens**: TinyPNG, ImageOptim
- **Minificar CSS/JS**: Online minifiers
- **Ativar Gzip**: Configuração do servidor

### 2. SEO
- **Meta tags**: Título, descrição, keywords
- **Open Graph**: Para redes sociais
- **Schema markup**: Dados estruturados
- **Sitemap**: Para indexação

### 3. Monitoramento
- **Google Search Console**: Indexação
- **PageSpeed Insights**: Performance
- **GTmetrix**: Análise detalhada
- **Uptime monitoring**: Disponibilidade

## 🔒 Segurança

### Headers de Segurança
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### SSL/TLS
- **Certificado gratuito**: Let's Encrypt (automático)
- **Force HTTPS**: Redirect HTTP para HTTPS
- **HSTS**: Strict Transport Security

## 📱 PWA (Progressive Web App)

### Manifest.json
```json
{
  "name": "Rocketseat Clone",
  "short_name": "Rocketseat",
  "description": "Clone moderno da Rocketseat",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a1a1a",
  "theme_color": "#8b5cf6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker
```javascript
// sw.js
const CACHE_NAME = 'rocketseat-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/persuasive-enhancements.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

## 🎯 Testes Pós-Deploy

### Checklist
- [ ] Site carrega corretamente
- [ ] Todas as imagens aparecem
- [ ] JavaScript funciona
- [ ] CSS está aplicado
- [ ] Responsividade funciona
- [ ] Formulários funcionam (se houver)
- [ ] Links internos funcionam
- [ ] Analytics está trackando
- [ ] SSL está ativo
- [ ] Performance está boa (>90)

### Ferramentas de Teste
- **Lighthouse**: Performance, SEO, Acessibilidade
- **GTmetrix**: Análise detalhada
- **WebPageTest**: Teste de velocidade
- **Mobile-Friendly Test**: Google
- **SSL Labs**: Teste de SSL

## 📞 Suporte Pós-Deploy

### Problemas Comuns

**Site não carrega**
- Verifique DNS
- Confirme SSL
- Cheque logs do servidor

**Imagens não aparecem**
- Verifique caminhos relativos
- Confirme upload de assets
- Cheque permissões

**JavaScript não funciona**
- Verifique console de erros
- Confirme CDNs externos
- Teste em diferentes navegadores

### Monitoramento Contínuo
- **Uptime monitoring**: UptimeRobot, Pingdom
- **Error tracking**: Sentry, LogRocket
- **Performance monitoring**: New Relic, DataDog

---

**🎉 Parabéns! Seu site está no ar!**

Lembre-se de monitorar regularmente e fazer otimizações baseadas nos dados de analytics.

