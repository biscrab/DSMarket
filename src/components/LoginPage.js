import React,{useState} from "react";
import * as S from '../styled/App'
import axios from 'axios'
import { useEffect } from "react";
import { useHistory } from "react-router";

const LoginPage = () => {

    let history = useHistory();

    const [login, setLogin] = useState(false);
    const [logined, setLogined] = useState(false);
    const [ip, setIp] = useState({email : "", password: ""});
    const [name, setName] = useState("");

    const Login = () => {
        if(!ip.email){
            alert("이메일을 입력해주세요");     
        }   
        else if(!ip.password){
            alert("비밀번호를 입력해주세요");
        }
        else{
                axios.post("/api/auth/login", JSON.stringify(ip))
                .then(res => {
                    history.push("/");                
                    setLogined(true);
                    setLogin(false);
                    localStorage.user = JSON.stringify(res.data);
                })
                .catch(error => {
                    alert("오류");
                })
        }

        console.log(ip.email);
        console.log(ip.password);
    }

    useEffect(()=>{
        var s = JSON.parse(localStorage.getItem('user'));
        if(s){
        if(s.email&&s.password){
            setLogined(true);
        }}
    })

    return(
        <S.Login>
            <S.LoginDiv>
                <S.LoginTittle>대마마켓</S.LoginTittle> 
                <S.LoginSpan >이메일</S.LoginSpan>           
                <S.LoginInput onChange={(e)=>setIp({...ip, email: e.target.value})}/>
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput onChange={(e)=>setIp({...ip, password: e.target.value})}/>
                <S.LoginButton onClick={()=>Login()}>로그인</S.LoginButton>
            </S.LoginDiv>
        </S.Login>
    )
}

export default LoginPage