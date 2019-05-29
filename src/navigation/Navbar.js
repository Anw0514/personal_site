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
                    active={this.state.activeItem === 'About'}
                    onClick={() => this.changeActiveItem('About')}
                >
                    About
                </Menu.Item>
                <Menu.Item 
                    active={this.state.activeItem === 'Skills'}
                    onClick={() => this.changeActiveItem('Skills')}
                >
                    Skills
                </Menu.Item>
                <Menu.Item 
                    active={this.state.activeItem === 'Projects'}
                    onClick={() => this.changeActiveItem('Projects')}
                >
                    Projects
                </Menu.Item>
                <Menu.Item
                    active={this.state.activeItem === 'Games'}
                    onClick={() => this.changeActiveItem('Games')}
                >
                    Games
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navbar