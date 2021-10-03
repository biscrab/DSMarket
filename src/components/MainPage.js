import React, { useState, useEffect } from 'react';
import {useParams, useLocation, Link, useRouteMatch} from "react-router-dom";
import * as S from '../styled/App'
import A from '../images/a.jpg'
import { useHistory } from 'react-router-dom';
import Item from '../contents/Item'
import queryString from 'query-string';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import OtherList from '../contents/OtherList'

const MainPage = () => {    

    let history = useHistory();
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();
    
    const [list, setList] = useState([]);
    

    const [rlist, setRlist] = useState(list);

    const query = queryString.parse(location.search);

    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        //SetP(params.catagory);
        console.log(query);
        SetPage();
        setList(list.filter(i => i.name.includes(query.search)))
    },[]);

    function getCookie(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
        }
    
    useEffect(()=>{
        axios.get('http://13.124.26.107:9095/api/item/all')
        .then(response => {
            setList(response);
            alert("123");
            console.log(response);
            setLoading(false);
        })
        .catch(loading =>{
            setLoading(true);
        })
        .catch(error => {
            alert("1");
        })
 },[]);

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

    const [catagory, setCatagory] = useState({
        search: query.search
    });

    const [path, setPath] = useState("");

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

    const email = "email";

    return(
        <S.C>
                <S.Border>
                <InfiniteScroll style={{display: 'flex', flexDirection:"column-reverse", overflowX:"hidden"}}
                                dataLength={list.length}
                                loader={<Loading />}
                >
                <S.ItemD>
                <Item lists={list}/>
                </S.ItemD>
                </InfiniteScroll>            
                </S.Border>
        </S.C>
    )
}

/*                <S.MyDiv>
                    <S.MyFDiv>
                    <S.My>
                    <S.MyImg src={A} onClick={()=>history.push('/user/1')}></S.MyImg>
                    <S.MyInfoDiv>
                        <S.MyInfo>{email}</S.MyInfo>
                    </S.MyInfoDiv>
                    </S.My>
                    <S.OtherTittle>회원님을 위한 추천</S.OtherTittle>
                    <S.OtherUl>
                        <OtherList lists={other}/>
                    </S.OtherUl>
                    </S.MyFDiv>
                </S.MyDiv> */

export default MainPage

    /*
    axios.get(`/Item/all`)
        .then(response => {
            setList(response);
            setLoading(false);
        })
        .catch(loading =>{
            setLoading(true);
        })
        .catch(error => {

        })*/


    /*    const prev = () => {
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
    } */

    /*    const setLi = () => {

        if(query.search){
            var s =  [];
            for(var i = 0; i < list.length; i++){
                if(list[i].name.includes(query.search)){
                    s = [...s,list[i]];
                }
            }
            setList(s);
        }
        console.log(list);
    }  */