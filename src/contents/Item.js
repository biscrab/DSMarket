import React,{useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Profile from '../images/profile.png'

const Select = ({item, lists}) => {

    let history = useHistory();

    const [change, setChange] = useState(false);
    const [edit, setEdit] = useState(false);

    const EditBorder = () => {
        return(
            <S.LoginBackground onClick={()=>setEdit(false)}>
            <div><S.Xbutton><div><svg color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></div></S.Xbutton></div>
        <S.EditBorder>
            <S.Edit>삭제</S.Edit>
        </S.EditBorder>
        </S.LoginBackground>
        )
    }

    const ItemBorder = ({item}) => {
    
        const img = [A, B, C, D, E];
        const [imgN, setImgN] = useState(0);

                const change = (n) => {
                    setImgN(imgN + n);
    
                    if(imgN < 0){
                        setImgN(img.length-1);
                    }
                    if(imgN > img.length-1){
                        setImgN(0);
                    }
    
        return(
    <S.LoginBackground>
    <div><S.Xbutton><div><svg color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></div></S.Xbutton></div>
            <S.Item>
        <S.ImageDiv>
          <S.Image src={A}/>
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
    }

    return(
        <>
        <S.RDiv onClick={()=>setChange(true)}>
            <S.RHead>
                <S.RHUser>
                    <S.RHImg src={Profile}></S.RHImg>
                    <S.RHName>1</S.RHName>
                </S.RHUser>
                <svg onClick={()=>setEdit(true)} aria-label="옵션 더 보기" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
            </S.RHead>
            <S.RImg src={item.img} />
            <S.RBody>
            <S.Rp>{item.name}</S.Rp>
            <S.Rprice>{item.price}원</S.Rprice>
            </S.RBody>
        </S.RDiv>
        {change ?
            <ItemBorder item={item} />
            :
            <></>
        }
        {edit ? 
            <EditBorder />
            :
            <></>
        }
        </>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item} key={item.name} name={item.name} price={item.price} img={item.img} id={item.id}/>
        )
    )
    return itemList
}

export default List;