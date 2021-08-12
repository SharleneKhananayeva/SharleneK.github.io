/* .js files add interaction to your website */

var factList = [
  "1 in 3 women worldwide have experienced physical and/or sexual violence in their lifetime.",/*0*/
  "77 cents  is what women earn for every dollar that men get for the same work. Regarding leadership positions, only 24 percent of CEOs in the US were women and they earned 74.5 percent as much as male CEOs.",/*1*/
  "Each year, 15 million girls are married before the age of 18. That is 28 girls every minute.",/*2*/
  "It is estimated that up to 10 million children are victims of child sexual exploitation.",
  "Nearly twenty-five percent of female teens between the ages of fifteen and nineteen are not educated. This is a stark contrast to the ten percent of male teens who do not educated",
  "Domestic violence is a global problem that affects 35% of women worldwide.",
  "Globally, around 137 women are killed by their partner or a family member every day.",
  "30% of females globally have reported that their first sexual experience was forced.",];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
