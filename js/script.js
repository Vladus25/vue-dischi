function initVue() {

  new Vue({

    el: '#app',
    data: {

      'posters':'',
      'search': "",
      'selects': ['All', 'Rock', 'Pop', 'Jazz', 'Metal'],

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

    }

  });

}

function init() {

  initVue();
}

document.addEventListener('DOMContentLoaded', init);
