// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// array lista cognomi
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']; 
console.log(listaCognomi);

// chiedere cognome utente
var cognomeUtente = prompt("Scrivi il tuo cognome");
console.log(cognomeUtente); 

// inserire cognome utente nella lista
listaCognomi.push(cognomeUtente); 
console.log(listaCognomi);

// ordinare alfabeticamente
listaCognomi.sort(); 
console.log(listaCognomi);

// scrivere posizione umana partendo da 1
for (var i = 0; i < listaCognomi.length; i++) {
    console.log("Posizione n°" , i + 1, listaCognomi[i]);
}