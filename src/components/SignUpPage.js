import React,{useState} from 'react'
import * as S from '../styled/App';
import axios from 'axios';
import { useHistory } from 'react-router';

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
        
        console.log(JSON.stringify(user));

        if(user.id && user.password && user.name && user.phonenumber){
            alert("내용을 모두 입력해주세요");
        }
        else if(!CheckEmail(user.email)){
          alert("이메일 형식이 잘못 되었습니다.");
        }
        else if(user.password !== check){
            //만약 아이디가 있으면
            
            alert("비밀번호가 일치하지 않습니다."); 
        }
        else{      

            const headers = {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*'
              }

            axios.post('http://13.124.26.107:9095/api/auth/signup', {...user, phone: Number(user.phone)})
                .then(response => {
                    alert("등록이 완료되었습니다.");
                    axios.post('http://13.124.26.107:9095/api/auth/login', {email: user.email, password: user.password})
                    history.push('/');
                })
                .catch(error => {
                    alert("오류");
                })

            //if('이메일 중복'){
                //alert("중복되는 이메일 입니다.");
            //}
        }
    }

    const [user, setUser] = useState({email: "", info: "", name: "", password: "", phone: ""});
    const [check, setCheck] = useState();

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
            setUser({
              ...user, // 기존의 input 객체를 복사한 뒤
              [name]: value // name 키를 가진 값을 value 로 설정
            });
    };

    const changeEmail = (e) => {
        setUser({...user, email: e.target.value});
    }

    const changePassword = (e) => {
        setUser({...user, password: e.target.value.replace(/[^A-Za-z]/ig, '')});
    }

    const changePhone = (e) => {
        setUser({...user, phone: e.target.value.replace(/[^A-Za-z]/ig, '')});
    }

    return(
        <S.Si>
            <S.SiDiv>
            <S.STittle>회원가입</S.STittle>
                <S.SignUpDiv>
                    <S.SignSpan>이메일</S.SignSpan>
                    <S.SignUpInput placeholder="아이디" name="email" value={user.email} onChange={(e)=>changeEmail(e)}></S.SignUpInput>
                </S.SignUpDiv>
                <S.SignUpDiv>
                    <S.SignSpan>비밀번호</S.SignSpan>
                    <S.SignUpInput placeholder="비밀번호" type="password" value={user.password} name="password" onChange={(e)=>onChange(e)}></S.SignUpInput>
                </S.SignUpDiv>
                <S.SignUpDiv>
                    <S.SignSpan>비밀번호 확인</S.SignSpan>
                    <S.SignUpInput placeholder="비밀번호 확인" type="password" value={check} onChange={(e)=>setCheck(e.target.value)}></S.SignUpInput>
                </S.SignUpDiv>
                <S.SignUpDiv>
                    <S.SignSpan>이름</S.SignSpan>
                    <S.SignUpInput placeholder="이름" name="name" value={user.name} onChange={(e)=>onChange(e)}></S.SignUpInput>
                </S.SignUpDiv>
                <S.SignUpDiv>
                    <S.SignSpan>휴대폰 번호</S.SignSpan>
                    <S.SignUpInput placeholder="휴대폰 번호" name="phone" value={user.phone}  onChange={(e)=>changePhone(e)} pattern="[0-9]*"></S.SignUpInput>
                </S.SignUpDiv>
                <S.SiButton onClick={()=>SignUp()}>회원가입</S.SiButton>
                </S.SiDiv>
        </S.Si>
    )
}

export default SignUpPage;