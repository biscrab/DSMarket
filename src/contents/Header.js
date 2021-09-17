import React,{useState, useRef, useEffect, Component} from 'react'
import { useHistory, useLocation} from 'react-router-dom'
import * as S from '../styled/App'
import Profile from '../images/profile.png'
import Logo from '../images/Logo.png'

const Header = () => {

    let location = useLocation();

    const select = useRef();

    let history = useHistory();
    const [typing, setTyping] = useState(false);
    const [v, setV] = useState();
    const [login, setLogin] = useState(false);
    const [logined, setLogined] = useState(false);
    const [ip, setIp] = useState({id : "", password: ""});
    const [name, setName] = useState("");

    const [recent, setRecent] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const [user, setUser] = useState([
        {name: "asd", id: "asd", password: "a", age: 11},
        {name: "asd", id: "asd1", password: "a", age: 20},
        {name: "asd", id: "asd2", password: "a", age: 30},
    ])

    const SignUp = () => {
        setIp({id : "", password: ""});
        history.push('/signup');
        setLogin(false);
    }

    const Login = ({id, password}) => {
        if(id === ""){
            alert("아이디를 입력해주세요");
        }   
        else if(password === ""){
            alert("비밀번호를 입력해주세요");
        }
        else{
        function isTrue(element)  {
            if(element.id === id && element.password === password)  {
              return true;
            }
          }
            const a = user.find(isTrue);
            if(a){
                setName(a.name);
                setLogined(true);
                setLogin(false);
                localStorage.user = JSON.stringify(ip);
            }
            else{
                alert("아이디나 비밀번호가 틀렸습니다.");
            }
        }

        console.log(ip.id);
        console.log(ip.password);
    }

    const Logout = () => {
        localStorage.removeItem('user');
        setLogined(false);
    }

      const handleKeyPress = e => {
        if(e.key === 'Enter') {
            console.log("key");
        }
      }

    useEffect(() => {
        const d = JSON.parse(localStorage.user);
        if(d.id&&d.password){
            Login({id: d.id , password: d.password});
        }
        console.log(d);
    },[]);

    return(
        <>
        <S.Header>

            <S.HDiv>  
            <S.LogoImg src={Logo} onClick={()=>history.push('/')}></S.LogoImg>
            <S.Logo onClick={() => history.replace('/')}>DS마켓</S.Logo>
            <S.SBox>
                <S.SDiv>
                    <S.Search onChange={(e)=>setV(e.target.value)} onFocus={(e)=>setTyping(true)} onBlur={()=>setTyping(false)} value={v} /*onFocus={() => setTyping(true)} onBlur={() => setTyping(false)}*/></S.Search>
                    {typing ? 
                    <S.SBorder>
                        <S.Recent><S.RecentP>최근 검색어</S.RecentP></S.Recent>
                        <S.SLi onClick={()=>setV(recent[0])}><S.Sspan>{recent[0]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[1])}><S.Sspan>{recent[1]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[2])}><S.Sspan>{recent[2]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[3])}><S.Sspan>{recent[3]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[4])}><S.Sspan>{recent[4]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[5])}><S.Sspan>{recent[5]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[6])}><S.Sspan>{recent[6]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[7])}><S.Sspan>{recent[7]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[8])}><S.Sspan>{recent[8]}</S.Sspan></S.SLi>
                        <S.SLi onClick={()=>setV(recent[9])}><S.Sspan>{recent[9]}</S.Sspan></S.SLi>
                    </S.SBorder> 
                    : <></>}
               </S.SDiv> 
               <div>
               <i class="fa fa-search fa-lg" style={{color: "gray"}} onKeyPress={(e) => handleKeyPress(e)}></i>
               </div>
            </S.SBox>

            <S.LR>
            {logined ?
                <>                
                <S.Link src={Profile} onClick={()=>history.replace(`/mypage`)}/>
                <S.L>{name}님</S.L>
                <S.LogOut onClick={()=>Logout()}>로그아웃</S.LogOut>            
                </>
            :
            <>
            <S.L onClick={()=>setLogin(true)}>로그인</S.L>
            <S.L onClick={()=>history.replace('/signup')}>회원가입</S.L>
            </>
            }
            </S.LR>
            </S.HDiv>

        </S.Header>
        {login ? 
        <S.LoginBackground>
            <S.LoginDiv>
                <S.LoginTittle><S.LT>대마마켓</S.LT><S.X onClick={()=>setLogin(false)}>x</S.X></S.LoginTittle> 
                <S.LoginSpan>아이디</S.LoginSpan>           
                <S.LoginInput onChange={(e)=>setIp({id: e.target.value, password: ip.password})} value={ip.id}/>
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput type="password" onChange={(e)=>setIp({id: ip.id, password: e.target.value})} value={ip.password}/>
                <S.LoginButton color="royalblue" c="white" onClick={()=>Login({id: ip.id, password: ip.password})}>로그인</S.LoginButton>
                <S.LoginButton c="black" onClick={()=>SignUp()}>회원가입</S.LoginButton>
            </S.LoginDiv>
        </S.LoginBackground>
        : <></>}
        <p>{ip.id}</p>        
        </>
    )
}

export default Header

/*             {admin ? <S.Link src={Admin} onClick={()=>history.replace(`/admin`)}></S.Link> : <></>}*/

/*            <div onClick={()=>history.replace(`/cart`)}>
            <S.Link src={C}/>
            {cart >= 9 ?
            <S.CartNumber>{cart}</S.CartNumber>
            :
            <S.CartNumber>9+</S.CartNumber>
            }
            </div> */