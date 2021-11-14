const elementoImagem = document.getElementById("dvd");
var posicaoX  = 0;
var posicaoY = 0;
var direcaoX = 1;
var direcaoY = 1;
var velocidade = 3;
var times = 20;
var matiz = 0;
var varMatiz = 10;


function update(){
    var canto = 0;
    if((posicaoY>(window.innerHeight-elementoImagem.offsetHeight))||(posicaoY<0)){
        direcaoY = direcaoY*(-1);
        canto++;
    }
    if((posicaoX>(window.innerWidth-elementoImagem.offsetWidth))||(posicaoX<0)){
        direcaoX = direcaoX*(-1);
        canto++;
    }
   if(canto>0){
        console.log("canto!");
        matiz+=varMatiz;
    }
    while(matiz>360){
        matiz-=360;
    }
    posicaoX = posicaoX+(velocidade*direcaoX);
    posicaoY += velocidade*direcaoY;    
    elementoImagem.style.left = posicaoX+"px";
    elementoImagem.style.top = posicaoY+"px";
    elementoImagem.style.filter = "hue-rotate("+matiz+"deg)";


}
//Executar determinada função a partir de um determinado tempo, **em milisegundos
setInterval(update, times);
