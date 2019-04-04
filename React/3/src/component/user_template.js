import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {

    return(
        <div>
            Template
        </div>
    )
}

UserTemplate.propTypes = {
    //name:PropTypes.oneOf(['Francis', 'Camilo']),
    name:PropTypes.oneOfType([PropTypes.oneOf([ 'Klopaloka']), PropTypes.string, PropTypes.number]),
    lastname:PropTypes.string,
    age:PropTypes.number,
    hobbies:PropTypes.arrayOf(PropTypes.string),
    spanish:PropTypes.bool,
    message:PropTypes.func,
    car:PropTypes.objectOf(PropTypes.string),
    //mother:PropTypes.string.isRequired
    mother:function(props,propName, componentName){
        if(props[propName] !== 'Jane'){
            return new Error(`The same ${props[propName]} is incorrect`)
        }
    }
}

export default UserTemplate;