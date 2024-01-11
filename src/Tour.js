import { useState } from "react"

const Tour = ({id, name, info, image, price, removeTours}) => {

  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
    <img className="img" src={image} alt={name} />
    <span className="tour-price">{price}</span>
    <div className="tour-info">
      <h5>{name}</h5>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button className="delete-btn btn-block btn" onClick={() => removeTours(id)}>Not Interested</button>
    </div>
    </article>
  )
}
export default Tour