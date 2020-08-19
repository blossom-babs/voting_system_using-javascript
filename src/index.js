class voteSys {
  constructor() {
    this.availableVote = document.getElementById('available-vote')
    this.dashboard = document.getElementById('go-to-lb')
    this.progressBar = document.getElementById('progressbar')
    this.inputs = document.querySelectorAll('input')
    this.plusBtns = document.querySelectorAll('.fa-plus')
    this.minusBtns = document.querySelectorAll('.fa-minus')
    this.vt = document.getElementById('vt')
    this.lbd = document.getElementById('lbd')
    this.voteCuml = {}
    this.currVal = 0
    this.remainingVote = ''
  }



  getInputs() {
    for (let i = 0; i < this.plusBtns.length; i++) {
      this.plusBtns[i].addEventListener('click', () => {
        if (this.availableVote.textContent > 0) {
          this.inputs[i].value++
          this.remainingVote = this.totalVote()
          this.availableVote.textContent = Number(this.remainingVote) - 1
          this.voteCuml[i] = this.inputs[i].value
          //console.log(this.voteCuml)

        } else {
          this.plusBtns[i].disabled = true
          this.vt.classList.remove('d-none')
          const self = this
          setTimeout(() => {
            self.vt.classList.add('d-none')
          }, 4000)
        }

      })
    }

  }

  totalVote() {
    let totalV = this.availableVote.textContent
    this.progressBar.style.width = `${totalV}%`
    return totalV
  }

  getDecr() {
    for (let i = 0; i < this.plusBtns.length; i++) {
      this.minusBtns[i].addEventListener('click', () => {
        if (this.inputs[i].value > 0) {
          this.inputs[i].value--
          this.remainingVote = this.totalVote()
          this.availableVote.textContent = Number(this.remainingVote) + 1
        }
      })
    }
  }

  getVoteCuml() {
    this.dashboard.addEventListener('click', () => {
      let indexScore = this.voteCuml
      console.log(Object.entries(indexScore).sort((a, b) => b[1] - a[1]))
      let flatten = Object.values(this.voteCuml)
      console.log(flatten)
      if (flatten.length > 0) {
        const toNumbers = flatten.map(Number).reduce((acc, currVal) => acc + currVal)
      }

      if (this.availableVote.textContent > 0) {
        this.lbd.classList.remove('d-none')
        const selfLbd = this
        setTimeout(() => {
          selfLbd.lbd.classList.add('d-none')
        }, 4000)
      }

      console.log(this.availableVote.textContent)
      if (this.availableVote.textContent == 0) eventListeners();
    })


  }
}

function eventListeners() {
  const goToLB = document.getElementById('go-to-lb')
  const votePage = document.getElementById('vote-pg')
  const leaderBdPage = document.getElementById('leaderbd')
  const goToVote = document.getElementById('go-to-vote')


  goToLB.addEventListener('click', () => {
    leaderBdPage.classList.remove('d-none')
    votePage.classList.add('d-none')

  })

  goToVote.addEventListener('click', () => {
    leaderBdPage.classList.add('d-none')
    votePage.classList.remove('d-none')

  })
}

document.addEventListener('DOMContentLoaded', () => {
  const vote_sys = new voteSys()
  vote_sys.getInputs()
  vote_sys.getDecr()
  vote_sys.getVoteCuml()
  //eventListeners();
})