import React,{useState} from 'react'
import * as S from '../styled/App';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useTheme } from 'styled-components';

const SignUpPage = () => {

    let history = useHistory();

    function CheckEmail(str){                                                 

        var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
        if(!reg_email.test(str)) {                            
            return false;         
        }                            
        else {                       
            return true;         
        }                            
    }   

    const SignUp = () => {

        var url = "url";
        
        console.log("user:"+user);

        if(user.id && user.password && user.name && user.phonenumber){
            alert("내용을 모두 입력해주세요");
        }
        else if(!CheckEmail(user.email)){
            alert("이미지 형식이 잘못 되었습니다.");
        }
        else if(user.password !== check){
            //만약 아이디가 있으면
            
            alert("비밀번호가 일치하지 않습니다.");
            
            
        }
        else{            
            /*axios.post(`${url}/api/auth/signup`, user)
                .then((function(response){
                    localStorage.user = JSON.stringify({id: response.id, password: response.password});            
                    alert("등록이 완료되었습니다.");
                    history.push('/');
                })*/

            if('이메일 중복'){
                alert("중복되는 이메일 입니다.");
            }
        }
    }

    const [user, setUser] = useState({email: "", password: "", name: "", phonenumber: ""});
    const [check, setCheck] = useState();

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
            setUser({
              ...user, // 기존의 input 객체를 복사한 뒤
              [name]: value // name 키를 가진 값을 value 로 설정
            });
    };

    const changeEmail = (e) => {
        setUser({...user, id: e.target.value});
    }

    const changePassword = (e) => {
        setUser({...user, password: e.target.value.replace(/[^A-Za-z]/ig, '')});
    }

    return(
        <S.Si>
            <S.SiDiv>
            <h1>회원가입</h1>
            <S.SignUpDiv>
            <S.SignSpan>이메일</S.SignSpan>
            <S.SignUpInput placeholder="아이디" name="email" onChange={(e)=>changeEmail(e)}></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>비밀번호</S.SignSpan>
            <S.SignUpInput placeholder="비밀번호" type="password" name="password" onChange={(e)=>onChange(e)}></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>비밀번호 확인</S.SignSpan>
            <S.SignUpInput placeholder="비밀번호 확인" type="password" onChange={(e)=>setCheck(e.target.value)}></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>이름</S.SignSpan>
            <S.SignUpInput placeholder="이름" name="name" onChange={(e)=>onChange(e)}></S.SignUpInput>
            </S.SignUpDiv>
            <S.SignUpDiv>
            <S.SignSpan>휴대폰 번호</S.SignSpan>
            <S.SignUpInput placeholder="휴대폰 번호" name="phonenumber" onChange={(e)=>changePassword(e)} pattern="[0-9]*"></S.SignUpInput>
            </S.SignUpDiv>
            <S.SiButton onClick={()=>SignUp()}>회원가입하기</S.SiButton>
            </S.SiDiv>
        </S.Si>
    )
}

export default SignUpPage;