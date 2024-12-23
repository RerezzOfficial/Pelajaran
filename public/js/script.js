    // Fungsi untuk toggle mode tema
    function toggleTheme() {
      const body = document.body;
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", newTheme);

      const themeIcon = document.getElementById("theme-icon");
      themeIcon.className = newTheme === "dark" ? "fas fa-moon theme-toggle" : "fas fa-sun theme-toggle";
    }

    // Fungsi untuk menyalin teks dari textarea
    function copyText() {
      const textarea = document.querySelector("textarea");
      textarea.select();
      document.execCommand("copy");
      alert("Teks telah disalin!");
    }

    // Intersection Observer untuk animasi elemen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Elemen mulai terlihat saat 10% terlihat di viewport
    );

    // Mendaftarkan elemen yang akan diamati
    document.querySelectorAll(".header, .proj").forEach((element) => {
      observer.observe(element);
    });
