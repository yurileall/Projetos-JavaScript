fetch('https://viacep.com.br/ws/01001000/json/').then(response => {
    return response.json()
}).then(corpo => {
    //console.log(corpo)
    document.getElementById("span").innerHTML=corpo.bairro
})