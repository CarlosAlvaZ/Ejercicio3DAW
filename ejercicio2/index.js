const fileInput = document.querySelector("#fileInput")
const templateAlert = document.querySelector("#template-alert")
const target = document.querySelector(".target")
const regEx = /^[a-zA-Z0-9_\s]+\.(png|jpg|jpeg|gif)$/
console.log(fileInput.files[0])
function upload(file){
    let img = document.createElement("img")
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("load", e=>{
        img.setAttribute("src", e.target.result)
        img.setAttribute("alt", "cover")
    })
    return img
}

function crearAlerta(tipo){
    let fragment = templateAlert.content.cloneNode(true)
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

function validar(texto){
    return regEx.test(String(texto))
}

fileInput.addEventListener("change", ()=>{
    if(validar(fileInput.files[0].name)){
        crearAlerta(true)
        target.appendChild(upload(fileInput.files[0]))
    }
    else{
        crearAlerta(false)
    }
})
