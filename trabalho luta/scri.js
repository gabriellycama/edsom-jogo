
function lutar(){ 

    const classes = getElementby.id('classes').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

if(!arma){
   log.innerHTML =" X  voce esqueceu dde selecionar uma arma";
   return;}
   const dado = Math.floor(Math.random()*200)+1;
   let resultado = `dado: ${dado} | <strong>${classes}</strong> com <strong>${arma}</strong>`;
}


