import React from "react"
import style from "./Header.module.scss"
import { Link } from "react-router-dom"
import { Col, Row, Container } from "react-bootstrap"

const Header = () => {
    return (
        <div className={style.header}>
            
                <Link to="/">
                    <h2>TW SHOWS</h2>
                </Link>
           
        </div >
    )
}
export default Header