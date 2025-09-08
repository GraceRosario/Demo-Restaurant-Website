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