import React from 'react'
import * as S from '../styled/App'
import cart from '../images/cart.png'
import Cart from '../contents/Cart'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'

const CartPage = () => {

    const list = [{id: 1, name: 1, img: A, status: "판매중"},{id: 2, name: 2, img: B, status: "판매중"}];

    return(
        <>  
        <S.CartHead>
        <S.CartImg src={cart}></S.CartImg><S.CartTittle>장바구니</S.CartTittle>
        </S.CartHead>
        <S.Ca>
            <S.CaD>
            <S.CartList>
                <Cart lists={list}/>
            </S.CartList>
            <S.BillDiv>
                <S.Bill>
                    <h3>1</h3>
                </S.Bill>
                <S.Bill>
                    <S.BD>
                        <span>상품수</span>
                    </S.BD>
                    <S.BD>
                        <span>상품금액</span>
                    </S.BD>
                    <S.BD>
                        <span>할인금액</span>
                    </S.BD>
                    <S.BD>
                        <span>상품수</span>
                    </S.BD>
                    <S.BD>
                        <span>배송비</span>
                    </S.BD>
                </S.Bill>
                <S.BD>
                <div>
                    <h4>전체 주문 금액</h4>
                </div>
                <div>
                    <h2>10000원</h2>
                </div>
                </S.BD>
                <S.Buy style={{position:"relative",left:"50%",transform:"translateX(-50%)"}}>구매하기</S.Buy>
            </S.BillDiv>
            </S.CaD>
        </S.Ca>
        </>
    )
}

export default CartPage;