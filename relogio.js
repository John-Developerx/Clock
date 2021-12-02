setInterval(function(){
  let date = new Date();
  let horas = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  minutos = zero(minutos);
  segundos = zero(segundos);
  document.getElementById('horas').textContent = horas + ':'+ minutos + ':' + segundos;
  
},1000);

function zero(x){
  if (x<10){
    x = '0' + x;
  }return x;
}


