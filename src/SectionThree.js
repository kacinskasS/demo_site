import React from "react"

function SectionThree() {
    return(
        <section className="section_three">
            <div className="inner">
                <div className="both_sides_sec_three">
                    <div className="section_three_left">
                        <h1 className="contact">Contact</h1>
                        <hr className="hr_three"/>
                        <p className="p_three">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                    <div className="section_three_right">
                        <form>
                            <h4 className="h4">Name</h4>
                            <input type="text" name="name" className="input" autoComplete="off"/>
                            <h4 className="h4">Email</h4>
                            <input type="text" name="email" className="input" autoComplete="off"/>
                            <h4 className="h4">Message</h4>
                            <textarea name="description" defaultValue="" className="text_area"/>
                            <input type="submit" value="Send" className="button_send"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}



export default SectionThree