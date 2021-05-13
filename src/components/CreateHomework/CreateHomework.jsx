import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export const CreateHomework = ({setNewHomework}) => {

    const [titleHomework,setTitleHomework] = useState('');
    const [descriptionHomework,setDescriptionHomework] = useState('');
    
    return(
        <div className="newHomework outer-pad">
            <div className="newHomework__header">
                <div className="newHomework__headerClose" onClick={()=> setNewHomework(false)}>
                    <img src={process.env.PUBLIC_URL +'/resources/icon_close.svg'} alt=""/>
                    <Link>Cancelar</Link>
                </div>
                <Link>Publicar</Link>
            </div>
            <div className="newHomework__title">
                <h3>Agregar nueva tarea</h3>
                <p>Docente</p>
            </div>
            <div className="newHomework__details">
                <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_edit.svg)`}}>
                    <input type="text" name="" id="" 
                    placeholder="Título"              
                    value={titleHomework}
                    onChange={e => setTitleHomework(e.target.value)}/>
                </div>
                <div className="inputField inputField--hasImg inputField--textarea" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_description.svg)`}}>
                    <textarea type="text" name="" id="" 
                    placeholder="Descripción"              
                    value={descriptionHomework}
                    onChange={e => setDescriptionHomework(e.target.value)}/>
                </div>
            </div>
            <div className="newHomework__delivery">
                <div className="newHomework__deliveryDate"> 
                    <div className="newHomework__deliveryDateText">
                        <img src="" alt="" />
                        <p>Fecha de entrega</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
