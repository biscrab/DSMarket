import React,{useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Profile from '../images/profile.png'
import axios from 'axios';

const Select = ({item, lists}) => {

/*
    axios.defaults.baseURL = "http://13.124.26.107:9095";
    axios.defaults.withCredentials = true;*/


    let history = useHistory();

    const [change, setChange] = useState(false);
    const [edit, setEdit] = useState(false);

    const onDelete = () => {
        /*
        axios.delete('/api/item')
            .then(res =>{
                alert("아이템이 삭제되었습니다.")
            })
        if('권한없음'){
            alert("권한이 없습니다.");
        }*/
    }

    const onEdit = () => {
        /*
        axios.edit('/api/item')
        .then(res =>{
            alert("아이템이 삭제되었습니다.")
        })
        if('권한없음'){
            alert("권한이 없습니다.");
        }*/
    }

    const EditBorder = () => {
        return(
        <S.LoginBackground>
         <S.Xbutton onClick={()=>setEdit(false)}><svg aria-label="닫기" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></S.Xbutton>
        <S.EditBorder>
            <S.Edit onClick={()=>onDelete()} color="red">삭제</S.Edit>
            <S.Edit onClick={()=>onEdit()}>수정</S.Edit>
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
          <S.Image/>
        </S.ImageDiv>
    <S.ItDiv>
    <S.IUSer>
        <S.Profile src={Profile}></S.Profile>
        <S.ProfileSpan>유저</S.ProfileSpan>
    </S.IUSer>
    <S.IEX>
        <S.Iname></S.Iname>
        <S.ItemPrice>원</S.ItemPrice>
        <p></p>
    </S.IEX>
    </S.ItDiv>      
    </S.Item>
    </S.LoginBackground>
        );
    }

    return(
        <>
        <S.RDiv>
            <S.RHead>
                <S.RHUser>
                    <S.RHImg src={Profile}></S.RHImg>
                    <S.RHName>{item.name}</S.RHName>
                </S.RHUser>
                <S.RI onClick={()=>setEdit(true)}>
                    <i style={{color:"gray"}} class="fa fa-bars lg-3x"></i>
                </S.RI>
            </S.RHead>
            <S.RImg  onClick={()=>setChange(true)} />
            <S.RBody>
            <S.Rp></S.Rp>
            <S.Rprice>{item.price}원</S.Rprice>
            <div></div>
            </S.RBody>
        </S.RDiv>
        {change === true ?
            <ItemBorder />
            :
            <></>
        }
        {edit === true ? 
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
            <Select item={item}/>
        )
    )
    return itemList
}

export default List;