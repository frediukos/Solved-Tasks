// IntroToArt

/*
Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

Write a function that takes an integer and returns a list of strings with a line-by-line image of the object.

Below is an example function:

get_w(3) # should return:
[
'*   *   *',
' * * * * ',
'  *   *  '
]

get_w(5) # should return:
[
'*       *       *',
' *     * *     * ',
'  *   *   *   *  ',
'   * *     * *   ',
'    *       *    '
]
Return an empty list for height < 2.
FUNDAMENTALS  LISTS   DATA STRUCTURES  ARRAYS  STRINGS
 */

function getW(h) {
    if (h < 2) return [];
    let prn = [];
    let gap = h*2-2-1;
    for (let i = 0; i < h; i++) {
        gap = h*2-2-1;
        if (i === 0) prn.push('*' + ' '.repeat(gap) + '*' + ' '.repeat(gap) + '*')
        else if (i === h-1) prn.push(' '.repeat(i) + '*' + ' '.repeat(gap) + '*' + ' '.repeat(i))
        else prn.push(' '.repeat(i) + '*' + ' '.repeat(gap - 2*i) + '*' + ' '.repeat(gap - (gap - 2*i)-1) + '*' + ' '.repeat(gap - 2*i) + '*' + ' '.repeat(i))
    }
    return prn;
}
