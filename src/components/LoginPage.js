import React,{useState} from "react";
import * as S from '../styled/App'
import '../styled/login.css'
import axios from 'axios'

const LoginPage = () => {

    const [login, setLogin] = useState(false);
    const [logined, setLogined] = useState(false);
    const [ip, setIp] = useState({email : "", password: ""});
    const [name, setName] = useState("");

    const [user, setUser] = useState([
        {name: "asd", email: "asd", password: "a", age: 11},
        {name: "asd", email: "asd1", password: "a", age: 20},
        {name: "asd", email: "asd2", password: "a", age: 30},
    ])

    const Login = () => {
        if(ip.email === ""){
            alert("이메일을 입력해주세요");
        }   
        else if(ip.password === ""){
            alert("비밀번호를 입력해주세요");
        }
        else{
        
       /* axios.post(`/api/auth/login`, ip)
            .then(response =>{
                const { accessToken } = response.data;
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                setName(response.name);
                setLogined(true);
                setLogin(false);
                localStorage.user = JSON.stringify({email: email, password: password});
            })
            .catch(error =>{
                alert("아이디나 비밀번호가 잘못됬습니다.");
            })*/
        

        function isTrue(element)  {
            if(element.email === ip.email && element.password === ip.password)  {
              return true;
            }
          }
            const a = user.find(isTrue);
            if(a){
                setName(a.name);
                setLogined(true);
                setLogin(false);
                localStorage.user = JSON.stringify({email: ip.email, password: ip.password});
            }
            else{
                alert("아이디나 비밀번호가 틀렸습니다.");
            }
        }

        console.log(ip.id);
        console.log(ip.password);
    }

    return(
        <S.Login>
            <S.LoginDiv>
                <S.LoginTittle>대마마켓</S.LoginTittle> 
                <S.LoginSpan>이메일</S.LoginSpan>           
                <S.LoginInput/>
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput/>
                <S.LoginButton color="royalblue" c="white" onClick={()=>Login()}>로그인</S.LoginButton>
            </S.LoginDiv>
        </S.Login>
    )
}

export default LoginPage