import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    margin-top: -80px;
    background: transparent;
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 25px;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;
