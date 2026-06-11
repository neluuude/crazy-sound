<template>
  <div class="cookies-wrap">
    <div class="cookies">
      <div class="zakrit">
        <button class="cookies-accept">
          <h3>_-_-_nРuНRТb_-_-_</h3>
        </button>
        <button class="cookies-close">X</button>
      </div>
      <p>Здрасте примит куке пажалст.</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.cookies-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cookies {
  background-color: darkturquoise;
  padding: 10px 10px;
}

.zakrit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.zakrit .cookies-accept {
  flex-grow: 1;
  font-size: 30px;
  background-color: rgb(255, 255, 255);
}

.zakrit .cookies-accept {
  transition: all 2s ease-in-out;
}

.cookies-accept h3 {
  margin: 100px;
}
</style>
