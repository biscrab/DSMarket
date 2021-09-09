import React,{useEffect, useState} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as S from '../styled/App'
import Admin from '../contents/Admin'

const AdminPage = () => {

    let history = useHistory();
    let location = useLocation();
    const Wait = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];
    const Report = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];
    const notice = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];
    const Question = [{id : 1, name: 1, status: "대기중"},{id : 2, name: 2, status: "대기중"}];

    const [list, setList] = useState([...Wait]);
    
    useEffect(()=>{
        if(location.pathname){

        }else{
            history.push(`catagory/wait`)
        }   
    },[]);

    const l = [{id: 1, name: 1}];

    return(
        <>
        <S.A>
            <S.AdminDiv>
                <S.ASDiv>
                    <S.AS onClick={() => history.push(`/admin/notice`)} color={location.pathname === '/admin/notice' ? "white" : "royalblue"}>
                        <S.CSpan color={location.pathname === '/admin/notice' ? "royalblue" : "white"}>공지사항</S.CSpan>
                    </S.AS>
                    <S.AS onClick={() => history.push(`/admin/question`)} color={location.pathname === '/admin/question' ? "white" : "royalblue"}>
                        <S.CSpan color={location.pathname === '/admin/question' ? "royalblue" : "white"}>문의 접수</S.CSpan>
                    </S.AS>
                </S.ASDiv>
                <S.AUl>
                    <Admin lists={l}/>
                </S.AUl>
            </S.AdminDiv>
        </S.A>
        </>
    )
}

export default AdminPage