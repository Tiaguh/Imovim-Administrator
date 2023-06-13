import React from 'react';
import './PostsPendent.css';

import NavBar from '../../components/NavBar/NavBar'

export default function PostsPendent() {
  return (
    <div>

      <NavBar />

      <div className="posts-complaint-container">

        <h1>Pendentes</h1>
        <h2>Filtar</h2>

        <table>
          <tr className='title-table'>
            <th>ID</th>
            <th>Nickname</th>
            <th>Motivo</th>
            <th>Data de denúncia</th>
            <th>Número de denúncias</th>
            <th></th>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Ver Post</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Ver Post</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Ver Post</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button>Ver Post</button></td>
          </tr>

        </table>

      </div>

    </div>
  )
}