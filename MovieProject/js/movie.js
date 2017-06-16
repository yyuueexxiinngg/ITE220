// db4dbbf2a33a69bcca894e336f9bc5f7
var url = "https://api.themoviedb.org/3/";
var key = "api_key=db4dbbf2a33a69bcca894e336f9bc5f7" ;

function loading(type) {
    $.ajax({
        url: url+"movie/"+type+"?"+key,
        type: "GET",
        beforeSend: function () {
            $("#"+type).text("Loading")
        },
        complete: function () {
            // message.innerHTML = "Successfully done!";
        },
        success: function (data) {
            var string = "";

            for(var i = 0; i<6;i++){

                var element = data.results[i];

                string += "<div class='col-md-2 '>";
                string += "<a href='detail.html?id="+element.id+"' target='_blank'>";
                if(element.poster_path != null){
                    string += "<img  class='img-thumbnail' src='https://image.tmdb.org/t/p/w640"+ element.poster_path+ "'/>"
                }else {
                    string += "<img  class='img-thumbnail' src='http://via.placeholder.com/640x960/' />";
                };
                string += "<p>" + element.title + "</p>";
                string += "</a>";
                string += "</div>";

            };

            $("#"+type).html(string)

        },
        error: function () {
            // message.innerHTML = "We are sorry";
        }
    })
};
function load() {
    loading("popular");
    loading("top_rated");
    loading("now_playing");
}

load();