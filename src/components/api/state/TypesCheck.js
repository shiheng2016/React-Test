/**
 * Created by Shimo
 * https://github.com/shiheng2016
 * @author shimo
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class TypesCheck extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

TypesCheck.propTypes = {
    name: PropTypes.string
};