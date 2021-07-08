import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink
                    activeClass="active"
                    to="pizzaSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={toggle}>Pizzas</SidebarLink>
                <SidebarLink to='/' onClick={toggle}>Desserts</SidebarLink>
                <SidebarLink to='/' onClick={toggle}>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/' onClick={toggle}>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;