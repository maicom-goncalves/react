//import React from 'react'
import React, { useState } from "react";
import { AnimeInfo } from './AnimeInfo';
import { Modal, Button } from 'antd';


export const AnimeList = ({ animelist }) => {

  const [animeInfo, setAnimeInfo] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const MyModal = ({ visible, onClose }) => {

    return (
      <Modal
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            fechar
          </Button>
        ]}
      >
        {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
      </Modal>
    );
  };

  return (
    <>
      <MyModal visible={modalVisible} onClose={closeModal} />
      {
        animelist ? (
          animelist.map((anime, index) => {
            return (
              
              <div className="card" key={index} onClick={() => setAnimeInfo(anime)}>
                <div className="anime-inform">
                  <div className="overlay">
                    <p><b>{anime.title}</b></p>
                    {/*<p>{anime.title_japanese}</p>*/}
                  </div>
                </div>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" onClick={showModal} />
              </div>
            )
          })
        ) : "Não encontrado"
      }

    </>
  )
}
