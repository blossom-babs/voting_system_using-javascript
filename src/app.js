function eventListeners() {
  const goToLB = document.getElementById('go-to-lb')
  const votePage = document.getElementById('vote-pg')
  const leaderBdPage = document.getElementById('leaderbd')
  const goToVote = document.getElementById('go-to-vote')
  const vs = new voteSys()

  goToLB.addEventListener('click', () => {

    vs.getVoteCuml()

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
  eventListeners();
})