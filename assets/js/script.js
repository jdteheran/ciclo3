
let btn_agregar = document.querySelector('#btn_agregar')

btn_agregar.addEventListener('click', () => {
    let nombre_manga = document.querySelector('.nombre').value
    let ultimo_capitulo = document.querySelector('.ult_cap').value
    let penultimo_capitulo = document.querySelector('.penul_cap').value
    let fecha = document.querySelector('.fecha').value

    console.log(nombre_manga, ultimo_capitulo, penultimo_capitulo, fecha);

})

let btn_formulario = document.querySelector('.btn-formulario')

let titulo_formulario = document.querySelector('.titulo-formulario')
titulo_formulario.style.display = 'none'

btn_formulario.addEventListener('click', () => {
    let inputs_formulario = document.querySelector('.inputs-formulario')

    if (titulo_formulario.style.display == 'none') {
        titulo_formulario.style.display = 'block'
        inputs_formulario.style.display = 'block'

        btn_formulario.innerHTML = 'Cancelar'
    } else {
        titulo_formulario.style.display = 'none'
        inputs_formulario.style.display = 'none'

        btn_formulario.innerHTML = 'Agregar manga'
    }

    
})
