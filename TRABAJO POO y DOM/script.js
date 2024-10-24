class Modelo {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    mostrarInfo() {
        const modeloDiv = document.createElement('div');
        modeloDiv.classList.add('modelo-info');

        modeloDiv.innerHTML = `
            <h2>${this.nombre}</h2>
            <img src="${this.imagen}" alt="Imagen de ${this.nombre}" />
            <p>${this.descripcion}</p>
            <button class="botonMostrarMas">Mostrar Más</button>
            <h3>Proyectos</h3>
            <ul class="listaProyectos"></ul>
        `;

        modeloDiv.querySelector('.botonMostrarMas').addEventListener('click', () => {
            alert(`¡Gracias por visitar el portafolio de ${this.nombre}! Para más información, contáctame.`);
        });

        document.getElementById('modelosContainer').appendChild(modeloDiv);
    }
}

class Portafolio extends Modelo {
    constructor(nombre, descripcion, imagen) {
        super(nombre, descripcion, imagen);
        this.proyectos = [];
    }

    agregarProyecto(proyecto) {
        this.proyectos.push(proyecto);
        this.organizarProyectos();
    }

    organizarProyectos() {
        const listaProyectos = document.querySelectorAll('.listaProyectos'); 
        const ul = listaProyectos[listaProyectos.length - 1]; 

        ul.innerHTML = ''; 

        this.proyectos.forEach(proyecto => {
            const li = document.createElement('li');
            li.textContent = proyecto;
            ul.appendChild(li);
        });
    }
}


const modelo1 = new Portafolio('Ana Gómez', 'Modelo profesional con experiencia en moda y publicidad.', 'error-404.png');
const modelo2 = new Portafolio('Laura Pérez', 'Modelo especializada en fotografía editorial', 'error-404.png');
const modelo3 = new Portafolio('Sara Vega', 'Modelo principiante con enfasis en pasarela.', 'error-404.png');


modelo1.mostrarInfo();
modelo1.agregarProyecto('Sesión de fotos para la marca X');
modelo1.agregarProyecto('Desfile de moda 2024');

modelo2.mostrarInfo();
modelo2.agregarProyecto('Campaña publicitaria para la marca X');
modelo2.agregarProyecto('Sesión de fotos para revista X');

modelo3.mostrarInfo();
modelo3.agregarProyecto('Campaña publicitaria para la marca X');
modelo3.agregarProyecto('Desfile para la marca x');

