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

    var count = 0;
    function devInfo() {
        var ele = document.getElementById("dev-info");
        ele.addEventListener("click",disaplay);
    }
    function disaplay() {
        var info = document.getElementById("myinfo");
        var display =  "block";
        var innerText1 = "<p class='lead'  style='display: ";
        var innerText2 = "'>Andrew<br/>IT student<br/><a href='https://yyuueexxiinngg.github.io/ITE220/' target='_blank'>https://yyuueexxiinngg.github.io/ITE220/</a></p>";
        count += 1;
       if(count%2===1){
            info.innerHTML = innerText1+display+innerText2;
        }else {
            display = "none";
            info.innerHTML = innerText1+display+innerText2;
        }


    }

    devInfo();
}