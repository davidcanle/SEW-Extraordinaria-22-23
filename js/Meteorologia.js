class Meteorologia {
    constructor() {
        this.apikey = "5b9d145e76890055aeec9a6605e79b8f";
    }



    cargarDatosDeMeteorologia() {
        var section = document.getElementsByTagName("section")[2]
        $.ajax({
            dataType: "json",
            url: "https://api.openweathermap.org/data/2.5/weather?q=Ponga,ES&units=metric&lang=es&appid=" + this.apikey,
            method: 'GET',
            success: function (json) {
                var html = '';
                html += "<p>Descripción: " + json.weather[0].description + "</p>";
                html += "<p>Latitud: " + json.coord.lat + " grados</p>";
                html += "<p>Longitud: " + json.coord.lon + " grados</p>";
                html += "<p>País: " + json.sys.country + "</p>";
                html += "<p>Temperatura: " + json.main.temp + " Cº</p>";
                html += "<p>Temperatura máxima: " + json.main.temp_max + " Cº</p>";
                html += "<p>Temperatura mínima: " + json.main.temp_min + " Cº</p>";
                html += "<p>Presión: " + json.main.pressure + " </p>";
                html += "<p>Humedad: " + json.main.humidity + " % </p>";
                html += "<p>Amanece a las: " + new Date(json.sys.sunrise * 1000).toLocaleTimeString() + "</p>";
                html += "<p>Oscurece a las: " + new Date(json.sys.sunset * 1000).toLocaleTimeString() + "</p>";
                html += "<p>Dirección del viento: " + json.wind.deg + " grados </p>";
                html += "<p>Velocidad del viento: " + json.wind.speed + " metros/segundo</p>";
                html += "<p>Hora de la medida: " + new Date(json.dt * 1000).toLocaleTimeString() + "</p>";
                html += "<p>Fecha de la medida: " + new Date(json.dt * 1000).toLocaleDateString() + "</p>";
                html += "<p>Visibilidad: " + json.visibility + " metros </p>";
                html += "<p>Nubosidad: " + json.clouds.all + " %</p>";

                $(section).append(html);

            },
            error: function () {
                $(section).append("<p> No se ha podido obtener la información de la meteorología </p>")
            }
        });
    }

}

let meteorologia = new Meteorologia();

