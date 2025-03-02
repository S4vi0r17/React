// Fetch API: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
// https://developers.giphy.com/
// Se debe crear una cuenta para obtener la API_KEY

const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch(console.warn);