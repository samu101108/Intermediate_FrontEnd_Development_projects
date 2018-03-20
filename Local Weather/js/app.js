  if (navigator.geolocation) { // if geolocation is present, do...
    navigator.geolocation.getCurrentPosition(function(position) {
      var url = "https://api.openweathermap.org/data/2.5/weather?";
      var latitude = position.coords.latitude; //assign latitude to a variable
      var longitude = position.coords.longitude; // assign longitude to a variable
      var unit = ["&units=metric", "&units=imperial"];
      // o toggle da metrica é igual ao projeto da lampada click (esta no codepen)
      var token = "&APPID=9c2f8e61e7b4c8d97a651fe5a5b04868";

      $.getJSON(url + "lat=" + latitude + "&lon=" + longitude + unit[0] + token, function(a) {
        // ifs para as imagens

        // if(day){
          // background-color: lightblue;
        //   if(clouds) {}
        //   if(rain) {}
        //   if(snow) {}
        //   if(hail) {}
        // }
        // elseif(night){
          // background-color: navy;
        //   if(clouds) {}
        //   if(rain) {}
        //   if(snow) {}
        //   if(hail) {}
        // }
        // else{ console.log("Tempo não determidado");}


        var temperature = Math.round(a.main.temp);

        $('#temperature').html(temperature);
        $('#city').html(a.name);
        $('#main').html(a.weather[0].main);

        // icone
        var iconcode = a.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#wicon').attr('src', iconurl);

        $('#max').html(a.main.temp_max);
        $('#min').html(a.main.temp_min);
        $('#description').html(a.weather[0].description);

        // $('#country').html(a.sys.country);
        // $('#rain').html(a.rain.3h);//unespected token
        // $('#sunrise').html(a.sys.sunrise);
        // $('#sunset').html(a.sys.sunset);
        //$('#humi').html(a.main.humidity);
        //$('#wind').html(a.wind.speed);

      });
    })
  };
