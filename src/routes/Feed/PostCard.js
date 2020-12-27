import React from "react";

class PostCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
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
        )
    }
}

export default PostCard;