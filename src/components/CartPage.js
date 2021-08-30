import React from 'react'
import * as S from '../styled/App'
import cart from '../images/cart.png'

const CartPage = () => {
    return(
        <>
        <S.Ca>
            <S.CartHead>
            <S.CartImg src={cart}></S.CartImg><S.CartTittle>장바구니</S.CartTittle>
            </S.CartHead>
            <S.CartDiv>
                <S.CartList>
                    <S.CartLHead></S.CartLHead>
                </S.CartList>
            </S.CartDiv>
        </S.Ca>
        </>
    )
}

export default CartPage;