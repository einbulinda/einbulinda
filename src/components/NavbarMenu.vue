<template>
  <header>
    <div class="menu-toggle" @click="mobileMenu">
      <FontAwesome :icon="changeIcon" />
    </div>
    <div class="overlay" :class="{ 'menu-open': openedMenu }"></div>
    <div class="container">
      <nav :class="{ 'menu-open': openedMenu }">
        <h1 class="brand">ein<span>b</span>ulinda</h1>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      changeIcon: "bars",
      openedMenu: false,
    };
  },
  methods: {
    mobileMenu() {
      if (!this.openedMenu) {
        this.changeIcon = "times";
        this.openedMenu = true;
      } else {
        this.openedMenu = false;
        this.changeIcon = "bars";
      }
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 8rem;
  position: relative;
  overflow: hidden;
}
.container {
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
}
.menu-toggle {
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  color: #eee;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1000;
  display: none;
}
nav {
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.6rem;
}
.brand {
  font-size: 3rem;
  font-weight: 300;
  transform: translateX(-100rem);
  animation: slideIn 0.5s forwards;
}
.brand span {
  color: crimson;
}
nav ul {
  display: flex;
}
nav ul li {
  list-style-type: none;
  transform: translateX(100rem);
  animation: slideIn 0.5s forwards;
}
nav ul li a {
  padding: 1rem 0;
  margin: 0 3rem;
  position: relative;
  letter-spacing: 2px;
}
nav ul li a:last-child {
  margin-right: 0;
}
nav ul li a::before,
nav ul li a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: crimson;
  left: 0;
  transform: scaleX(0);
  transition: all 0.5s;
}
nav ul li a::before {
  top: 0;
  transform-origin: left;
}
nav ul li a::after {
  bottom: 0;
  transform-origin: right;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  transition: opacity 650ms;
  transform: scale(0);
  opacity: 0;
  display: none;
}

nav ul li a:hover::before,
nav ul li a:hover::after {
  transform: scaleX(1);
}

nav ul li:nth-child(1) {
  animation-delay: 0s;
}
nav ul li:nth-child(2) {
  animation-delay: 0.5s;
}
nav ul li:nth-child(3) {
  animation-delay: 1s;
}
nav ul li:nth-child(4) {
  animation-delay: 1.5s;
}
@keyframes slideIn {
  from {
  }
  to {
    transform: translateX(0);
  }
}
/* Making the menu mobile responsive */
@media screen and (max-width: 700px) {
  .menu-toggle {
    display: block;
  }
  nav {
    display: none;
    padding-top: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    text-align: center;
  }
  nav ul {
    flex-direction: column;
  }
  nav ul li {
    margin-top: 5rem;
  }
  nav ul li a {
    margin: 0;
    font-size: 2.5rem;
  }
  .brand {
    font-size: 5rem;
  }
  .overlay.menu-open,
  nav.menu-open {
    display: flex;
    transform: scale(1);
    opacity: 1;
  }
}
</style>