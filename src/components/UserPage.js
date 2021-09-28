import React,{useEffect, useState} from "react";
import { useLocation, useHistory } from "react-router";
import * as S from '../styled/MyPage'
import Profile from '../images/profile.png'
import { Link } from "react-router-dom";
import axios from "axios";
import Item from '../contents/MyItem'
import Review from '../contents/Review'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import { getRoles } from "@testing-library/dom";
import { Explane } from "../styled/App";

const UserPage = () => {

    let location = useLocation();
    let history = useHistory();

    /*
    axios.defaults.baseURL = 'http://13.124.26.107:9095'
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.withCredentials = true;*/

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
            setUser({
              ...user, // 기존의 input 객체를 복사한 뒤
              [name]: value // name 키를 가진 값을 value 로 설정
            });
    };

    const [user, setUser] = useState({
        introduce: "asdad",
        review: [{review: "1123123123123213", name: 1}],
        item: [{id: 1, name: "1", price: 100, img: A},
                {id: 1, name: "1", price: 10, img: B},
                {id: 1, name: "1", price: 5, img: C},
                {id: 1, name: "1", price: 6, img: D},
                {id: 1, name: "1", price: 190, img: B},
                {id: 1, name: "1", price: 18, img: B}]
    }) 
    const [select, setSelect] = useState(-1);
    const [chexplane, setChexplane] = useState(false);

    const login = true;

    const ChangeExplane = () => {
        if(login === true){
            setChexplane(-1*chexplane);
        }
    }

    /*
    axios.get('/api/member/item')
        .then(res => {
            setUser({...user, item: [res.data]})
    })

    axios.get('/api/comment')
    .then(res => {
        setUser({...user, review: [res.data]})
    })*/

    const Border = () => {
        if(location.search === ""){

            return(
                <>
                {user.item ?
                <>
                <S.ItemDiv>
                    <Item lists={user.item}></Item>
                </S.ItemDiv>
                </>
                : 
                <h3>
                    판매중인 아이템이 없습니다
                </h3>
                }
                </>
            );
        }
        else if(location.search === "?review"){

            return(
                <S.Review>
                    <Review lists={user.review}/>
                </S.Review>
            );
        }   
    }

    useEffect(()=>{
        /*
        axios.get('/api/mypage')
            .then(res => {
    
        });*/
    },[]);

    return(
        <S.M>
            <S.Div>
                <S.User>
                    <S.ProfileDiv>
                    <S.Profile src={Profile}/>
                    <S.UserInfo>
                        <S.UserName>유저</S.UserName>
                    </S.UserInfo>
                    </S.ProfileDiv> 
                {chexplane === false ?
                <S.IntroduceDiv onClick={()=>ChangeExplane(true)}>
                    asdasd
                </S.IntroduceDiv>
                :
                <S.Introduce onBlur={()=>ChangeExplane(false)}>
                </S.Introduce>               
                }
                </S.User>
                <S.Select>
                    <div>                    
                    <Link to={{search:""}} style={{textDecoration:"none"}}>
                    <S.SSpan>판매 물품(1)</S.SSpan>
                    </Link>
                    <Link to={{search:"?review"}} style={{textDecoration:"none"}}>
                    <S.SSpan>거래 후기()</S.SSpan>
                    </Link>
                    </div>
                </S.Select>
                <Border />
            </S.Div>
        </S.M>
    )
}

export default UserPage


/*                {0 === true ?
                <S.Introduce placeholeder="소개 글" value={user.introduce} onChange={(e)=>setUser({...user, introduce: e.target.value})} onMouseLeave={()=>ChangeExplane(false)}>

                </S.Introduce>
                :*/