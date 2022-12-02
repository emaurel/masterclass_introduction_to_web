<template>
    <div class="header">
        <h1>Edgar Maurel</h1>

    </div>

    <div class="repositories">
        <h2>repo :</h2>
        <li v-for="repo in data">
            <img :src="repo.img">
            <a v-bind:href= "repo.html_url" target="_blank">{{repo.name}}</a>
    </li>
    <!-- <button @click="log">click me</button> -->

    </div>
</template>

<script setup>
let data = await $fetch("api/hello")
    .then(donnee => {
        return donnee
    })
    .catch(error => {
        console.error(error);
    });
function log() {
    console.log(data)
}
</script>



<style scoped>
.mainBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

a {
    text-decoration: underline;
}
</style>


<style scoped>
.repositories {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

a {
    text-decoration: underline;
}
</style>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: larger;
    width: 100vw;
}

a {
    text-decoration: underline;
}
</style>
