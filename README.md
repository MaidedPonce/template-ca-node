# Template CA node

## Iniciar el proyecto

Clonar el proyecto
`git clone git@github.com:MaidedPonce/frontend-template.git`
Correr el proyecto:
`docker-compose up`
Parar el proyecto:
`docker-compose down`

## Conceptos

1. entities
2. use cases
3. presentation
4. database

## Directorios

1.  Presentation: Lo más cercano a los usuarios que consuman la API. Esta carpeta contiene nuestras rutas y nuestros controladores.
2.  Domain: Las reglas de la app estarán aquí adentro.
    Contendrá los casos de usos, adaptadores, datasources (DTOS), cómo funcionan los repositorios, etc. 1. Datasources: Reglas de negocio para regir la obtención de datos. 2. Repositories: Son quienes se van a conectar con los datasources.

        Cada modulo de Datasources y repositories va a contener la misma información ya que la idea de repositorio es que conozca cuáles son los métodos de nuestro datasource.
        **La diferencia es cómo se va a implementar.
        **
        Cuando llamemos a repository, mandaremos nuestro datasource como argumento, es 		decir, será el encargado de verificar si le mandamos Mongo, Redis, etc.

        **Dentro de esta carpeta no habrá dependencias externas.**

3.  Infrastructure: Esta carpeta es el punto intermedio entre domain y presentation.
    En esta se implementará la lógica de los repostorios, DTOS, etc.
