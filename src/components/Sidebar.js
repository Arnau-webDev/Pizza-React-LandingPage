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
                    duration={500}
                    onClick={toggle}>Pizzas</SidebarLink>
                <SidebarLink
                    onClick={toggle}
                    to="dessertsSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Desserts</SidebarLink>
                <SidebarLink
                    onClick={toggle}
                    to="menuSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-250}
                >Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/' onClick={toggle}>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;