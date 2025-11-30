# Galeria Pokédex API

Este proyecto consiste en una galería dinámica de Pokémons que consume datos de la [PokéAPI](https://pokeapi.co/). Fue desarrollado utilizando **Vite**, **TypeScript** y **Vanilla JavaScript**.

## URL del proyecto desplegado en netlify
https://galeria-pokedex-app.netlify.app/

**Buen día profesor:**

Aquí presento el ejercicio final solicitado. De antemano, quiero ofrecerle una disculpa por la tardanza en la entrega y agradecerle sinceramente por el tiempo prestado para su revisión.

Respecto al desarrollo, traté de apegarme lo más posible a la guía, pero implementé algunos cambios técnicos para mejorar la calidad final y resolver ciertas limitaciones:

1.  **Lógica de Fetch y `forEach`:**
    La guía sugería iterar directamente sobre la lista inicial. Sin embargo, modifiqué esta lógica porque la lista simple no provee la información del "Tipo" de Pokémon necesaria para asignar los colores de fondo requeridos en el diseño.
    * *Solución:* Implementé el uso de interfaces en TypeScript y un `Promise.all` para obtener los detalles completos de cada Pokémon. Esto solucionó los problemas de carga y aseguró que los colores correspondan correctamente al tipo (fuego, agua, planta, etc.).

2.  **Idioma del Código:**
    Por costumbre y buenas prácticas, el código (nombres de variables y funciones) está escrito en **inglés**. Sin embargo, los comentarios explicativos dentro del código los dejé en **español** para facilitar su lectura durante la revisión. Pido disculpas si existe algún error gramatical en el inglés.

3.  **Control de Versiones:**
    Utilicé una estrategia de *branching* simple como lo es *gitflow* para el desarrollo de las funcionalidades, aunque fue una sola version y para este documento final (`README`) hice el commit directo a la rama `main`.

Espero que el resultado sea de su agrado. ¡Excelente día y saludos!

---

## Tecnologías Utilizadas

* **Vite:** Entorno de desarrollo rápido.
* **TypeScript:** Para tipado estático y mejores prácticas.
* **HTML5 & CSS3:** Estructura semántica y diseño responsivo (Grid/Flexbox).
* **Fetch API:** Consumo de datos asíncronos.

## Instalación y Ejecución

Si desea ejecutar el proyecto localmente:

1.  **Instalar dependencias:**
    ```bash
    cd pokedex-app
    npm install
    ```

2.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
*Proyecto desarrollado para la asignatura de Desarrollo Web. LiTi por Jesús Elizandro Benitez Millán.*

