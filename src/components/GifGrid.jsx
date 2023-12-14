/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGif } from '../hooks/useFetchGif'
// import { getGif } from '../helpers/getGif'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string,
}
