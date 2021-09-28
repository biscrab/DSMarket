import React, { useEffect } from "react";
import * as S from "../styled/App";
import A from '../images/a.jpg'
import { useHistory } from "react-router";
import axios from "axios";

const ItemPage = () => {

    axios.defaults.baseURL = 'http://13.124.26.107:9095'
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.withCredentials = true;

    useEffect(()=>{

    })

    let history = useHistory();

    return(
    <S.ItemDiv>
    <S.PItem>
    <S.ImageDiv>
      <S.Image src={A}/>
    </S.ImageDiv>
<S.ItDiv>
<S.IUSer>
    <S.Profile src={A} onClick={()=>history.push('/user/1')}></S.Profile>
    <S.ProfileSpan>유저</S.ProfileSpan>
</S.IUSer>
<S.IExplane>
    <S.Iname>{}</S.Iname>
    <S.ItemPrice>{}원</S.ItemPrice>
    <S.Gray>연락처: </S.Gray>
</S.IExplane>
<S.IEX>
<span>asdadasdasasdasdasd</span>
</S.IEX>
</S.ItDiv>
</S.PItem>      
</S.ItemDiv>
    )
}

export default ItemPage;