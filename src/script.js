function eventListeners() {
    const h1Vote = document.getElementById('increase-H1-vote')
    const h1VoteDecr = document.getElementById('decrease-H1-vote')

    const h2Vote = document.getElementById('incr-h2')
    const h2VoteDecr = document.getElementById('decr-h2')

    const h3Vote = document.getElementById('incr-h3')
    const h3VoteDecr = document.getElementById('decr-h3')

    const h4Vote = document.getElementById('incr-h4')
    const h4VoteDecr = document.getElementById('decr-h4')

    const h5Vote = document.getElementById('incr-h5')
    const h5VoteDecr = document.getElementById('decr-h5')

    const h6Vote = document.getElementById('incr-h6')
    const h6VoteDecr = document.getElementById('decr-h6')
    
    const ui = new UI();

    h1Vote.addEventListener('click', () => {
        ui.h1VoteCumulative()
        ui.totalVote()
    })

    h1VoteDecr.addEventListener('click', () => {
        ui.h1VoteDecrementing()
        ui.totalVote()
    })

    h2Vote.addEventListener('click', () => {
        ui.h2VoteCumul()
        ui.totalVote()
    })

    h2VoteDecr.addEventListener('click', () => {
        ui.h2VoteDecr()
        ui.totalVote()
    })

    h3Vote.addEventListener('click', ()=>{
        ui.h3VoteCuml()
        ui.totalVote()
    })

    h3VoteDecr.addEventListener('click', () => {
        ui.h3VoteDecr()
        ui.totalVote()
    })

    h4Vote.addEventListener('click', ()=>{
        ui.h4VoteCuml()
        ui.totalVote()
    })

    h4VoteDecr.addEventListener('click', () => {
        ui.h4VoteDecr()
        ui.totalVote()
    })

    h5Vote.addEventListener('click', ()=>{
        ui.h5VoteCuml()
        ui.totalVote()
    })

    h5VoteDecr.addEventListener('click', () => {
        ui.h5VoteDecr()
        ui.totalVote()
    })

    h6Vote.addEventListener('click', ()=>{
        ui.h6VoteCuml()
        ui.totalVote()
    })

    h6VoteDecr.addEventListener('click', () => {
        ui.h6VoteDecr()
        ui.totalVote()
    })

}

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
})