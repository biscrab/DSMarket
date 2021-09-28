import React,{useState, useRef, useEffect, Component} from 'react'
import { useHistory, useLocation, useParams} from 'react-router-dom'
import * as S from '../styled/App'
import Profile from '../images/profile.png'
import Logo from '../images/Logo.png'
import axios from 'axios'

const Header = () => {

    let location = useLocation();
    let params = useParams();

    const select = useRef();

    let history = useHistory();
    const [logined, setLogined] = useState(false);
    const [typing, setTyping] = useState(-1);
    const [v, setV] = useState();
    const [name, setName] = useState("");

    const [recent, setRecent] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const [user, setUser] = useState([
        {name: "asd", email: "asd", password: "a", age: 11},
        {name: "asd", email: "asd1", password: "a", age: 20},
        {name: "asd", email: "asd2", password: "a", age: 30},
    ])

    const SignUp = () => {
        history.push('/signup');
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
    


    useEffect(()=>{
        var s = JSON.parse(localStorage.getItem('user'));    
        
        if(s){
            const a = user.find(isTrue);        
            
            function isTrue(element)  {
                if(element.email === s.email && element.password === s.password)  {
                return true;
                }
            }

            if(a.email&&a.password){
                setName(a.name);
                setLogined(true);
        }}
    })

    const Search = () => {

        let r = recent;

        r.unshift(v)
        r.slice(0, 9);
        
        history.push(`/?search=${v}`)

        localStorage.search = JSON.stringify(r);
    }

    const SLi = ({num}) => {

        const f = () => {
            setV(recent[num]);
            setTyping(-1);
        }

        return(
            <S.SLi onClick={()=>f()}><S.Sspan>{recent[num]}</S.Sspan></S.SLi>
        );
    }

    return(
        <S.Head>
        <S.LR>
            <S.LD>
            {logined ?
                <>                
                <S.L>{name}님</S.L>
                <S.LogOut onClick={()=>Logout()}>로그아웃</S.LogOut>            
                </>
            :
            <>
            <S.L onClick={()=>history.push('/login')}>로그인</S.L>
            <S.L onClick={()=>history.push('/signup')}>회원가입</S.L>
            </>
            }
            </S.LD>
        </S.LR>
        <S.Header>
            <S.HDiv>  
            <S.LogoImg src={Logo} onClick={()=>history.push('/')}></S.LogoImg>
            <S.Logo onClick={() => history.replace('/')}>DS마켓</S.Logo>
            <S.SBox>
                <S.SDiv>
                    <S.Search onChange={(e)=>setV(e.target.value)} onClick={()=>setTyping(typing*-1)} value={v} /*onFocus={() => setTyping(true)} onBlur={() => setTyping(false)}*/></S.Search>
                    {typing === 1? 
                    <S.SBorder>
                        <S.Recent><S.RecentP>최근 검색어</S.RecentP></S.Recent>
                        <SLi num={0}></SLi>
                        <SLi num={1}></SLi>
                        <SLi num={2}></SLi>
                        <SLi num={3}></SLi>
                        <SLi num={4}></SLi>
                        <SLi num={5}></SLi>
                        <SLi num={6}></SLi>
                        <SLi num={7}></SLi>
                        <SLi num={8}></SLi>
                        <SLi num={9}></SLi>
                    </S.SBorder> 
                    : <></>}
               </S.SDiv> 
               <div onClick={()=>Search()}>
               <i class="fa fa-search fa-lg" style={{color: "gray"}} onKeyPress={(e) => handleKeyPress(e)}></i>
               </div>
            </S.SBox>
            <S.SSelect onClick={()=>history.push('/regist')}><i class="fas fa-archive"></i><S.SS>판매하기</S.SS></S.SSelect>
            <S.SSelect onClick={()=>history.push('/user/1')}><i class="fas fa-user"></i><S.SS>내상점</S.SS></S.SSelect>
            </S.HDiv>
        </S.Header>  
        </S.Head>
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

            /*        <S.LoginBackground>
            <S.LoginDiv>
                <S.LoginTittle><S.LT>대마마켓</S.LT><S.X onClick={()=>setLogin(false)}>x</S.X></S.LoginTittle> 
                <S.LoginSpan>이메일</S.LoginSpan>           
                <S.LoginInput onChange={(e)=>setIp({email: e.target.value, password: ip.password})} value={ip.id}/>
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput type="password" onChange={(e)=>setIp({email: ip.email, password: e.target.value})} value={ip.password}/>
                <S.LoginButton color="royalblue" c="white" onClick={()=>Login({email: ip.email, password: ip.password})}>로그인</S.LoginButton>
                <S.LoginButton c="black" onClick={()=>SignUp()}>회원가입</S.LoginButton>
            </S.LoginDiv>
        </S.LoginBackground> */

        /*        
        const d = JSON.parse(localStorage.getItem('user'));
        
        if(d){    
            console.log("log");
            Login({email: d.email , password: d.password});
            console.log(d);
        }

        const s = JSON.parse(localStorage.getItem('search'));
        
        if(s){
            setRecent(s);
            console.log("s:"+s);
        } */

            /*
    const Login = ({email, password}) => {
        if(email === ""){
            alert("이메일을 입력해주세요");
        }   
        else if(password === ""){
            alert("비밀번호를 입력해주세요");
        }
        else{
        
        axios.post(`/api/auth/login`, ip)
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
            })
        

        function isTrue(element)  {
            if(element.email === email && element.password === password)  {
              return true;
            }
          }
            const a = user.find(isTrue);
            if(a){
                setName(a.name);
                setLogined(true);
                setLogin(false);
                localStorage.user = JSON.stringify({email: email, password: password});
            }
            else{
                alert("아이디나 비밀번호가 틀렸습니다.");
            }
        }

        console.log(ip.id);
        console.log(ip.password);
    }*/