//ventana modal 
$(document).ready(function() {
    // Abrir el modal cuando se hace clic en el botón
    $("#open-modal").click(function() {
        $("#rules-modal").removeClass("hidden");
    });

    // Cerrar el modal cuando se hace clic en el botón de cierre
    $("#close-modal").click(function() {
        $("#rules-modal").addClass("hidden");
    });

    $("#close-modal2").click(function() {
        $("#rules-modal").addClass("hidden");
    });
});
