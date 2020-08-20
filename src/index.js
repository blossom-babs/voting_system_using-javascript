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
    this.img1Id = document.getElementById('img1')
    this.img2Id = document.getElementById('img2')
    this.img3Id = document.getElementById('img3')
    this.img4Id = document.getElementById('img4')
    this.img5Id = document.getElementById('img5')
    this.img6Id = document.getElementById('img6')

    this.name1 = document.getElementById('name1')
    this.name2 = document.getElementById('name2')
    this.name3 = document.getElementById('name3')
    this.name4 = document.getElementById('name4')
    this.name5 = document.getElementById('name5')
    this.name6 = document.getElementById('name6')

    this.scoreNum1 = document.getElementById('scoreNum1')
    this.scoreNum2 = document.getElementById('scoreNum2')
    this.scoreNum3 = document.getElementById('scoreNum3')
    this.scoreNum4 = document.getElementById('scoreNum4')
    this.scoreNum5 = document.getElementById('scoreNum5')
    this.scoreNum6 = document.getElementById('scoreNum6')


    this.evicted = document.getElementById('evicted')

    let indexScore = this.users
    let sortingByVotes = indexScore.sort((a, b) => b.votes - a.votes)
    console.log(sortingByVotes);

    // for (let u = 0; u < sortingByVotes.length; u++){
    //   this.img1Id.src = `${this.users[u].img}`
    //   this.name1.innerHTML = `${this.users[u].name}`
    //   this.scoreNum1.innerHTML = `${this.users[u].votes}`
    // }

    this.img1Id.src = `${this.users[0].img}`
    this.name1.innerHTML = `${this.users[0].name}`
    this.scoreNum1.innerHTML = `${this.users[0].votes}`

    this.img2Id.src = `${this.users[1].img}`
    this.name2.innerHTML = `${this.users[1].name}`
    this.scoreNum2.innerHTML = `${this.users[1].votes}`

    this.img3Id.src = `${this.users[2].img}`
    this.name3.innerHTML = `${this.users[2].name}`
    this.scoreNum3.innerHTML = `${this.users[2].votes}`

    this.img4Id.src = `${this.users[3].img}`
    this.name4.innerHTML = `${this.users[3].name}`
    this.scoreNum4.innerHTML = `${this.users[3].votes}`

    this.img5Id.src = `${this.users[4].img}`
    this.name5.innerHTML = `${this.users[4].name}`
    this.scoreNum5.innerHTML = `${this.users[4].votes}`

    this.img6Id.src = `${this.users[5].img}`
    this.name6.innerHTML = `${this.users[5].name}`
    this.scoreNum6.innerHTML = `${this.users[5].votes}`

    this.evicted.textContent = `${this.users[5].name}`

  }

}

document.addEventListener('DOMContentLoaded', () => {
  const vote_sys = new voteSys()

  vote_sys.getInputs()
  vote_sys.getDecr()

  const btn = document.getElementById('go-to-lb')
  const lbd = document.getElementById('lbd')
  const getCards = document.getElementById('leaderboard-card')
  const en = document.getElementById('en')


  btn.addEventListener('click', () => {
    if (vote_sys.availableVote.textContent > 0) {
      lbd.classList.remove('d-none')
    } else {
      lbd.classList.add('d-none')
      getCards.classList.remove('d-none')
      en.classList.remove('d-none')
      vote_sys.getVoteCuml()
    }

  })

});