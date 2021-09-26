import React from "react";
import * as S from "../styled/App";

const ItemPage = () => {
    return(
        <S.Item>
    <S.ImageDiv>
      <S.Image/>
    </S.ImageDiv>
<S.ItDiv>
<S.IUSer>
    <S.Profile></S.Profile>
    <S.ProfileSpan>유저</S.ProfileSpan>
</S.IUSer>
<S.IExplane>
    <S.Iname>{}</S.Iname>
    <S.ItemPrice>{}원</S.ItemPrice>
    <p></p>
    <S.Gray>연락처: </S.Gray>
</S.IExplane>
</S.ItDiv>      
</S.Item>
    )
}

export default ItemPage;