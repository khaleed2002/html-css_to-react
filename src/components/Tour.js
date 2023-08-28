const Tour = (props) => {
  const tour = props.tour;
  return (
    <article className="tour-card" key={tour.id}>
      <div className="tour-img-container">
        <img src={tour.img} className="tour-img" alt="" />
        <p className="tour-date">{tour.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tour.title}</h4>
        </div>
        <p>{tour.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {tour.country}
          </p>
          <p>{tour.nDay} days</p>
          <p>from ${tour.price}</p>
        </div>
      </div>
    </article>
  )
}
export default Tour