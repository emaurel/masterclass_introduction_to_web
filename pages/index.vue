<template>
    <div id="home">
        <div class="header">
            <h1>
                <img class="round resize" v-if="data" :src="avatar">
                <nom class="go-down">
                    Edgar Maurel
                </nom>
            </h1>
        </div>
    </div>
    <div class="header">
        <h2>
            I am a student at <a href="https://www.epitech.eu/fr/ecole-informatique-montpellier/" target="_blank"
                class="link">Epitech Montpellier</a>
        </h2>
    </div>
    <div id="repositories">
        <ul class="repositories wrap">
            <p v-for="repo in data">
                <a :href="repo.html_url" target="_blank">
                    <div class="flex-item">
                        {{ repo.name }}
                    </div>
                </a>
            </p>
        </ul>
    </div>
    <div class="header">
        <h2>about me</h2>
        <img class="resize2" :src="google">
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

let avatar = data?.[0].owner.avatar_url;
let google = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png";

console.log(avatar)

</script>

<style scoped>
.repositories {

    padding: 20px;
    list-style: none;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    list-style: none;
    border: 1px solid rgb(117, 167, 241);
    -ms-box-orient: horizontal;
    flex-direction: row;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    width: 70vw;
    border-radius: 10px;
}

.nowrap {
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.wrap {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;

}

.flex-item {
    background: rgb(14, 17, 66);
    padding: 5px;
    width: 300px;
    height: 100px;
    margin: 5px;
    transition: .35s;
    line-height: 100px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    border: 2px inset #082b42;
    border-radius: 0px 0px 0px 0px;

}

.round {
    border-radius: 500px;
}

.resize {
    height: 150px;
    width: 150px;
}

.resize2 {
    height: 50px;
    width: 50px;
}

.flex-item:hover {
    transition: .35s;
    -webkit-box-shadow: inset -1px 3px 8px 5px #145caf, 2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: inset -1px 3px 8px 5px #1859a3, 2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    background: #1C6EA4;
}
</style>


<style scoped>
.header {
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: larger;
    padding-left: 10vw;
    padding-top: 5vw;
}

.go-down {
    padding: 5px;
    height: 100px;
    margin: 5px;
    transition: .1s;
    line-height: 100px;
    color: rgb(90, 101, 219);
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    letter-spacing: .1em;
    transition: 0.35s;
    text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(6, 51, 51, 0.9);
}

.go-down:hover {
    text-shadow: none;
    transition: 0.35s;
}
</style>

<style scoped>
.align {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: larger;
}

.link {
    transition: 0.35s;
}

.link:hover {
    transition: 0.35s;
    color: #d9d9d9;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, .1), 1px 1px 1px rgba(0, 0, 0, .5);
    color: #d9d9d9;
}
</style>