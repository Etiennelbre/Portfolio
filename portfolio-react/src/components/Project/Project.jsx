import React from 'react'
import './Project.css'
import corewar from "../../assets/corewar.png"
import rpg from "../../assets/rpg.jpg"

const Project = () => {
    return (
      <div className='project'>
          <div className='project-title'>
              <h1>My project</h1>
              <div className='project-containers'>
                  <div className='project-item'>
                      <h2>COREWAR</h2>
                      <a href="https://github.com/EpitechPromo2028/B-CPE-200-BDX-2-1-corewar-nolann.dubos" target="_blank">
                          <img src={corewar} alt=''/>
                      </a>
                  </div>
                  <div className='project-item'>
                      <h2>MY RPG</h2>
                      <a href="https://github.com/EpitechPromo2028/B-MUL-200-BDX-2-1-myrpg-nolann.dubos" target="_blank">
                          <img src={rpg} alt=''/>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default Project