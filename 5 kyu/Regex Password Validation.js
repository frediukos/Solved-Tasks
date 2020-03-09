// Regex Password Validation

/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
 */

function validate(pass) {
  let long = pass.length >= 6;
  let lower = !!pass.match(/[a-z]/g);
  let upper = !!pass.match(/[A-Z]/g);
  let num = !!pass.match(/[0-9]/g);
  let sign = !pass.match(/\W/g);
  return long && lower && upper && num && sign;
}