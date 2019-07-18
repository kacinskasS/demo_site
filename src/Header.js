import React from "react"

function Header(){
    return(
        <header className="header">
            <div className="inner">
            <ul className= "top_list">
                <li className="top_list_li_first">Menu</li>
                <li className="top_list_li">Some Text</li>
                <li className="top_list_li">Another Item</li>
                <li className="top_list_li">One More</li>
                <li className="top_list_li_last">And Last One</li>
            </ul>
                <div className="nav_bottom">
                    <h1 className="site_name">DEMO<span className="site_name_span">SITE</span></h1>
                    <nav>
                        <ul className="nav_list">
                            <li className="nav_list_li">Home</li>
                            <li className="nav_list_li">Service</li>
                            <li className="nav_list_li">
                                    Works
                                    <div className="square"></div>
                                    <div className="dropdown">
                                        <div className="item">All</div>
                                        <div className="item">Graphic</div>
                                        <div className="item">Design</div>
                                        <div className="item">Logo</div>
                                        <div className="item">Website</div>
                                    </div>
                            </li>
                            <li className="nav_list_li">About Me</li>
                            <li className="nav_list_li">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header