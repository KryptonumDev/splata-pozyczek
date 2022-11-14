import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    box-sizing: content-box;
    padding: 0 clamp(16px, ${24 / 768 * 100}vw, 80px);
    margin: 0 auto;
    position: relative;
    
    content-visibility: auto; // tells browser to hide when outside viewport
  contain-intrinsic-size: 500px; // estimated size of container to make sure the scroll bar stays same size 


    &.small{
        max-width: 1160px;
    }
    
`