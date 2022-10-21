import styled from "styled-components";
import Light from './../../images/check-light.svg'


export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 32px;

@media (max-width: 640px) {
    grid-gap: 12px;
    grid-template-columns: 1fr;
}

.body1, .body2{
    display: block;

    * + *{
        margin-top: 16px;

        @media (max-width: 640px) {
            margin-top: 8px;
        }
    }

    p{
        color: #6F6F71;
    }


    ul, ol{
        display: grid;
        grid-gap: 12px;

        li{
            margin-top: 0;
            padding-left: 32px;
            min-height: 24px;
            padding-top: 1.5px;
            position: relative;
            list-style: none;
            color: #6F6F71;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;

            ul{
                margin: 12px 0 0 0;
            }

            span{
                font-weight: 600;
            }

            strong{
                color: #000;
            }

            a{
                color: #3B5BA9;
                font-weight: 600;
            }

            &::before{
                content: url(${Light});
                position: absolute;
                left: -4px;
                top: -4px;
                width: 32px;
                height: 32px;
                transform: scale(.75);
                position: absolute;
            }
        }
    }

    ol{
        li{
            padding-left: 64px;
            padding-top: 5px;
            counter-increment: my-counter;

            &::before{
                content: counter(my-counter);
                font-weight: 400;
                font-size: 16px;
                line-height: 131%;
                font-feature-settings: 'pnum' on, 'onum' on;
                color: #00225A;
                transform: unset;
                width: 32px;
                height: 32px;
                left: 16px;
                top: 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #DAE2FF;
                border-radius: 50%;
            }

            @media (max-width: 820px){
                padding-left: 40px;

                &::before{
                    left: 0;
                }
            }
        }
    }
}
`