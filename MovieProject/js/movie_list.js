var url = "https://api.themoviedb.org/3/";
var key = "api_key=db4dbbf2a33a69bcca894e336f9bc5f7" ;
var keyWord = getUrlVars();
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



function loading(type,page) {
     var pageNum = parseInt(page);
    $.ajax({
        url: url+"movie/"+type+"?"+key+"&page="+page,
        type: "GET",
        beforeSend: function () {
            $("#content").html("<h1 class='text-warning'>Loading</h1>")
        },
        complete: function () {
            // message.innerHTML = "Successfully done!";
        },
        success: function (data) {
            var string = "";

            if(type == "popular"){
                string += "<h1 class='text-info'>Most popular movies</h1>"
            }else if(type == "top_rated"){
                string += "<h1 class='text-info'>Top rated movies</h1>"
            }else if(type == "now_playing"){
                string += "<h1 class='text-info'>Now playing movies</h1>"
            }
            for(var i = 0; i<data.results.length;i++){

                var element = data.results[i];
                string += "<div class='row synopsis'>";
                    string += "<div class='col-md-3'>";
                        string += "<a href='detail.html?id="+element.id+"'  target='_blank'>";
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
                                 string += "<a href='detail.html?id="+element.id+"' target='_blank'><h4 class='text-info'>" + element.title + "</h4></a>";
                             string += "</div>"
                        string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<p class='text-primary'>Rate:"+element.vote_average+" Popularity:"+element.popularity.toFixed(2)+" Genres: "+genre+"</p>";
                string += "</div>"
                string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "Overview:<br/><h4>"+element.overview+"</h4>";
                string += "</div>"
                string += "</div>";

                string += "<div class='row'>";
                string += "<div class='col-md-12'>";
                string += "<p>Release date: "+element.release_date+"</p>";
                string += "</div>"
                string += "</div>";



                    string += "</div>";
                string += "</div>";


            };
            string += "<nav aria-label='Page navigation'><ul class='pagination pagination-lg'>";
            if(pageNum == 1){
                string +="<li class='disabled'><a aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
                for (var i = 1;i<=11;i++){
                    if(i == pageNum){
                        string += "<li class='active'><a href='list.html?sort="+type+"&page="+i+"'>"+i+"</a></li>"
                    }else if(i == 10){
                        string += "<li class='disabled'><a>...</a></li>"
                    }else if(i == 11){
                        string += "<li><a href='list.html?sort="+type+"&page="+data.total_pages+"'>"+data.total_pages+"</a></li>"
                    }else {
                        string += "<li><a href='list.html?sort="+type+"&page="+i+"'>"+i+"</a></li>"
                    }
                }
            }else if(pageNum < 5){
                string +="<li><a href='list.html?sort="+type+"&page="+(pageNum-1)+"' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
                for (var i = 1;i<=11;i++){
                    if(i == pageNum){
                        string += "<li class='active'><a href='list.html?sort="+type+"&page="+i+"'>"+i+"</a></li>"
                    }else if(i == 10){
                        string += "<li class='disabled'><a>...</a></li>"
                    }else if(i == 11){
                        string += "<li><a href='list.html?sort="+type+"&page="+data.total_pages+"'>"+data.total_pages+"</a></li>"
                    }else {
                        string += "<li><a href='list.html?sort="+type+"&page="+i+"'>"+i+"</a></li>"
                    }
                }
            }else if(pageNum > data.total_pages-8){
                string +="<li><a href='list.html?sort="+type+"&page="+(pageNum-1)+"' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
                for (var i =  data.total_pages-8;i<=data.total_pages;i++){
                    if(i == pageNum){
                        string += "<li class='active'><a href='list.html?sort="+type+"&page="+i+"'>"+i+"</a></li>"
                    }else if(i == 10){
                        string += "<li class='disabled'><a>...</a></li>"
                    }else if(i == 11){
                        string += "<li><a href='list.html?sort="+type+"&page="+data.total_pages+"'>"+data.total_pages+"</a></li>"
                    }else {
                        string += "<li><a href='list.html?sort="+type+"&page="+i+"'>"+i+"</a></li>"
                    }
                };
            }else {
                string +="<li><a href='list.html?sort="+type+"&page="+(pageNum-1)+"' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
                var navNum = pageNum + 10;
                for (var i = pageNum-1;i<=navNum;i++){
                    if(i == pageNum-1){
                        string += "<li><a href='list.html?sort="+type+"&page="+1+"'>"+1+"</a></li>"
                    }else if(i == pageNum) {
                        string += "<li class='disabled'><a>...</a></li>"
                    }else if(i == pageNum+2) {
                        string += "<li class='active'><a href='list.html?sort="+type+"&page="+(i-2)+"'>"+(i-2)+"</a></li>"
                    }else if(i == pageNum+9){
                        string += "<li class='disabled'><a>...</a></li>"
                    }else if(i == pageNum+10){
                        string += "<li><a href='list.html?sort="+type+"&page="+data.total_pages+"'>"+data.total_pages+"</a></li>"
                    } else {
                        string += "<li><a href='list.html?sort="+type+"&page="+(i-2)+"'>"+(i-2)+"</a></li>"
                    };
                };
            }
            if(!(pageNum == data.total_pages)) {
                string += "<li><a href='list.html?sort="+type+"&page=" + (pageNum + 1) + "' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li></ul></nav>"
            }else {
                string += "<li class='disabled'><a aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li></ul></nav>"
            }
            $("#content").html(string)

        },
        error: function () {
            // message.innerHTML = "We are sorry";
        }
    })
};

if("sort" in keyWord){
    loading(keyWord.sort,keyWord.page)
}else {
    loading("popular",1)
};

