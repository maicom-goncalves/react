import React, { Component } from 'react';
import mqescrv from '../src/img/mqescrv.png';
export default (props) => {
    return (
        <div id="data" style={{
            backgroundColor: props.color || '#FB3640'
        }}>
            <img src={{uri: props.uri || {mqescrv} }} />

            Aquidauana 31 de Outubro de 1999.
                <br />
        </div>
    );

};






