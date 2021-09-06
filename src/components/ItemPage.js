import React,{useState} from 'react'
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Relate from '../contents/Relate'
import Star from '../contents/Star'

const ItemPge = () => {

    const list = [{id: 1, img: A, price: 100, name: 1 ,catagory: 1},
    {id: 2, img: B, price: 100, name: 1, catagory: 1},
    {id: 3, img: C, price: 100, name: 1, catagory: 1},
    {id: 4, img: D, price: 100, name: 1, catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
];

    const [more, setMore] = useState(false);
    const img = [A, B, C, D, E];
    const [imgN, setImgN] = useState(0);

    return(
        <> 
            <S.IBorder>
                <S.ItemImgDiv>
                <S.Image src={img[imgN]}></S.Image>
                <S.PlusImgDiv>
                    <S.PlusImg onClick={()=>{setImgN(1)}} src={imgN[1]}></S.PlusImg>
                    <S.PlusImg></S.PlusImg>
                    <S.PlusImg></S.PlusImg>
                </S.PlusImgDiv>
                </S.ItemImgDiv>
                <S.Info>
                    <S.ADiv>
                        <h2>제품</h2>
                        <span classADiv="star-rating"></span>
                    </S.ADiv>
                    <S.ADiv>
                        <S.PText>10,000원</S.PText>
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
            <S.DDiv>
            <S.DetailUl>
                <S.DetailLi>상세 설명</S.DetailLi>
                <S.DetailLi>상품평</S.DetailLi>
                <S.DetailLi>상품문의</S.DetailLi>
                <S.DetailLi>교환/반품</S.DetailLi>
            </S.DetailUl>
            </S.DDiv>
            <S.Related>
                <h3>관련 상품</h3>
                <S.RelatedDiv>
                    <Relate lists={list}/>
                </S.RelatedDiv>
            </S.Related>
            <S.IDiv>
                <div>
                <S.EDiv>
                    <S.EI>
                    <img src={A}></img>
                    <img src={A}></img>
                    <img src={A}></img>
                    <img src={A}></img>
                    </S.EI>  
                {more ?
                <></> :
                <S.MDiv>
                    <S.MoreDiv></S.MoreDiv>
                    <S.MoreButtonDiv>
                    <S.MoreButton onClick={() => setMore(true)}>상품정보 더보기</S.MoreButton>
                    </S.MoreButtonDiv>
                </S.MDiv>}
                </S.EDiv>
                </div>
                <S.BuyDiv>
                    <S.BuyImgDiv>
                        <S.BuyImg></S.BuyImg>
                        <p>아이템</p>
                    </S.BuyImgDiv>
                    <S.BBillDiv>
                    <S.BBill></S.BBill>
                    </S.BBillDiv>
                    <S.BBDiv>
                        <h3>총 상품금액</h3>
                        <h2 style={{marginTop:"15px"}}>10000원</h2>
                    </S.BBDiv>
                    <S.BB color="black" bkcolor="white" border="1px">장바구니</S.BB>                     
                    <S.BB color="white" bkcolor="royalblue" border="0px">구매하기</S.BB>
                </S.BuyDiv>
            </S.IDiv>
        </>
    );

    /*<S.PointDiv><S.Pspan>🟡100포인트</S.Pspan></S.PointDiv>*/
}

export default ItemPge;