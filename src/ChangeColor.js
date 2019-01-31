import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

class ChangeColor extends Component {    
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        this.props.dispatch({type: 'CHANGE_COLOR'});
    }
    render() {
        const color = this.props.highlight ? 'black':'red';
        return (
            <TouchableOpacity onPress={this.changeColor}>
                <Text style={{color}}>Change Color</Text>
            </TouchableOpacity>
        );
    }
}
export default connect(
    function (state) {
        return{highlight: state.highlight};

    }
)(ChangeColor);
//index(Provider) -> App -> Controller => ChangeColor