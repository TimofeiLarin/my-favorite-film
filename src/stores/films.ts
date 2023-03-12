import { defineStore } from "pinia";

export interface FilmI {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  isWatched: boolean;
}

interface FilmsStore {
  films: FilmI[];
  activeTab: number;
}

export const useFilmsStore = defineStore("filmsStore", {
  state: () =>
    ({
      films: [
        {
          id: 1,
          original_title: "Spider-Man",
          overview:
            "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
          poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
          release_date: "2002-05-01",
          isWatched: false,
        },
        {
          id: 2,
          original_title: "The Batman",
          overview:
            "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
          release_date: "2022-03-01",
          isWatched: true,
        },
        {
          id: 3,
          original_title: "The Batman",
          overview:
            "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
          poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
          release_date: "2022-03-01",
          isWatched: true,
        },
      ],
      activeTab: 1,
    } as FilmsStore),
  getters: {
    watchedFilms(): FilmI[] {
      return this.films.filter((film) => film.isWatched);
    },
  },
  actions: {
    setActiveTab(id: number) {
      this.activeTab = id;
    },
    toggleWatched(id: number) {
      const currentFilm = this.films.find((film) => film.id === id);

      if (currentFilm) {
        currentFilm.isWatched = !currentFilm.isWatched;
      }
    },
    deleteFilm(id: number) {
      this.films = this.films.filter((film) => film.id !== id);
    },
  },
});
