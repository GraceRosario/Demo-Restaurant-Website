function toggleMenu() {
      const dropdown = document.getElementById("dropdown-section");
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    // Optional: Close if clicked outside
    window.onclick = function(e) {
      if (!e.target.matches('.menu')) {
        const dropdown = document.getElementById("dropdown-section");
        dropdown.style.display = "none";
      }
    }

    function orderNow() {
      let basePrice = document.getElementById("price").innerText;
      basePrice = basePrice.replace(/[^0-9.]/g, ""); // removes ₹
      basePrice = parseFloat(basePrice); // makes it a number (120)
      const quantity = parseFloat(document.getElementById('quantity').value);
      const totalPrice = quantity * basePrice;
      const dishName = document.getElementById("name").innerText;
      const qty = document.getElementById("quantity").value;
      const phone = "919137909697"; // replace with restaurant number
      const quantityText = 
          quantity === 0.5 ? "half" : 
          quantity === 1 ? "1 full" : 
          quantity === 2 ? "2 full" : 
          quantity === 3 ? "3 full" : 
          quantity === 4 ? "4 full" : "";

      const msg = `Hi, I want to order ${dishName}.\nQuantity: ${qty}\nDelivery Address: (enter address here)\nPayment: (COD/UPI)\nContact number: (optional)\n${quantityText} product(s).\nTotal price: ₹${totalPrice}.`;
      
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    }

    function orderPieces() {
      let basePrice = document.getElementById("price").innerText;
      basePrice = basePrice.replace(/[^0-9.]/g, ""); // removes ₹
      basePrice = parseFloat(basePrice); // makes it a number (120)
      const quantity = parseFloat(document.getElementById('quantity').value);
      const totalPrice = quantity * basePrice;
      const dishName = document.getElementById("name").innerText;
      const qty = document.getElementById("quantity").value;
      const phone = "919137909697"; // replace with restaurant number
      const quantityText =  
          quantity === 1 ? "1 piece" : 
          quantity === 2 ? "2 pieces" : 
          quantity === 3 ? "3 pieces" : 
          quantity === 4 ? "4 pieces" :
          quantity === 4 ? "5 pieces" :
          quantity === 4 ? "6 pieces" :
          quantity === 4 ? "7 pieces" :
          quantity === 4 ? "8 pieces" :
          quantity === 4 ? "9 pieces" :
          quantity === 4 ? "10 pieces" : "";

      const msg = `Hi, I want to order ${dishName}.\nQuantity: ${qty}\nDelivery Address: (enter address here)\nPayment: (COD/UPI)\nContact number: (optional)\n${quantityText} product(s).\nTotal price: ₹${totalPrice}.`;
      
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    }