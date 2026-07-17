<script setup>
</script>

<template>
  <header>
    <div class="logo-cont">
      <img src="@/assets/logo.jpg" class="logo" />
      <h1>CRAZY SOUND</h1>
      <nav>
        <a href="">главная</a>
        <a href="">чарты</a>
        <a href="">исполнители</a>
        <a href="">фиты</a>
        <a href="">дискография</a>
      </nav>
    </div>
    <input type="text" class="header-search" placeholder="Поиск..." />
    <div class="header-search-results"></div>
    <div class="actions">
      <button class="vxod">войти</button>
      <a href="" class="account-name"></a>
    </div>
  </header>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <RouterView />

  <div class="login-form-wrap">
    <div class="login-form">
      <div class="login-form-1">
        <span>Авторизация</span>
        <button class="login-close">X</button>
      </div>
      <input type="text" class="login-type" />
      <input type="text" class="password-type" />
      <button class="login-enter">войти</button>
    </div>
  </div>

  <footer>
    <div class="about">
      <nav>
        <a href="">О нас</a>
        <a href="">Сас</a>
        <a href="">FAQ</a>
        <a href="">Политика копирайт</a>
        <a href="">ЛИГМАБОUЛС</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
body {
  margin: 0;
}

header img.logo {
  width: 30px;
  height: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(123, 203, 212);
}

header nav {
  display: flex;
  gap: 10px;
}

header .header-search {
  margin-right: 60px;
  height: 25px;
  width: 30%;
}

header .logo-cont,
header .actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

header .account-icon {
  height: 40px;
  width: 40px;
  background-color: antiquewhite;
  border-radius: 50%;
}

.play-regular {
  font-family: 'Play', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.play-bold {
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-style: normal;
}

.alumni-sans-collegiate-one-regular {
  font-family: 'Alumni Sans Collegiate One', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.alumni-sans-collegiate-one-regular-italic {
  font-family: 'Alumni Sans Collegiate One', sans-serif;
  font-weight: 400;
  font-style: italic;
}

.cormorant-infant {
  font-family: 'Cormorant Infant', serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

.stalinist-one-regular {
  font-family: 'Stalinist One', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.login-form-wrap {
  position: fixed;
  top: 3.5%;
  right: 1.5%;
  width: 10vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  background-color: darkturquoise;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
}

.login-form {
  font-size: 22px;
}

.login-enter {
  font-size: 18px;
  margin-top: 2%;
}

.header-search {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

.header-search-results {
  margin-top: 20px;
}

.header-search-results {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.header-search-results:hover {
  background: #f8f8f8;
}

.header-search-results img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.disabled {
  display: none;
}

footer {
  display: flex;
  justify-content: end;
  margin-top: 30px;
  padding: 20px 20px;
  background-color: rgb(123, 203, 212);
}

footer nav {
  display: flex;
  gap: 10px;
}
</style>
