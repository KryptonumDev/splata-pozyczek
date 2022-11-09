import { createGlobalStyle } from "styled-components"
import Light from './../images/check-light.svg'
import Medium from './../images/check-medium.svg'

const Global = createGlobalStyle`
:root {
   --shadow: 0px 4px 8px 3px rgba(97, 152, 193, 0.15), 0px 1px 3px rgba(97, 152, 193, 0.25);
   --section: clamp(40px, 10.4166666667vw, 80px);
   --section-post: clamp(40px, 6.25vw, 64px);

   --color-dark: #002B73;
   --color-medium: #3B5BA9;
   --color-light: #F2F4FF;
   --color-white: #FEF5F5;
}

* {
   font-family: 'Source Sans Pro';
   color: #050505;
   margin: 0;
   padding: 0;
   text-decoration: none;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
}

.react-select__control {
   border: 2px solid #6F6F71 !important;
}

a,
strong {
   color: inherit;
}

a {
   text-decoration: underline;
   color: #3B5BA9;
}

.overflow{
  overflow-x: hidden;
}

body {
   background: #FEF5F5;
}

main {
   margin-top: clamp(110px, 21.4375vw, 180px);
}

a,
span {
   font-weight: 600;
}

b,
strong {
   font-weight: 600;
}

.arsenal {
   font-family: 'Arsenal', 'Source Sans Pro';
}

.arsenal * {
   font-family: 'Arsenal', 'Source Sans Pro';
}

.blue {
   color: #3B5BA9;
}

.h1 {
   font-weight: 700;
   font-size: 72px;
   line-height: 111%;
   letter-spacing: -0.02em;
}

.h2 {
   font-weight: 700;
   font-size: 60px;
   line-height: 110%;
   letter-spacing: -0.02em;
}

.h3 {
   font-weight: 700;
   font-size: 54px;
   line-height: 111%;
   letter-spacing: -0.02em;
}

.h4 {
   font-weight: 700;
   /* 33/768*100 */
   font-size: clamp(28px, 4.296875vw, 38px);
   line-height: 118%;
   letter-spacing: -0.01em;
}

.h5 {
   font-weight: 700;
   font-size: clamp(25px, 3.515625vw, 29px);
   line-height: 128%;
   letter-spacing: -0.005em;
}

.h6 {
   font-weight: 700;
   /* 18/768*100 */
   font-size: clamp(18px, 2.34375vw, 20px);
   line-height: 130%;
}

.sub1 {
   font-style: italic;
   font-weight: 700;
   font-size: 17px;
   line-height: 124%;
   letter-spacing: 0.02em;
}

.sub2 {
   font-weight: 700;
   font-size: 14px;
   line-height: 136%;
   letter-spacing: 0.02em;
}

.body1 {
   font-family: 'Source Sans Pro';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 131%;
   font-feature-settings: 'pnum' on, 'onum' on;
}

.body1 p {
   font-family: 'Source Sans Pro';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 131%;
   font-feature-settings: 'pnum' on, 'onum' on;
}

.body2 {
   font-family: 'Source Sans Pro';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 129%;
   font-feature-settings: 'pnum' on, 'onum' on;
}

.body2 p {
   font-family: 'Source Sans Pro';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 129%;
   font-feature-settings: 'pnum' on, 'onum' on;
}

.body3 {
   font-weight: 400;
   font-size: 11px;
   line-height: 127%;
   font-feature-settings: 'pnum' on, 'onum' on;
}

.body3 p {
   font-weight: 400;
   font-size: 11px;
   line-height: 127%;
   font-feature-settings: 'pnum' on, 'onum' on;
}


strong {
   color: #050505;
}

.button {
   font-family: 'Source Sans Pro';
   font-style: normal;
   font-weight: 600;
   /* 15/768*100 */
   font-size: clamp(15px, 1.953125vw, 16px);
   line-height: 125%;
   letter-spacing: 0.003em;
}

.filled {
   display: block;
   width: fit-content;
   font-family: 'Source Sans Pro';
   border: none;
   font-weight: 600;
   font-size: 16px;
   line-height: 125%;
   letter-spacing: 0.003em;
   color: #050505 !important;
   background: linear-gradient(315deg, #FCCF4F 0%, #E7DCBF 99.99%);
   box-shadow: 0px 1px 3px 1px rgba(97, 152, 193, 0.15), 0px 1px 2px rgba(97, 152, 193, 0.25);
   border-radius: 4px;
   padding: 10px 44px;
   text-decoration: unset;
   transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.filled:hover {
   background: linear-gradient(315deg, #EDBD35 0%, #E6D9AC 99.99%);
}

.filled:focus {
   background: linear-gradient(315deg, #B98901 0%, #E6BC7E 99.99%);
}

.filled:disabled {
   color: #B2B2B8;
   background: #E1E1EB;
}

.body1, .body2, .body3{
    ul, ol{
        display: grid;
        grid-gap: 16px;

        @media (max-width: 640px){
            grid-gap: 12px;
        }

        li{
            padding-left: clamp(40px, ${40 / 768 * 100}vw, 56px);
            min-height: 32px;
            padding-top: 2px;
            position: relative;
            list-style: none;
            color: #6F6F71;

            @media (max-width: 640px){
                padding-left: 32px;
                min-height: 24px;
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
                left: clamp(0px, ${4 / 768 * 100}vw, 16px);
                top: 0;
                width: 32px;
                height: 32px;
                position: absolute;

                @media (max-width: 768px) {
                  left: 0;
                }

                @media (max-width: 640px){
                    transform: scale(.75);
                }
            }

            &:first-child{
                &::before{
                    content: url(${Medium});
                }
            }
        }
    }

    ol li{
        counter-increment: int;
        &::before{
            content: counter(int) !important;
            background: #DAE2FF;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }

        &:first-child{
            &::before{
                color: #fff;
                background-color: var(--color-medium);
            }
        }
    }
}

`

export default Global