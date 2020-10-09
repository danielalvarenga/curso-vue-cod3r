new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alert() {
            alert("Botão clicado");
        },
        getKey(event) {
            this.valor = event.target.value;
        }
    }
})