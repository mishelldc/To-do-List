import { tareas } from './data_todo.js';

function cargarTareas() {
    const cuadrosTareas = document.querySelector('.list_tareas');
    cuadrosTareas.innerHTML = ''; 

    tareas.forEach((cadaTarea) => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('div_tareas');

        divTarea.innerHTML = `
            <p class="texto">${cadaTarea.texto}</p>
            <div class="estado">${cadaTarea.estado ? '[ / ]' : '[ X ]'}</div>
        `;

        cuadrosTareas.appendChild(divTarea);
    });
}

function cargarBotones() {
    const cajaBtn = document.querySelector('.botones');
    cajaBtn.innerHTML = '<div class="btn_mas"> + </div>';

    const btnFormulario = document.querySelector('.btn_mas');
    btnFormulario.addEventListener('click', cargarFormulario);
}

function cargarFormulario() {
    const ventanaFormulario = document.querySelector('.formulario');
    ventanaFormulario.classList.add('activar_b');

    ventanaFormulario.innerHTML = `
        <div class="btn_cerrar">x</div>
        <div class="div_formulario">
            <input type="text" class="entrada-tarea">
            <select id="categoria" name="categoria">
                <option value="categoria">Categoría</option>
                <option value="casa">Casa</option>
                <option value="universidad">Universidad</option>
                <option value="trabajo">Trabajo</option>
            </select>
        </div>
        <div class="btn_ok">Crear</div>
    `;

    const btnCerrar = document.querySelector('.btn_cerrar');
    btnCerrar.addEventListener('click', () => {
        ventanaFormulario.classList.remove('activar_b');
    });

    const btnCrear = document.querySelector('.btn_ok');
    btnCrear.addEventListener('click', () => {
        const tarea = document.querySelector('.entrada-tarea').value;
        const categoria = document.querySelector('#categoria').value;

        if (tarea && categoria !== 'categoria') {
            tareas.push({ texto: tarea, estado: false, categoria });
            cargarTareas();
            ventanaFormulario.classList.remove('activar_b');
        } else {
            alert('Por favor, complete la tarea y seleccione una categoría.');
        }
    });
}


cargarTareas();
cargarBotones();
