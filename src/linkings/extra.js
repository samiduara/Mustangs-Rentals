import React, {Component} from 'react';

class Extras extends Component {
    render(){
        return (
            <div className="extras">
                <h1>NO EXTRA OPTION AVAILABLABLE</h1>
                <button onClick={() => this.props.setProgress(4)}>Continue</button>
            </div>
        )
    }
}

export default Extras;