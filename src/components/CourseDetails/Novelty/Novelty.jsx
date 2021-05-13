import React, { Fragment,useState } from 'react';

export const Novelty = (params) => {

    const [shareInfo,setShareInfo] = useState('');

    return(
        <Fragment>
            <div className="courseDetails__shareInfo outer-pad">
                <div className="inputField inputField--hasImg inputField--textarea inputField--novelty"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_edit.svg)`}}>
                    <textarea type="text" name="" id="" 
                    placeholder="Comparte información con la clase..."              
                    value={shareInfo}
                    onChange={e => setShareInfo(e.target.value)}/>
                </div>
            </div>
            <div className="courseDetails__news">
                <h3>Muro</h3>
            </div>
        </Fragment>)
    }
    