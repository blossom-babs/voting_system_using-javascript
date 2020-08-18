
    decrVal() {
        Array.from(this.inputs).forEach(input => {
            switch (input.id) {
                case 'h1-vote-oup':
                    this.h1VoteDecrementing()
                    break;
                case 'h2-vote-oup':
                    let h2Currval = input.value;
                    break;
                case 'h3-vote-oup':
                    input.value = input.value;
                    break;
                case 'h4-vote-oup':
                    input.value = input.value;
                    break;
                case 'h5-vote-oup':
                    input.value = input.value;
                    break;
                case 'h6-vote-oup':
                    input.value = input.value;
                    break;
                default:
                    console.log(`oops, the code doesn't`)
            }
        })

    }

    // increase val starts


    incrVal() {
        Array.from(this.inputs).forEach(input => {
            switch (input.id) {
                case 'h1-vote-oup':
                    this.h1VoteCumulative()
                    break;
                case 'h2-vote-oup':
                    this.h2VoteCumul()
                    break;
                case 'h3-vote-oup':
                    input.value = input.value;
                    break;
                case 'h4-vote-oup':
                    input.value = input.value;
                    break;
                case 'h5-vote-oup':
                    input.value = input.value;
                    break;
                case 'h6-vote-oup':
                    input.value = input.value;
                    break;
                default:
                    console.log(`oops, the code doesn't`)
            }
        })

    }

    // increase val ends

    
       Array.from(incrVotesAllHs).forEach(link =>{
           link.addEventListener('click', ()=> {
               ui.incrVal()
               ui.totalVote()
           })
       })

       Array.from(DecrVotesAllHs).forEach(link => {
           link.addEventListener('click', ()=>{
               ui.decrVal()
               ui.totalVote()
            //ui.minusEval()
           })
       })

       //

       const incrVotesAllHs = document.querySelectorAll('.fa-plus')
       const DecrVotesAllHs = document.querySelectorAll('.fa-minus')