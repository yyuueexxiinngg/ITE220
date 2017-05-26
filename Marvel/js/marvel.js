/**
 * Created by yyuue on 2017/5/23.
 */
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1c52493a947b08be84fdb5608cf8eb9d&hash=ceee58664797496e2f7110444360cff8
var marvel = {
    render: function () {
        var message = document.getElementById("message");
        var footer = document.getElementById("footer");
        var marvelContainer = document.getElementById("marvel-container");
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
                footer.innerHTML = data.attributionHTML;

                var string = "";
                string += "<div class='row'>";
                for(var i = 0; i<data.data.results.length;i++){

                    var element = data.data.results[i];
                    console.log(element.name);

                    string += "<div class='col-md-3'>";
                    string += "<a href='" +element.urls[0].url+ "' target='_blank'>";
                    string += "<img src='" + element.thumbnail.path +"/portrait_fantastic."+ element.thumbnail.extension +"' />";
                    string += "</a>";
                    string += "<h3>" + element.name + "</h3>";
                    string += "</div>";

                    if((i+1) % 4 == 0){
                        string += "</div>";
                        string += "<div class='row'>";
                    };
                };

                marvelContainer.innerHTML = string;

            },
            error: function () {
                message.innerHTML = "We are sorry";
            }
        })
    },
};
marvel.render();
