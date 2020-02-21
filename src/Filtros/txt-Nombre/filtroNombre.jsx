import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class filtroNombre extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <input type="text" id="txtNombre" onKeyUp="" placeholder="Nombre del campeón"></input>
        )
    }
}
