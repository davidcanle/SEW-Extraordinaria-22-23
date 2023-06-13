class Mapa {
    constructor() {
        this.latitud = 43.194273150509176
        this.longitud =  -5.164018282119591
    }

    getMapFromGoogleMaps(){
        var seccion = document.getElementsByTagName("section")[3];   
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var parameters = "center=" + this.latitud + "," + this.longitud+ "&zoom=15&size=700x500&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud+ "&sensor=false&key=AIzaSyAiA_e-dMWmR161LLbpMMNcLsBKkXeYLuo"; 
        this.mapaEstatico = url + parameters;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' alt='Mapa estático del concejo de Ponga'> </img>";
    }
}

let mapa = new Mapa();