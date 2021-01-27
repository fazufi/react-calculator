import React, {Component} from 'react';

export default class ResultComponent extends Component {


    render() {     
        return (
            <div>
            <h2>OUTPUT:</h2>
            <div className="hasil">                
                <p>{this.props.hasil}</p>
            </div>
            </div>)
    };
};




