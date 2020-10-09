new Vue({
	el: '#desafio',
	data: {
		btnClass: "",
		big: "big",
		blue: "blue",
		appliedCss: "",
		appliedCss4: "",
		isBig: false,
		cor5: "",
		styles5: {
			width: '50px',
			height: '50px'
		},
		width: "0%"
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.btnClass = this.btnClass == "destaque" ? "encolher" : "destaque"
			}, 1000);
		},
		iniciarProgresso() {
			let value = 0;
			const progress = setInterval(() => {
				value++
				this.width = `${value}%`;
				if (value == 100) {
					clearInterval(progress)
				}
			}, 15)
		}
	}
})
