class UI {
    constructor() {
        this.availableVote = document.getElementById('available-vote');
        this.inputs = document.querySelectorAll('input')
        this.progressBar = document.getElementById('progressbar')

        this.setH1Vote = document.getElementById('h1-vote-oup')
        this.currVal = this.setH1Vote.value

        this.setH2Vote = document.getElementById('h2-vote-oup')
        this.H2currVal = this.setH1Vote.value

        this.setH3Vote = document.getElementById('h3-vote-oup')
        this.H3currVal = this.setH3Vote.value

        this.setH4Vote = document.getElementById('h4-vote-oup')
        this.H4currVal = this.setH4Vote.value

        this.setH5Vote = document.getElementById('h5-vote-oup')
        this.H5currVal = this.setH5Vote.value

        this.setH6Vote = document.getElementById('h6-vote-oup')
        this.H6currVal = this.setH6Vote.value
    }

    totalVote() {
        let totalV = this.availableVote.textContent
        this.progressBar.style.width = `${totalV}%`
        return totalV
    }

    h1VoteCumulative() {
        if (this.availableVote.textContent > 0) {
            this.setH1Vote.value = Number(++this.currVal);
            let remainingVote = this.totalVote()
            this.availableVote.textContent = remainingVote - 1
        }
    }

    h1VoteDecrementing() {
        if (this.currVal > 0) {
            this.setH1Vote.value = Number(--this.currVal);
            let voteLeft = this.totalVote()
            this.availableVote.textContent = Number(voteLeft) + 1
        }
    }

    h2VoteCumul() {
        if (this.availableVote.textContent > 0) {
            this.setH2Vote.value = Number(++this.H2currVal);
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) - 1
        }
    }

    h2VoteDecr() {
        if (this.H2currVal > 0) {
            this.setH2Vote.value = Number(--this.H2currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) + 1
        }
    }

    h3VoteCuml() {
        if (this.availableVote.textContent > 0) {
            this.setH3Vote.value = Number(++this.H3currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) - 1
        }
    }

    h3VoteDecr() {
        if (this.H3currVal > 0) {
            this.setH3Vote.value = Number(--this.H3currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) + 1
        }
    }

    
    h4VoteCuml() {
        if (this.availableVote.textContent > 0) {
            this.setH4Vote.value = Number(++this.H4currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) - 1
        }
    }

    h4VoteDecr() {
        if (this.H4currVal > 0) {
            this.setH4Vote.value = Number(--this.H4currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) + 1
        }
    }

    h5VoteCuml() {
        if (this.availableVote.textContent > 0) {
            this.setH5Vote.value = Number(++this.H5currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) - 1
        }
    }

    h5VoteDecr() {
        if (this.H5currVal > 0) {
            this.setH5Vote.value = Number(--this.H5currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) + 1
        }
    }

    h6VoteCuml() {
        if (this.availableVote.textContent > 0) {
            this.setH6Vote.value = Number(++this.H6currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) - 1
        }
    }

    h6VoteDecr() {
        if (this.H6currVal > 0) {
            this.setH6Vote.value = Number(--this.H6currVal)
            let remainingVote = this.totalVote()
            this.availableVote.textContent = Number(remainingVote) + 1
        }
    }


}