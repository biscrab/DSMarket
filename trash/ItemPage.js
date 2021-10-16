import React, { useEffect } from "react";
import * as S from "../src/styled/App";
import A from '../images/a.jpg'
import { useHistory } from "react-router";
//import axios from "axios";

const ItemPage = () => {

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
    <S.Iname>{}</S.Iname>
    <S.ItemPrice>{}원</S.ItemPrice>
<S.IEX>
<span>asdadasdasasdasdasd</span>
</S.IEX>
</S.ItDiv>
</S.PItem>      
</S.ItemDiv>
    )
}

export default ItemPage;