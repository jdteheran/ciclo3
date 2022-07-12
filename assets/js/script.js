
let btn_agregar = document.querySelector('#btn_agregar')

btn_agregar.addEventListener('click', () => {
    let nombre_manga = document.querySelector('.nombre').value
    let ultimo_capitulo = document.querySelector('.ult_cap').value
    let penultimo_capitulo = document.querySelector('.penul_cap').value
    let fecha = document.querySelector('.fecha').value

    console.log(nombre_manga, ultimo_capitulo, penultimo_capitulo, fecha);

})

