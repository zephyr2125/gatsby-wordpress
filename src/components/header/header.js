import React from "react";
import { navigate } from "gatsby";

const Header = () => {  

    return ( 
        <section className="header">
            <div className="header_wrapper">
                <div aria-hidden="true" className="header_logo" onClick={() => { navigate("/")}}>
                    <div>Header</div>
                </div>
            </div>
        </section>
     );
}
 
export default Header;
