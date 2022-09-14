import React from "react"
import styled from "styled-components"
import { textParser } from '../../../helpers/wysiwyg-modification'

const FaqItem = ({ el, open }) => (
    <Item key={el.question} open={open}>
        <summary
            itemProp='mainEntity'
            itemType='https://schema.org/Question'>
            <h3 className="body1" itemProp='name' dangerouslySetInnerHTML={{ __html: textParser(el.question) }} />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_742_15436)">
                    <path d="M17.7826 12.2175L11.6551 6.08998C11.3068 5.74076 10.893 5.46369 10.4374 5.27464C9.9818 5.08559 9.49339 4.98828 9.00014 4.98828C8.50688 4.98828 8.01848 5.08559 7.56289 5.27464C7.1073 5.46369 6.69348 5.74076 6.34514 6.08998L0.217639 12.2175C0.0764112 12.3587 -0.00292969 12.5503 -0.00292969 12.75C-0.00292969 12.9497 0.0764112 13.1413 0.217639 13.2825C0.358867 13.4237 0.550413 13.5031 0.750139 13.5031C0.949865 13.5031 1.14141 13.4237 1.28264 13.2825L7.41014 7.15498C7.83202 6.73363 8.40389 6.49696 9.00014 6.49696C9.59639 6.49696 10.1683 6.73363 10.5901 7.15498L16.7176 13.2825C16.7874 13.3528 16.8703 13.4086 16.9617 13.4467C17.0531 13.4847 17.1511 13.5043 17.2501 13.5043C17.3491 13.5043 17.4472 13.4847 17.5386 13.4467C17.63 13.4086 17.7129 13.3528 17.7826 13.2825C17.8529 13.2128 17.9087 13.1298 17.9468 13.0384C17.9849 12.947 18.0045 12.849 18.0045 12.75C18.0045 12.651 17.9849 12.5529 17.9468 12.4616C17.9087 12.3702 17.8529 12.2872 17.7826 12.2175Z" fill="#75757A" />
                </g>
                <defs>
                    <clipPath id="clip0_742_15436">
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </summary>
        <div
            itemProp='acceptedAnswer'
            itemType='https://schema.org/Answer'>
            <span className="body2" itemProp='text' dangerouslySetInnerHTML={{ __html: el.answer }}>
            </span>
        </div>
    </Item>
)

export default FaqItem

const Item = styled.details`

    a{
        color: #3B5BA9;
    }

    summary{
        padding: 12px;
        display: grid;
        align-items: center;
        grid-template-columns: auto 18px;
        grid-gap: 18px;
        border: 2px solid #75757A;
        border-radius: 8px;
        background-color: var(--color-white);
        transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);

        svg{
            transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
    }

    .body2{
        margin-top: 8px;
        display: block;
    }

    &[open]{
        summary{
            background-color: #DAE2FF;

            svg{
                transform: rotateX(180deg);
            }
        }
    }
`