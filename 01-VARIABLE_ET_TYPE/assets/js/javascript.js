//*ceci est un commentaire sur une ligne

/* 
* Ceci est un commentaire
* sur plsuieur ligne
* La version de notre JS est ES6 ou ES2015
*/

 //*déclaration de variables en javascript
 //*=========================================

 let uneVariable; //*une seclaration de variable

 //*une déclaration de variable non initialisée

 console.log(uneVariable); //*affiche undefined  ===> car variable n'est pas initialisée

//* typeof ==> permet de connaitre le type d'une variable
console.log(typeof uneVariable); //* undefined ==> est un type indéfini en JS

//*On utilise l'opérateur =  pour faire des affectation ou assignation
//*La première assignation est appelé une initialisation
let maVariable = 25.1; //*déclaration suivie d'une assignation ou d'une affectation ou suivie d'une initialisation

console.log(maVariable); //*25.1
console.log(typeof maVariable);//*number ==> est type nombre JS 

//* let maVariable ="joachim"; //interdit ==> on ne peut pas déclarer la même variable de même nom plusieur fois avec le let

maVariable = "joachim"; //*assignation d'une nouvelle valeur autorisée en JS car "variable"
console.log(maVariable); //*joachim
console.log(typeof maVariable); //*string => string est le type chaine de caractères en JS

//*===============================================================================
//*on dit que JS est un language dynamiquement typé ou un language faiblement typé
//*===============================================================================

maVariable = true
console.log(maVariable); //*true
console.log(typeof maVariable); //*booléan (true, false / 1 ou 0) ==> est le type BOOlEEN

maVariable = null;
console.log(maVariable);
console.log(typeof maVariable); //*object ==> est le type objet en JS


//*On peut déclarer plusieurs variables sur la même ligne avec un seul mot cle let (non conseillé mais possible)
let age = 15, nom, estMajeur; 
nom = "Joachim";
estMajeur = false;

console.log(age, "ans");
console.log(nom);
console.log(estMajeur);


//*Les mots clés en JS ne peuvent être utilisés comme identifiant
//*let var; ==> interdit en JS
//*let false; ==> interdit en JS

//*let 5prenom = "dwwm-1b"; ==> un identificateur ne peut pas commencer par un nombre
let prenom5 = "dwwm-1b"
console.log(prenom5);

let $prenom ="joachim";
console.log($prenom);

let _prenom ="joachim";
console.log(_prenom);

//* par convention on va utiliser le camel case comme convention de nommage

//*========================================================
//*DECLARATION DE CONSTANTE
//*========================================================


//* Déclaration d'une constante avec le mot clé ====> const
const NOM_PRENOM = "Thierry Borris";

//* une constante ne peut être mdofiée. elle accepte une seul assignation
//* NOM_PRENOM ="Thierry Borris"; //=> interdit

//*UTILISATION DES VARIABLE & CONSTANTE
//*====================================

let a = 45;

let b = -15;

//*pour utiliser les variables, je les appelle par leur nom

console.log(a + b);

let c ="5";

console.log (a+b+c); //* 30 + "5" ==> 305
console.log(typeof (a+b+c)); //*string

//* l'opérateur + est dit polymorphe  ==> il s'adapte à son environnement d'execution

c = a + b;

let autreVariable ="Fin de cette partie du cours";

console.log(autreVariable);

