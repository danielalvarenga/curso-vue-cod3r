new Vue({
  el: '#desafio',
  data: {
    name: 'Daniel',
    age: 33,
    image_url: "https://cli.vuejs.org/favicon.png"
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
});