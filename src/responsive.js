import { css } from "styled-components"


export const Mobile = (props)=>{
    return css`
    @media only screen and (max-width: 830px) {
        ${props}
    }
    `;
};