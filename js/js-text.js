setTimeout(function() {
  var typing = new Typed(".textnya", {
    strings: ["Hai", "Aku mengucapkan kepadamu", "Selamat Tahun Baru!","Apapun yang akan dilakukan ditahun ini","Semoga semuanya tercapai dengan baik","Jalani tahun baru ini dengan semangat!!","jangan lupa dengan plan yang dituju yaa.","Tuhan Yesus memberkati",""],
    typeSpeed: 50, 
    backSpeed: 20, 
    startDelay: 500, 
    backDelay: 1500, 
    loop: false,
    showCursor: true, 
    cursorChar: '|', 
    autoInsertCss: true,
    fadeOut: true, 
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    onComplete: function(self) {
      self.cursor.remove();

      setTimeout(function() {
        window.location.href = "Thanku.html";
      }, 3000);
    }
  });
}, 5000);
