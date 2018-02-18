import React, { Component } from 'react'

export default class Log extends Component {

    render() {
        console.info('Log component')
        return (
            <div>
              <h1>Log compnent</h1>
            </div>
        )
    }
}