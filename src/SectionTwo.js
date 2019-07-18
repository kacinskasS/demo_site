import React from "react"
import RandomTitle from "./RandomTitle"

function SectionTwo(){
    return(
        <section className="section_two">
            <div className="inner">
                <div className="both_sides_sec_two">
                    <div className="section_two_left">
                        <h3 className="h3_web">Web Development</h3>
                        <p className="p_two_left">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="p_two_left">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="section_two_right">
                        <h3 className="h3_wire">Wireframe</h3>
                        <p className="p_two_right">
                            Duis aute irure dolor velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="section_two_right_bottom">
                            <div className="right_bottom_left">
                                <h3 className="custom_list">Custom List</h3>
                                <h4 className="some_heading">Some Heading</h4>
                                <div className="item_random"> <RandomTitle /></div>
                                <div className="item_random"> <RandomTitle /></div>
                                <div className="item_random"> <RandomTitle /></div>
                                <div className="item_random"> <RandomTitle /></div>
                            </div>
                            <div className="right_bottom_right">
                                <h3 className="web_development">Web Development</h3>
                                <p className="web_development_p">
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

export default SectionTwo