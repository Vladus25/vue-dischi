// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

function initVue() {

  new Vue({

    el: '#app',
    data: {

      'posters':[],
      'select': '',
      'year': '',
    },
    mounted: function() {

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(data => {

          this.posters = data.data.response;
        })
        .catch(function(e){

          this.error = e;
        });
    },
    computed: {

      // Serve per aggiungere genres in option senza ripetizione
      genres: function () {
        const genres = [];
        for (let i = 0; i < this.posters.length; i++) {

          let elem = this.posters[i];
          if (!genres.includes(elem.genre)) {

            genres.push(elem.genre);
          }

        }

        return genres;

      },
      // Serve per filtrare genres
      filter: function () {
        let filterPosters = [];
        const posts = this.posters;
        if (this.select != '') {

          filterPosters = posts.filter((post) => post.genre == this.select);
        }
        else{

          filterPosters = this.posters;
        }

        return filterPosters

      },
      // Serve per ordinare gli posters per anni
      order: function () {
          const order = this.filter.sort(
          function (a, b) {
            if (a.year < b.year) {

              return -1;
            }
            else if (a.year > b.year) {

              return 1;
            }

              return 0;
            }

          );

          return order;

      }

    }

  });

}

function init() {

  initVue();
}

document.addEventListener('DOMContentLoaded', init);
