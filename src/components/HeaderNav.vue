<template>
  <header class="header">
    <div class="header__logo">
      <img src="/logo.png" class="header__logo-img" alt="oliver dyer developer logo" />
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-list-item">
          <a href="#projects" class="header__nav-list-link">Projects</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#contact" class="header__nav-list-link">Contact</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#cv-download" class="header__nav-list-link">My CV</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
}

.header__nav-list {
  display: flex;
  align-items: center;
}

.header__nav-list-item {
  padding: 0.25rem 0 0.25rem 0.25rem;
}

.header__nav-list-item:not(:last-child) {
  padding-right: 0.25rem;
}

.header__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__logo-img {
  height: 40px;
  width: 55px;
}

.header__nav-list-link {
  text-decoration: none;
  letter-spacing: 1px;
  color: #272829;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  transition: all 0.3s;
}

.header__nav-list-item:not(:last-of-type) {
  margin-right: 0.5rem;
}

.header__nav-list-item:hover > a {
  color: #61677a;
}
</style>
