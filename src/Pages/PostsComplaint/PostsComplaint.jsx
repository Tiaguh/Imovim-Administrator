import React from 'react';
import './PostsComplaint.css';

import NavBar from '../../components/NavBar/NavBar'
import PostsDenunciados from '../../components/PostsDenunciados/PostsDenunciados';


export default function PostsComplaint() {
  return (
    <div className='posts-complaint-container'>

      <NavBar />

      <h1>Posts Denunciados</h1>

      <div className="infos">

        <div className="id-denunciado-container">
          <h1>id_denunciado</h1>
        </div>

        <div className="denunciado-container">
          <h1>Denunciado</h1>
        </div>

        <div className="motivo-denuncia-container">
          <h1>Motivo da denúncia</h1>
        </div>

        <div className="ocupar-espaco" />

      </div>

      <PostsDenunciados
        denunciado="Luis"
        idDenunciado="2"
        motivoDenuncia="NickName abusivo"
      />

      <PostsDenunciados
        denunciado="Luis"
        idDenunciado="2"
        motivoDenuncia="NickName abusivo"
      />

    </div>
  )
}