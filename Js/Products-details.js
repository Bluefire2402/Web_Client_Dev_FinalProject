const products = [
    { id: 1, name: "Fender Stratocaster", 
      price: 850, 
      desc: "Classic guitar for rock and alternative", 
      img: "images/Stratocaster.jpg"
    },
    { id: 2, name: "Gibson Les Paul",
      price: 1200, 
      desc: "Perfect for any genre", 
      img: "images/LesPaul (1).jpg"
    },
    { id: 3, 
        name: "Ibanez RG550", 
        price: 900, 
        desc: "Great for metal", 
        img: "images/Ibanez.jpg"
    },
    { id: 4,
         name: "Yamaha Pacifica 112V", 
         price: 300, desc: "Cheap and versatile", 
         img: "images/Yamaha.jpg"
    },
    { id: 5,
         name: "Taylor 214ce Acoustic",
         price: 1000, 
         desc: "High quality acoustic guitar", 
         img: "images/Taylor.jpg"
    },
    { id: 6,
         name: "Fender Precision Bass",
         price: 800, 
         desc: "Classic bass sound", 
         img: "images/Fender.jpg"
    },
    { id: 7, 
        name: "Music Man StingRay", 
        price: 1100, 
        desc: "Powerful bass for rock", 
        img: "images/MusicMan.jpg"
    },
    { id: 8, 
        name: "Ibanez SR300", 
        price: 350, 
        desc: "Lightweight bass", 
        img: "images/Ibanezs bass.jpg"
    },
    { id: 9,
         name: "Pearl Export Drum Kit",
         price: 500,
         desc: "Popular drum kit",
         img: "images/Pearl.jpg"
    },
    { id: 10,
         name: "Roland TD-17",
         price: 900,
         desc: "Electronic drum kit",
         img: "images/Roland.jpg"
    },
    { id: 11,
         name: "Yamaha Stage Custom",
         price: 1000,
         desc: "Professional drum set",
         img: "images/YamahaDrums.jpg"
    },
    { id: 12,
         name: "Yamaha P-45",
         price: 600, 
         desc: "Digital piano",
         img: "images/Yamaha keys.jpg"
    },
    { id: 13,
         name: "Roland JUNO-DS61",
         price: 800, 
         desc: "Keyboard for performance", 
         img: "images/RolandKeys.jpg"
    },
    { id: 14, 
         name: "Shure SM58", 
         price: 120, 
         desc: "Professional microphone", 
         img: "images/Shure.jpg"
    },
    { id: 15, 
        name: "Focusrite Scarlett 2i2", 
        price: 200, 
        desc: "Audio interface", 
        img: "images/Scarlet (4).jpg"
    }
];
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);
if (product) {
    document.getElementById("name").textContent = product.name;
    document.getElementById("price").textContent = "$" + product.price.toFixed(2);
    document.getElementById("desc").textContent = product.desc;
    document.getElementById("img").src = product.img;
} else {
    document.getElementById("name").textContent = "The product was not found";
}
function addToCart(){
    const quantity = document.getElementById("quantity").value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("The product was added to the cart");
}
function Darkmode() {
    document.body.classList.toggle("dark-mode")
    }