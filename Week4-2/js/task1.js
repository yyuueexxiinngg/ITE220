window.onload = function () {
    function render() {
        var word = "Web 2 is awesome!";
        document.getElementById("screenX").textContent = window.screenX;
        document.getElementById("screenY").textContent = window.screenY;
        document.getElementById("screenWidth").textContent = window.innerWidth;
        document.getElementById("screenHeight").textContent = window.innerHeight;
        document.getElementById("location").textContent = document.lastModified;
        document.getElementById("myWord").textContent = word;
        document.getElementById("isItAwesome").textContent = word.indexOf("awesome") > -1 ? "Yes" : "No";


    };

    var button = document.getElementById("button");
    window.addEventListener("resize",render);
    button.addEventListener("click",render);
    
    
    function devInfo() {
        var ele = document.getElementById("dev-info");
        var info = document.getElementById("myinfo");
        var innerText = "Andrew<br/>IT student<br/><a href='https://yyuueexxiinngg.github.io/ITE220/' target='_blank'>https://yyuueexxiinngg.github.io/ITE220/</a>";
        ele.addEventListener("click",function () {
            info.innerHTML = innerText;
        })
    }

    devInfo();
}