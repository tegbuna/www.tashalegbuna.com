import "../CSS/Portfolio.css";


const Readitinfo = ({title}) => {
  return (
    <div className="card-b">
          <div className="project-description">
              <h3 className="p-title">{title} </h3>
              <p className="p-stack">ReactJS, Ruby on Rails, PostgreSQL </p>
              <p className="p-details">Full Stack  Web Application that allows users to search for books they would like to read as well as create, read, upate and delete lists of books they have already read, JSON data populated utilizing the google books API.</p>
          </div>
    </div>
  )
}

export default Readitinfo