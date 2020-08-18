class voteSys {
    constructor() {
        this.availableVote = document.getElementById('available-vote')
        this.progressBar = document.getElementById('progressbar')
        this.inputs = document.querySelectorAll('input')
        this.plusBtns = document.querySelectorAll('.fa-plus')
        this.minusBtns = document.querySelectorAll('.fa-minus')
        this.currVal = 0
    }

    totalVote() {
        let totalV = this.availableVote.textContent
        this.progressBar.style.width = `${totalV}%`
        return totalV
    }

    getInputs() {
        for (let i = 0; i < this.plusBtns.length; i++) {
            this.plusBtns[i].addEventListener('click', () => {
                if (this.availableVote.textContent > 0) {
                    // this.inputs[i].value = Number(++this.currVal);
                    this.inputs[i].value++
                    let remainingVote = this.totalVote()
                    this.availableVote.textContent = Number(remainingVote) - 1
                }
            })
        }
    }

    getDecr() {
        for (let i = 0; i < this.plusBtns.length; i++) {
            this.minusBtns[i].addEventListener('click', () => {
                if (this.inputs[i].value-- <= 0) {
                    // this.inputs[i].value = Number(++this.currVal);
                    this.inputs[i].value--
                    let remainingVote = this.totalVote()
                    this.availableVote.textContent = Number(remainingVote) + 1
                }
            })
        }
    }
}




document.addEventListener('DOMContentLoaded', () => {
    const vote_sys = new voteSys()
    vote_sys.getInputs()
    vote_sys.getDecr()
})