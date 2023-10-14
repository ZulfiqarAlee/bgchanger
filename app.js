let button = document.getElementById('btn');
let body = document.querySelector('body');
function bgchanger(){
    let randomColorCode = Math.floor(Math.random()* 16777215);
    let hashTag = "#" + randomColorCode.toString(16)
    button.addEventListener("click", bgchanger);
    let colorCode = document.getElementById('color-code');
    colorCode.innerHTML = hashTag;
    body.style.backgroundColor = hashTag;
    // console.log(hashTag,randomColorCode);

}
bgchanger()