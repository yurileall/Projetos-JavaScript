
$("#interruptor").click(() => {
    $("#lampadaApagada").toggle()

    if($("#lampadaApagada").is(":visible")) {
        $("#lampadaAcessa").css("display", 'none')
        //$("#audio-click").play()
    } else {
        $("#lampadaAcessa").css("display", 'flex')
        //$("#audio-click").play()
    }
})
