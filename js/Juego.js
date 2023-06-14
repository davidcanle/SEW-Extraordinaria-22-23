class Juego {
    calcularNota() {
        let todasRespondidas = true

        // Comprobamos que todas las preguntas están respondidas
        $("fieldset").each(function () {
            if ($(this).find('p input:checked').length === 0) {
                todasRespondidas = false
            }
        });

        if (todasRespondidas) {
            let aciertos = 0
            $('fieldset').each(function () {

                $(this).find('p input').each(function () {
                    if ($(this).is(':checked') && $(this).val() === 'true') {
                        aciertos = aciertos + 1;
                    }
                });

            });

            $('main p:last').remove()
            $('main').append('<p>Puntuación: ' + aciertos + '/' + $('fieldset').length + '</p>')
            $('button').prop('disabled', false)
        } else {
            $('main p:last').remove()
            $('main').append('<p>Tiene que responder a todas las preguntas para que se le pueda calificar</p>')
        }
    }





    reiniciar() {
        var respuestas = $('input[type="radio"]');
        respuestas.prop('checked', false)
        $('main p:last').remove()
        $('main').append('<p>Cuando haya terminado el test se calculará su nota</p>')
    }
}
let juego = new Juego();