
$("#interruptorOFF").click(() => {
    let x = document.getElementById("audioClick");
    x.play();
    $("#lampadaApagada").toggle()   
    $("#interruptorOFF").toggle()   

    if($("#lampadaApagada").is(":visible")) {
        $("#lampadaAcessa").css("display", 'none')

       
    } else {
        $("#lampadaAcessa").css("display", 'flex')
       
    }
    
    if($("#linterruptorOFF").is(":visible")) {
        $("#interruptorON").css("display", 'none')

       
    } else {
        $("#interruptorON").css("display", 'flex')
       
    }
})

$("#interruptorON").click(() => {
    let x = document.getElementById("audioClick");
    x.play();
    $("#lampadaApagada").toggle()
    $("#interruptorON").toggle()   
   

    if($("#lampadaApagada").is(":visible")) {
        $("#lampadaAcessa").css("display", 'none')

       
    } else {
        $("#lampadaAcessa").css("display", 'flex')
       
    }

    if($("#linterruptorON").not(":visible")) {
        $("#interruptorOFF").css("display", 'flex')

       
    } 
})

