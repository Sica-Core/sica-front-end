import React from "react"

export default props => {
    return (
        <section className="sidebar">
        <div className="sidebar__logo">
          <a href="#"><img src="../../assets/toolkit/images/sica-logo.svg" alt="" /></a>
        </div>
        <ul className="sidebar__menu">
          <li><a href="#" className="active">Explore</a></li>
          <li><a href="#">Feed</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Store</a></li>
        </ul>
        <ul className="sidebar__menu sidebar__spaces">
          <p>Spaces</p>
          <li className="flex aic">
            <div className="small-img flex">
              <img src="https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2018/10/Turtle-Beach-DreamHack-Atlanta.jpg" alt="" />
            </div>
            <a href="#">DreamHack</a>
          </li>
          <li className="flex aic">
            <div className="small-img flex">
              <img src="https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2018/10/Turtle-Beach-DreamHack-Atlanta.jpg" alt="" />
            </div>
            <a href="#">FragLeague</a>
          </li>
        </ul>
      </section>
    )
}