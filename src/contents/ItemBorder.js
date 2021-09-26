import React,{useState, useEffect, useRef} from 'react'
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Item from './Item'
import Comment from './Review'
import Profile from '../images/profile.png'

const ItemPge = ({item}) => {
    
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
    <p></p>
    <S.Gray>연락처: </S.Gray>
</S.IExplane>
</S.ItDiv>      
</S.Item>
</S.LoginBackground>
    );
}

export default ItemPge;
