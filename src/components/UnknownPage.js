import React from 'react'
import { Link } from 'react-router-dom';
import * as S from '../styled/App'

const UnknownPage = () => {
    return(
        <>
        <S.Unknown>알수 없는 페이지</S.Unknown>
        <Link to={{pathname:"/"}}>
            <S.Gohome>
            홈으로 돌아가기
            </S.Gohome>
        </Link>
        </>
    )
}

export default UnknownPage;