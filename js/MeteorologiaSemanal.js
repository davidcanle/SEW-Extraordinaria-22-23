class MeteorologiaSemanal {
    constructor() {
        this.url = 'https://api.open-meteo.com/v1/forecast?latitude=43.13&longitude=-5.80&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto';
    }	

    cargarPrevisionSemanal() {
        var meteorologiaSemanal = this;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (json) {
            var html = '';

            for(var dia = 0; dia< 7; dia++){
                html += "<h3> Tiempo para el día: " + json.daily.time[dia] + "</h3>";
                html += "<ul>"
                html += "<li> Prevision de tiempo: "+ meteorologiaSemanal.obtenerDescripcionTiempo(json.daily.weathercode[dia]) + "</li><li> Temperatura Mínima: " + json.daily.temperature_2m_min[dia] + " </li><li>Temperatura Máxima: " + json.daily.temperature_2m_max[dia] + "</li>";
                html += "</ul>"
                }
            document.getElementsByTagName("section")[0].innerHTML = html;
            },
            error: function () {
                console.log("No se ha podido obtener la información de la meteorología");
            }
        });

    }

    obtenerDescripcionTiempo(codigoTiempo) {
        switch (codigoTiempo) {
          case 0:
            return "Clear sky";
          case 1:
          case 2:
          case 3:
            return "Mainly clear, partly cloudy, and overcast";
          case 45:
          case 48:
            return "Fog and depositing rime fog";
          case 51:
          case 53:
          case 55:
            return "Drizzle: Light, moderate, and dense intensity";
          case 56:
          case 57:
            return "Freezing Drizzle: Light and dense intensity";
          case 61:
          case 63:
          case 65:
            return "Rain: Slight, moderate, and heavy intensity";
          case 66:
          case 67:
            return "Freezing Rain: Light and heavy intensity";
          case 71:
          case 73:
          case 75:
            return "Snow fall: Slight, moderate, and heavy intensity";
          case 77:
            return "Snow grains";
          case 80:
          case 81:
          case 82:
            return "Rain showers: Slight, moderate, and violent";
          case 85:
          case 86:
            return "Snow showers: Slight and heavy";
          case 95:
            return "Thunderstorm: Slight or moderate";
          case 96:
          case 99:
            return "Thunderstorm with slight and heavy hail";
          default:
            return "Código de tiempo desconocido";
        }
      }

}

let meteorologiaSemanal = new MeteorologiaSemanal();
