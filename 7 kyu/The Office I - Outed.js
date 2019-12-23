//The Office I - Outed
function outed(meet, boss){
    let score = 0;
    let numOfPeople = 0;
    for (let key in meet) {
        if (key === boss) {
            score +=meet[key] * 2;
        } else {
            score +=meet[key];
        };
        numOfPeople++;
    }
    score = (score / numOfPeople);
    return score < 5 || score === 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

// or

function outed(meet, boss){
    return (Object.values(meet).reduce((a,b)=>(a+b),0)+(meet[boss]))
    / (Object.values(meet).length) > 5 ? 'Nice Work Champ!':'Get Out Now!';
}