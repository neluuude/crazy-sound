<template>
    <div @click="expandReleasePag" class="music">
        <img :src="img" />
        <span class="release-type">{{ type }}</span>
        <span class="release-artist">{{ artist }}</span>
        <span class="release-name">{{ name }}</span>
        <span class="release-genre">{{ genre }}</span>
        <span class="release-year">{{ year }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    type: String,
    artist: String,
    name: String,
    genre: String,
    year: String,
    img: String,
    idex: Number
})

const emit = defineEmits(['expandReleasePage'])

function expandReleasePag() {
    emit('expandReleasePage', props.idex)
}
</script>

<style scoped>
.music img {
    width: 200px;
    height: auto;
    margin-bottom: 10px;
    border-radius: 10%;
}

.music span {
    padding: 0 10px;
}

.music {
    display: flex;
    flex-direction: column;
}

.music span {
    font-family: 'Play', sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>
