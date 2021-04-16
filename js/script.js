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

      'posters':'',
      'selects': ['Rock', 'Pop', 'Jazz', 'Metal'],
      'select': '',


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
    methods: {

      filter: function () {
        let filterPosters = [];
        const posts = this.posters;
        if (this.select != '') {
          filterPosters = posts.filter((post) => post.genre == this.select);
        }
        else{
          filterPosters = this.posters;
        }
        return filterPosters;
      }
    }

  });

}

function init() {

  initVue();
}

document.addEventListener('DOMContentLoaded', init);
