import "../CSS/Portfolio.css";


const Gifsinfo = ({title}) => {
  return (
    <div className="card-b">
       <div className="project-description">
          <h3 className="p-title">{title}</h3>
            <p className="p-stack">MongoDB -|- Express -|- Node</p>
            <p className="p-details"> Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p>
        </div>
    </div>
  )
}

export default Gifsinfo