import React,{useState} from "react";
import { useHistory } from "react-router";
import * as S from '../styled/App'
import axios from "axios";

const OrderItem = ({item}) => {

    let history = useHistory();

    const [edit, setEdit] = useState(false);

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

    const Delete = () => {
        axios.delete('/api/item', item, config)
    }

    const Edit = () => {
        
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

    return(
    <>
    <S.OrderItemDiv onClick={()=>history.push(`/item/${item.id}`)}>
        <S.OrderItemImg src={item.img}></S.OrderItemImg><S.OrderItemSpan>{item.name}</S.OrderItemSpan>    
    </S.OrderItemDiv>
    </>    
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <OrderItem item={item} name={item.name} img={item.img}/>
        )
    ) 
    return itemList;
}

export default List