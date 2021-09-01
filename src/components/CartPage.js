import React from 'react'
import * as S from '../styled/App'
import cart from '../images/cart.png'
import Cart from '../contents/Cart'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'

const CartPage = () => {

    const list = [{id: 1, name: 1, img: A},{id: 2, name: 2, img: B}];

    return(
        <>  
        <S.CartHead>
        <S.CartImg src={cart}></S.CartImg><S.CartTittle>장바구니</S.CartTittle>
        </S.CartHead>
        <S.CartLHead></S.CartLHead>
        <S.Ca>
            <S.CartList>
                <Cart lists={list}/>
            </S.CartList>
        </S.Ca>
        </>
    )
}

export default CartPage;