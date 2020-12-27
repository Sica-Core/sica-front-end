import React from "react";
import InfoSideBar from "../../components/InfoSideBar";
import SideBar from "../../components/SideBar";

class Home2 extends React.Component {
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
                        <section>
                        <h3 className="section-title bold">Featured Tournaments</h3>
                        <div className="cards__grid">
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2018/10/Turtle-Beach-DreamHack-Atlanta.jpg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                                <span className="text-uppercase">CS:GO</span>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                                <span>CS:GO</span>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                                <span>CS:GO</span>
                            </div>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h3 className="section-title bold">Browse Games</h3>
                        <div className="cards__grid long">
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h3 className="section-title bold">Videos</h3>
                        <div className="cards__grid ">
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("./toolkit/images/cod.jpeg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h3 className="section-title bold">Join new space</h3>
                        <div className="cards__grid ">
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2018/10/Turtle-Beach-DreamHack-Atlanta.jpg")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("https://teamsingularity.com/wp-content/uploads/2020/03/Nordic-championship-report-website.png")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card__img">
                                <div className="card__img-image" style={{backgroundImage: 'url("https://teamsingularity.com/wp-content/uploads/2020/03/Nordic-championship-report-website.png")'}} />
                            </div>
                            <div className="card__below">
                                <h5 className="bold">Omen Active Duty</h5>
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>

                <InfoSideBar/>
            </React.Fragment>
        )
    }
}

export default Home2;