class XMLtoHTML {

    xmlToHTML() {
        $.ajax({
            dataType: "xml",
            url: 'xml/rutas.xml',
            method: 'GET',
            success: function(data) {
                var rutas = $(data).find('ruta');
                rutas.each(function() {
                    var ruta = $(this);
                    var nombre = ruta.attr('nombre');
                    var tipo = ruta.find('tipo').text();
                    var medioTransporte = ruta.find('medioTransporte').text();
                    var recomendacion = ruta.find('recomendacion').text();
                    var fechaInicio = ruta.find('fechaInicio').text();
                    var horaInicio = ruta.find('horaInicio').text();
                    var duracion = ruta.find('duracion').text();
                    var agencia = ruta.find('agencia').text();
                    var descripcion = ruta.find('descripcion').text();
                    var personasAdecuadas = ruta.find('personasAdecuadas').text();
                    var lugarDeInicio = ruta.find('lugarDeInicio').text();
                    var direccionInicio = ruta.find('direccionInicio').text();
                    var longitud = lugarDeInicio.attr('longitud');
                    var latitud = lugarDeInicio.attr('latitud');
                    var altitud = lugarDeInicio.attr('altitud');

                    var planimetria = ruta.find('planimetria').text();
                    var altimetria = ruta.find('altimetria').text();

                    var referencias = '';
                    ruta.find('referencias > referencia').each(function() {
                        var r = $(this).text();
                        r += '<li><a href="' + ra + '">' + r + '</a></li>';
                    });
                
                    var hitosHTML = '';
                    ruta.find('hitos > hito').each(function() {
                        var hito = $(this);
                        var nombreHito = hito.attr('nombre');
                        var descripcionHito = hito.find('descripcion').text();
                        var distanciaConAnterior = hito.find('distancia').text();
                        var unidadesDistancia = hito.find('distancia').attr('unidades');
                        var longitudHito = hito.find('coordenadas').attr('longitud');
                        var latitudHito = hito.find('coordenadas').attr('latitud');
                        var altitudHito = hito.find('coordenadas').attr('altitud');
                       
                        
                        hitosHTML += '<h4>' + nombreHito +'</h4>'
                        hitosHTML += '<p>' + descripcionHito + '</p>'
                        hitosHTML += '<h5>Distancia al hito anterior</h5>'
                        hitosHTML += '<p>' + distanciaConAnterior + ' ' + unidadesDistancia + '</p>'
                        hitosHTML += '<h5>Coordenadas </h5>'
                        hitosHTML += '<p>Coordenadas: ' + longitudHito + ', ' + latitudHito + ', ' + altitudHito + '</p>'  
                        hito.find('fotografias > fotografia').each(function() {
                            var fotografia = $(this).text();
                            hitosHTML += '<img src="multimedia/' + fotografia + '" alt= "Fotografía de ' + hitoNombre + '">';
                        
                        });
                        hitosHTML.find('videos > video').each(function() {
                            var video = $(this).text();
                            hitosHTML += '<video controls="" autoplay=""> <source src="multimedia/' + video + '" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"> </video>';
                        
                        } );
                       
                    });
                    
                    $('main').append("<section>")
                    $('main section:last').append("<h2>" + nombre + "</h2>")
                    $('main section:last').append('<ul>')
                    $('main section:last ul:last').append('<li>Descripción: ' + descripcion + '</li>')
                    $('main section:last ul:last').append('<li>Tipo: '+ tipo +'</li>')
                    $('main section:last ul:last').append('<li>Fecha de inicio: ' + fechaInicio + '</li>')
                    $('main section:last ul:last').append('<li>Hora de inicio: ' + horaInicio + '</li>')
                    $('main section:last ul:last').append('<li>Recomendacion: ' + recomendacion + '</li>')
                    $('main section:last ul:last').append('<li>Medio de transporte: ' + medioTransporte + '</li>')
                    $('main section:last ul:last').append('<li>Agencia: ' + agencia + '</li>')
                    $('main section:last ul:last').append('<li>Duración: ' + duracion + '</li>')<
                    $('main section:last ul:last').append('<li>Lugar de inicio: ' + lugarInicio + 'Coordenadas: (' + longitud + ', ' + latitud + ', ' + altitud + ') </li>')
                    $('main section:last ul:last').append('<li>Dirección de inicio: ' + direccionInicio + '</li>')
                    $('main section:last ul:last').append('<li>Personas adecuadas: ' + personasAdecuadas + '</li>')
                    $('main section:last').append('<h3>Referencias:</h3>')
                    $('main section:last').append('<ul>' + referencias + '</ul>')
                    $('main section:last').append('<h3>Hitos: </h3>')
                    $('main section:last').append(hitosHTML)
                    $('main section:last').append('<h3>Planimetría</h3><p>' + planimetria + '</p>')
                    $('main section:last').append('<h3>Altimetría</h3><p>' + altimetria + '</p>')


                })
            },
            error: function() {
                alert("Error al procesar el xml");
            }
        }
        )
    }
}
new XMLtoHTML().xmlToHTML();