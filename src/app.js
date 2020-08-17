console.log('hello world')
const goToLB = document.getElementById('go-to-lb')
const votePage = document.getElementById('vote-pg')
const leaderBdPage = document.getElementById('leaderbd')
const goToVote = document.getElementById('go-to-vote')

goToLB.addEventListener('click', () =>{
    console.log(`yo what is going on`)
    leaderBdPage.classList.remove('d-none')
votePage.classList.add('d-none')

})

goToVote.addEventListener('click', () => {
leaderBdPage.classList.add('d-none')
votePage.classList.remove('d-none')

})