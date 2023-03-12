<template>
  <div class="film">
    <img
      class="film-img"
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`"
      :alt="film.original_title"
    />
    <div>
      <div class="film-name">
        {{ film.original_title }} ({{ film.release_date }})
      </div>
      <span class="film-overview">
        {{ film.overview }}
      </span>
      <div class="film-buttons">
        <button
          class="btn film-buttons-watched"
          @click="filmStore.toggleWatched(film.id)"
        >
          <span v-if="film.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button
          class="btn film-buttons-delete"
          @click="filmStore.deleteFilm(film.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FilmI } from "../stores/films";
import { useFilmsStore } from "../stores/films";

const filmStore = useFilmsStore();

const props = defineProps<{ film: FilmI }>();
</script>

<style lang="css" scoped>
.film {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}
.film-accept {
  margin-right: 10px;
}
.film-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.film-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.film-overview {
  display: block;
  margin-bottom: 20px;
}
.film-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.film-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}
.film-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}
.film-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>
