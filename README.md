# Template CA node

## Conceptos

1. entities
2. use cases
3. presentation
4. database

## Directorios

1. domain: reglas que gobgernaran la app. No tiene que tener dependencias externas
   - datasources: reglas de negocio que vamos a regir la obtencion de datos
   - repositories: quiénes se van a comunicar con los datasources
   - dto: La información que esperamos recibir
2. Infrastructure: El punto intermedio entre domain y presentation. Es donde se crean las implementaciones
