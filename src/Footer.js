import React from "react"

function Footer() {
    return(
        <section className="footer">
            <div className="inner">
                <div className="footer_both_sides">
                    <div className="footer_left">
                        <p className="footer_p">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="footer_right">
                        <ul className= "footer_list">
                            <li className="footer_list_li">Home</li>
                            <li className="footer_list_li">Service</li>
                            <li className="footer_list_li">Works</li>
                            <li className="footer_list_li">About Me</li>
                            <li className="footer_list_li">Contact</li>
                        </ul>
                        <span className="copyright">Ⓒ <span className="demo">Demo</span>SITE All rights reserved</span>

                    </div>
                </div>
            </div>
        </section>
    )

}


export default Footer