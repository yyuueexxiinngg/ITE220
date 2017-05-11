/**
 * Created by yyuueexxiinngg on 2017/4/28.
 */
window.onload = function () {
    function render() {
        var bangkok = document.getElementById("bangkok");
        var london = document.getElementById("london");
        var seoul = document.getElementById("seoul");
        var se;
        bangkok.addEventListener("click",function () {
            {
                var url = "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=e3c02d156ee5864a8718dd59b3be634e";
                $.ajax({
                    type:"GET",
                    url: url,
                    timeout: 2000,
                    success: function(data){
                        var icon = data.weather[0].icon;
                        var temp = data.main.temp - 273.15;
                        var humidity = data.main.humidity;
                        var ele = document.getElementById("result");
                        var ele2 = document.getElementById("icon");
                        var ele3 = document.getElementById("humidity");
                        ele.innerText = temp.toFixed(2);
                        ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
                        ele3.innerText = humidity;
                        console.log(loc);
                    }
                });
            }
        });
        london.addEventListener("click",function () {
            {
                var url = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=e3c02d156ee5864a8718dd59b3be634e";
                $.ajax({
                    type:"GET",
                    url: url,
                    timeout: 2000,
                    success: function(data){
                        var icon = data.weather[0].icon;
                        var temp = data.main.temp - 273.15;
                        var humidity = data.main.humidity;
                        var ele = document.getElementById("result");
                        var ele2 = document.getElementById("icon");
                        var ele3 = document.getElementById("humidity");
                        ele.innerText = temp.toFixed(2);
                        ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
                        ele3.innerText = humidity;
                        console.log(loc);
                    }
                });
            }
        });
        seoul.addEventListener("click",function () {
            {
                var url = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=e3c02d156ee5864a8718dd59b3be634e";
                $.ajax({
                    type:"GET",
                    url: url,
                    timeout: 2000,
                    success: function(data){
                        var icon = data.weather[0].icon;
                        var temp = data.main.temp - 273.15;
                        var humidity = data.main.humidity;
                        var ele = document.getElementById("result");
                        var ele2 = document.getElementById("icon");
                        var ele3 = document.getElementById("humidity");
                        ele.innerText = temp.toFixed(2);
                        ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
                        ele3.innerText = humidity;
                        console.log(loc);
                    }
                });
            }
        });

    }
    /*function weather() {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=e3c02d156ee5864a8718dd59b3be634e";
        $.ajax({
            type:"GET",
            url: url,
            timeout: 2000,
            success: function(data){
                var icon = data.weather[0].icon;
                var temp = data.main.temp - 273.15;
                var humidity = data.main.humidity;
                var ele = document.getElementById("result");
                var ele2 = document.getElementById("icon");
                var ele3 = document.getElementById("humidity");
                ele.innerText = temp.toFixed(2);
                ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
                ele3.innerText = humidity;
                console.log(loc);
            }
        });
    }
*/
    render();
};