import React, { useState, useEffect } from 'react';
import {useParams, useLocation, Link, useRouteMatch} from "react-router-dom";
import * as S from '../styled/App'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import { useHistory } from 'react-router-dom';
import Item from '../contents/Item'
import queryString from 'query-string';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import cac from '../catagory.json'
import OtherList from '../contents/OtherList'


const MainPage = () => {    

    let history = useHistory();
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();
    
    let sp;

    if(params.catagory){
        sp = cac[Number(params.catagory)-1];
    }

    const [list, setList] = useState([
        {id: 1, name: "상품1", price: 100, star: 1, img: A, brand: "samsung", sell: 50, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 10, star: 2, img: B, brand: "a", sell: 100 ,catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 5, star: 3, img: C, brand: "a", sell: 200, catagory: 2, review: 100},
        {id: 1, name: "상품1", price: 6, star: 4, img: D, brand: "a", sell: 300, catagory: 3, review: 100},
        {id: 1, name: "상품1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 5, star: 3, img: C, brand: "a", sell: 200, catagory: 2, review: 100},
        {id: 1, name: "상품1", price: 6, star: 4, img: D, brand: "a", sell: 300, catagory: 3, review: 100},
        {id: 1, name: "상품1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100},
    ]);
    

    const [rlist, setRlist] = useState(list);
    const [p, setP] = useState(location.search.slice(2, location.search.length));
    const [option, setOption] = useState(1);
    
    const[page, setPage] = useState([1,2,3]);

    const query = queryString.parse(location.search);

    const changeLink = () => {

        let a = ""

        a += `?order=${catagory.order}`
        if(catagory.search){
            a += `&search=${catagory.search}`
        }

        console.log("a:" + a);

        history.push({
            pathname: history.location.pathname,
            search: a
        })
    }

    const setLi = () => {
        if(query.lowest){
            console.log(Number(query.lowest));
            setList(list.filter(Number(query.lowest) <= list.price));
        }
        if(query.highest){
            setList(list.filter(Number(query.highest) >= list.price));
        }
        if(query.star){
            var s = [];
            for(var i = 0; i < list.length; i++){
                if(list[i].star >= query.star){
                    s = [...s,list[i]];
                }
            }
            setList(s);
        }
        if(query.search){
            var s =  [];
            for(var i = 0; i < list.length; i++){
                if(list[i].name.includes(query.search)){
                    s = [...s,list[i]];
                }
            }
            setList(s);
        }
        if(query.brand){
            var s = [];
            for(var i = 0; i < list.length; i++){
                if(list[i].brand == query.brand){
                    s = [...s,list[i]];
                }
            }
            setList(s);
        }
        console.log(list);
    } 

    const setO = (n) => {
        setOption(n);
        var s = list;
        console.log(s);
        if(option === 1){ //별점순
            s.sort(function(a, b){
                return b.star + a.star;
            });
        }
        else if(option === 2){ //낮은 가격순
            s.sort(function(a, b){
                return b.price - a.price;
            });
        }
        else if(option === 3){ // 높은 가격순
            s.sort(function(a, b){
                return b.price + a.price;
            });
            
        }
        else if(option === 4){ //판매량
            s.sort(function(a, b){
                return b.sell + a.sell;
            });
        }
        setList(s);
        console.log(s);
    }

    const [ca, sCa] = useState(Number(params.catagory));    
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        //SetP(params.catagory);
        sCa(Number(params.catagory));
        console.log(query);
        setO(1);  
        SetPage();

        var url = "http://13.124.26.107:9095";
        axios.get(`${url}/api/item`, )
            .then(response => {
                setList(response.data);
            });
    },[]);        

    const SetC = ({cata}) => {

        let abc;

        if(cata >= 1 && cata <=5){
            abc = "패션의류/잡화";
        }
        else if(cata >= 6 && cata <= 19){
            abc = "뷰티";
        }
        else if(cata >= 20 && cata  <= 33){
            abc ="주방용품"
        }
        else if(cata >= 34 && cata <= 47){
            abc = "생활용품"
        }
        else if(cata >= 48 && cata <= 58){
            abc = "홈인테리어"
        }
        else if(cata >= 59 && cata <= 78){
            abc = "가전디지털"
        }
        else if(cata >= 79 && cata <= 99){
            abc = "스포츠/레저"
        }
        else if(cata >= 100 && cata <= 116){
            abc = "도서"
        }      
        else if(cata >= 116 && cata <= 117){
            abc = "반려동물용품"
        }
        else{
            abc = "카테고리"
        }

        return(abc);
    }

    const SetPage = () => {
        const pa = Number(params.p);
        if(pa === 1){
            setRlist(list.slice(0, 15));
        }
        else{
            setRlist(list.slice(pa * 15 + 1 , pa * 15 + 16));
        }
        setList(rlist)
    }

    const prev = () => {
        if(catagory.p >= 11){
            setCatagory({...catagory, p: catagory.p-10});
        }
        else{
            setCatagory({...catagory, p: 1})
        }
    }

    const next = () => {
        if(catagory.p + 10 >= list.length-1){
            setCatagory({...catagory, p: list.length-1});
        }
        else{
            setCatagory({...catagory, p: catagory.p + 10});
        }
    }

    const [catagory, setCatagory] = useState({
        p: query.p,
        order: query.order,
        search: query.search
    });

    const [path, setPath] = useState("");

                    /*{<SetPath /> ?
                <h2><SetPath /></h2>
                :
                <>
                {d.name ?
                <h2>{d.name}</h2>
                :
                <h2>카테고리</h2>}
                </>
                }*/

    const SETP = (n) => {
        if(path !== n){
            setPath(n);
        }
        else{
            setPath("");
        }
    }

    const cat = [{name: "패션의류/잡화", path: 1},{name: "뷰티", path: 6},{name: "주방용품", path: 20},{name: "생횔용품", path: 34},{name: "홈인테리어", path: 48},{name: "가전디지털", path: 59},{name: "스포츠 레저", path: 80},{name: "도서", path: 100},{name: "반려동물용품", path: 117}];

    const SelectD = () => {

        if(path === "a"){
            return(
                <S.OrderDiv>
                    {cat.map(i => {
                        return(
                        <S.OrderSpan i={i} name={i.name} path={i.path} onClick={()=>history.push(`/catagory/${i.path}?p=1&order=latest`)}>{i.name}</S.OrderSpan>
                        );
                    })}
                </S.OrderDiv>
            );
        }
        else if(path === ""){
            return(
                <></>
            );
        }
    }

    useEffect(()=>{
        changeLink();
        setO();
    },[catagory]);

    useEffect(()=>{
        if(catagory.p === undefined){
            setCatagory({...catagory, p: 1});   
            changeLink();    
        }
        if(catagory.order === undefined){
            setCatagory({...catagory, order: "latest"});
            changeLink();
        }
    })

    const Loading = () => {
            <S.LoadingDiv>
                <S.LoadingD>
                <div class="spinner-border text-secondary" style={{width: "4rem", height: "4rem"}} role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <S.LoadingP>
                    로딩중...
                </S.LoadingP>
                </S.LoadingD>
            </S.LoadingDiv>
    }

    const other = [{img: A, name: 5}]

    return(
        <S.CA>
        <S.C>
            <S.CBox>
                <S.Border>
                <InfiniteScroll style={{display: 'flex', flexDirection:"column-reverse", overflowX:"hidden"}}
                                dataLength={list.length}
                                loader={<Loading />}
                >
                <>
                {1 === 0 ?
                <S.None>해당 하는 상품이 없습니다.</S.None>
                :
                <Item lists={list}/> 
                } 
                </>
                </InfiniteScroll>            
                <S.MyDiv>
                    <S.My>
                    <S.MyImg src={A}></S.MyImg>
                    <S.MyInfoDiv>
                        <S.MyInfo color="gray">이메일</S.MyInfo>
                        <S.MyInfo>이름</S.MyInfo>
                    </S.MyInfoDiv>
                    </S.My>
                    <S.OtherTittle>회원님만을 위한 추천</S.OtherTittle>
                    <S.OtherUl>
                        <OtherList lists={other}/>
                    </S.OtherUl>
                </S.MyDiv>

                </S.Border>
                

            </S.CBox>   
        </S.C>
        </S.CA>
    )
}

