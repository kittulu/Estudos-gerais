const grade = document.getElementById("grade");
const paleta = document.getElementById("paleta");

function criaGrade(argLargura, argAltura){ 
    htmlGrade="";
    for(var i=0; i<argAltura; i++){
        htmlGrade += "<div>";
        for(var j=0; j<argLargura; j++){
            htmlGrade +='<div onclick="pintacor(this)" id="'+i+"_"+j+'"></div>';
        }
        htmlGrade +="</div>";
    }
    grade.innerHTML = htmlGrade;
}

criaGrade(16,16);

function criaPaleta(argCores){
    htmlPaleta = "";
    for (var i=0; i<=256; i+=argCores) {
        var valorHex1 = (i-1).toString(16);
        if (valorHex1 =='-1') {
            valorHex1 = '00';
        }
        for (var j=0; j<=256; j+=argCores) {
            var valorHex2 = (j-1).toString(16);
            if (valorHex2 =='-1') {
                valorHex2 = '00';
            }
            for (var k=0; k<=256; k+=argCores) {
                var valorHex3 = (k-1).toString(16);
                if (valorHex3 =='-1') {
                    valorHex3 = '00';
                }
                //paletaCor('#'+valorHex3+valorHex2+valorHex1);      
                htmlPaleta+='<div onclick="selecionacor(this)"style="background-color: #'+valorHex3+valorHex2+valorHex1+'"></div>';
            }
        }
    }
    paleta.innerHTML = htmlPaleta;
}
criaPaleta(32);
var cor = "#000000";
function selecionacor(argElemento){
    console.log(argElemento.style.backgroundColor);
    cor = argElemento.style.backgroundColor;
}
function pintacor(argBloco){
    argBloco.style.backgroundColor=cor;
}
/*
function paletaCor(argCor){
    htmlPaleta+='<div style="background-color: '+argCor+'"></div>';
}*/