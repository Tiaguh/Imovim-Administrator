import React, { useState, useEffect } from 'react';
import "./Historic.css"

import api from '../../services/api.js'

import NavBar from '../../components/NavBar/NavBar';

export default function Historic() {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const [reports, setReports] = useState([])

  const getData = async () => {
    const { data } = await api.get("/report/get-all-complaints")
    setReports(data)
  }

  useEffect(() => {
    getData()
  }, [])

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

          {reports.map((report, index) => {
            return (
              <tr className='value-table'>
                <td>{report.user_id}</td>
                <td>{report.nickname}</td>
                <td>{report.motive}</td>
                <td>{report.created_at.slice(0, 10)}</td>
                <td>{report.qntd}</td>
                <td><button className={report.status === 'ignored' ? "ignorate-button" : "ban-button"}>{report.status === 'ignored' ? "Ignorado" : "Banido"}</button></td>
              </tr>
            )
          })}

        </table>

      </div>

    </div>
  )
}