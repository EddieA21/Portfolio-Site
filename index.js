function changePage(newPage){
    const page = document.getElementById("main1");
    const page2 = document.getElementById(newPage);
    page.style.display = "none";
    page2.style.display = "block";
}
function backbtn(newPage, project){
    const page = document.getElementById("main1");
    const page2 = document.getElementById(newPage);
    const page3 = document.getElementById(project);
    const element1 = document.querySelectorAll('.intro');
    element1.forEach(element => {element.style.animationDuration = '0.9s'});
    const element2 = document.querySelectorAll('.intro2');
    element2.forEach(element => {element.style.animationDuration = '0.9s'});
    const element3 = document.querySelectorAll('.left2');
    element3.forEach(element => {element.style.animationDuration = '0.9s'});
    const element4 = document.querySelectorAll('.right');
    element4.forEach(element => {element.style.animationDuration = '0.9s'});
    const element5 = document.querySelectorAll('#home');
    element5.forEach(element => {element.style.animationDuration = '0.9s'});
    const element6 = document.querySelectorAll('.skills');
    element6.forEach(element => {element.style.animationDuration = '0.9s'});
    const element7 = document.querySelectorAll('.skillintro');
    element7.forEach(element => {element.style.animationDuration = '0.9s'});
    page.style.display = "block";
    page2.style.display = "none";
    if(page3){
        setTimeout(()=> {page3.scrollIntoView({behavior: 'smooth'})}, 1000);
    }
}
