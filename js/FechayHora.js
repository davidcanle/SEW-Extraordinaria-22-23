class FechayHora{
    constructor() {
    }
    ultimaModificación(){
      var html = "<p> Esta página se actualizó por última vez el ";
      html+= document.lastModified + "</p>";
      var section = document.getElementsByTagName('section')[5];
      $(section).append(html);
    }
  }
  var fechaYHora = new FechayHora();
  