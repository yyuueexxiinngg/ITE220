/**
 * Created by yyuue on 2017/6/20.
 */

var btn = document.getElementById("submitComment").addEventListener("click",post);
var commentContainer = document.getElementById("commentContainer");
var content = "";
function post() {
    var ele = document.getElementById("comment");
    if(ele.value!="") {
        content += "<h3><b>" + ele.value + "</b></h3>";
        commentContainer.innerHTML = content;
        ele.value = "";
    }
}