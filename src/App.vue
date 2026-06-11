<script setup>
import ReleaseCard from './components/ReleaseCard.vue';
import ReleasePageWrap from './components/ReleasePageWrap.vue'

const releaseArr = [
  {
    img_src:
      'https://cdn-images.dzcdn.net/images/cover/ee18a74cbf47b045ea28937129735ecc/500x500.jpg',
    type: 'album',
    artist: 'Grim Salvo',
    name: 'VOIDSTAR',
    genre: 'Shadow Rap',
    year: '2024',
    description:
      '25 июля 2024 года состоялся релиз совместного альбома Grim Salvo и Witchouse 40k под названием VOIDST★R - масштабного 12-трекового проекта, над которым артисты работали с 2020 года. Концепция альбома строится вокруг символики пустоты, мистики и архаичных образов - от названия (VOIDSTAR - «звезда пустоты») до отсылок в треках (например, «BAPHOMET» отсылает к оккультной иконографии).',
    tracklist: ['Beyond the Scarlet Curtain', 'THE GIVER', 'Blessed is the Swarm', 'QUEEN LEECH'],
    idex: 0,
  },
  {
    img_src:
      'https://sun9-47.userapi.com/s/v1/ig2/myrpRbTWO-2pcKjHO3S1HWSYDN_gqo1RzTHVxorAi_JxUJU5BIxVegO9cR6X0L74JLLkkprRr7Bo473K30XNEl8G.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1200x1200&from=bu&u=U-_9a3C-HdfF9-3Uu5ebXRnCHf0sQPCXVccBnqc8Lhw&cs=1200x0',
    type: 'single',
    artist: 'GODHANDUSA',
    name: 'IGNORANCE IS BLISS',
    genre: 'Hip-Hop',
    year: '2025',
    description:
      'Дуэт GODHANDUSA (GONDA и MONGO) представил новый микстейп Ignorance Is Bliss (The Mixtape) - продолжение творческой линии после успешной трилогии GODHAND. Релиз вышел 30 июля 2025 года на лейбле Eye and Hand Society. Проект демонстрирует фирменный подход артистов к музыке: загадочность, символизм и смешение жанров. Исполнители сознательно выстраивают образ вокруг анонимности - скрывают лица и искажают голоса в записях, что добавляет релизу особую атмосферу.',
    tracklist: ['AMBULANCE', 'YOU ALREADY KNOW', 'WHAT IT IS HOE?!', 'ASSHOLE'],
    idex: 1,
  },
]

//закрываем кукис
function closeCookies() {
  modal.classList.add('disabled')
}
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
      <button class="vxod" @click="">войти</button>
      <a href="" class="account-name"></a>
    </div>
  </header>

  <main>
    <section class="welcome">
      <h2>Музыка не знает границ. И МЫ ТОЖЕ</h2>

      <p class="fresh-news">СВЕЖИЕ НОВОСТИ. ГОРЯЧИЕ РЕЛИЗЫ. ЭКСКЛЮЗИВНЫЕ МАТЕРИАЛЫ.</p>
      <p>
        Добро пожаловать на профессиональный curated источник музыкальных новостей.<br />
        Мы тщательно отбираем самые значимые события индустрии, анализируем тренды и делимся с вами
        только проверенной информацией. От mainstream до underground хитов - у нас есть новости для
        каждого, кто ценит настоящую музыку.
      </p>
    </section>

    <section class="news">
      <h2>НОВОСТИ</h2>
      <div class="click-bait">
        <h3>ВЫ НЕ ПОВЕРИТЕ САМОЕ ОЖИДАЕМОЕ СОБЫТИЕ НАСТУПИЛО</h3>
        <p>
          Неожиданно: Канье Уэст и Баста записывают совместный трек! Фанаты в шоке: что стоит за
          этим неожиданным дуэтом?
        </p>
      </div>
      <div class="sub-news">
        <div class="novosti">
          <h3>новость 2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, numquam! Voluptatem
            optio labore officia aut nihil suscipit non fugiat nulla ratione illo voluptate, facere
            quae! Consectetur debitis nemo ratione sint.
          </p>
        </div>
        <div class="novosti">
          <h3>новость 3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, numquam! Voluptatem
            optio labore officia aut nihil suscipit non fugiat nulla ratione illo voluptate, facere
            quae! Consectetur debitis nemo ratione sint.
          </p>
        </div>
        <div class="novosti">
          <h3>новость 4</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, numquam! Voluptatem
            optio labore officia aut nihil suscipit non fugiat nulla ratione illo voluptate, facere
            quae! Consectetur debitis nemo ratione sint.
          </p>
        </div>
        <div class="novosti">
          <h3>новость 5</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, numquam! Voluptatem
            optio labore officia aut nihil suscipit non fugiat nulla ratione illo voluptate, facere
            quae! Consectetur debitis nemo ratione sint.
          </p>
        </div>
      </div>
    </section>
    <section class="releases">
      <h2>НЕДАВНИЕ РЕЛИЗЫ</h2>
      <div class="release-wrap">
        <!-- ТУТ ВЫВОДЯТСЯ КАРТОЧКИ РЕЛИЗОВ!!! ДЛЯ ОСОБО УМНЫХ!!!! МЫ ПИСАЛИ ТУТ ОДНУ, ПОТОМ УДАЛИЛИ!!!-->
        <ReleaseCard v-for="release in releaseArr" :type="release.type" :artist="release.artist" :genre="release.genre"
          :year="release.year" :img="release.img_src" :name="release.name" />
      </div>
    </section>
  </main>

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

  <ReleasePageWrap></ReleasePageWrap>
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

main {
  padding: 0 150px;
  background-color: rgb(255, 255, 255);
}

main h2 {
  font-size: 40px;
  font-family: 'Stalinist One', sans-serif;
  font-weight: 400;
  font-style: normal;
}

main p,
h3 {
  font-family: 'Cormorant Infant', serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

main .welcome h2 {
  font-size: 35px;
}

main .fresh-news {
  font-size: 35px;
}

main .welcome p {
  padding: 0 20px;
  font-size: 30px;
}

main .click-bait {
  padding: 0 20px;
  margin-bottom: 50px;
}

main .click-bait h3 {
  font-size: 35px;
}

main .click-bait p {
  font-size: 30px;
}

main .sub-news {
  display: flex;
  gap: 10px;
  /* position: fixed;
    top: 100px; */
}

main .sub-news h3 {
  font-size: 29px;
}

main .sub-news .novosti {
  border-right: 2px solid black;

  padding: 0 20px;
}

main .sub-news .novosti:last-child {
  border-right: none;
}

main .novosti p {
  font-size: 24px;
}

main .release-wrap {
  display: flex;
  gap: 70px;
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
