const input = $("imput");
const button = $("button");

const place = $("#place")
const temperatura = $("#temperatura")
const img = $("img")
const vento = $("#vento")
const informacoes = $(".informacoes")

$("button").click (() => {
    if(!input.value) return;

    getDataApi();
})

async function getDataApi(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${econdeURI(
        input.value
    )}&units=metrica&appid=0d13296f4e2976972fdb92ca20ec1e57`;

    try{
        await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data?.cod && data.cod === "404") {
                return alert ("Local não encontrado!");
            }
        });
    } catch (error) {
        alert(error);
    }

}