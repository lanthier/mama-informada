<script setup>
</script>

<template>
  <div class="page-container">
    <NuxtRouteAnnouncer />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <img src="/mama-informada-logo.png" alt="Mama Informada" class="logo-image" />
        </NuxtLink>
        
        <nav class="nav-menu">
          <NuxtLink to="/blog" class="nav-item">BLOG</NuxtLink>
          <NuxtLink to="/recursos" class="nav-item">RECURSOS</NuxtLink>
          <NuxtLink to="/acerca" class="nav-item">ACERCA</NuxtLink>
        </nav>
      </div>
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

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
  }
  
  .logo {
    padding-left: 2rem;
  }
  
  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;
    padding-left: 2rem;
  }
}
</style>

