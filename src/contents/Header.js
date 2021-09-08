import React,{useState, useRef} from 'react'
import { useHistory, useLocation} from 'react-router-dom'
import * as S from '../styled/App'
import A from '../images/s.png'
import M from '../images/man.png'
import C from '../images/cart.png'
import Admin from '../images/admin.png'

const Header = () => {

    let location = useLocation();

    const select = useRef();

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

    let history = useHistory();
    const [typing, setTyping] = useState(false);
    const [v, setV] = useState();
    const [login, setLogin] = useState(false);
    const admin = true;

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

    const Search = () => {
        console.log(select.value);
    }

    return(
        <>
        <S.Header>
            <S.S>
            <S.Logo onClick={() => history.replace('/')}>대마몰</S.Logo>
            <S.SBox>
                <S.SDiv>
                    <S.Sel ref={select} onClick={()=>setLink(v, "search")}>
                        <option value={0}>전체</option>
                        <option value={1}>여성 패션</option>
                        <option value={2}>남성 패션</option>
                        <option value={3}>남녀 공용 의류</option>
                        <option value={4}>뷰티</option>
                        <option value={5}>식품</option>
                        <option value={6}>주방용품</option>
                        <option value={7}>생활용품</option>
                        <option value={8}>홈인테리어</option>
                        <option value={9}>가전디지털</option>
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
               <div onClick={()=>Search()} onKeyPress={(e) => {if(e.key === 'Enter'){history.push(`/catagory?search=${v}`)}}}>
               <i class="fa fa-search fa-2x" onClick={()=>setLink(v, "search")}></i>
               </div>
            </S.SBox>

            <S.HeaderIconDiv>
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
            </S.HeaderIconDiv>

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
                <S.LoginButton color="royalblue" c="white">로그인</S.LoginButton>
                <S.LoginButton c="black" onClick={()=>SignUp()}>회원가입</S.LoginButton>
            </S.LoginDiv>
        </S.LoginBackground>
        : <></>}            
        </>
    )
}

export default Header