import React, { Component } from "react";
import { Link } from "react-router-dom";

class Front extends Component {
    render = () => {
        return (
            <div>
                Front
                <Link to='/splash'>Splash</Link>
            </div>
        );
    };
}

export default Front;