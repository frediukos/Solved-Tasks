// Random case

/*
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Note: this function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.
FUNDAMENTALS
 */

function randomCase(x){
    let newX = ''; let index;
    for (let i = 0; i < x.length; i++){
        index = Math.round(Math.random(1, 3));
        switch(index){
            case 1: newX = newX + x[i].toLowerCase(); break;
            default: newX = newX + x[i].toUpperCase(); break;
        }
    }
    return newX;
}