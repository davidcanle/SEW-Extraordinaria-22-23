class Noticias {
    constructor() {
        this.url = "https://newsapi.org/v2/everything?q=Ayuntamiento \"Ponga\" Asturias&language=es&pageSize=5&apiKey=c0073fe8f4dd47c99c093e925bdf8b04";
    }

    mostrarNoticias(){
        var seccion = document.getElementsByTagName("section")[4];
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (json) {
                var html = '';
                for (let i = 0; i < json.articles.length; i++) {
                    html += "<h3>" + json.articles[i].title + "</h3>";
                    html += "<p>" + json.articles[i].description + "</p>";
                    html += "<a href='" + json.articles[i].url + "'> Leer más </a>";
                }
                $(seccion).append(html);
            },
            error: function () {
                $(seccion).append("<p> No se ha podido obtener la información de las noticias </p>")
            }
        });
    }
}
let noticias = new Noticias();