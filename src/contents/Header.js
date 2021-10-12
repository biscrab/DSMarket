import React,{useState, useRef, useEffect, Component} from 'react'
import { useHistory, useLocation, useParams} from 'react-router-dom'
import * as S from '../styled/App'
import Profile from '../images/profile.png'
import Logo from '../images/Logo.png'
import axios from 'axios'
import $ from 'jquery'

const Header = () => {

    let location = useLocation();
    let params = useParams();

    const select = useRef();

    let history = useHistory();
    const [logined, setLogined] = useState(false);
    const [typing, setTyping] = useState(false);
    const [v, setV] = useState();
    const [name, setName] = useState("");
    const [balloon, setBalloon] = useState(false);

    const [recent, setRecent] = useState([]);

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
        localStorage.removeItem('X-AUTH-TOKEN');
    }

    useEffect(()=>{
        var s = JSON.parse(localStorage.getItem('token'));    
        if(localStorage.getItem('token')){
            
        }
        $(document).mouseup(function (e){
            var LayerPopup = $(".layer-popup");
            if(LayerPopup.has(e.target).length === 0){
                setBalloon(false);
            }
            else{
                setBalloon(true);
            }
          });
    })

    const Search = () => {
        if(v){
        let r = recent;

        r.unshift(v)
        r.slice(0, 9);
        
        history.push(`/?search=${v}`)

        localStorage.search = JSON.stringify(r);
        }
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

    let email = localStorage.getItem("email");

    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
            Search();
        }
    }


    return(
        <>
        <S.Header onKeyPress={(e) => onCheckEnter(e)}>
            <S.HDiv> 
            <S.Head>
            <S.LogoImg src={Logo} onClick={()=>history.push('/')}></S.LogoImg>
            <S.Logo onClick={() => history.replace('/')}>DS마켓</S.Logo>
            <S.SBox>
                <S.SDiv>
                    <S.Search onChange={(e)=>setV(e.target.value)} onClick={()=>setTyping(true)} value={v} onBlur={()=>setTyping(false)} /*onFocus={() => setTyping(true)} onBlur={() => setTyping(false)}*/></S.Search>
                    {typing === true? 
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
               <i class="fa fa-search fa-lg" style={{color: "rgb(100, 100, 100)"}}></i>
               </div>
            </S.SBox>
            </S.Head>
            <S.SelectDiv>
                <S.SSelect onClick={()=>history.push('/regist')}><i class="fas fa-cart-plus"></i><S.SS>판매하기</S.SS></S.SSelect>
                <S.SSelect className="b"><i class="far fa-user-circle"></i>{email ? <S.SS onClick={()=>setBalloon(true)}>{email}</S.SS> : <S.SS onClick={()=>history.push('/login')}>로그인</S.SS>}</S.SSelect>
            </S.SelectDiv>
            </S.HDiv>
        </S.Header> 
        {balloon === true ?               
        <S.Balloon>
            <S.BA>마이 페이지</S.BA>
            <S.BA color="crimson">로그아웃</S.BA>
        </S.Balloon>:
        <></>
        } 
        </> 
    )
}

export default Header
/*        <S.LR>
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
        </S.LR> */

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