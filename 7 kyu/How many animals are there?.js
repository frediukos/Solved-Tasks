// How many animals are there?

/*
From a sentence, deduce the total number of animals.

For example :

"I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

"Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9
FUNDAMENTALS
 */

function countAnimals(s) {
    return s.replace(/[a-z,!.:]/gi, '')
            .split(' ').map(el => el * 1).reduce((a, b) => a+b)
}