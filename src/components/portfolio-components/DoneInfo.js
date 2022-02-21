import "../CSS/Portfolio.css";


const DoneInfo = ({title}) => {
  return (
    <div className="card-b">
       <div className="project-description"> 
              <h3 className="p-title">{title}</h3>
              <p className="p-stack">ReactJS -|- MongoDB -|- Firebase Authentication</p>
              <p className="p-details">Full Stack Web Application that allows users to login to their google account using Firebase authentication and create lists of chores they need completed."</p>        
      </div>
    </div>
  )
}

export default DoneInfo