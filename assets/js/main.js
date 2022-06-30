function Calculadora () {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes()
        this.capturaEnter()
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', el => {
            if (el.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target

            if(el.classList.contains('btn-num')){
                this.addNumDisplay(el)
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay()
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm()
            }

            if(el.classList.contains('btn-eq')){
                this.realizaConta()
            }
        })
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.clearDisplay = () => {
        this.display.value = ''
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)

            if(!conta) {
                alert('Conta invalida')
                return
            }

            this.display.value = conta

        } catch (err) {
            alert ('Conta inválida')
            return
        }
    }
}

const c = new Calculadora ()
c.inicia()
