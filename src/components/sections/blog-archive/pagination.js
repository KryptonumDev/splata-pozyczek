import { Link } from "gatsby"
import React, { useMemo, useState } from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"

export default function Pagination({ url: pageUrl, page, posts, setCurrentPage }) {

    const [InputVal, setInputVal] = useState(1)

    const pagesCount = useMemo(() => {
        return Math.ceil(posts.length / 12)
    }, [posts])

    const buttons = useMemo(() => {
        let arr = []

        for (let i = 0; i < pagesCount; i++) {
            arr.push(i)
        }

        return arr
    }, [pagesCount])

    const changeNumber = (val) => {
        if (val.currentTarget.value < 1) {
            val.currentTarget.value = 1
        } else if (val.currentTarget.value > pagesCount) {
            val.currentTarget.value = pagesCount
        }
        setInputVal(parseInt(val.currentTarget.value))
    }

    if (pagesCount < 2) {
        return null
    }

    return (
        <Wrapper>
            <Container>
                <Pages>
                    <Left url={pageUrl} setCurrentPage={setCurrentPage} currentPage={page} />
                    strona
                    {buttons.map((el, index) => {
                        let url = index === 0 ? pageUrl : pageUrl +  (el + 1) + '/'
                        if (page === 1 && (index === page - 1 || index === page || index === page + 1 || index === page + 2 || index === page + 3 || index === page + 4 || index === pagesCount - 1)) {
                            return (
                                <Button key={el} to={url} active={(page === el + 1).toString()}>
                                    <span>{el + 1}</span>
                                </Button>
                            )
                        }
                        if (page === pagesCount && (index === 0 || index === page - 6 || index === page - 5 || index === page - 4 || index === page - 3 || index === page - 2 || index === page - 1 || index === page || index === page + 1 || index === pagesCount - 1)) {
                            return (
                                <Button key={el} to={url} active={(page === el + 1).toString()}>
                                    <span>{el + 1}</span>
                                </Button>
                            )
                        }
                        if (page === 2) {
                            if (index === 0 || index === page - 1 || index === page || index === page + 1 || index === page + 2 || index === page + 3 || index === pagesCount - 1) {
                                return (
                                    <Button key={el} to={url} active={(page === el + 1).toString()}>
                                        <span>{el + 1}</span>
                                    </Button>
                                )
                            }
                            return null
                        }
                        if (page === 3) {
                            if (index === 0 || index === page - 2 || index === page - 1 || index === page || index === page + 1 || index === page + 2 || index === pagesCount - 1) {
                                return (
                                    <Button key={el} to={url} active={(page === el + 1).toString()}>
                                        <span>{el + 1}</span>
                                    </Button>
                                )
                            }
                            return null
                        }
                        if (page === pagesCount - 2) {
                            if (index === 0 || index === page - 4 || index === page - 3 || index === page - 2 || index === page - 1 || index === page || index === page + 1) {
                                return (
                                    <Button key={el} to={url} active={(page === el + 1).toString()}>
                                        <span>{el + 1}</span>
                                    </Button>
                                )
                            }
                            return null
                        }
                        if (page === pagesCount - 1) {
                            if (index === 0 || index === page - 5 || index === page - 4 || index === page - 3 || index === page - 2 || index === page - 1 || index === page || index === page + 1) {
                                return (
                                    <Button key={el} to={url} active={(page === el + 1).toString()}>
                                        <span>{el + 1}</span>
                                    </Button>
                                )
                            }
                            return null
                        }
                        if (page !== 1 && page !== pagesCount && (index === page - 3 || index === page - 2 || index === page - 1 || index === page || index === page + 1 || index === 0 || index === pagesCount - 1)) {
                            return (
                                <Button key={el} to={url} active={(page === el + 1).toString()}>
                                    <span>{el + 1}</span>
                                </Button>
                            )
                        }
                        return null
                    })}
                    <Right url={pageUrl} setCurrentPage={setCurrentPage} currentPage={page} maxPage={pagesCount} />
                </Pages>
                <InputPagination active={toString(InputVal === page)}>
                    <span className="gray body1">Idź do strony:</span>
                    <input defaultValue='1' onChange={(val) => { changeNumber(val) }} type='number' min='1' max={pagesCount} />
                    <Link to={InputVal === 1 ? pageUrl : pageUrl + InputVal + '/'} className="dark body1">Przejdź</Link>
                </InputPagination>
            </Container>
        </Wrapper>
    )
}

