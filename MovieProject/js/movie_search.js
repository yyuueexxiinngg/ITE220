/**
 * Created by yyuue on 2017/6/9.
 */
// db4dbbf2a33a69bcca894e336f9bc5f7
var url = "https://api.themoviedb.org/3/";
var key = "api_key=db4dbbf2a33a69bcca894e336f9bc5f7" ;
var parameters = getUrlVars();
if(parameters.search != null && parameters.search != ""){
    search();
}else {
    $("#result").html("<h1>Empty keywords, please check and try again</h1>")
}
var genres = {
    "data": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
};


function checkGenre(id) {
    for(var i=0;i<=genres.data.length;i++){
        if(id==genres.data[i].id){
            return genres.data[i].name
        }
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
        function(m,key,value) {
            vars[key] = value;
        }
    );
    return vars;
}


function search(){
    $.ajax({
        url: url+"search/movie?"+key+"&query="+parameters.search,
        type: "GET",
        beforeSend: function () {
            $("#result").text("Loading...") ;
        },
        complete: function () {
            // message.innerHTML = "Successfully done!";
        },
        success: function (data) {
            // console.log(data)
            // $("#test").html(data.results[0].title+"<img src='https://image.tmdb.org/t/p/w640"+ data.results[0].poster_path+ "'/>")

            var string = "";
            string += "<div class='row'>";
            for(var i = 0; i<data.results.length;i++){

                var element = data.results[i];
                string += "<div class='row synopsis'>";
                string += "<div class='col-md-3'>";
                string += "<a href='detail.html?id="+element.id+"' target='_blank'>";
                if(element.poster_path != null){
                    string += "<img  class='poster-thumbnail' src='https://image.tmdb.org/t/p/w640"+ element.poster_path+ "'/>"
                }else {
                    string += "<img  class='poster-thumbnail' src='http://via.placeholder.com/640x960/' />";
                };
                string += "</a>";
                string += "</div>";
                var genre = "";
                for (var a=0;a<element.genre_ids.length;a++){
                    genre += checkGenre(element.genre_ids[a])+" "
                }
                if(genre == ""){
                    genre += "No information"
                }



                string += "<div class='col-md-9'>";
                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<a href='detail.html?id="+element.id+"' target='_blank'><h3 class='text-info'>" + element.title + "</h3></a>";
                string += "</div>"
                string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<h4 class='text-primary'>Rate:"+element.vote_average+" Popularity:"+element.popularity.toFixed(2)+" Genres: "+genre+"</h4>";
                string += "</div>"
                string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "Overview:<br/><h3>"+element.overview+"</h3>";
                string += "</div>"
                string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<h4>Release date: "+element.release_date+"</h4>";
                string += "</div>"
                string += "</div>";



                string += "</div>";
                string += "</div>";

            };

            $("#result").html(string)

        },
        error: function () {
            // message.innerHTML = "We are sorry";
        }
    })
};
