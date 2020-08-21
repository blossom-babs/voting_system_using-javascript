class voteSys {
  constructor() {
    this.availableVote = document.getElementById('available-vote')
    this.parentBoard = document.getElementById('leaderboard-card')
    this.evicted = document.getElementById('eviction-div')
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
    this.users = [{
        name: 'Dorathy',
        votes: 0,
        id: 0,
        img: '/images/dorathy.png'
      },
      {
        name: 'Erica',
        votes: 0,
        id: 1,
        img: '/images/erica.jpg'
      },
      {
        name: 'Laycon',
        votes: 0,
        id: 2,
        img: '/images/laycon.jpg'
      },
      {
        name: 'Kiddwaya',
        votes: 0,
        id: 3,
        img: '/images/kiddwaya.jpg'
      },
      {
        name: 'Ozo',
        votes: 0,
        id: 4,
        img: '/images/ozo.jpg'
      },
      {
        name: 'Nengi',
        votes: 0,
        id: 5,
        img: '/images/nengi.png'
      }
    ]
  }



  getInputs() {
    for (let i = 0; i < this.plusBtns.length; i++) {
      this.plusBtns[i].addEventListener('click', () => {
        if (this.availableVote.textContent > 0) {
          this.inputs[i].value++
          this.remainingVote = this.totalVote()
          this.availableVote.textContent = Number(this.remainingVote) - 1

          let calculatons = (Number(this.availableVote.textContent)) * 100 / 10
          this.progressBar.style.width = `${calculatons}%`
          // this.voteCuml[i] = this.inputs[i].value
          this.users[i].votes = Number(this.inputs[i].value)

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
    return totalV
  }

  getDecr() {
    for (let i = 0; i < this.plusBtns.length; i++) {
      this.minusBtns[i].addEventListener('click', () => {
        if (this.inputs[i].value > 0) {
          this.inputs[i].value--
          this.remainingVote = this.totalVote()
          this.availableVote.textContent = Number(this.remainingVote) + 1

          let calculatons = (Number(this.availableVote.textContent)) * 100 / 10
          this.progressBar.style.width = `${calculatons}%`
        }
      })
    }
  }

  getVoteCuml() {
    // this.dashboard.addEventListener('click', () => {
    let indexScore = this.users
    let sortingByVotes = indexScore.sort((a, b) => b.votes - a.votes)
    console.log(sortingByVotes)

    let divEl = document.createElement('div')
    divEl.classList.add('grid-lb')
    divEl.innerHTML = `
    <div class='card-lb'>
      <div class='flex-lb'>
      <img src=${this.users[0].img} alt="">
      <h6 class="flex-name">${this.users[0].name}</h6>
      <div class="score-num">1</div>
      </div>
      </div>

      <div class='card-lb'>
      <div class='flex-lb'>
      <img src=${this.users[1].img} alt="">
      <h6 class="flex-name">${this.users[1].name}</h6>
      <div class="score-num">2</div>
      </div>
      </div>

      <div class='card-lb'>
      <div class='flex-lb'>
      <img src=${this.users[2].img} alt="">
      <h6 class="flex-name">${this.users[2].name}</h6>
      <div class="score-num">3</div>
      </div>
      </div>

      <div class='card-lb'>
      <div class='flex-lb'>
      <img src=${this.users[3].img} alt="">
      <h6 class="flex-name">${this.users[3].name}</h6>
      <div class="score-num">4</div>
      </div>
      </div>

      <div class='card-lb'>
      <div class='flex-lb'>
      <img src=${this.users[4].img} alt="">
      <h6 class="flex-name">${this.users[4].name}</h6>
      <div class="score-num">5</div>
      </div>
      </div>

      <div class='card-lb'>
      <div class='flex-lb'>
      <img src=${this.users[5].img} alt="">
      <h6 class="flex-name">${this.users[5].name}</h6>
      <div class="score-num">6</div>
      </div>
      </div>
      `
    this.parentBoard.appendChild(divEl)
    let divOl = document.createElement('div')
    divOl.classList.add('eviction-notice')

    divOl.innerHTML = `
    <p> <span id="evicted">${this.users[5].name} was evicted</span></p>
    `

    this.evicted.appendChild(divOl)

  }

  // append() {

  // }

}

document.addEventListener('DOMContentLoaded', () => {


  const vote_sys = new voteSys()

  vote_sys.getInputs()
  vote_sys.getDecr()

  const btn = document.getElementById('go-to-lb')
  const lbd = document.getElementById('lbd')
  const goToVote = document.getElementById('go-to-vote')

  // vote_sys.parentBoard.removeChild(vote_sys.divEl)
  // console.log(vote_sys.parentBoard)
  // vote_sys.evicted.removeChild(vote_sys.divOl)


  btn.addEventListener('click', () => {
    if (vote_sys.availableVote.textContent > 0) {
      lbd.classList.remove('d-none')
    } else {
      lbd.classList.add('d-none')
      vote_sys.getVoteCuml()

    }

  })

});