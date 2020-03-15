import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Skill extends Component {
    render() {
        return (
            <section id="skill" className="skill-area">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="skill-content ptb-100">
                                <div className="freelancer-section-title">
                                    <h2>Some of My <span>Skills</span></h2>
                                    <p>Learned skills after a lot amount of study, practice and work</p>
                                </div>

                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Graphic Design.   Adobe Suit.   Design Patterns.   Photography.   UI/UX.  </h3>
                                        </div>

                                        <div className="skill-bar">
                                            <Progress 
                                                percent={98} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Front End Development. HTML. CSS. JavaScript. JQuery. React. GreenShock. Bootstrap. Bulma. Bootstrap. Materialize. Squeleton. Storybook. Next.Js. P5.js</h3>

                                            {/* <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="90">0</span>%</div></div> */}
                                        </div>

                                        <div className="skill-bar">
                                            <Progress 
                                                percent={82} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Back End Development. NodeJs. GraphQl. Express. MongoDB. Mongoose. Prisma. Apollo. PHP. SQL. Python. Flask. Django. Laravel. </h3>

                                            {/* <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="95">0</span>%</div></div> */}
                                        </div>

                                        <div className="skill-bar">
                                            <Progress 
                                                percent={60} 
                                            />
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Version Control Software. Git. GitHub. Heroku. NPM. YARN. AWS</h3>

                                            {/* <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="93">0</span>%</div></div> */}
                                        </div>

                                        <div className="skill-bar">
                                            <Progress 
                                                percent={75} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="skill-image">
                                <img src={require("../../images/skill-bg.jpg")} alt="skill-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skill;
