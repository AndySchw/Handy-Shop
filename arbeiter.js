
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
var preis1 = 549

function anzahl1erh(){
    count1 = count1 + 1
    countEl.innerText = ("Anzahl: ") + count1
    
    addToCart({ name: document.getElementById(`1-product-title`).innerText, price: preis1, quantity: count1})
    komplettpreis()
    updateCartDisplay()
    
    // addToCart({ name: document.getElementById(`${1}-product-title`).innerText, 
    // price: parseInt( document.getElementById(`${1}-product-price`).innerText)});
}

function anzahl1senk(){
    
    
    if(count1>=1){count1=count1-1
    countEl.innerText = ("Anzahl: ") + count1}

    removeFromCart({ name: document.getElementById(`1-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();

    
    
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
    
    addToCart({ name: document.getElementById(`2-product-title`).innerText, price: preis2, quantity: count2})
    komplettpreis()
    updateCartDisplay()
}

function anzahl2senk(){
    if(count2>=1){count2=count2-1
    countEl2.innerText = ("Anzahl: ") + count2};

    removeFromCart({ name: document.getElementById(`2-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
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
    addToCart({ name: document.getElementById(`3-product-title`).innerText, price: preis3, quantity: count3})
    komplettpreis()
    updateCartDisplay()
}

function anzahl3senk(){
    if(count3>=1){count3=count3-1
    countEl3.innerText = ("Anzahl: ") + count3}
    removeFromCart({ name: document.getElementById(`3-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
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
    addToCart({ name: document.getElementById(`4-product-title`).innerText, price: preis4, quantity: count4})
    komplettpreis()
    updateCartDisplay()
}

function anzahl4senk(){
    if(count4>=1){count4=count4-1
    countEl4.innerText = ("Anzahl: ") + count4}
    removeFromCart({ name: document.getElementById(`4-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
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
    addToCart({ name: document.getElementById(`5-product-title`).innerText, price: preis5, quantity: count5})
    komplettpreis()
    updateCartDisplay()
}

function anzahl5senk(){
    if(count5>=1){count5=count5-1
    countEl5.innerText = ("Anzahl: ") + count5}
    removeFromCart({ name: document.getElementById(`5-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 5 ende

// Handy 6

fetchProduct(6)
    .then((product) => {
      updateProduct(product, '6');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl6 = document.getElementById("anzahl6")
var count6 = 0
var preis6 = 1749

function anzahl6erh(){
    count6 = count6 + 1 
    countEl6.innerText = ("Anzahl: ") + count6
    addToCart({ name: document.getElementById(`6-product-title`).innerText, price: preis6, quantity: count6})
    komplettpreis()
    updateCartDisplay()
}

function anzahl6senk(){
    if(count6>=1){count6=count6-1
    countEl6.innerText = ("Anzahl: ") + count6}
    removeFromCart({ name: document.getElementById(`6-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 6 ende

// Handy 7

fetchProduct(7)
    .then((product) => {
      updateProduct(product, '7');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl7 = document.getElementById("anzahl7")
var count7 = 0
var preis7 = 1499

function anzahl7erh(){
    count7 = count7 + 1 
    countEl7.innerText = ("Anzahl: ") + count7
    addToCart({ name: document.getElementById(`7-product-title`).innerText, price: preis7, quantity: count7})
    komplettpreis()
    updateCartDisplay()
}

function anzahl7senk(){
    if(count7>=1){count7=count7-1
    countEl7.innerText = ("Anzahl: ") + count7}
    removeFromCart({ name: document.getElementById(`7-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 7 ende

// Handy 8

fetchProduct(8)
    .then((product) => {
      updateProduct(product, '8');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl8 = document.getElementById("anzahl8")
var count8 = 0
var preis8 = 1499

function anzahl8erh(){
    count8 = count8 + 1 
    countEl8.innerText = ("Anzahl: ") + count8
    addToCart({ name: document.getElementById(`8-product-title`).innerText, price: preis8, quantity: count8})
    komplettpreis()
    updateCartDisplay()
}

function anzahl8senk(){
    if(count8>=1){count8=count8-1
    countEl8.innerText = ("Anzahl: ") + count8}
    removeFromCart({ name: document.getElementById(`8-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 8 ende

// Handy 9

fetchProduct(9)
    .then((product) => {
      updateProduct(product, '9');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl9 = document.getElementById("anzahl9")
var count9 = 0
var preis9 = 1099

function anzahl9erh(){
    count9 = count9 + 1 
    countEl9.innerText = ("Anzahl: ") + count9
    addToCart({ name: document.getElementById(`9-product-title`).innerText, price: preis9, quantity: count9})
    komplettpreis()
    updateCartDisplay()
}

function anzahl9senk(){
    if(count9>=1){count9=count9-1
    countEl9.innerText = ("Anzahl: ") + count9}
    removeFromCart({ name: document.getElementById(`9-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 9 ende

// Handy 10

fetchProduct(10)
    .then((product) => {
      updateProduct(product, '10');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl10 = document.getElementById("anzahl10")
var count10 = 0
var preis10 = 1099

function anzahl10erh(){
    count10 = count10 + 1 
    countEl10.innerText = ("Anzahl: ") + count10
    addToCart({ name: document.getElementById(`10-product-title`).innerText, price: preis10, quantity: count10})
    komplettpreis()
    updateCartDisplay()
}

function anzahl10senk(){
    if(count10>=1){count10=count10-1
    countEl10.innerText = ("Anzahl: ") + count10}
    removeFromCart({ name: document.getElementById(`10-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 10 ende

// Handy 11

fetchProduct(11)
    .then((product) => {
      updateProduct(product, '11');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl11 = document.getElementById("anzahl11")
var count11 = 0
var preis11 = 13

function anzahl11erh(){
    count11 = count11 + 1 
    countEl11.innerText = ("Anzahl: ") + count11
    addToCart({ name: document.getElementById(`11-product-title`).innerText, price: preis11, quantity: count11})
    komplettpreis()
    updateCartDisplay()
}

function anzahl11senk(){
    if(count11>=1){count11=count11-1
    countEl11.innerText = ("Anzahl: ") + count11}
    removeFromCart({ name: document.getElementById(`11-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 11 ende

// Handy 12

fetchProduct(12)
    .then((product) => {
      updateProduct(product, '12');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl12 = document.getElementById("anzahl12")
var count12 = 0
var preis12 = 40

function anzahl12erh(){
    count12 = count12 + 1 
    countEl12.innerText = ("Anzahl: ") + count12
    addToCart({ name: document.getElementById(`12-product-title`).innerText, price: preis12, quantity: count12})
    komplettpreis()
    updateCartDisplay()
}

function anzahl12senk(){
    if(count12>=1){count12=count12-1
    countEl12.innerText = ("Anzahl: ") + count12}
    removeFromCart({ name: document.getElementById(`12-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 12 ende

// Handy 13

fetchProduct(13)
    .then((product) => {
      updateProduct(product, '13');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl13 = document.getElementById("anzahl13")
var count13 = 0
var preis13 = 13

function anzahl13erh(){
    count13 = count13 + 1 
    countEl13.innerText = ("Anzahl: ") + count13
    addToCart({ name: document.getElementById(`13-product-title`).innerText, price: preis13, quantity: count13})
    komplettpreis()
    updateCartDisplay()
}

function anzahl13senk(){
    if(count13>=1){count13=count13-1
    countEl13.innerText = ("Anzahl: ") + count13}
    removeFromCart({ name: document.getElementById(`13-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 13 ende

// Handy 14

fetchProduct(14)
    .then((product) => {
      updateProduct(product, '14');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl14 = document.getElementById("anzahl14")
var count14 = 0
var preis14 = 120

function anzahl14erh(){
    count14 = count14 + 1 
    countEl14.innerText = ("Anzahl: ") + count14
    addToCart({ name: document.getElementById(`14-product-title`).innerText, price: preis14, quantity: count14})
    komplettpreis()
    updateCartDisplay()
}

function anzahl14senk(){
    if(count14>=1){count14=count14-1
    countEl14.innerText = ("Anzahl: ") + count14}
    removeFromCart({ name: document.getElementById(`14-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 14 ende

// Handy 15

fetchProduct(15)
    .then((product) => {
      updateProduct(product, '15');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl15 = document.getElementById("anzahl15")
var count15 = 0
var preis15 = 30

function anzahl15erh(){
    count15 = count15 + 1 
    countEl15.innerText = ("Anzahl: ") + count15
    addToCart({ name: document.getElementById(`15-product-title`).innerText, price: preis15, quantity: count15})
    komplettpreis()
    updateCartDisplay()
}

function anzahl15senk(){
    if(count15>=1){count15=count15-1
    countEl15.innerText = ("Anzahl: ") + count15}
    removeFromCart({ name: document.getElementById(`15-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 15 ende

// Handy 16

fetchProduct(16)
    .then((product) => {
      updateProduct(product, '16');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl16 = document.getElementById("anzahl16")
var count16 = 0
var preis16 = 19

function anzahl16erh(){
    count16 = count16 + 1 
    countEl16.innerText = ("Anzahl: ") + count16
    addToCart({ name: document.getElementById(`16-product-title`).innerText, price: preis16, quantity: count16})
    komplettpreis()
    updateCartDisplay()
}

function anzahl16senk(){
    if(count16>=1){count16=count16-1
    countEl16.innerText = ("Anzahl: ") + count16}
    removeFromCart({ name: document.getElementById(`16-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 16 ende

// Handy 17

fetchProduct(17)
    .then((product) => {
      updateProduct(product, '17');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl17 = document.getElementById("anzahl17")
var count17 = 0
var preis17 = 12

function anzahl17erh(){
    count17 = count17 + 1 
    countEl17.innerText = ("Anzahl: ") + count17
    addToCart({ name: document.getElementById(`17-product-title`).innerText, price: preis17, quantity: count17})
    komplettpreis()
    updateCartDisplay()
}

function anzahl17senk(){
    if(count17>=1){count17=count17-1
    countEl17.innerText = ("Anzahl: ") + count17}
    removeFromCart({ name: document.getElementById(`17-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 17 ende

// Handy 18

fetchProduct(18)
    .then((product) => {
      updateProduct(product, '18');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl18 = document.getElementById("anzahl18")
var count18 = 0
var preis18 = 40

function anzahl18erh(){
    count18 = count18 + 1 
    countEl18.innerText = ("Anzahl: ") + count18
    addToCart({ name: document.getElementById(`18-product-title`).innerText, price: preis18, quantity: count18})
    komplettpreis()
    updateCartDisplay()
}

function anzahl18senk(){
    if(count18>=1){count18=count18-1
    countEl18.innerText = ("Anzahl: ") + count18}
    removeFromCart({ name: document.getElementById(`18-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 18 ende

// Handy 19

fetchProduct(19)
    .then((product) => {
      updateProduct(product, '19');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl19 = document.getElementById("anzahl19")
var count19 = 0
var preis19 = 46

function anzahl19erh(){
    count19 = count19 + 1 
    countEl19.innerText = ("Anzahl: ") + count19
    addToCart({ name: document.getElementById(`19-product-title`).innerText, price: preis19, quantity: count19})
    komplettpreis()
    updateCartDisplay()
}

function anzahl19senk(){
    if(count19>=1){count19=count19-1
    countEl19.innerText = ("Anzahl: ") + count19}
    removeFromCart({ name: document.getElementById(`19-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 19 ende

// Handy 20

fetchProduct(20)
    .then((product) => {
      updateProduct(product, '20');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl20 = document.getElementById("anzahl20")
var count20 = 0
var preis20 = 70

function anzahl20erh(){
    count20 = count20 + 1 
    countEl20.innerText = ("Anzahl: ") + count20
    addToCart({ name: document.getElementById(`20-product-title`).innerText, price: preis20, quantity: count20})
    komplettpreis()
    updateCartDisplay()
}

function anzahl20senk(){
    if(count20>=1){count20=count20-1
    countEl20.innerText = ("Anzahl: ") + count20}
    removeFromCart({ name: document.getElementById(`20-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 20 ende

// Handy 21

fetchProduct(21)
    .then((product) => {
      updateProduct(product, '21');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl21 = document.getElementById("anzahl21")
var count21 = 0
var preis21 = 70

function anzahl21erh(){
    count21 = count21 + 1 
    countEl21.innerText = ("Anzahl: ") + count21
    addToCart({ name: document.getElementById(`21-product-title`).innerText, price: preis21, quantity: count21})
    komplettpreis()
    updateCartDisplay()
}

function anzahl21senk(){
    if(count21>=1){count21=count21-1
    countEl21.innerText = ("Anzahl: ") + count21}
    removeFromCart({ name: document.getElementById(`21-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 21 ende

// Handy 22

fetchProduct(22)
    .then((product) => {
      updateProduct(product, '22');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl22 = document.getElementById("anzahl22")
var count22 = 0
var preis22 = 14

function anzahl22erh(){
    count22 = count22 + 1 
    countEl22.innerText = ("Anzahl: ") + count22
    addToCart({ name: document.getElementById(`22-product-title`).innerText, price: preis22, quantity: count22})
    komplettpreis()
    updateCartDisplay()
}

function anzahl22senk(){
    if(count22>=1){count22=count22-1
    countEl22.innerText = ("Anzahl: ") + count22}
    removeFromCart({ name: document.getElementById(`22-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 22 ende

// Handy 23

fetchProduct(23)
    .then((product) => {
      updateProduct(product, '23');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl23 = document.getElementById("anzahl23")
var count23 = 0
var preis23 = 14

function anzahl23erh(){
    count23 = count23 + 1 
    countEl23.innerText = ("Anzahl: ") + count23
    addToCart({ name: document.getElementById(`23-product-title`).innerText, price: preis23, quantity: count23})
    komplettpreis()
    updateCartDisplay()
}

function anzahl23senk(){
    if(count23>=1){count23=count23-1
    countEl23.innerText = ("Anzahl: ") + count23}
    removeFromCart({ name: document.getElementById(`23-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 23 ende

// Handy 24

fetchProduct(24)
    .then((product) => {
      updateProduct(product, '24');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl24 = document.getElementById("anzahl24")
var count24 = 0
var preis24 = 46

function anzahl24erh(){
    count24 = count24 + 1 
    countEl24.innerText = ("Anzahl: ") + count24
    addToCart({ name: document.getElementById(`24-product-title`).innerText, price: preis24, quantity: count24})
    komplettpreis()
    updateCartDisplay()
}

function anzahl24senk(){
    if(count24>=1){count24=count24-1
    countEl24.innerText = ("Anzahl: ") + count24}
    removeFromCart({ name: document.getElementById(`24-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 24 ende

// Handy 25

fetchProduct(25)
    .then((product) => {
      updateProduct(product, '25');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl25 = document.getElementById("anzahl25")
var count25 = 0
var preis25 = 70

function anzahl25erh(){
    count25 = count25 + 1 
    countEl25.innerText = ("Anzahl: ") + count25
    addToCart({ name: document.getElementById(`25-product-title`).innerText, price: preis25, quantity: count25})
    komplettpreis()
    updateCartDisplay()
}

function anzahl25senk(){
    if(count25>=1){count25=count25-1
    countEl25.innerText = ("Anzahl: ") + count25}
    removeFromCart({ name: document.getElementById(`25-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 25 ende

// Handy 26

fetchProduct(26)
    .then((product) => {
      updateProduct(product, '26');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl26 = document.getElementById("anzahl26")
var count26 = 0
var preis26 = 41

function anzahl26erh(){
    count26 = count26 + 1 
    countEl26.innerText = ("Anzahl: ") + count26
    addToCart({ name: document.getElementById(`26-product-title`).innerText, price: preis26, quantity: count26})
    komplettpreis()
    updateCartDisplay()
}

function anzahl26senk(){
    if(count26>=1){count26=count26-1
    countEl26.innerText = ("Anzahl: ") + count26}
    removeFromCart({ name: document.getElementById(`26-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 26 ende

// Handy 27

fetchProduct(27)
    .then((product) => {
      updateProduct(product, '27');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl27 = document.getElementById("anzahl27")
var count27 = 0
var preis27 = 41

function anzahl27erh(){
    count27 = count27 + 1 
    countEl27.innerText = ("Anzahl: ") + count27
    addToCart({ name: document.getElementById(`27-product-title`).innerText, price: preis27, quantity: count27})
    komplettpreis()
    updateCartDisplay()
}

function anzahl27senk(){
    if(count27>=1){count27=count27-1
    countEl27.innerText = ("Anzahl: ") + count27}
    removeFromCart({ name: document.getElementById(`27-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 27 ende

// Handy 28

fetchProduct(28)
    .then((product) => {
      updateProduct(product, '28');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl28 = document.getElementById("anzahl28")
var count28 = 0
var preis28 = 20

function anzahl28erh(){
    count28 = count28 + 1 
    countEl28.innerText = ("Anzahl: ") + count28
    addToCart({ name: document.getElementById(`28-product-title`).innerText, price: preis28, quantity: count28})
    komplettpreis()
    updateCartDisplay()
}

function anzahl28senk(){
    if(count28>=1){count28=count28-1
    countEl28.innerText = ("Anzahl: ") + count28}
    removeFromCart({ name: document.getElementById(`28-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 28 ende

// Handy 29

fetchProduct(31)
    .then((product) => {
      updateProduct(product, '31');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl31 = document.getElementById("anzahl31")
var count31 = 0
var preis31 = 40

function anzahl31erh(){
    count31 = count31 + 1 
    countEl31.innerText = ("Anzahl: ") + count31
    addToCart({ name: document.getElementById(`31-product-title`).innerText, price: preis31, quantity: count31})
    komplettpreis()
    updateCartDisplay()
}

function anzahl31senk(){
    if(count31>=1){count31=count31-1
    countEl31.innerText = ("Anzahl: ") + count31}
    removeFromCart({ name: document.getElementById(`31-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 29 ende

// Handy 30

fetchProduct(30)
    .then((product) => {
      updateProduct(product, '30');
    })
    .catch((error) => {
      console.error('Fehler beim Abrufen des Produkts:', error);
    });


var countEl30 = document.getElementById("anzahl30")
var count30 = 0
var preis30 = 30

function anzahl30erh(){
    count30 = count30 + 1 
    countEl30.innerText = ("Anzahl: ") + count30
    addToCart({ name: document.getElementById(`30-product-title`).innerText, price: preis30, quantity: count30})
    komplettpreis()
    updateCartDisplay()
}

function anzahl30senk(){
    if(count30>=1){count30=count30-1
    countEl30.innerText = ("Anzahl: ") + count30}
    removeFromCart({ name: document.getElementById(`30-product-title`).innerText});
    komplettpreis();
    updateCartDisplay();
    
};

// Handy 30 ende


// Gesamtpreis

var gesamtPr = document.getElementById("gesamtp")

function komplettpreis(){
    ergebnis = (count1*preis1) + (count2*preis2) + (count3*preis3) + (count4*preis4) + (count5*preis5) + (count6*preis6) + (count7*preis7) + (count8*preis8) + (count9*preis9) + (count10*preis10) + (count11*preis11) + (count12*preis12) + (count13*preis13) + (count14*preis14) + (count15*preis15) + (count16*preis16) + (count17*preis17) + (count18*preis18) + (count19*preis19) + (count20*preis20) + (count21*preis21) + (count22*preis22) + (count23*preis23) + (count24*preis24) + (count25*preis25) + (count26*preis26) + (count27*preis27) + (count28*preis28) + (count31*preis31) + (count30*preis30);
    gesamtPr.innerText = ("Gesamtpreis: ") + ergebnis.toFixed(2) + ("€");
    return ergebnis
};

// Gesamtpreis Ende


// Button Bezahlt




// Button Bezahlt ende 

// Warenkob befüllen und leeren

var cartItems = []; // initialisiert das Warenkorb-Array

function addToCart(item) {
  const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
  if (existingItem) {
    // Wenn der Artikel bereits im Warenkorb vorhanden ist, erhöhen Sie die Anzahl
    existingItem.quantity + item.quantity;
  } else {
    // Andernfalls fügen Sie den Artikel dem Warenkorb hinzu
    cartItems.push(item);
  }
  updateCartDisplay()
}

function removeFromCart(itemName) {
  const itemIndex = cartItems.findIndex(cartItem => cartItem.name === itemName);
  if (itemIndex !== -1) {
    const itemPrice = cartItems[itemIndex].price; // Holen Sie sich den Preis des Artikels
    const itemQuantity = cartItems[itemIndex].quantity; // Holen Sie sich die Anzahl des Artikels
    cartItems.splice(itemIndex, 1); // Entfernen Sie den Artikel aus dem Warenkorb
    cartTotal -= itemPrice * itemQuantity; // Ziehen Sie den Preis des entfernten Artikels von der Gesamtsumme ab
  }
  updateCartDisplay();
  
}




function updateCartDisplay() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = ""; // leert das Div-Element
  
  cartItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `Produkt: ${item.name} Preis: ${item.price}€, Anzahl ${item.quantity}`;
    
    const removeButton = document.createElement("button");
    
    removeButton.classList.add("btn-close");
    removeButton.addEventListener("click", () => {
      const itemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
        if (itemIndex !== -1) {
          const removedItem = cartItems.splice(itemIndex, 1)[0];
          
          updateCartDisplay(); // aktualisiert den Warenkorb nach Entfernung
          
          const gesamtPr = document.getElementById("gesamtp");
          const alteGesamtsumme = parseFloat(gesamtPr.innerText.split(": ")[1].split("€")[0]);
          const neueGesamtsumme = alteGesamtsumme - removedItem.price * removedItem.quantity;
          gesamtPr.innerText = `Gesamtpreis: ${neueGesamtsumme.toFixed(2)}€`;
          
        }
        
      });
    
    
    itemDiv.appendChild(removeButton);
    cartItemsDiv.appendChild(itemDiv);
  });

}



function reset() {
  alert("Dieser Betrag wurde bezahlt.");
  
  count1 = 0;count2 = 0;count3 = 0;count4 = 0;count5 = 0;count6 = 0;count7 = 0;count8 = 0;count9 = 0;count10 = 0;
  count11 = 0;count12 = 0;count13 = 0;count14 = 0;count15 = 0;count16 = 0;count17 = 0;count18 = 0;count19 = 0;count20 = 0;
  count21 = 0;count22 = 0;count23 = 0;count24 = 0;count25 = 0;count26 = 0;count27 = 0;count28 = 0;count31 = 0;count30 = 0;
  
  
  anzahl1erh();anzahl2erh();anzahl3erh();anzahl4erh();anzahl5erh();anzahl6erh();anzahl7erh();anzahl8erh();anzahl9erh();anzahl10erh();
  anzahl11erh();anzahl12erh();anzahl13erh();anzahl14erh();anzahl15erh();anzahl16erh();anzahl17erh();anzahl18erh();anzahl19erh();anzahl20erh();
  anzahl21erh();anzahl22erh();anzahl23erh();anzahl24erh();anzahl25erh();anzahl26erh();anzahl27erh();anzahl28erh();anzahl31erh();anzahl30erh();
 
  anzahl1senk();anzahl2senk();anzahl3senk();anzahl4senk();anzahl5senk();anzahl6senk();anzahl7senk();anzahl8senk();anzahl9senk();anzahl10senk();
  anzahl11senk();anzahl12senk();anzahl13senk();anzahl14senk();anzahl15senk();anzahl16senk();anzahl17senk();anzahl18senk();anzahl19senk();anzahl20senk();
  anzahl21senk();anzahl22senk();anzahl23senk();anzahl24senk();anzahl25senk();anzahl26senk();anzahl27senk();anzahl28senk();anzahl31senk();anzahl30senk();
  
  clearCart()
  
};

function clearCart() {
  cartItems.splice(0, cartItems.length);
  updateCartDisplay();
}
