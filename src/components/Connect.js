import './CSS/Connect.css'
import LetsConnect from './LetsConnect'

const Connect = ({title}) => {
  return (
    <div className='connect'>
        <div className="container">
        <h2 className="title" >{title}</h2>
            <div className="content">
        <LetsConnect/>
            </div>
        </div>
    </div>
  )
}

export default Connect