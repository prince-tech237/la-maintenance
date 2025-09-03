 document.getElementById("formulaire").addEventListener("submit", function(e) {
    e.preventDefault();
    const nom= document.getElementById("name").value
    const donne ={nom}
    localStorage.setItem("user", JSON.stringify(donne))
    window.location.href="membre.html"
    // r=prompt('D')
})

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