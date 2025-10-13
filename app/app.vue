<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <div class="page-container">
    <NuxtRouteAnnouncer />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <NuxtLink to="/" class="logo" @click="closeMenu">
          <img src="/mama-informada-logo.png" alt="Mama Informada" class="logo-image" />
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="nav-menu desktop-nav">
          <NuxtLink to="/blog" class="nav-item">BLOG</NuxtLink>
          <NuxtLink to="/recursos" class="nav-item">RECURSOS</NuxtLink>
          <NuxtLink to="/acerca" class="nav-item">ACERCA</NuxtLink>
        </nav>
        
        <!-- Hamburger Button -->
        <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <nav class="mobile-nav" :class="{ open: isMenuOpen }">
        <NuxtLink to="/blog" class="mobile-nav-item" @click="closeMenu">BLOG</NuxtLink>
        <NuxtLink to="/recursos" class="mobile-nav-item" @click="closeMenu">RECURSOS</NuxtLink>
        <NuxtLink to="/acerca" class="mobile-nav-item" @click="closeMenu">ACERCA</NuxtLink>
      </nav>
    </header>
    
    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: rgb(135, 168, 149);
  min-height: 100vh;
}

/* Header Styles */
.header {
  background: white;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-height: 128px;
  max-width: 1400px;
  display: flex;
}

.logo {
  display: flex;
  padding-left: 5rem;
  text-decoration: none;
}

.logo-image {
  height: 96px;
  margin: 2px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: flex-end;
  padding-right: 2rem;
}

.nav-item {
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-item:hover {
  color: rgb(135,168,149);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  margin-right: 2rem;
}

.hamburger span {
  width: 30px;
  height: 3px;
  background: #1a1a1a;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  flex-direction: column;
  background: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-nav.open {
  max-height: 300px;
}

.mobile-nav-item {
  padding: 1rem 2rem;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.mobile-nav-item:hover {
  background: #f5f5f5;
  border-left-color: rgb(135,168,149);
  color: rgb(135,168,149);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-primary,
.btn-secondary,
.btn-text {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: #00374c;
  color: white;
}

.btn-primary:hover {
  background: #002a3a;
}

.btn-secondary {
  background: white;
  color: #1a1a1a;
  border: 2px solid #e5e5e5;
}

.btn-secondary:hover {
  border-color: #999;
}

.btn-text {
  background: transparent;
  color: #1a1a1a;
}

.btn-text:hover {
  background: #f5f5f5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .logo {
    padding-left: 2rem;
  }
}

@media (max-width: 605px) {
  .logo {
    padding-left: 1rem;
  }
  
  .logo-image {
    height: 70px;
  }
  
  .header-content {
    justify-content: space-between;
    align-items: center;
  }
  
  /* Hide desktop nav, show hamburger */
  .desktop-nav {
    display: none;
  }
  
  .hamburger {
    display: flex;
  }
  
  .hamburger {
    margin-right: 1rem;
  }
  
  /* Show mobile nav */
  .mobile-nav {
    display: flex;
  }
}
</style>

