import React from 'react';
import { connect } from 'react-redux';

import './CatData.css';

const CatData = props => {
    return(
        <div className='cat-facts'>
            <h1>Cat Facts</h1>
            <ol>
                {props.catData.map(item => (
                    <li>
                        <img src="https://img.icons8.com/fluent/15/000000/cat.png"/>
                        {item.text}
                    </li>
                ))}
            </ol>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        catData: state.catData,
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps, {})(CatData);