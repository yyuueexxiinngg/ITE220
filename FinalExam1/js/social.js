/**
 * Created by yyuue on 2017/5/26.
 */
var btn = document.getElementById("btn").addEventListener("click",post);
var comment = document.getElementById("comment");
var content = "";
var loadedTime = moment().format('YYYYMMDDhmmss');
var time = "";
var relativeTime = "";
function post() {
    var ele = document.getElementById("mind");
    if(ele.value!="") {
        content += "<h3>" + ele.value + "</h3><br />";
        time = moment().format('YYYYMMDDhmmss');
        content += time;
        relativeTime = time - loadedTime;
        comment.innerHTML = content;
        ele.value = "";
        console.log(relativeTime)
    }
}