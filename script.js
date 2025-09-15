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
      let dishName = document.getElementById("name").innerText;
      let qty = document.getElementById("quantity").value;
      let phone = "919137909697"; // replace with restaurant number
      let msg = `Hi, I want to order ${dishName}.\nQuantity: ${qty}\nDelivery Address: (enter address here)\nPayment: (COD/UPI)\nContact number: (optional)`;
      
      let url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    }