export default MainPage

/*                {query.search ?
                <S.SearchH>'{query.search}'에 대한 검색결과</S.SearchH> : <></> }
                {sp ? <S.CatagoryH>{sp}</S.CatagoryH> : <S.CatagoryH><SetC cata={Number(params.catagory)}/></S.CatagoryH>}
                <S.Order> 
                    <S.Cli color={query.order === "latest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"latest"})}>최신순</S.Cli>
                    <S.Cli color={query.order === "old" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"old"})}>오래된순</S.Cli>
                    <S.Cli color={query.order === "lowest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"lowest"})}>낮은 가격순</S.Cli>
                    <S.Cli color={query.order === "highest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"highest"})}>높은 가격순</S.Cli>
                </S.Order> */

/*        <S.OrderDiv>
            <S.OrderSpan onClick={()=>history.push('/catagory')}>전체</S.OrderSpan>
            <S.OrderSpan onClick={()=>SETP("a")}>{<SetC cata={Number(params.catagory)}/>}</S.OrderSpan>
        </S.OrderDiv>
        <SelectD /> */

//                <S.Best>중고거래 인기 제품</S.Best>
    /*            <S.BestItem>
                <S.Best>세일 중인 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={Sale} />
                </S.BestDiv> 
            </S.BestItem>
            <S.BestItem>
                <S.Best>새로운 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={New} />
                </S.BestDiv> 
            </S.BestItem>
             */

/*            <S.MainBanner>
                <S.BannerImage src={Banner}></S.BannerImage>
                <S.CTDiv onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <S.CDiv>
                    <S.TotalCategory onClick={() => history.push('/catagory')}>전체 카테고리</S.TotalCategory>
                    <S.Category onMouseEnter={()=>setValue(0)} onClick={() => history.push('/catagory/1')}><S.CSpan>패션</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(1)} onClick={() => history.push('/catagory/6')}><S.CSpan>뷰티</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(2)} onClick={() => history.push('/catagory/34')}><S.CSpan>주방용품</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(3)} onClick={() => history.push('/catagory/48')}><S.CSpan>생활용품</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(4)} onClick={() => history.push('/catagory/62')}><S.CSpan>가전디지털</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(5)} onClick={() => history.push('/catagory/73')}><S.CSpan>홈인테리어</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(6)} onClick={() => history.push('/catagory/89')}><S.CSpan>스포츠레져</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(7)} onClick={() => history.push('/catagory/106')}><S.CSpan>도서</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(8)} onClick={() => history.push('/catagory/123')}><S.CSpan>반려동물용품</S.CSpan></S.Category>
                </S.CDiv>
                </S.CTDiv>
            </S.MainBanner> */