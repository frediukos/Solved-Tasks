// RGB To Hex Conversion

/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
 */

function rgb(r, g, b){
    let p = [r, g, b];
    let str = '';
    for (let i = 0; i < p.length; i++) {
        if (p[i] > 255){
            p[i] = 255;
        } else {
            if (p[i] < 0) p[i] = 0;
          }
    }
    for (let i = 0; i < p.length; i++){
        if (p[i] < 16){
            str += '0' + p[i].toString(16);
        } else str += p[i].toString(16);
    }
    str = '' + str;
    return (str.toUpperCase());
}