const Left = ({ url, setCurrentPage, currentPage }) => (
    <Link className={'left ' + (currentPage === 1 ? 'disabled' : '')} to={currentPage < 3 ? url : url + (currentPage - 1) + '/'} onClick={e => { setCurrentPage(currentPage === 1 ? 1 : currentPage - 1) }}>
        <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.87889 18.5C7.78019 18.5006 7.68234 18.4816 7.59096 18.4443C7.49958 18.407 7.41647 18.352 7.34639 18.2825L1.21889 12.155C0.869667 11.8067 0.592595 11.3928 0.403547 10.9373C0.214499 10.4817 0.117187 9.99326 0.117188 9.50001C0.117188 9.00675 0.214499 8.51834 0.403547 8.06276C0.592595 7.60717 0.869667 7.19335 1.21889 6.84501L7.34639 0.717517C7.41632 0.647588 7.49934 0.592117 7.5907 0.554272C7.68207 0.516427 7.78 0.496948 7.87889 0.496948C7.97779 0.496948 8.07571 0.516427 8.16708 0.554272C8.25844 0.592117 8.34146 0.647588 8.41139 0.717517C8.48132 0.787446 8.53679 0.870463 8.57464 0.961829C8.61248 1.0532 8.63196 1.15112 8.63196 1.25002C8.63196 1.34891 8.61248 1.44684 8.57464 1.5382C8.53679 1.62957 8.48132 1.71259 8.41139 1.78252L2.28389 7.91001C1.86254 8.33188 1.62587 8.90375 1.62587 9.50001C1.62587 10.0963 1.86254 10.6681 2.28389 11.09L8.41139 17.2175C8.48169 17.2872 8.53748 17.3702 8.57556 17.4616C8.61364 17.553 8.63324 17.651 8.63324 17.75C8.63324 17.849 8.61364 17.947 8.57556 18.0384C8.53748 18.1298 8.48169 18.2128 8.41139 18.2825C8.34131 18.352 8.2582 18.407 8.16682 18.4443C8.07544 18.4816 7.9776 18.5006 7.87889 18.5Z" fill="#6F6F71" />
        </svg>
    </Link>
)

const Right = ({ url, setCurrentPage, currentPage, maxPage }) => (
    <Link className={'right ' + (currentPage === maxPage ? 'disabled' : '')} to={currentPage > maxPage - 2 ? url + maxPage + '/' : url + (currentPage + 1) + '/'} onClick={e => { setCurrentPage(currentPage === maxPage ? maxPage : currentPage + 1) }}>
        <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25044 18.5C1.15174 18.5006 1.05389 18.4816 0.962513 18.4443C0.871135 18.407 0.788023 18.352 0.717942 18.2825C0.647646 18.2128 0.591851 18.1298 0.553774 18.0384C0.515698 17.947 0.496094 17.849 0.496094 17.75C0.496094 17.651 0.515698 17.553 0.553774 17.4616C0.591851 17.3702 0.647646 17.2872 0.717942 17.2175L6.84544 11.09C7.26679 10.6681 7.50346 10.0963 7.50346 9.50001C7.50346 8.90375 7.26679 8.33188 6.84544 7.91001L0.717942 1.78252C0.576715 1.64129 0.497374 1.44974 0.497374 1.25002C0.497374 1.05029 0.576715 0.858744 0.717942 0.717517C0.85917 0.576289 1.05072 0.496948 1.25044 0.496948C1.45017 0.496948 1.64171 0.576289 1.78294 0.717517L7.91044 6.84501C8.25967 7.19335 8.53674 7.60717 8.72579 8.06276C8.91483 8.51834 9.01215 9.00675 9.01215 9.50001C9.01215 9.99326 8.91483 10.4817 8.72579 10.9373C8.53674 11.3928 8.25967 11.8067 7.91044 12.155L1.78294 18.2825C1.71286 18.352 1.62975 18.407 1.53837 18.4443C1.44699 18.4816 1.34915 18.5006 1.25044 18.5Z" fill="#6F6F71" />
        </svg>
    </Link>
)

const InputPagination = styled.div`
    margin: 8px auto 0 auto;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    input{
        width: min-content;
        background-color: transparent;
        padding: 10px;
        width: 66px;
        border: 1px solid #6F6F71;
        border-radius: 4px;
    }
    a{
        ${props => props.active === 'true' ? `
            pointer-events: none;
            cursor: unset;
        ` : null}
    }
    .gray{
        color: #6F6F71;
    }
    .dark{
        font-weight: 600;
        text-decoration: none;
        color: #050505;
    }
`

const Wrapper = styled.div`
    width: fit-content;
    margin: 24px auto 0 auto;

    .right{
        height: 18px;
        width: 18px;
        display: flex;
        justify-content: flex-end;
        path{
            transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            path{
                fill: #050505;
            }
        }

        &.disabled{
            pointer-events: none;
            cursor: unset;
        }
    }

    .left{
        height: 18px;
        width: 18px;
        display: flex;
        justify-content: flex-start;
        path{
            transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            path{
                fill: #050505;
            }
        }

        &.disabled{
            pointer-events: none;
            cursor: unset;
        }
    }
`

const Pages = styled.div`
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`

const Button = styled(Link)`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #c4c4c4;
    text-decoration: none;

    &:hover{
        transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        background-color: var(--color-light);
    }

    ${props => props.active === 'true' ? `
        background: var(--color-medium);
        border-color: var(--color-medium);
        cursor: unset;
        pointer-events: none;
        span{
            color: #FEF5F5;
        }
    `: null}
`