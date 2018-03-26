  if (navigator.geolocation) { // if geolocation is present, do...
    navigator.geolocation.getCurrentPosition(function(position) {
      var url = "https://api.openweathermap.org/data/2.5/weather?";
      var latitude = position.coords.latitude; //assign latitude to a variable
      var longitude = position.coords.longitude; // assign longitude to a variable
      var unit = ["&units=metric", "&units=imperial"];
      // unit = unit[1];
      // if(unit==1){
      //   unit = unit[1];
      // }
          // fazer um assincrono com
          // xmlHttpRequest
          // para mudar só a unidade de medida e mostrar na tela
          // só o 'ºF'
          $("#unit").click(function() {
            $.get("https://api.openweathermap.org/data/2.5/weather?lat=-8.1199301&lon=-34.945139&units=metric&APPID=9c2f8e61e7b4c8d97a651fe5a5b04868", function(data, status) {
              alert ("data: " + data + "\nStatus: " + status);
            });
          });


      var token = "&APPID=9c2f8e61e7b4c8d97a651fe5a5b04868";
      $.getJSON(url + "lat=" + latitude + "&lon=" + longitude + unit[0] + token, function(a) {

        var temperature = Math.round(a.main.temp);

        $('#temperature').html(temperature);
        $('#city').html(a.name);
        $('#main').html(a.weather[0].description);

        // icone
        var iconcode = a.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#wicon').attr('src', iconurl);

        // para teste das imagens
        // iconcode = "11d";
          if (iconcode == "01d") {
            $("#default").toggleClass("clear_sky");
          }
          if (iconcode == "02d") {
            $("#default").toggleClass("few_clouds");
          }
          if (iconcode == "03d") {
            $("#default").toggleClass("scattered_clouds");
          }
          if (iconcode == "04d") {
            $("#default").toggleClass("broken_clouds");
          }
          if (iconcode == "09d") {
            $("#default").toggleClass("shower_rain");
          }
          if (iconcode == "10d") {
            $("#default").toggleClass("rain");
          }
          if (iconcode == "11d") {
            $("#default").toggleClass("thunderstorm");
          }
          if (iconcode == "13d") {
            $("#default").toggleClass("snow");
          }
          if (iconcode == "50d") {
            $("#default").toggleClass("mist");
          }
          // for night
          if (iconcode == "01n") {
            $("#default").toggleClass("clear_sky_night");
          }
          if (iconcode == "02n") {
            $("#default").toggleClass("few_clouds_night");
          }
          if (iconcode == "03n") {
            $("#default").toggleClass("scattered_clouds_night");
          }
          if (iconcode == "04n") {
            $("#default").toggleClass("broken_clouds_night");
          }
          if (iconcode == "09n") {
            $("#default").toggleClass("shower_rain_night");
          }
          if (iconcode == "10n") {
            $("#default").toggleClass("rain_night");
          }
          if (iconcode == "11n") {
            $("#default").toggleClass("thunderstorm_night");
          }
          if (iconcode == "13n") {
            $("#default").toggleClass("snow_night");
          }
          if (iconcode == "50n") {
            $("#default").toggleClass("mist_night");
          }

      });
    })
  };
