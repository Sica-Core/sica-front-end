import React from "react";
import { Link, withRouter } from "react-router-dom";

class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    getClassname = path => this.props.history.location.pathname === path ? "active" : ""
    render(){
        console.log({d:this.props.history})
        return (
            <section className="sidebar">
                <div className="sidebar__logo">
                <Link to="/explore">
                    <img src="./toolkit/images/sica-logo.svg" alt="" />
                </Link>
                </div>
                <ul className="sidebar__menu">
                <li><Link to="/explore" className={this.getClassname("/explore")}>Explore</Link></li>
                <li><Link to="/feed" className={this.getClassname("/feed")}>Feed</Link></li>
                <li><Link to="/games" className={this.getClassname("/games")}>Games</Link></li>
                <li><Link to="/videos" className={this.getClassname("/videos")}>Videos</Link></li>
                <li><Link to="/store" className={this.getClassname("/store")}>Store</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                </ul>
                <ul className="sidebar__menu sidebar__spaces">
                <Link to="/spaces">
                    <p>Spaces</p>
                </Link>
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
}

export default withRouter(SideBar);