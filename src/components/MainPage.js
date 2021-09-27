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
        {id: 1, name: "상품1", price: 100, star: 1, img: A},
        {id: 1, name: "상품1", price: 10, star: 2, img: B},
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

    const [ca, sCa] = useState(Number(params.catagory));    
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        //SetP(params.catagory);
        sCa(Number(params.catagory));
        console.log(query);
        SetPage();
    },[]);       

    useEffect(()=>{
    axios.get(`http://13.124.26.107:9095/Item/all`)
        .then(response => {
            setList(response);
            setLoading(false);
        })
        .catch(loading =>{
            setLoading(true);
        })
        .catch(error => {

        })
 })
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

    const s = JSON.parse(localStorage.getItem('user'));

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
                    <S.MyFDiv>
                    <S.My>
                    <S.MyImg src={A} onClick={()=>history.push('/user')}></S.MyImg>
                    <S.MyInfoDiv>
                        <S.MyInfo color="gray"></S.MyInfo>
                        <S.MyInfo>이름</S.MyInfo>
                    </S.MyInfoDiv>
                    </S.My>
                    <S.OtherTittle>회원님을 위한 추천</S.OtherTittle>
                    <S.OtherUl>
                        <OtherList lists={other}/>
                    </S.OtherUl>
                    </S.MyFDiv>
                </S.MyDiv>

                </S.Border>
                

            </S.CBox>   
        </S.C>
        </S.CA>
    )
}

export default MainPage