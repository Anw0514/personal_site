import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item>Option 1</Menu.Item>
                <Menu.Item>Option 2</Menu.Item>
                <Menu.Item>Option 3</Menu.Item>
            </Menu>
        )
    }
}

export default Navbar