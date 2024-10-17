# Rick and Morty Dashboard

Este es un proyecto de dashboard para visualizar información de los personajes y episodios de la serie **Rick and Morty** utilizando la API pública de **Rick and Morty**. El proyecto está desarrollado utilizando **Next.js** y **Zustand** para la gestión de estado.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Despliegue](#despliegue)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)


## Características

- Visualización de personajes de la serie **Rick and Morty**.
- Visualización de episodios y sus detalles.
- Filtrado de personajes por nombre, especie, género y estado.
- Funcionalidad para agregar y editar personajes localmente.
- Paginación para controlar la cantidad de personajes mostrados.
- Gestión del estado de los personajes y episodios utilizando **Zustand**.
- Conexión con la API pública de **Rick and Morty**.
- Despliegue en **Vercel**.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Margumedo/rick-and-morty-dashboard.git
    ```
2. Navega dentro del directorio del proyecto:

    ```bash
    cd rick-and-morty-dashboard
    ```
3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```
4. Crea un archivo .env con las siguientes variables de entorno (reemplazar por las entregadas en txt):

    ```bash
    Ejemplo:
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_tes....
    CLERK_SECRET_KEY=sk...

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in...
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up...
    .
    .
    .
    ```

## Uso
1. Para ejecutar el proyecto en desarrollo:
    ```bash
    npm run dev
    ```
El proyecto estará disponible en http://localhost:3000.
Agregar o Editar Personajes

En el dashboard, puedes agregar o editar personajes. Los personajes editados o creados se almacenan en el estado global utilizando Zustand, y se guardan en localStorage para persistencia.
Funcionalidad de Filtrado

Puedes filtrar personajes por:

    Nombre
    Estado (Alive, Dead, Unknown)
    Especie
    Género

## Despliegue

Este proyecto está desplegado en Vercel.

## Tecnologías Utilizadas

    Next.js - Framework de React para aplicaciones web.
    Zustand - Biblioteca de gestión de estado simple y rápida.
    Prisma - ORM para bases de datos.
    Tailwind CSS - Utilizado para el estilo y diseño del proyecto.
    API de Rick and Morty - Para obtener los datos de los personajes y episodios.
    Vercel - Plataforma de despliegue para aplicaciones de frontend.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

    Haz un fork del proyecto.
    Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
    Haz commit de tus cambios (git commit -m 'Agrega nueva funcionalidad').
    Haz push a la rama (git push origin feature/nueva-funcionalidad).
    Abre un Pull Request.