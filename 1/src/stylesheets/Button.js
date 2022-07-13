import styled from 'styled-components';

export default styled.button `
    color: palevioletred;
    background-color: white;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin: 0 50px;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, width 2s, height 2s;
    font-size: 1.3rem;

    &:hover:first-child {
        box-shadow: -2px 5px 13px -8px palevioletred;
    }
    &:focus:first-child {
        background-color: #eb2868;
        color: white;
        font-weight: bold;
        width: 45px;
        height: 45px;
        box-shadow: -2px 5px 13px -8px gray;
    }
    &:hover:nth-of-type(2) {
        box-shadow: -2px 5px 13px -8px #006910;
    }
    &:focus:nth-of-type(2) {
        background-color: #00E827;
        color: white;
        font-weight: bold;
        width: 45px;
        height: 45px;
        box-shadow: -2px 5px 13px -8px gray;
    }
`