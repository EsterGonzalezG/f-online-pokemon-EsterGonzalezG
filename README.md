
# Pokédex

Aplicación para ver las características de cada pokemón, en este ejemplo, cargamos la foto, su número Id, el nombre y el tipo/s de ataque. [Ir a la aplicación](http://beta.adalab.es/f-online-pokemon-EsterGonzalezG/) 

Puedes forkearte el repositorio para modificar o probar cosas nuevas, necesitarás instalar npm con el comando npm install desde la terminal, y después con npm start ya pobrás ejecutarlo.


Los datos se obtienen desde la API [PokeApi](https://pokeapi.co) . Las peticiones son limitadas, por favor no haga demasiadas.


![seleccion_004](https://user-images.githubusercontent.com/39790106/46581468-b85f4c80-ca39-11e8-9763-2d75bba832e0.png)


Los pokemons se pueden filtrar por nombre:

![seleccion_001](https://user-images.githubusercontent.com/39790106/46581391-42a6b100-ca38-11e8-8840-1e3ef0aa0ce1.png)


Si escribimos bu solo salen los que empiezen por esas letras

![seleccion_003](https://user-images.githubusercontent.com/39790106/46581455-5f8fb400-ca39-11e8-9160-15060f0092fd.png)


Sólo se cargan los 25 primeros pokemons de la lista, aunque se pueden cargar muchos más, y están ordenados por número de Id:

![seleccion_002](https://user-images.githubusercontent.com/39790106/46581440-25261700-ca39-11e8-938f-5da3b6193392.png)

La aplicación esta desarrollada en React y tiene varios componentes: 

##### 1. Filtro: funcionalidad para filtrar por nombre
##### 2. Lista de Pokemons: listados de los 25 pokemons 
##### 3. Detalle de cada pokemón: detalle de cada pokemon, foto, id, nombre y tipo de ataque
