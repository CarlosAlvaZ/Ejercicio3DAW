const entrada = document.querySelector(".entrada")
let seleccion = document.querySelector(".seleccion")
const validar = document.querySelector(".validar")
const template_alert = document.querySelector("#template-alert")
const target = document.querySelector(".target")

function validarIp(texto){
    let regEX = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d))\.((25[0-5]|(2[0-4]|1\d|[1-9]|)\d))\.((25[0-5]|(2[0-4]|1\d|[1-9]|)\d))\.((25[0-5]|(2[0-4]|1\d|[1-9]|)\d))$/
    return regEX.test(String(texto))
}

function validarWeb(texto){
    let regEX = /^(http|https|ftp)\:\/\/(www\.)?\w+\.(com|edu|org|net)\.?$/
    return regEX.test(String(texto))
}

function validarCorreo(texto){
    let regEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/
    return regEX.test(String(texto))
}

function crearAlerta(tipo){
    let fragment = template_alert.content.cloneNode(true)
    let alerta = fragment.querySelector('.alert')
    if(tipo){
        alerta.classList.add('alert-success')
        let aux = document.createTextNode('La entrada es valida')
        alerta.appendChild(aux)
    }else {
        alerta.classList.add('alert-danger')
        let aux = document.createTextNode('La entrada es invalida')
        alerta.appendChild(aux)
    }
    target.innerHTML = ''
    target.appendChild(fragment)
}

entrada.addEventListener("input", ()=>{
    let slcnActual = seleccion.options[seleccion.selectedIndex].value
    let val = entrada.value
    if(slcnActual == "ip"){
        
        if(validarIp(val)){
            entrada.classList.remove("invalid")
        }else{
            entrada.classList.add("invalid")
        }

    }
    else if(slcnActual == "web"){

        if(validarWeb(val)){
            entrada.classList.remove("invalid")
        }else{
            entrada.classList.add("invalid")
        }

    }
    else if(slcnActual == "correo"){

        if(validarCorreo(val)){
            entrada.classList.remove("invalid")
        }else{
            entrada.classList.add("invalid")
        }

    }
    else{
        return
    }
})


validar.addEventListener("click", () => {
    let slcnActual = seleccion.options[seleccion.selectedIndex].value
    let val = entrada.value
    if(slcnActual == "ip"){
        
        crearAlerta(validarIp(val))

    }
    else if(slcnActual == "web"){

        crearAlerta(validarWeb(val))

    }
    else if(slcnActual == "correo"){

        crearAlerta(validarCorreo(val))

    }
    else{
        return
    }
})