import React, { useState } from 'react';
import "./Historic.css"

import NavBar from '../../components/NavBar/NavBar';

export default function Historic() {
  const [visibleFilter, setVisibleFilter] = useState(false);

  return (
    <div>

      <NavBar />

      <div className="posts-complaint-container">

        <div className="post-complaint-title">

          <div className='icon-container'>

            <h1>Histórico</h1>

          </div>

          <div className='filter-container'>

            <button onClick={() => setVisibleFilter(!visibleFilter)}>
              <h2>Filtar</h2>
            </button>

            {visibleFilter && (
              <div className='filter-options-historic'>
                <button>
                  <h1>Mais recentes</h1>
                </button>

                <button>
                  <h1>Mais antigas</h1>
                </button>

                <button>
                  <h1>Mais denunciados</h1>
                </button>

                <button>
                  <h1>Banidos</h1>
                </button>

                <button>
                  <h1>Ignorados</h1>
                </button>

              </div>
            )}

          </div>

        </div>

        <table>
          <tr className='title-table'>
            <th>ID</th>
            <th>Nickname</th>
            <th>Motivo</th>
            <th>Data de denúncia</th>
            <th>Número de denúncias</th>
            <th>Status</th>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button className='ignorate-button'>Ignorado</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button className='ban-button'>Banido</button></td>
          </tr>

        </table>

      </div>

    </div>
  )
}