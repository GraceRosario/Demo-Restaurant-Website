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
             function getLocation() {
         if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(showPos, showErr);
         } else {
           document.getElementById("loc").innerText = "Geolocation not supported.";
         }
       }
       
       function showPos(pos) {
         const lat = pos.coords.latitude;
         const lng = pos.coords.longitude;
         document.getElementById("loc").innerText = `Lat: ${lat}, Lng: ${lng}`;
       
         // you could even generate a Google Maps link
         console.log(`https://maps.google.com/?q=${lat},${lng}`);
       }
       
       function showErr(err) {
         console.log(err);
       }
      let dishName = document.getElementById("name").innerText;
      let qty = document.getElementById("quantity").value;
      let phone = "919137909697"; // replace with restaurant number
      let msg = `Hi, I want to order ${dishName}.\nQuantity: ${qty}\nDelivery Address: My location: https://www.google.com/maps?q=${lat},${lon}\nPayment: (COD/UPI)\nContact number: (optional)`;
      
      let url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    }