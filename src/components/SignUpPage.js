import React from 'react'
import * as S from '../styled/App';

const SignUpPage = () => {
    return(
        <S.Si>
            <S.SiDiv>
            <h1>회원가입</h1>
            <span>아이디</span>
            <S.SignUpInput placeholder="아이디"></S.SignUpInput>
            <span>비밀번호</span>
            <S.SignUpInput placeholder="비밀번호"></S.SignUpInput>
            <S.SignUpInput placeholder="비밀번호 확인"></S.SignUpInput>
            <span>이름</span>
            <S.SignUpInput placeholder="이름"></S.SignUpInput>
            <span>휴대폰 번호</span>
            <S.SignUpInput placeholder="휴대폰 번호"></S.SignUpInput>
            <S.SiButton>회원가입하기</S.SiButton>
            </S.SiDiv>
        </S.Si>
    )
}

export default SignUpPage;