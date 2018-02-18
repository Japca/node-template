import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './test.css'

class Test extends Component {

    render() {
        console.info('Test component')
        return (
            <div>
              <h1 styleName="coll">Test compnent</h1>
            </div>
        )
    }
}


export default CSSModules(Test, styles)