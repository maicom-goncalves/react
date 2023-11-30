import React from 'react'

function animeModal (props) {
    
    console.log(props.endereco)
        return (
            <div id="animeModal">   
                <div className="ilustrator">
                <img src={props.endereco}  />

                </div>
        
            </div>
            
        )
}

export default animeModal