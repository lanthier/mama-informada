<template>
  <div class="page-container">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <span class="logo-icon">💧</span>
          <span class="logo-text">charity: water</span>
        </div>
        
        <nav class="nav-menu">
          <button class="nav-item">TAKE ACTION ▾</button>
          <button class="nav-item">ABOUT US ▾</button>
          <a href="#" class="nav-item">WHY WATER?</a>
        </nav>
        
        <div class="header-actions">
          <button class="btn-secondary">GIVE</button>
          <button class="btn-primary">JOIN THE SPRING</button>
          <button class="btn-text">SIGN IN</button>
        </div>
      </div>
    </header>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Education<br>
            grows where<br>
            water flows
          </h1>
          
          <p class="hero-description">
            Give the gift of clean water and you'll provide a basic human right, one 
            that is still out of reach for nearly 1 in 10 people on the planet. Without 
            clean water, cycles of poverty, illness, and limited opportunities persist. But 
            with it? Communities — and all the people within them — begin to thrive.
          </p>
          
          <p class="hero-highlight">
            <strong>This holiday season, you can help 200 communities gain access to the 
            clean water they deserve.</strong> Give $40 to bring clean water to one person, 
            or $240 to provide clean water for a family. No matter how much you give, 
            100% will fund community-owned water projects around the world.
          </p>
          
          <div class="donation-form">
            <div class="toggle-buttons">
              <button class="toggle-btn active">GIVE ONCE</button>
              <button class="toggle-btn">MONTHLY</button>
            </div>
            
            <div class="amount-input">
              <input type="text" placeholder="Enter an amount to give" />
            </div>
          </div>
        </div>
        
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200" alt="Smiling student" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  min-height: 100vh;
}

/* Header Styles */
.header {
  background: white;
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 400;
  color: #1a1a1a;
}

.logo-icon {
  font-size: 1.3rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;
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
  color: #666;
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

/* Hero Section */
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: stretch;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.hero-text {
  background: linear-gradient(135deg, #2d5f50 0%, #1e4238 100%);
  color: white;
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 300;
}

.hero-highlight {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  font-weight: 400;
}

.hero-highlight strong {
  font-weight: 700;
}

/* Donation Form */
.donation-form {
  max-width: 450px;
}

.toggle-buttons {
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.toggle-btn {
  flex: 1;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: none;
  background: white;
  color: #1a1a1a;
  transition: all 0.2s;
}

.toggle-btn:first-child {
  border-right: 1px solid #e5e5e5;
}

.toggle-btn.active {
  background: #ffd23f;
  color: #1a1a1a;
}

.toggle-btn:not(.active):hover {
  background: #f5f5f5;
}

.amount-input {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 0.25rem;
}

.amount-input input {
  width: 100%;
  padding: 1.25rem 1.5rem;
  font-size: 1rem;
  border: none;
  background: transparent;
  color: white;
  outline: none;
}

.amount-input input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* Hero Image */
.hero-image {
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .hero-text {
    padding: 3rem 2rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-image {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
    padding: 1rem;
  }
  
  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description,
  .hero-highlight {
    font-size: 1rem;
  }
  
  .btn-text {
    display: none;
  }
}
</style>
