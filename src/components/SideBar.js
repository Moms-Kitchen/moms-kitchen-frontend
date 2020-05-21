import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';

import './SideBar.css';
import LogoImage from '../img/logo/Logo.png';
import NameImage from '../img/logo/Name.png';

class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SideNav className="sideBar boxShadowPro" onSelect={(selected) => {
                        // Add your code here
                    }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Charts
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Square">
                            <NavIcon>
                                <i className="fa fa-fw fa-linkedin-square" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Square
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        )
    }

}

export default SideBar;