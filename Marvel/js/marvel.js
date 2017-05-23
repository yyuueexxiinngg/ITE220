/**
 * Created by yyuue on 2017/5/23.
 */
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1c52493a947b08be84fdb5608cf8eb9d&hash=ceee58664797496e2f7110444360cff8
var marvel = {
    render: function () {
        var message = document.getElementById("message");
        var url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1c52493a947b08be84fdb5608cf8eb9d&hash=ceee58664797496e2f7110444360cff8';
        $.ajax({
            url: url,
            type: "GET",
            beforeSend: function () {
                message.innerHTML = "Loading...";
            },
            complete: function () {
                message.innerHTML = "Successfully done!";
            },
            success: function (data) {

            },
            error: function () {
                message.innerHTML = "We are sorry";
            }
        })
    },
};
marvel.render();
