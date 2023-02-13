const input = document.querySelector("input");
const button = document.querySelector("button");

const place = document.querySelector("#place")
const temperatura = document.querySelector("#temperatura")
const img = document.querySelector("img")
const vento = document.querySelector("#vento")
const informacao = document.querySelector(".informacao")

$("button").click (() => {
    if(!input.value) return;

    getDataApi();
})

async function getDataApi() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        input.value
    )}&units=metric&appid=0d13296f4e2976972fdb92ca20ec1e57`;

    try {
        await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data?.cod && data.cod === "404") {
                return alert ("Local não encontrado!");
            }

            loadData(data);
        });
    } catch (error) {
        alert(error);
    }

}

function loadData(data) {
    place.innerHTML = `${data.name}, ${data.sys.country}`;
    temperatura.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}º C`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    vento.innerHTML = `Vento: ${data.wind.speed} km/h`;
    informacao.style.display = "flex";
    
}