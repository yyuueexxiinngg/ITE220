/**
 * Created by yyuue on 2017/6/9.
 */
// db4dbbf2a33a69bcca894e336f9bc5f7
var url = "https://api.themoviedb.org/3/";
var key = "api_key=db4dbbf2a33a69bcca894e336f9bc5f7" ;
var keyWord = getUrlVars();
if(keyWord.id != null && keyWord.id != ""){
    loadingOverview();
    loadingCast();
}else {
    $("#result").html("<h1>Empty keywords, please check and try again</h1>")
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


function loadingOverview(){
    $.ajax({
        url: url+"movie/"+keyWord.id+"?"+key,
        type: "GET",
        beforeSend: function () {
            $("#result").text("Loading...") ;
        },
        complete: function () {
            // message.innerHTML = "Successfully done!";
        },
        success: function (data) {
            var string = "";
            string += "<div class='row'>";
                string += "<div class='row synopsis'>";
                string += "<div class='col-md-3'>";
                string += "<a href='https://image.tmdb.org/t/p/w640"+ data.poster_path+ "' target='_blank'>";
                if(data.poster_path != null){
                    string += "<img  class='poster-thumbnail' src='https://image.tmdb.org/t/p/w640"+ data.poster_path+ "'/>"
                }else {
                    string += "<img  class='poster-thumbnail' src='http://via.placeholder.com/640x960/' />";
                };
                string += "</a>";
                string += "</div>";
                var genre = "";
                for (var a=0;a<data.genres.length;a++){
                    genre += data.genres[a].name+" "
                }
                if(genre == ""){
                    genre += "No information"
                }

                string += "<div class='col-md-9'>";
                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<h3 class='text-info'>" + data.title + "</h3></a>";
                string += "</div>"
                string += "</div>";
                string += "<div class='col-md-9'>";
                 string +="<div class='progress'><div class='progress-bar progress-bar-success' style='width: "+data.vote_average*10+"%'>Vote: "+data.vote_average*10+"%</div><div class='progress-bar progress-bar-danger' style='width: "+(100-data.vote_average*10)+"%'></div></div>"
                 string += "</div>";
                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<h4 class='text-primary'>Popularity:"+data.popularity.toFixed(2)+" Genres: "+genre+"</h4>";
                string += "</div>"
                string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "Overview:<br/><h3>"+data.overview+"</h3>";
                string += "</div>"
                string += "</div>";

            string += "<div class='row'>";
            string += "<div class='col-md-12'>";
            string += "<h4 class='text-info'>Run time: "+data.runtime+" min Revenue: "+data.revenue+"</h4>";
            string += "</div>"
            string += "</div>"


               string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<h4>Release date: "+data.release_date+"</h4>";
                string += "</div>"
                string += "</div>";



                string += "</div>";
                string += "</div>";

            $("#result").html(string)

        },
        error: function () {
            // message.innerHTML = "We are sorry";
        }
    })
};

function loadingCast(){
    $.ajax({
        url: url+"movie/"+keyWord.id+"/credits?"+key,
        type: "GET",
        beforeSend: function () {
            $("#addon").text("Loading...") ;
        },
        complete: function () {
            // message.innerHTML = "Successfully done!";
        },
        success: function (data) {
            console.log(data)
            var string = "";

            for(var i = 0; i<6;i++) {
                string += "<div class='col-md-2'>";
                string += "<a href='https://image.tmdb.org/t/p/w640" + data.cast[i].profile_path + "' target='_blank'>";
                string += "<img  class='poster-thumbnail' src='https://image.tmdb.org/t/p/w640"+ data.cast[i].profile_path+ "'/>"
                string += "</a>";
                string += "<p>"+data.cast[i].name+"</p>"
                string += "</div>";


            };

            $("#addon").html(string)

        },
        error: function () {
            // message.innerHTML = "We are sorry";
        }
    })
};
