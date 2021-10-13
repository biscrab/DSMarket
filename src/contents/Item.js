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
        <S.EditBorder>
            <S.Edit onClick={()=>onDelete()}>삭제</S.Edit>
            <S.Edit onClick={()=>onEdit()}>수정</S.Edit>
            <S.Edit onClick={()=>setEdit(false)}>닫기</S.Edit>
            <S.Edit onClick={()=>history.push('/item')}>게시물로 이동</S.Edit>
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
    <S.Xbutton><i class="fas fa-bars lg-2x"></i></S.Xbutton>
            <S.Item>
        <S.ImageDiv>
          <S.Image/>
        </S.ImageDiv>
    <S.ItDiv>
    <S.IUSer>
        <S.Profile src={Profile}></S.Profile>
        <S.ProfileSpan>유저</S.ProfileSpan>
    </S.IUSer>
        <S.Iname></S.Iname>
        <S.ItemPrice>원</S.ItemPrice>
        <p></p>
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
                    <S.RHName>{item.name}</S.RHName>
                </S.RHUser>
                <i onClick={()=>setEdit(true)} class="fas fa-bars lg-3x"></i>
            </S.RHead>
            <S.RImg />
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