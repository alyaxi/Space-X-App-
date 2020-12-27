import React from 'react'
import "../Loader/LoaderStye.scss"
import {faRocket} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Loader() {
  const element = <FontAwesomeIcon icon = {faRocket} style={{ color: 'whiteSmoke' }}  size="sm" transform="down-2 grow-1" rotate={45} className="loader-1"/>
    return (
      <div className="loader loader-white">
  <div className="loader-spined">
    <div className="loader--icon">
          <i className="offset-45deg">{element}</i>
    </div>
  </div>
  
  <div className="pufs">
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
  </div>
  <div className="particles">
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
  </div>
</div>
    )
}
