
function hacerTotal() {
    let descuento = document.getElementById("selectDescuento").value;
    let cantidad = document.getElementById("cantidadDeTicket").value;
    let total = (200 * cantidad) - ((200 * cantidad) * descuento) / 100;
    document.getElementById("ValorTotalDelTicketConDescuento").innerHTML = total;
}

