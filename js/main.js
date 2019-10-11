function updateFoot(){
    let foot = document.querySelector(".footer");
    var date = new Date();
    let year = date.getFullYear();
    foot.innerHTML = `Powered by Iya Abubakar Institute of ICT ${year}`;
}
setTimeout(updateFoot, 10);