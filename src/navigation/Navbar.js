import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            active: ''
        }
    }

    render() {
        return (
            <Menu>
                <Menu.Item active={this.state.active === 'Option 1'}>Option 1</Menu.Item>
                <Menu.Item active={this.state.active === 'Option 2'}>Option 2</Menu.Item>
                <Menu.Item active={this.state.active === 'Option 3'}>Option 3</Menu.Item>
            </Menu>
        )
    }
}

export default Navbar