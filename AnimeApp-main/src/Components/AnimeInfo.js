import React from 'react'

export const AnimeInfo = (props) => {
  const { title, images: { jpg: { image_url } }, source, popularity, status, title_japanese, duration, synopsis, type } = props.animeInfo


  return (
    <>
      <div className="anime-content">
        <div className='cabecalho'>
          <h3>{title}</h3><br />
          <h4><i>"{title_japanese}"</i></h4>
        </div>
         <div className="info">
          <h4><b>Type :</b>{type}</h4>
          <p><b className="titulo"> Popularity:</b> {popularity}</p>
          <p><b className="titulo">Source: </b>{source}</p>
          <p><b className="titulo">Duration: </b>{duration}</p>
          <p><b className="titulo">Status: </b>{status}</p>
        </div>
        <div className="imagem">
          <img src={image_url} alt="anime" />
        </div>
       
        <div className='sinopse'>
          <p><b>Synopse:</b></p>
          <p className="justificado">
            {synopsis}
          </p>
        </div>


      </div>
    </>
  )
}
