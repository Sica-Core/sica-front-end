import React from "react";
import injectUser from "../../HoC/injectUser";

class InfoSideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="info-sidebar">
              <div className="info-sidebar__menu flex jcsb">
                <div className="button--icon jcsb" style={{width: '68px'}}><p>
                {this.props.current_user && this.props.current_user.sicaTokens}    
                </p> <img src="./toolkit/images/sica-token.svg" alt="" /></div>
                <div className="button--icon jcc aic"><span className="icon-people" /></div>
                <div className="button--icon jcc aic button--notification"><span className="icon-notification-bell-outline-interface-symbol" /></div>
                <div className="button--icon user-info" style={{backgroundImage: 'url("https://www.w3schools.com/w3images/avatar2.png")'}} />
              </div>
              <div className="info-sidebar__content">
                <h3 className="side-title">Notifications</h3>
                <div className="friend-request__block">
                  <div className="friend-request__image"><img src="https://www.w3schools.com/w3images/avatar2.png" alt="" /></div>
                  <div className="friend-request__info">
                    <h6 className="bold">Owen Kaya</h6>
                    <span>sent you a friend request</span>
                    <div className="friend-request__buttons">
                      <button><span />Decline</button>
                      <button className="green-button"><span />Accept</button>
                    </div>
                  </div>
                </div>
                <div className="friend-request__block">
                  <div className="friend-request__image"><img src="https://www.w3schools.com/w3images/avatar2.png" alt="" /></div>
                  <div className="friend-request__info">
                    <h6 className="bold">Owen Kaya</h6>
                    <span>sent you a friend request</span>
                    <div className="friend-request__buttons">
                      <button><span />Decline</button>
                      <button className="green-button"><span />Accept</button>
                    </div>
                  </div>
                </div>
                <a href="#" className="card">
                  <div className="card__img">
                    <img src="https://teamsingularity.com/wp-content/uploads/2020/03/Nordic-championship-report-website.png" alt="" />
                  </div>
                  <h4>Nordic Championship</h4>
                  <p>PUBG • 22/11/2020</p>
                </a>
                <a href="#" className="card">
                  <div className="card__img">
                    <img src="https://teamsingularity.com/wp-content/uploads/2020/03/Nordic-championship-report-website.png" alt="" />
                  </div>
                  <h4>Dell Gaming Championship</h4>
                  <p>DOTA2 • 22/11/2020</p>
                </a>
                <a href="#" className="card">
                  <div className="card__img">
                    <img src="https://teamsingularity.com/wp-content/uploads/2020/03/Nordic-championship-report-website.png" alt="" />
                  </div>
                  <h4>Dell Gaming Championship</h4>
                  <p>DOTA2 • 22/11/2020</p>
                </a>
              </div>
            </div>
        )
    }
}

export default injectUser(InfoSideBar);