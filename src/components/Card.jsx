import './card.css'
import logo from '../data/car.png'
export default function Card({item}){
    return <div className="card">
        <div className="image">
           <img src={item.image || logo} alt="imagehere" />
        </div>
        <div className="des">
            <span className="title">{item.title}</span>
        </div>
    </div>
}