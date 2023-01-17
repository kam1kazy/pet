import React from "react"
import Alerts from "../../components/toolbars/alerts"
import Menu from "../../components/toolbars/menu"

export default function Header() {
  return (
    <section className='header'>
      <div className='menu'>
        <Menu />
      </div>
      <h1>TRAP</h1>
      <div className='notification'>
        <Alerts />
      </div>
    </section>
  )
}
