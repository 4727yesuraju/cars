import { useParams } from "react-router-dom";
import {useState} from 'react';

import { Link,useNavigate } from "react-router-dom";

import Card from "./Card";


import data from '../data/data.json';
import './page.css';

export default function Page(){
    const navigate = useNavigate();
    const [currentPage,setCurrentPage] = useState(+useParams().id || 1);
    const [items,setItems] = useState(data);
    const noofCards = 6;
    const lastCard = currentPage * noofCards;
    const firstCard = lastCard - noofCards;


   function handleChange(e){
         setItems(data.filter(i=>i.title.toLowerCase().includes(e.target.value.toLowerCase())));
         navigate('/page/'+1);
   }
    const record = items.slice(firstCard,lastCard);
   
    function prev(){
        if(firstCard !== 0){
            setCurrentPage(currentPage-1);
            navigate(`/page/${currentPage-1}`);
        }
   }
   
   function next(){
        if(lastCard <= items.length){
            setCurrentPage(currentPage+1);
            navigate(`/page/${currentPage+1}`);
        }
   }

    return <div>
        <header>
            <input type="text" placeholder="search car" onChange={handleChange}/>
        </header>
        <div className="cards">
            {record.map((item,id)=><Card key={id} item={item}/>)}
        </div>
        <footer>
            <div className="info">
                <span>{currentPage}</span> page out of <span>{Math.ceil(items.length/noofCards)}</span>
            </div>
            <div className="button">
                <button onClick={prev}>pre</button>
                <ul>
                    {
                        [...Array(Math.ceil(items.length/noofCards + 1)).keys()].slice(1).map((num,i)=>
                        <li  key={i} onClick={()=>setCurrentPage(num)}>
                            <Link to={`/page/${num}`}>{num}
                            </Link>
                        </li>
                        )

                    }
                </ul>

                <button onClick={next}>next</button>
            </div>
        </footer>
    </div>
}

