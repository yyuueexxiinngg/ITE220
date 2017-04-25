/**
 * Created by yyuueexxiinngg on 2017/4/18.
 */
/*
var calendar = {

    header:"<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
    displayCalendar: function () {
        var ele = document.getElementById("calendar");
        var calendarText = "<table class='table table-condensed'>";
        calendarText += this.header;
        for (var i = 1;i <= 31; i++){
            // calendarText += i;
        }
        calendarText += "</table>";
        ele.innerHTML = calendarText;
    }
}
calendar.displayCalendar();
    */
var header = "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>";
function displayCalendar() {
    var ele = document.getElementById("calendar");
    var calendarText = "<table class='table table-condensed'>";
    calendarText += header;
    for (var i = 1;i <= 31; i++){
        if(i%7===0){
            calendarText += "<th>"+i+"</th></tr><tr>";
        }else {
            calendarText += "<th>" + i + "</th>";
        }
    }
    calendarText += "</table>";
    ele.innerHTML = calendarText;
}
displayCalendar();