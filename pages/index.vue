<template>
    <div class="header">
        <h1>
            <!-- <img v-if="data?.[0]" :src="data[0].owner.avatar_url">-->Edgar Maurel
        </h1>

    </div>

    <div class="repositories">
        <li v-if="data">
  
        <li v-for="repo in data">
            <p>
                <a :href="repo.html_url" target="_blank">{{ repo.name }}
                </a>
                <language v-if="repo.language">
                    in {{ repo.language }}
                </language>
            </p>
        </li>
        <button @click="log">click me</button>
        </li>

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
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: red;
}

a {
    text-decoration: underline;
}
</style>

<style scoped>
.name {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: black;
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

<style scoped>
.align {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: larger;
    width: 100vw;
}

a {
    text-decoration: underline;
}
</style>