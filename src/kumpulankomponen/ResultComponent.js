import React, {Component} from 'react';

export default class ResultComponent extends Component {


    render() {     
        return (
            <div className="hasil">
                <p>{this.props.hasil}</p>
            </div>)
    };
};




