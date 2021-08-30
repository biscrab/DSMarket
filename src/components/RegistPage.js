import React from 'react'
import * as S from '../styled/App'
import Detail from '../contents/Detail'

const list = [{tittle: 1, a: 1, b:2}];

const RegistPage = () => {
    return(
        <S.R>
            <div>
            <h1>상품 등록</h1>
            <span>카테고리를 입력하세요</span>
            <p>상품명</p>
            <S.Input></S.Input>
            <p>가격</p>
            <S.Input></S.Input>
            <p>재조사</p>
            <S.Input></S.Input>
            <p>브랜드</p>
            <S.Input></S.Input>
            <p>재고</p>
            <S.Input></S.Input>
            <p>검색어</p>
            <S.Input></S.Input>
            <p>배송 관련 사항</p>
            <S.Input></S.Input>
            <p>반품/교환 관련 사항</p>
            <S.Input></S.Input>
            <S.RegistDiv><p>대표 이미지</p></S.RegistDiv>
            <S.RegistDiv><p>추가 이미지</p></S.RegistDiv>
            <p>상세설명</p>
            <div>
                <button>이미지 업로드</button>
                <button>에디터 작성</button>
                <button>HTML 작성</button>
            </div>
            <S.RegistDiv></S.RegistDiv>
            <p>상품 주요정부</p>
            <p>미성년자 구매 불가</p>
            <button>판매요청</button>
            </div>
            <ul>
                <Detail lists={list}/>
            </ul>
        </S.R>
    )
}

export default RegistPage