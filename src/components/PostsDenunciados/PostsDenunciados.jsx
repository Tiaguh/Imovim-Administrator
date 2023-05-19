import React from 'react'
import "./PostsDenunciados.css"

export default function PostsDenunciados(props) {
    return (
        <div className='info-data-container'>
            <div className='info-data'>
                <div className="info-data-type-1">
                    <h3>{props.idDenunciado}</h3>
                </div>

                <div className="info-data-type-2">
                    <h3>{props.denunciado}</h3>
                </div>

                <div className="info-data-type-1">
                    <h3>{props.motivoDenuncia}</h3>
                </div>
            </div>

            <button>
                <p>Ver Post</p>
            </button>

        </div>
    )
}