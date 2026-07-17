<template>
  <div class="release-page-wrap">
    <section class="release-page">
      <div class="golova">
        <h2 class="release-page-imya">{{ name }}</h2>
        <button @click="closeReleasePage" class="release-page-close">x</button>
      </div>

      <div class="release-page-all">
        <img :src="img" alt="" />
        <div class="release-page-text">
          <p class="release-page-description">
            {{ description }}
          </p>
          <div class="release-page-info">
            <span class="release-page-type"> {{ type }} </span>
            <span class="release-page-artist">
              <a href="">{{ artist }}</a>
            </span>
            <span class="release-page-genre">
              <a href="">{{ genre }}</a>
            </span>
            <span class="release-page-year"> {{ year }} </span>
          </div>
        </div>
      </div>
      <div class="release-page-tracklist">
        <a v-for="value in tracklist" :key="value.id">{{ value }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';



const route = useRoute()


onMounted(() => {
  console.log(route.params.idex)
})
</script>

<style scoped>
.release-page-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.golova {
  display: flex;
  justify-content: space-between;
}

/* .release-page {
  height: auto;
  width: 80%;
  background-color: rgb(123, 203, 212);
  border-style: solid;
  border-color: black;
  border-radius: 1%;
} */

.golova {
  margin: 0 20px;
  align-items: center;
}

.release-page-all {
  display: flex;
  padding: 0 20px;
  gap: 50px;
}

.release-page-all img {
  height: 500px;
  width: auto;
}

.release-page-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.release-page-imya {
  font-family: 'Cormorant Infant', serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 30px;
}

.release-page-text p {
  margin-right: 20%;
}

.release-page-description {
  font-family: 'Cormorant Infant', serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 15px;
}

.release-page-info {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 3px;
  font-size: 15px;
  font-family: 'Play', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.release-page-tracklist {
  display: flex;
  padding: 40px 20px;
  flex-direction: column;
  gap: 10px;
  font-family: 'Play', sans-serif;
  font-weight: 500;
  font-style: normal;
}
</style>
