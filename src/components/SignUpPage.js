import React from 'react'
import * as S from '../styled/App';

const SignUpPage = () => {
    return(
        <S.Si>
            <S.SiDiv>
            <h1>회원가입</h1>
            <S.SignUpDiv>
            <S.SignSpan>아이디</S.SignSpan>
            <S.SignUpInput placeholder="아이디"></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>비밀번호</S.SignSpan>
            <S.SignUpInput placeholder="비밀번호"></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>비밀번호 확인</S.SignSpan>
            <S.SignUpInput placeholder="비밀번호 확인"></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>이름</S.SignSpan>
            <S.SignUpInput placeholder="이름"></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>휴대폰 번호</S.SignSpan>
            <S.SignUpInput placeholder="휴대폰 번호"></S.SignUpInput>
            </S.SignUpDiv>
            <S.SiButton>회원가입하기</S.SiButton>
            </S.SiDiv>
        </S.Si>
    )
}

export default SignUpPage;