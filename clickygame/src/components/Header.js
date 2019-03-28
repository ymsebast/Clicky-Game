import React from "react";

function Header(props) {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Get points by clicking new Image. Loose when repeated image clicked.</p>
                <p className="lead">
                    Score : {props.children}
                </p>
            </div>
        </div>
    );
}

export default Header;
