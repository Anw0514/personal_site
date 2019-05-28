import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            activeItem: ''
        }
    }

    changeActiveItem = (string) => {
        this.setState({activeItem: string})
    }

    render() {
        return (
            <Menu inverted pointing secondary >
                <Menu.Item 
                    active={this.state.activeItem === 'Option 1'}
                    onClick={() => this.changeActiveItem('Option 1')}
                >
                    Option 1
                </Menu.Item>
                <Menu.Item 
                    active={this.state.activeItem === 'Option 2'}
                    onClick={() => this.changeActiveItem('Option 2')}
                >
                    Option 2
                </Menu.Item>
                <Menu.Item 
                    active={this.state.activeItem === 'Option 3'}
                    onClick={() => this.changeActiveItem('Option 3')}
                >
                    Option 3
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navbar