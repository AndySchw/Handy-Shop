
// fetch anwendung




function fetchProduct(id) {
    return fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json());
  }
  
  function updateProduct(product, idPrefix) {
    const titleEl = document.getElementById(`${idPrefix}-product-title`);
    priceEl = document.getElementById(`${idPrefix}-product-price`);
    const imageEl = document.getElementById(`${idPrefix}-product-image`);
  
    titleEl.textContent = product.title;
    priceEl.textContent = product.price.toFixed(2) + '€';
    imageEl.src = product.thumbnail;
    preis1 = parseInt(priceEl.textContent)
  }
  
  
  
  
    

// fetch anwendung


// Handy 1

fetchProduct(1)
    .then((product) => {
      updateProduct(product, '1');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl = document.getElementById("anzahl1")

var count1 = 0
var preis1 = 0

function anzahl1erh(){
    count1 = count1 + 1
    
    countEl.innerText = ("Anzahl: ") + count1
    komplettpreis()
    
}

function anzahl1senk(){
    
    
    if(count1>=1){count1=count1-1
    countEl.innerText = ("Anzahl: ") + count1}
    komplettpreis()
    
    
}


 
// Handy 1 ende

// Handy 2

fetchProduct(2)
    .then((product) => {
      updateProduct(product, '2');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl2 = document.getElementById("anzahl2")
var count2 = 0
var preis2 = 899

function anzahl2erh(){
    count2 = count2 + 1 
    countEl2.innerText = ("Anzahl: ") + count2
    komplettpreis()
}

function anzahl2senk(){
    if(count2>=1){count2=count2-1
    countEl2.innerText = ("Anzahl: ") + count2}
    komplettpreis()
    
};

// Handy 2 ende

// Handy 3

fetchProduct(3)
    .then((product) => {
      updateProduct(product, '3');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl3 = document.getElementById("anzahl3")
var count3 = 0
var preis3 = 1249

function anzahl3erh(){
    count3 = count3 + 1 
    countEl3.innerText = ("Anzahl: ") + count3
    komplettpreis()
}

function anzahl3senk(){
    if(count3>=1){count3=count3-1
    countEl3.innerText = ("Anzahl: ") + count3}
    komplettpreis()
    
};

// Handy 3 ende

// Handy 4

fetchProduct(4)
    .then((product) => {
      updateProduct(product, '4');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl4 = document.getElementById("anzahl4")
var count4 = 0
var preis4 = 280

function anzahl4erh(){
    count4 = count4 + 1 
    countEl4.innerText = ("Anzahl: ") + count4
    komplettpreis()
}

function anzahl4senk(){
    if(count4>=1){count4=count4-1
    countEl4.innerText = ("Anzahl: ") + count4}
    komplettpreis()
    
};

// Handy 4 ende

// Handy 5

fetchProduct(5)
    .then((product) => {
      updateProduct(product, '5');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl5 = document.getElementById("anzahl5")
var count5 = 0
var preis5 = 499

function anzahl5erh(){
    count5 = count5 + 1 
    countEl5.innerText = ("Anzahl: ") + count5
    komplettpreis()
}

function anzahl5senk(){
    if(count5>=1){count5=count5-1
    countEl5.innerText = ("Anzahl: ") + count5}
    komplettpreis()
    
};

// Handy 5 ende





// Gesamtpreis

var gesamtPr = document.getElementById("gesamtp")


// function komplettpreis(){
//   preis1 =parseInt( document.getElementById(`${1}-product-price`).innerText);
//     ergebnis = (count1*preis1) + (count2*preis2) + (count3*preis3)
//     gesamtPr.innerText = ("Gesamtpreis: ") + ergebnis.toFixed(2) + ("€")
//     return ergebnis
// }

function komplettpreis(){
    ergebnis = (count1*preis1) + (count2*preis2) + (count3*preis3) + (count4*preis4) + (count5*preis5)
    gesamtPr.innerText = ("Gesamtpreis: ") + ergebnis.toFixed(2) + ("€")
    return ergebnis
}


// Gesamtpreis Ende


// Button Bezahlt


function reset() {
    alert("Der Kunde hat diesen Betrag bezahlt.\n" + ergebnis.toFixed(2) + "€");
    count1 = 0;
    count2 = 0;
    
    anzahl1erh()
    anzahl1senk()
    anzahl2erh()
    anzahl2senk()
    
    
};

// Button Bezahlt ende