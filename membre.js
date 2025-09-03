const data= JSON.parse(localStorage.getItem("user"))
  if (data) {
    document.getElementById("info").innerText = `Nom : ${data.nom}`;
  } else {
    document.getElementById("info").innerText = "Aucune donnée trouvée.";
  }



  
  const menuBtn = document.querySelector('.im');
       const menu = document.querySelector('.menu');
if(menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}