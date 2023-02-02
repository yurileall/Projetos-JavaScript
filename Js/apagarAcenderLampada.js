
$("#interruptor").click(() => {
    let x = document.getElementById("audioClick");
    x.play();
    $("#lampadaApagada").toggle()   

    if($("#lampadaApagada").is(":visible")) {
        $("#lampadaAcessa").css("display", 'none')
       
    } else {
        $("#lampadaAcessa").css("display", 'flex')
       
    }
})

