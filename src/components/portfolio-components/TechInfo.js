import "../CSS/Portfolio.css";


const Techinfo = ({title}) => {
  return (
    <div className="card-b">
        <div className="project-description">
              <p className="p-title"> {title} </p>
              <p className="p-stack">MongoDB -|-Express -|- Node</p>
              <p className="p-details"> Web Application that allows users to search for GIFs, as well as view a list of trending keywords and the most popular 10 GIFs of the moment populated utilizing the Giphy API.</p>
          </div>
    </div>
  )
}

export default Techinfo