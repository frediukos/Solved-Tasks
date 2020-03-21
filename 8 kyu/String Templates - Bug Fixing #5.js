// String Templates - Bug Fixing #5

/*
String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

◄PREVIOUS KATANEXT KATA►
BUGS   STRING   SES2015   BABEL
 */

function buildString(...templ){
  return `I like ${templ.join(', ')}!`;
}