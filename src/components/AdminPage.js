import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../styled/App'
import Admin from '../contents/Admin'

const AdminPage = () => {

    let history = useHistory();
    const Wait = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];
    const Report = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];
    const notice = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];
    const Question = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];

    const [list, setList] = useState([...Wait]);
    
    useEffect(()=>{
    },[]);

    return(
        <>
        <S.A>
            <S.AdminDiv>
                <S.ASDiv>
                    <S.AS onClick={()=>history.push('/wait')}><S.CSpan>등록 대기중인 상품</S.CSpan></S.AS>
                    <S.AS onClick={()=>history.push('/report')}><S.CSpan>신고 접수</S.CSpan></S.AS>
                    <S.AS onClick={()=>history.push('/notice')}><S.CSpan>공지사항</S.CSpan></S.AS>
                    <S.AS onClick={()=>history.push('/question')}><S.CSpan>문의 접수</S.CSpan></S.AS>
                </S.ASDiv>
                <S.AUl>
                    
                </S.AUl>
            </S.AdminDiv>
        </S.A>
        </>
    )
}

export default AdminPage