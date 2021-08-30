import React from 'react'
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Relate from '../contents/Relate'
import Star from '../contents/Star'

const ItemPge = () => {

    const list = [{img: A, price: 100, name: 1},{img: B, price: 100, name: 1},{img: C, price: 100, name: 1},{img: D, price: 100, name: 1},{img: E, price: 100, name: 1}];

    return(
        <> 
            <S.IBorder>
                <S.Image src={A}></S.Image>
                <S.Info>
                    <S.ADiv>
                        <h2>제품</h2>
                        <span classADiv="star-rating"></span>
                    </S.ADiv>
                    <S.ADiv>
                        <S.PText>10,000원</S.PText>
                        <S.PointDiv><S.Pspan>🟡100포인트</S.Pspan></S.PointDiv>
                    </S.ADiv>
                    <S.ADiv>
                        <S.DileveryTime>8/30일</S.DileveryTime>
                        <S.Check>
                            <S.CheckBox type="radio" />
                            <span>로켓배송 상품 19,800원 이상 무료배송</span>
                        </S.Check>
                        <S.Check>
                            <S.CheckBox type="radio" />
                            <span>무료배송 + 무료반품</span>
                        </S.Check>
                    </S.ADiv>                
                    <S.ButtonDiv>
                        <S.Bucket>장바구니</S.Bucket>                     
                        <S.Buy>구매하기</S.Buy>
                    </S.ButtonDiv>
                </S.Info>
            </S.IBorder>
            <S.DetailUl>
                <S.DetailLi>상세 설명</S.DetailLi>
                <S.DetailLi>상품평</S.DetailLi>
                <S.DetailLi>상품문의</S.DetailLi>
                <S.DetailLi>교환/반품</S.DetailLi>
            </S.DetailUl>
            <S.Related>
                <h3>관련 상품</h3>
                <S.RelatedDiv>
                    <Relate lists={list}/>
                </S.RelatedDiv>
            </S.Related>
            <S.IDiv>
                <S.EDiv></S.EDiv>
                <S.BuyDiv></S.BuyDiv>
            </S.IDiv>
        </>
    );
}

export default ItemPge;