//^ Exo 1 OBJET :
//* 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

// let personnage = {
//     nom : `batine` ,
//     prenom : `meryem` ,
//     age : 21 ,
//     taille : 1.69 ,

// }
// console.log(personnage.age);

// //* 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let personnage2 = {
//     nom : `ccdz` ,
//     prenom : `dztza` ,
//     age : 36 ,
//     taille : 1.60 ,

// }

// let personnage3 = {
//     nom : personnage.nom ,
//     prenom : personnage.prenom ,
//     age : personnage2.age ,
//     taille : personnage.taille,

// }

//* 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur du personnage1
//* 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une fonction 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.


// let prsn = {
//     nom: `batine` ,
//     prenom: `meryem`,
//     sePresenter(){
//         alert(`Bonjour je m'appelle ${ this.nom} ${this.prenom}`);
//     }
// }
// console.log(prsn.sePresenter());
//* 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let prsn = {
//     nom: `batine`,
//     age: 21,
//     prst(){
//         chng= prompt(` bonjour ${this.nom} changer mon age ${this.age}`);
//         this.age=chng
//     }
// }
// prsn.prst();
// console.log(prsn);

//^ Exo 2 OBJET

//* Exo 1
// let personnage = {
//     nom : `Batine`,
//     prenom : `meryem`,
//     sePresenter(){
//         alert(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)
//     }
// }
// console.log(personnage.sePresenter());
//* Exo 2

// let prsn = {
//     nom: `batine`,
//     age: 21,
//     lence(){
//         change =prompt(`changer ton age ${this.age}`)
//         this.age =change
//     }
// }
// prsn.lence()
// console.log(prsn);

//^ Exo 3 OBJET
//* Exo 1
// let personnage1 = {
//     nom: `François`,
//     panier1: [ `huile`,`tomate`,`pain`],
//     derober(){
//         this.panier1.push(personnage2.panier2["1"]);
//         this.panier1.push(personnage2.panier2["2"]);
//         personnage2.panier2.splice(1,2);
//     }
// }
// let personnage2 = {
//     nom: `Sergio`,
//     panier2: [ `oeufs`,`abricot`,`cerise`],
// }
// console.log(personnage1);
// console.log(personnage2);
// personnage1.derober()

//^ Exo 4 OBJET

let vieille_dame = {
    age: 80,
    nom:{
        premon:`emily`,
        nom_de_famille:`dzhfeufh`
    },
    moral: `mal`,
    objet:`canne`,
    parler(){
        if (this.moral == "mal") {
            alert(`Vous me dérangez et le frappe avec son ${this.objet}`);
        }else{
            alert(`bonjour ${this.nom.premon}`)
        }
    }
}
console.log(vieille_dame);
vieille_dame.parler()

let vieil_homme={
    nom: `michel`,
    adoucir(){
        vieille_dame.moral = "bien";
    }
}
console.log(vieil_homme);
vieil_homme.adoucir()
vieille_dame.parler()







