import React from "react";
import SideBar from "../../components/SideBar";
import InfoSideBar from "../../components/InfoSideBar";
import PostCard from "./PostCard";

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <SideBar/>
            <div className="main-layout">
              <div className="search-bar">
                <span className="icon-magnifying-glass" />
                <input type="text" placeholder="Search anything..." />
              </div>
              <h3 className="section-title bold">Posts</h3>
              <div className="cards-group">
                <PostCard/>
                <PostCard/>
              </div>
            </div>
            <InfoSideBar/>
        </div>
    
        )
    }
}

export default Feed;