# Ejercicio 1

Crea una aplicación React con Vite que maneje tres componentes:

-   Header
-   Home
-   Footer

Importa dichos componentes dentro del componente padre App. El componente App tendrá acceso a un array de tareas que viene del fichero `tasks.json`:

```json
[
    {
        "id": 1,
        "text": "Ir a la compra",
        "done": false,
    },
    {
        "id": 2,
        "text": "Pasear al gato",
        "done": true,
    },
    {
        "id": 3,
        "text": "Estudiar React",
        "done": false,
    },
];
```

Haz llegar por props al componente hijo Home el array de tareas. Renderiza el listado de tareas dentro de un `ul`. Cada tarea ha de ser un `li` que tenga dentro el texto de la tarea.

Bonus: haz llegar al componente `Header` una variable de entorno con el título de la aplicación. Es decir, dentro del `Header` deberá existir un `h1`, y ese `h1` obtendrá su valor de una variable de entorno. Trata de buscar en Google como se gestionan las variables de entorno con Vite.
