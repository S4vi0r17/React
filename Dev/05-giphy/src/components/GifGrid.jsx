import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

function GifGrid({ category }) {

    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    // Custom Hook
    const { images, isLoading } = useFetchGifs(category);

    // console.log(images, isLoading);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<p>Cargando...</p>)
            }

            <div className='card-grid'>
                {
                    // images.map(({id, url, title}) => (
                    //     <GifItem key={id} url={url} title={title}/>
                    // ))

                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                            // esto es lo mismo que hacer url={image.url} title={image.title}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
