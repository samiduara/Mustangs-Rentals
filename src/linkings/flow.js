import React from 'react';
import PropTypes from "prop-types";

class Flow extends React.Component {
    render() {
        return(
            <li className={this.props.isActive ? 'active' : 'inActive'}>
                <div>
                    <div className="circle">
                        <h3>
                        {
                            this.props.isCompleted
                            ?
                            <i class="fas fa-check"></i>
                            :
                            this.props.flowNumber
                        }
                        </h3>
                    </div>
                    <h3>{this.props.title}</h3>
                </div>
            </li>
        )
    }
}



export default Flow;