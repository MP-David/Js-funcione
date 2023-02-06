const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const all = document.querySelectorAll(".controle-ajuste")

all.forEach( (elemento) => {
// ELEMENTO = Todos itens da lista no caso os BUTTOM

    elemento.addEventListener("click", (evento) => { 
    // Ação do elemento clicado
        manipulaDados(evento.target.textContent, evento.target.parentNode)        
        //.targe.textContent eu pego os 
    })

})

function manipulaDados(operação, contador){
    const item = contador.querySelector(".controle-contador")
    
    if (item.value > 0 && operação === "-"){
        item.value = parseInt(item.value) - 1
    } 
    if (operação === "+"){
        item.value = parseInt(item.value) + 1
    }
}
