import React,{useState, useRef, useEffect, Component} from 'react'
import { useHistory, useLocation, useParams} from 'react-router-dom'
import * as S from '../styled/App'
import Profile from '../images/profile.png'
import Logo from '../images/Logo.png'
import axios from 'axios'
import $ from 'jquery'

const Header = () => {
    
    let history = useHistory();
    let location = useLocation();
    let params = useParams();

    const select = useRef();

    
    const [typing, setTyping] = useState(false);
    const [v, setV] = useState();
    const [email, setEmail] = useState(localStorage.email);
    const [balloon, setBalloon] = useState(false);
    const [recent, setRecent] = useState();

    const SignUp = () => {
        history.push('/signup');
    }

    const Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('X-AUTH-TOKEN');
        alert("로그아웃 되었습니다.");
        history.push('/');
    }
    
    useEffect(()=>{
        var s = JSON.parse(localStorage.getItem('token'));    
        if(localStorage.getItem('token')){
            
        }
        else{
            localStorage.setItem('email', "")
        }

        $(document).mouseup(function (e){
            var LayerPopup = $(".layer-popup");
            if(LayerPopup.has(e.target).length === 0){
                setBalloon(false);
            }
            else{
                if(balloon === true){
                    setBalloon(false);
                }
                else{
                    setBalloon(true);
                }
            }
          });
    })

    useEffect(()=>{
        if(localStorage.recent){
            setRecent([...localStorage.recent]);
        }
        else{
            localStorage.setItem("recent", "[]");
        }
    },[])

    const Search = () => {
        if(v){
        let r = recent;

        r.unshift(v)
        r.slice(0, 9);
        
        history.push(`/?search=${v}`)

        localStorage.recent = JSON.stringify(r);
        }
    }

    const SLi = ({num}) => {

        const f = () => {
            setV(recent[num])
            setTyping(-1);
        }

        return(
            <S.SLi onClick={()=>f()}><S.Sspan>{recent[num]}</S.Sspan></S.SLi>
        );
    }

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
        <S.Balloon className="b">
            <S.BA onClick={()=>history.push(`/${email}`)}>마이 페이지</S.BA>
            <S.BA color="crimson" onClick={()=>Logout()}>로그아웃</S.BA>
        </S.Balloon>:
        <></>
        } 
        </> 
    )
}

export default Header