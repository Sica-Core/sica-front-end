import React from "react";
import InfoSideBar from "../../components/InfoSideBar";
import SideBar from "../../components/SideBar";

class Spaces extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <SideBar/>
                <div className="main-layout">
                    <div className="search-bar">
                    <span className="icon-magnifying-glass" />
                    <input type="text" placeholder="Search anything..." />
                    </div>
                    <div className="subscription">
                    <div className="friend-request__block big">
                        <div className="friend-request__image"><img src="https://www.w3schools.com/w3images/avatar2.png" alt="" /></div>
                        <div className="friend-request__info">
                        <h6 className="bold">DreamHack</h6>
                        <span>22K Subscribes</span>
                        </div>
                    </div>
                    </div>
                    <h3 className="section-title bold">Feed</h3>
                    <div className="cards-group">
                    <div className="max-card">
                        <div className="profile-box">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                        <div className="profile-box__info">
                            <a href="#"><h3>Sica</h3></a>
                            <a href="#"><p>Yesterday 10:00</p></a>
                        </div>
                        </div>
                        <h2>Four teams are qualified for the Nordic Championship in League Of Legends! <br /> There are still four spots to fight for in the remaining two qualifiers this upcoming weekend. Register your team before it’s too late!</h2>
                        <div className="max-card__image">
                        <img src="./toolkit/images/cod.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="max-card">
                        <div className="profile-box">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                        <div className="profile-box__info">
                            <h3>Sica</h3>
                            <p>Yesterday 10:00</p>
                        </div>
                        </div>
                        <h2>Four teams are qualified for the Nordic Championship in League Of Legends! <br /> There are still four spots to fight for in the remaining two qualifiers this upcoming weekend. Register your team before it’s too late!</h2>
                        <div className="max-card__image">
                        <img src="./toolkit/images/cod.jpeg" alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <InfoSideBar/>
            </React.Fragment>
        )
    }
}

export default Spaces;