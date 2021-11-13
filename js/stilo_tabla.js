//colores de la tabla
$(document).ready(function() {
    $('#fondo1').click(function() {
      $('table, p').css({
         "backgroundColor": "yellow"
      });
    });
  });
  $(document).ready(function() {
    $('#fondo2').click(function() {
      $('table, p').css({
         "backgroundColor": "pink"
      });
    });
  });
  $(document).ready(function() {
    $('#fondo3').click(function() {
      $('table, p').css({
         "backgroundColor": "gray"
      });
    });
  });

  //estilo de texto de la tabla
  //colores de la tabla
$(document).ready(function() {
  $('#texto1').click(function() {
    $('table, h2, p').css({
       "font-family": "cursive"
    });
  });
});
$(document).ready(function() {
  $('#texto2').click(function() {
    $('table, h2, p').css({
      "font-family": "fantasy"
    });
  });
});
$(document).ready(function() {
  $('#texto3').click(function() {
    $('table, h2, p').css({
      "font-family": "monospace"
    });
  });
});

//colores de fondo
$(document).ready(function() {
  $('#back1').click(function() {
    $('#divca1').css({
      "backgroundColor": "red"
    });
  });
});
$(document).ready(function() {
  $('#back2').click(function() {
    $('#divca1').css({
      "backgroundColor": "orange"
    });
  });
});
$(document).ready(function() {
  $('#back3').click(function() {
    $('#divca1').css({
      "backgroundColor": "purple"
    });
  });
});
//color del cuerpo
$(document).ready(function() {
  $('#back1').click(function() {
    $('body').css({
      "backgroundColor": "red"
    });
  });
});
$(document).ready(function() {
  $('#back2').click(function() {
    $('body').css({
      "backgroundColor": "orange"
    });
  });
});
$(document).ready(function() {
  $('#back3').click(function() {
    $('body').css({
      "backgroundColor": "purple"
    });
  });
});

