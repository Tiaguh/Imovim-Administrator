import React, { useState } from 'react';
import './PostsPendent.css';

import NavBar from '../../components/NavBar/NavBar';
import Modal from '../../components/Modal/Modal';

export default function PostsPendent() {
  const [visible, setVisible] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(false);

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>

      <NavBar />

      <div className="posts-complaint-container">

        <div className="post-complaint-title">

          <div className='icon-container'>

            <button onClick={() => setVisible(!visible)}>
              <h1>Pendentes</h1>

              <div className="icon" />
            </button>

            {visible && (
              <div className='options'>
                <button>
                  <h1>Usuários</h1>
                </button>

                <button>
                  <h1>Posts</h1>
                </button>
              </div>
            )}

          </div>

          <div className='filter-container'>

            <button onClick={() => setVisibleFilter(!visibleFilter)}>
              <h2>Filtar</h2>
            </button>

            {visibleFilter && (
              <div className='filter-options'>
                <button>
                  <h1>Mais recentes</h1>
                </button>

                <button>
                  <h1>Mais antigas</h1>
                </button>

                <button>
                  <h1>Mais denunciados</h1>
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
            <th></th>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button onClick={() => setOpenModal(true)}>Ver Post</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button onClick={() => setOpenModal(true)}>Ver Post</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button onClick={() => setOpenModal(true)}>Ver Post</button></td>
          </tr>

          <tr className='value-table'>
            <td>04</td>
            <td>Tiaguh_</td>
            <td>Low Profile</td>
            <td>12/06/2023</td>
            <td>22</td>
            <td><button onClick={() => setOpenModal(true)}>Ver Post</button></td>
          </tr>

        </table>

      </div>

      <div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>

          <div className='title-post'>
            <div className='foto-container' />
            <h1>Nome Sobrenome</h1>
          </div>

          <div className="post" />

          <div className='close-modal-container'>
            <button className='close-modal'>Ocultar Post</button>
          </div>
          <button className='ignorate-button-modal'>Ignorar</button>

        </Modal>
      </div>

    </div>
  )
}