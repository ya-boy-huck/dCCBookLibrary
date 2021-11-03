import React from 'react';
import './Footer.css';

function Footer(props){
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="footer">
                    <h1>Created by Myles Lister</h1>
                    <h4><a href="https://github.com/ListerM6">Visit my GitHub</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;