import React from 'react';
import './PostsComplaint.css';

import NavBar from '../../components/NavBar/NavBar'
import PostsDenunciados from '../../components/PostsDenunciados/PostsDenunciados';


export default function PostsComplaint() {
  return (
    <div>

      <NavBar />

      <h1>Posts Denunciados</h1>

      <div className="infos">

        <h1>Denunciado</h1>
        <h1>id_denunciado</h1>

        <h1>Motivo da denúncia</h1>

      </div>

      <PostsDenunciados 
        denunciado = "Luis"
        idDenunciado = "2"
        motivoDenuncia = "NickName abusivo"
      />
    </div>
  )
}