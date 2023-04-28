
// fetch anwendung



function fetchProduct(id) {
    return fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json());
  }
  
  function updateProduct(product, idPrefix) {
    const titleEl = document.getElementById(`${idPrefix}-product-title`);
    const priceEl = document.getElementById(`${idPrefix}-product-price`);
    const imageEl = document.getElementById(`${idPrefix}-product-image`);
  
    titleEl.textContent = product.title;
    priceEl.textContent = product.price.toFixed(2) + '€';
    imageEl.src = product.thumbnail;
    
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
var preis1 = 

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
var preis2 = 18.50

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
var preis3 = 18.50

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






// Gesamtpreis

var gesamtPr = document.getElementById("gesamtp")




function komplettpreis(){
    ergebnis = (count1*preis1) + (count2*preis2) + (count3*preis3)
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