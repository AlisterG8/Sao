const cd = document.getElementById('J');
function change(){
    const ads = document.getElementById('lista');

    ads.classList.toggle('menushow');
}
cd.onpointerdown = function(){
    change();
}