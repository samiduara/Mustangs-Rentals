/* eslint-disable */ 

import React, {Component} from 'react';



class CreateRequest extends Component{
    state = {
       location: '',
       booking: '',
       textAdded: false
    }

    handleLocationOnKeyDown = event => {
        if(['Enter', 'Tab'].includes(event.key)) {
          event.preventDefault();
          const text = this.state.location.trim();
    
          if(text) {
            this.setState({
              location: text,
              textAdded: true
            });
          }
        }
    }
    
    handleLocationChange = event => {
        this.setState({
          location: event.target.value
        });
    }

    handleLocationPaste = event => {
        event.preventDefault();
        const paste = event.clipboardData.getData('text');
        if(paste){
            this.setState({
                location: paste
            });
        }
    }

    handleLocationDelete = () => {
        this.setState({
            location: '',
            textAdded: false
        });
    }

    render(){
        return(
            <main className="wrapper">
                {
                    this.state.textAdded
                    &&
                    <div className="text-chip">
                        {this.state.location}
                        <button
                        type="button"
                        className="button"
                        onClick={() => this.handleLocationDelete()}
                        >
                        &times;
                        </button>
                    </div>
                }
                 <input 
                    className="input"
                    placeholder="Type or paste Location and press Enter"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                    onKeyDown={this.handleLocationOnKeyDown}
                    onPaste={this.handleLocationPaste}
                  />
                {

                    this.state.textAdded
                    &&
                    <button class="btn orange" type="button" onClick={ () => {
                        this.props.setProgress 
                        this.setState({ location: this.state.location})
                    }}>
                            <span>Choose a Car</span>
                    </button>
                }
            </main>
        )
    }
}
export default (CreateRequest);