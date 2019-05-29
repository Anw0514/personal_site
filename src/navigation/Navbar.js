import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            activeItem: ''
        }
    }

    changeActiveItem = (string, scrollNumber) => {
        this.setState({activeItem: string})
        window.scrollTo({top: 1000, behavior: 'smooth'})
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
                    active={this.state.activeItem === 'Mini Games'}
                    onClick={() => this.changeActiveItem('Mini Games')}
                >
                    Mini Games
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navbar