
let btn_agregar = document.querySelector('#btn_agregar')

btn_agregar.addEventListener('click', () => {
    let nombre_manga = document.querySelector('.nombre').value
    let ultimo_capitulo = document.querySelector('.ult_cap').value
    let penultimo_capitulo = document.querySelector('.penul_cap').value
    let fecha = document.querySelector('.fecha').value

    let template_manga = `<div class="articulos">
                            <article>
                                <div class="caratula">
                                    <img src="assets/imgs/The-Lords-Coins-Arent-Decreasing.jpeg" alt="">
                                </div>
                                <div class="contenido">
                                    <div class="nombre">
                                        <h4>${nombre_manga}</h4>
                                    </div>
                                    <div class="puntuacion">
                                        <p>
                                            <span class="estrella"></span>
                                            <span class="estrella"></span>
                                            <span class="estrella"></span>
                                            <span class="estrella"></span>
                                            <span class="estrella"></span>
                                            4.5
                                        </p>
                                    </div>
                                    <div class="capitulos-fechas">
                                        <div class="capitulos">
                                            <ul>
                                                <li><a href="#">${penultimo_capitulo}</a></li>
                                                <li><a href="#">${ultimo_capitulo}</a></li>
                                            </ul>
                                        </div>
                                        <div class="fechas">
                                            <p><span>new</span></p>
                                            <p>${fecha}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>`

    let section = document.querySelector('section')

    section.innerHTML = section.innerHTML + template_manga

    document.querySelector('.titulo-formulario').style.display = 'none'
    document.querySelector('.inputs-formulario').style.display = 'none'

    document.querySelector('.btn-formulario').innerHTML = 'Agregar manga'

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
