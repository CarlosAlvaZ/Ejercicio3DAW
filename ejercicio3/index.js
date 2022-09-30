const input = document.querySelector("#input")
const list = document.querySelector("#list")
const button = document.querySelector("#mostrar")
const definition = document.querySelector("#definicion")
const diccionario ={
    "Abismo": "Profundidad muy grande.",
    "Abusado": "Vivo, despierto. Se originó de “aguzado”.",
    "Abyecto": "Despreciable, ignominioso.",
    "Acatar": "Respetar, obedecer. Venerar, someterse.",
    "Acceder": "Consentir en lo que otro quiere.",
    "Acotación": "Apunte; intervención en un diálogo.",
    "Adecuación": "Propósito para algo.",
    "Aditamento": "Añadidura.",
    "Aducir": "Presentar o alegar pruebas, razones, etc.",
    "Aferrarse": "Agarrar fuertemente. Asir.",
    "Albergar": "Hospedar. Dar alojamiento.",
    "Alegoría": "Una cosa representa otra. Metáfora.",
    "Allende": "Más allá de, de la parte de allá.",
    "Alma": "Es el /‘libro de la vida/’, en el que el viaje completo de un individuo se graba en forma de sabiduría.",
    "Amalgamar": "Unir cosas de naturaleza distinta.",
    "Amor" : "El comienzo de la iluminación y la finalización de la dualidad, la carencia y la separación que percibe la personalidad. Es amor en libertad, sin ninguna atadura emocional. Es un estado mental de naturaleza dadora y creativa.",
    "Ambages": "Rodeo de palabras o circunloquio.",
    "Ambivalente": "Que tiene dos valores diferentes.",
    "Amnesia": "Trastornos de la memoria. Olvido total o parcial.",
    "Analfabeta": "Que no sabe leer ni escribir.",
    "Antelación": "Anticipación con que sucede una cosa.",
    "Antítesis": "Oposición de dos juicios o afirmaciones.",
    "Aplazar": "Demorar, posponer, suspender.",
    "Arquetipo": "Dechado, ejemplar, modelo.",
    "Ascensión": "El total  florecimiento de la mente, lo que resulta en una libertad absoluta sobre todos los planos de existencia.",
    "Asilo": "Refugio, amparo, retiro.",
    "Asomo": "Señal, amago. Indicio, sospecha.",
    "Aspaviento": "Demostración excesiva de admiración.",
    "Ataque": "Acometida, impugnación, disputa.",
    "Atar": "Unir. Amarrar, ligar, encadenar.",
    "Aterrar": "Llenar de tierra. Enterrar. Causar terror.",
    "Autista": "Predominio de la vida interior. Desapego de la realidad.",
    "Ayes": "Plural de ay.",
    "Bachicha": "Lo que queda de un cigarrillo consumido.",
    "Bagaje": "Suma de conocimientos. Acervo. Equipaje.",
    "Barullo": "Escándalo.",
    "Beligerante": "Belicoso, agresivo, pendenciero.",
    "Biología": "Ciencia que se ocupa del estudio de los seres vivos.",
    "Bitácora": "Libro en que se anotan los incidentes del viaje.",
    "Búnker": "Refugio construido con gruesas paredes.",
    "Caos": "Estado en el que se hallaban las cosas al momento de su creación.",
    "Carecer": "Estar privado de alguna cosa. No tener.",
    "Carisma": "Agradar. Hacer favores.",
    "Certeza": "Conocimiento seguro y claro de alguna cosa.",
    "Chanchullo": "Manejo ilícito. Trampa.",
    "Cielo": "Mansión en que los ángeles, los santos y los bienaventurados gozan de la presencia de Dios. El paraíso.",
    "Ciernes": "Estar muy a sus principios.",
    "Clamar": "Desear vivamente. Gritar exaltadamente.",
    "Clan": "Tribu o familia.",
    "Coagulación": "Cuajar. (Solidificar lo líquido).",
    "Codificar": "Guardar información en clave.",
    "Comedia": "Obra teatral cuyo fin es divertirse.",
    "Conato": "Esfuerzo, tentativa. Intento.",
    "Concebible": "Formar idea o concepto de algo.",
    "Conciencia": "Conocimiento exacto y reflexivo de las cosas. Propiedad del -espíritu humano de reconocerse a sí mismo en sus atributos esenciales y en todas las modificaciones que experimenta. Es la estructura y esencia de todo ser. Sentimiento interior del bien y del mal.",
    "Concretar": "Especificar. Limitar."
}

const keys = Object.keys(diccionario)

input.addEventListener("input", ()=>{
    let valor = input.value
    let regEx = new RegExp(`^${valor}`, "i")

    if(valor == ""){
        list.innerHTML = ""
        return
    }
    
    list.innerHTML = ""
    for(i in keys){
        if(regEx.test(keys[i])){
            list.innerHTML += `<li data-key="${keys[i]}">${keys[i]}</li>`
        }
        else{
            continue
        }
    }
    let lis = list.querySelectorAll("li")  
    lis.forEach( li => li.addEventListener("dblclick", (e)=>{
            let aux = e.target.dataset.key
            input.value = aux
        }
    ))
})

mostrar.addEventListener("click", ()=>{
    let aux = input.value
    if(diccionario[aux]){
        definition.innerHTML = diccionario[aux]
    }else{
        definition.value = "No se ha encontrado ninguna definicion"
    }
})
