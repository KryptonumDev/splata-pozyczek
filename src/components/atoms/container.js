import styled from "styled-components";

export const Container = styled.div`
    max-width: 1328px;
    padding: 0 2rem;
    margin: 0 auto;
    position: relative;
    
    @media (min-width: 768px){
        padding: 0 4rem;
    }

    &.small{
        max-width: 1160px;
    }
    
`