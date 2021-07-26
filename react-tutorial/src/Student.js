import React from 'react';
import PropTypes from 'prop-types';

const Student = props =>{
    return(
        <div>
            <h1>Hello , {props.name}</h1>
            <h2>Your Roll : {props.roll} </h2>
        </div>
    )
}

Student.propTypes={
    name : PropTypes.string.isRequired ,
    roll : PropTypes.number

}

Student.defaultPropes={
    name : "GeekyShows"
}

export default Student ;