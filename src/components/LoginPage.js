import React,{useState} from "react";
import * as S from '../styled/App'
import axios from 'axios'
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";

const LoginPage = () => {

    const [cookie, setCookie, removeCookie] = useCookies();

    let history = useHistory();

    const [ip, setIp] = useState({email : "", password: ""});

    const Login = () => {
        if(!ip.email){
            alert("이메일을 입력해주세요");     
        }   
        else if(!ip.password){
            alert("비밀번호를 입력해주세요");
        }
        else{
            axios.post("/api/auth/login", ip)
                .then(response => {
                    history.push("/");
                    alert("성공");       
                    setCookie("X-AUTH-TOKEN", `${response.data.data.tokenValue}`);
                    localStorage.setItem("email", ip.email);
                })
                .catch(error => {
                    alert("오류");
                })
        }
    }

    let email = localStorage.getItem("email");

    return(
        <>
        <S.Login>
            <S.LoginDiv>
                <S.LoginTittle>DS마켓</S.LoginTittle>
                <S.LoginSpan>이메일</S.LoginSpan>            
                <S.LoginInput value={ip.email} onChange={(e)=>setIp({...ip, email: e.target.value})}/>
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput value={ip.password} onChange={(e)=>setIp({...ip, password: e.target.value})} type="password"/>
                <S.LoginButton onClick={()=>Login()}>로그인</S.LoginButton>
                <S.LoginButton onClick={()=>history.push('/signup')}>회원가입</S.LoginButton>
            </S.LoginDiv>
        </S.Login>
        </>
    )
}

export default LoginPage