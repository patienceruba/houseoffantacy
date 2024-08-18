document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#cat-menu').onclick = function(){
        let cat = document.querySelector('.categories');
        if (cat.style.width === "4%") {
            cat.style.width = "25%";
            document.querySelector('#close').style.display = "flex";
            document.querySelector('#cat-menu').style.display = "none";
            document.querySelector('.cat-icon').style.marginLeft = "85%";
            document.querySelector('.cat-nav').style.display = 'block';
            document.querySelector('#profile').style.display = "none";
        } else {
            cat.style.width = "4%"; 
        }
    }
});
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#profile').onclick = function(){
        let cati = document.querySelector('.categories');
        if (cati.style.width === "4%") {
            cati.style.width = "25%";
            document.querySelector('#close').style.display = "flex";
            document.querySelector('.login-ops').style.maxHeight = '150px';
            document.querySelector('.cat-icon').style.marginLeft = "85%";
            document.querySelector('#cat-menu').style.display = 'none';
            document.querySelector('#profile').style.display = "none";
        }
        else{
            cati.style.width = "4%";
        }
}
})
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#close').onclick = function(){
        let cat = document.querySelector('.categories');
        if (cat.style.width === "25%") {
            cat.style.width = "4%";
            document.querySelector('#close').style.display = "none";
            document.querySelector('#cat-menu').style.display = "flex";
            document.querySelector('#cat-menu').style.cursor = "pointer";
            document.querySelector('.cat-icon').style.marginLeft = "50%";
            document.querySelector('.cat-nav').style.display = 'none';
            document.querySelector('.login-ops').style.maxHeight = '0px';
            document.querySelector('#profile').style.display = "flex";
        } else {
            cat.style.width = "25%";  
        }
    }
});



