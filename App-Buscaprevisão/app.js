const key = "028e5c881bddb18063b6ff0e588f8a53";

function dadosnatela(dados){
    console.log(dados)
    document.querySelector('.titulo-cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.previsao-texto').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML ="A unidade é " + dados.main.humidity + "°"
}

async function buscardados(cidade){
  const dados = await await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
  dadosnatela(dados)
}


function CliqueBotao(){
    let cidade = document.querySelector('.input-cidade').value
    buscardados(cidade)
}