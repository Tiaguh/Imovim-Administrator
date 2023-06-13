import React from 'react';
import './Historic.css';

import NavBar from '../../components/NavBar/NavBar'

export default function Historic() {
  return (
    <div>

      <NavBar />

      <div className="posts-complaint-container">

        <div className='post-complaint-title'>
          <h1>Histórico</h1>
          <h2>Filtar</h2>
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
            <td><button>Ignorado</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Banido</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Ignorado</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Banido</button></td>
          </tr>

        </table>

      </div>

    </div>
  )
}