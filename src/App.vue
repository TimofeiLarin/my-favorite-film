<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
      <h1 cl>My Favorite Films</h1>
    </header>
    <section class="tabs">
      <button
        :class="['btn', { btn_green: filmStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Favorite
      </button>
      <button
        :class="['btn', { btn_green: filmStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Search
      </button>
    </section>
    <div
      class="films"
      v-if="filmStore.activeTab === 1 && filmStore.watchedFilms?.length > 0"
    >
      <h2>Watched films</h2>
      <ItemFilm
        v-for="film of filmStore.watchedFilms"
        :key="film.id"
        :film="film"
      />
    </div>
    <div class="films" v-if="filmStore.activeTab === 1">
      <div v-if="filmStore.films.length > 0">
        <h2>All films</h2>
        <ItemFilm v-for="film of filmStore.films" :key="film.id" :film="film" />
      </div>
      <h2 v-else>No films yet.</h2>
    </div>
    <div class="films" v-else>Search Result</div>
  </main>
</template>

<script setup lang="ts">
import ItemFilm from "./components/ItemFilm.vue";
import { useFilmsStore } from "./stores/films";

const filmStore = useFilmsStore();

const setTab = (id: number) => {
  filmStore.setActiveTab(id);
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
