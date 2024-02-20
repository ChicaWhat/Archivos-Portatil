// Importamos los modelos...

// Función controladora final que permite crear un tweet.
const getTweetController = async (req, res, next) => {
    try {
        // Obtenemos el path param "tweetId"...

        // Seleccionamos el tweet de la base de datos...
        let tweet;

        res.send({
            status: 'ok',
            data: {
                tweet,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default getTweetController;
