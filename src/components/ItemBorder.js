import React,{useState, useEffect, useRef} from 'react'
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Item from '../contents/Item'
import Comment from '../contents/Review'
import Profile from '../images/profile.png'

const ItemPge = () => {

    const [item, setItem] = useState({
        id: "",
        img: [],
        name: "이름",
        price: 5000,
        explane: "ㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
        adress: "",
    })

    const list = [{id: 1, img: A, price: 100, name: 1 ,catagory: 1},
    {id: 2, img: B, price: 100, name: 1, catagory: 1},
    {id: 3, img: C, price: 100, name: 1, catagory: 1},
    {id: 4, img: D, price: 100, name: 1, catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
];
    
    const [heart, setHeart] = useState(false);
    const [more, setMore] = useState(false);
    const img = [A, B, C, D, E];
    const [imgN, setImgN] = useState(0);

    let i = useRef();

            const change = (n) => {
                setImgN(imgN + n);

                if(imgN < 0){
                    setImgN(img.length-1);
                }
                if(imgN > img.length-1){
                    setImgN(0);
                }
            }

    useEffect(()=>{
        i.current.src = img[imgN];
    });

    return(
<S.LoginBackground>
<div><S.Xbutton><div><svg color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></div></S.Xbutton></div>
        <S.Item>
    <S.ImageDiv>
      <S.Image ref={i}/>
    </S.ImageDiv>
<S.ItDiv>
<S.IUSer>
    <S.Profile src={Profile}></S.Profile>
    <S.ProfileSpan>유저</S.ProfileSpan>
</S.IUSer>
<S.IExplane>
    <S.Iname>{item.name}</S.Iname>
    <S.ItemPrice>{item.price}원</S.ItemPrice>
    <p>{item.explane}</p>
    <S.Gray>연락처: </S.Gray>
</S.IExplane>
</S.ItDiv>      
</S.Item>
</S.LoginBackground>
    );

    /*<S.PointDiv><S.Pspan>🟡100포인트</S.Pspan></S.PointDiv>*/

    /*                <S.CommentH>상품평</S.CommentH>
                {comment.length >= 10 ?
                <S.CommentUl height="500px">
                    <Comment lists={comment}/>
                </S.CommentUl>
                :
                <S.CommentUl height="auto">
                <Comment lists={comment}/>
                </S.CommentUl>
                }*/

                /*<S.IDiv>
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
            </S.IDiv>     */
}

export default ItemPge;


    /*            <S.IBorder>
                <S.Image src={img[imgN]}></S.Image>
                <S.Info>
                    <S.ATop>
                        <S.ADiv> 
                        <S.AProfile src={Profile}></S.AProfile>
                        </S.ADiv> 
                    <S.ADiv>
                        <p>제품</p>
                        <span classADiv="star-rating"></span>
                        <S.PText>10,000원</S.PText>
                    </S.ADiv>
                    <S.ADiv>
                        <S.DileveryTime>8/30일</S.DileveryTime>
                    </S.ADiv>
                    </S.ATop>                
                    <S.ButtonDiv>
                        <S.Bucket>장바구니</S.Bucket>                     
                        <S.Buy>구매하기</S.Buy>
                    </S.ButtonDiv>
                </S.Info>
            </S.IBorder> */

            /*        <S.Related>
            <S.RelatedH>관련 상품</S.RelatedH>
            <S.RelatedDiv>
                <Item lists={list}/>
            </S.RelatedDiv>
        </S.Related>  */