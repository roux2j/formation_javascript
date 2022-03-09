//*====================================
//* Les saisies utilisateurs en JS
//*====================================


//* Rappel sur l'utilisation de la console
//*----------------------------------------
//*console.log("permet d'afficher une journalisation dans la console");
//*console.warn(3/0, "division dans l'ensemble des entiers");
//*console.error("attention ceci affiche un erreur");



//*Pour afficher des informations sous forme d'alert ---> alert
//*alert ("bonjour javascript depuis la boite d'alerte"); //alerte () <==> window.alert

//*pour dialoguer avec le user --> confirm
//*---------------------------------------
//*let reponse = confirm ("voulez-vous confirmer votre prénom ?"); //*confirm() ==> window.alert
//*console.log(reponse); // confirm () ==> window.confirm()


//*toute saisie pour JS  dans le prompt est un string ( chaine de caractère)



//* saisie user -> prompt()
//*let saisie = prompt("Entrez votre âge"); 
//*console.log(saisie);
//*console.log(typeof saisie);



//*saisie = Number(saisie);
//*saisie =  saisie * (1); //*transforme en numbre aussi grace à la multiplication
//*console.log(saisie);
//*console.log(typeof saisie);



let prenom= prompt("Entrez votre prenom");
let age= prompt("entrez votre âge");

//*console.log("bonjour" + prenom + "vous avez" + age + "ans");
console.log('bonjour ' + prenom + ', vous avez ' + age + 'ans');






