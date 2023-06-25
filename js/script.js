function metodo() {
    const cd = document.getElementById('J');
    const ads = document.getElementById('lista');

    cd.addEventListener('pointerdown',() =>{
        ads.classList.toggle('menushow'); 
           
    });
}
window.addEventListener("load",metodo)