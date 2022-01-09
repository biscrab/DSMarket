import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'
import Profile from '../images/profile.png'

const Select = ({item}) => {

    axios.defaults.baseURL = ''
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.withCredentials = true;

    let history = useHistory();

    const [change, setChange] = useState(false);

    const [edit, setEdit] = useState(false);

    const [image, setImage] = useState(item.img);

    function getCookie(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
        }

    const config = {
        headers: {
          'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      }

    const Edit = () => {
        
    }

    const Delete = () => {
        if(window.confirm("제품을 삭제하시겠습니까?")){
            axios.delete('/api/item', item, config)
        }
    }

    const EditBorder = () => {
        return(
        <S.LoginBackground>
         <S.Xbutton onClick={()=>setEdit(false)}><svg aria-label="닫기" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></S.Xbutton>
        <S.EditBorder>
            <S.Edit onClick={()=>Delete()} color="red">삭제</S.Edit>
            <S.Edit onClick={()=>Edit()}>수정</S.Edit>
            <S.BEdit onClick={()=>setEdit(false)}>닫기</S.BEdit>
        </S.EditBorder>
        </S.LoginBackground>
        )
    }

    const ItemBorder = ({item}) => {
        return(
    <S.LoginBackground>
    <S.Xbutton onClick={()=>setChange(false)}><svg aria-label="닫기" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></S.Xbutton>
            <S.Item>
        <S.ImageDiv>
          <S.Image href={image}/>
        </S.ImageDiv>
    <S.ItDiv>
    <S.IUSer>
        <S.Profile src={Profile}></S.Profile>
        <S.ProfileSpan>유저</S.ProfileSpan>
    </S.IUSer>
    <S.IEX>
        <S.Iname>{item.name} ({item.price}원)</S.Iname>
        <p>{item.info}</p>
    </S.IEX>
    </S.ItDiv>      
    </S.Item>
    </S.LoginBackground>
        );
    }

    const [hover, setHover] = useState(false)

    useEffect(()=>{
        axios.get(`/api/image/${item.identifyId}`, config)
            .then(response => {
                setImage(response.data);
            })
    },[])

    return(
        <>
        <S.MyRDiv onClick={()=>setChange(true)} >
            <S.MyRImg src={image}/>
            <S.MyRBack onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>            
                <>
                {hover ?
                    <S.MSpan>{item.name}</S.MSpan>
                :
                <></>
                }
                </>
            </S.MyRBack>
        </S.MyRDiv>
        {change ?
        <ItemBorder item={item}/>
        : 
        <></>
        }
        </>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item}/>
        )
    )
    return itemList
}

export default List;