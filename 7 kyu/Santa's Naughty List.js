//Santa's Naughty List

function findChildren(santasList, children) {
    console.log(children);
    let havePresent = (santasList.filter(el => children.find(child => child === el)).sort());
    return havePresent.filter((el,i) => i === havePresent.indexOf(el))
}