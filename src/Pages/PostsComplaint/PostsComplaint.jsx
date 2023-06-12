import React from 'react';
import './PostsComplaint.css';

import NavBar from '../../components/NavBar/NavBar'

export default function PostsComplaint() {
  return (
    <div>

      <NavBar />

      <div className="posts-complaint-container">

        <h1>Pendentes</h1>

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
            <button>Ver Post</button>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <button>Ver Post</button>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <button>Ver Post</button>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <button>Ver Post</button>
          </tr>

        </table>

      </div>

    </div>
  )
}