import React from 'react';
import { render } from "react-dom";
import CrystalAnswer from './CrystalAnswer';
import "./CrystalBall.css";

function Answer(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div>
            <CrystalAnswer />
        </div>
    );
}

class CrystalBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showAnswer: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    };

    handleToggleClick() {
        this.setState(state => ({
            showAnswer: !state.showAnswer
        }));
    };

    render() {
        return (
            <div className="circle">
                <Answer show={this.state.showAnswer} />
                <button 
                style={{
                    opacity: this.state.showAnswer ? 0.75 : 1,
                    transition: this.state.showAnswer ? "" : "1s",
                }}
                className="primary-button" 
                onClick={this.handleToggleClick}
                >
                    {this.state.showAnswer ? 'Ask another question' : 'Ask the crystal ball'}
                </button>
            </div>
        );
    }
};

render(<CrystalBall />, document.getElementById("root"));