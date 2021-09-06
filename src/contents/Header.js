import React,{useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import * as S from '../styled/App'
import A from '../images/s.png'
import M from '../images/man.png'
import C from '../images/cart.png'
import Admin from '../images/admin.png'

const Header = () => {

    let location = useLocation();

    const [l, setL] = useState();

    const setLink = (c, path) => {
        var a = `${path}=${c}`;
        var c = ""
        if(location.search.includes(`${path}=`)){
            if(location.search.includes('&')){
                var b = location.search.split('&');
                for(var i = 0; i < b.length; i++){
                    console.log(b[i]);
                    if(b[i].includes(`${path}=`)){
                        b[i]+=`,${c}`;
                    }
                    c += b[i];
                }
                location.search = c;
            }
            else{
            setL(`,${c}`);
            }
        }
        else if(location.search === ""){
            setL(`?${a}`);
            console.log(l);
        }
        else{
            setL(`&${a}`);
            console.log(l);
        }
    }

    const Del = (c, path) => {
        var a;
        if(location.search.includes(`&${path}=${c}`)){
            if(location.search.includes(`&${path}=${c},`)){
                a = location.search.replace(`${c},`,""); 
            }
            else{
                a = location.search.replace(`&${path}=${c}`,""); 
            }   
        }
        else if(location.search.includes(`${path}=${c},`)){
            a = location.search.replace(`${c},`,""); 
        }
        else if(location.search.includes(`,${c}`)){
            a = location.search.replace(`,${c}`,""); 
        }
        else if(location.search.includes(`${c}&`)){
            a = location.search.replace(`${c}`,""); 
        }
        else{
            a = location.search.replace(`&${path}=${c}`,"");
            a = location.search.replace(`?${path}=${c}`,"");
            a = a.replace(`${path}=${c}`,"");
        }

        history.push(location.pathname + a);
    }

    let history = useHistory();
    const [typing, setTyping] = useState(false);
    const [v, setV] = useState();
    const [login, setLogin] = useState(false);
    const admin = true;

    const search = () => {
        /*if(){

        }
        else if("전체"){

        }
        else if(){

        }
        else if(){

        }
        else if(){

        }
        else if(){

        }
        
        */
    }

    const Kenter = (e) => {
        if(e.key === 'Enter'){
            search();
        }
    }

    const [recent, setRecent] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const [user, setUser] = useState([
        {name: "asd", id: "asd", password: "a", age: 11},
        {name: "asd", id: "asd", password: "a", age: 20},
        {name: "asd", id: "asd", password: "a", age: 30},
    ])

    const [cart, setCart] = useState(5);

    const SignUp = () => {
        history.push('/signup');
        setLogin(false);
    }

    return(
        <>
        <S.Header>
            <S.S>
            <S.Logo onClick={() => history.replace('/')}>쇼핑몰</S.Logo>
            <S.SBox>
                <S.SDiv>
                    <S.Sel id="select">
                        <option>전체</option>
                        <option>여성 패션</option>
                        <option>남성 패션</option>
                        <option>남녀 공용 의류</option>
                        <option>뷰티</option>
                        <option>식품</option>
                        <option>주방용품</option>
                        <option>생활용품</option>
                        <option>홈인테리어</option>
                        <option>가전디지털</option>
                    </S.Sel>
                    <S.Search onChange={(e)=>setV(e.target.value)} value={v} onFocus={() => setTyping(true)} onBlur={() => setTyping(false)}></S.Search>
                    {typing ? 
                    <S.SBorder>
                        <S.Recent><p>최근 검색어</p></S.Recent>
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
               <div onClick={()=>search()} onKeyPress={(e) => {if(e.key === 'Enter'){search()}}}>
               <i class="fa fa-search fa-2x"></i>
               </div>
            </S.SBox>
            <S.Link src={M} onClick={()=>history.replace(`/order`)}/>
            <div onClick={()=>history.replace(`/cart`)}>
            <S.Link src={C}/>
            {cart >= 9 ?
            <S.CartNumber>{cart}</S.CartNumber>
            :
            <S.CartNumber>9+</S.CartNumber>
            }
            </div>
            {admin ? <S.Link src={Admin} onClick={()=>history.replace(`/admin`)}></S.Link> : <></>}
            </S.S>
            <S.LR>
            <S.L onClick={()=>setLogin(true)}>로그인</S.L>
            <S.L onClick={()=>history.replace('/signup')}>회원가입</S.L>
            </S.LR>
        </S.Header>
        {login ? 
        <S.LoginBackground>
            <S.LoginDiv>
                <S.LoginTittle>쇼핑몰<S.X onClick={()=>setLogin(false)}>x</S.X></S.LoginTittle> 
                <S.LoginSpan>아이디</S.LoginSpan>           
                <S.LoginInput />
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput />
                <S.LoginButton color="gray">로그인</S.LoginButton>
                <S.LoginButton onClick={()=>SignUp()}>회원가입</S.LoginButton>
            </S.LoginDiv>
        </S.LoginBackground>
        : <></>}            
        </>
    )
}

export default Header