import React from "react"

import img from "./img.jpg"

function SectionOne(){
    return(
        <section className="section_one">
            <div className="inner">
                <div className="both_sides">
                    <div className="section_one_left">
                        <div className="inner_left">
                            <h1 className="welcome">Welcome</h1>
                            <hr className= "hr"/>
                            <p className="left_p">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="learn_more">Learn More</div>
                        </div>
                    </div>
                    <div className="section_one_right">
                            <img src={img} alt="img" />
                            <div className="right_bottom">
                                <div className="inner_right">
                                    <h3 className="h3">UI/UX Design</h3>
                                    <p className="p_one">
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <p className="p_two">
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne