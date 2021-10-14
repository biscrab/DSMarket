import React,{useEffect, useState} from "react";
import { useLocation, useHistory, useParams } from "react-router";
import * as S from '../styled/MyPage'
import Profile from '../images/profile.png'
import axios from "axios";
import Item from '../contents/MyItem'
import Review from '../contents/Review'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'

const UserPage = () => {

    let location = useLocation();
    let history = useHistory();
    let params = useParams();

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
            setUser({
              ...user, // 기존의 input 객체를 복사한 뒤
              [name]: value // name 키를 가진 값을 value 로 설정
            });
    };

    const [user, setUser] = useState({
        introduce: "asdad",
        comments: [],
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

    const config = {
        headers: {
          'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      }

    const RegistComment = () => {
        axios.post('http://13.124.26.107:9095/api/comment', review, config)
            .then(response => {
                alert("완료");
            })
            .catch(error => {
                alert("오류");
            })
    }

    useEffect(()=>{
        axios.get('http://13.124.26.107:9095/api/comment', config)
            .then(response => setUser({...user, comments: response.data.data}) && console.log(user.comments))
            .catch(error => alert("실패"));

        axios.get('http://13.124.26.107:9095/api/item', config)
            .then(response => setUser({...user, item: response.data.data}))
        
        axios.get('http://localhost:9095/api/mypage', config)
            .then(response => console.log(response));
    },[])

    const [review, setReview] = useState({contents: "", memberEmail: params.id});

    const Border = () => {
        if(params.review === "review"){
            return(
                <>
                <S.Review>
                    {user.comments ? 
                    <Review lists={user.comments}/>
                    :
                    <></>
                    }
                </S.Review>
                <S.RIDiv>
                    <span>{localStorage.getItem("email")}</span>
                    <S.RDiv>
                    <S.RText onChange={(e) => setReview({...review, contents: e.target.value})} value={review.contents}></S.RText>
                    <S.RButton onClick={()=>RegistComment()}>등록</S.RButton>
                    </S.RDiv>
                </S.RIDiv>
                </>
            );
        }
        else{
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
    }

    const editIntroduce = () => {

        axios.post('http://13.124.26.107:9095/api/comment')
            .then(response => {
                alert(1);
            })
            .catch(error => {
                alert("실패");
            })
    }

    useEffect(()=>{
    },[]);

    return(
        <S.M>
            <S.Div>
                <S.User>
                    <S.ProfileDiv>
                    <S.Profile src={Profile}/>
                    <S.UserInfo>
                        <S.UserName>{params.id}</S.UserName>
                    </S.UserInfo>
                    </S.ProfileDiv> 
                <S.IDiv>
                <S.Introduce onChange={(e)=>setUser({...user, introduce: e.target.value})} value={user.introduce}></S.Introduce> 
                <S.IButton onClick={()=>editIntroduce()}>수정</S.IButton>
                </S.IDiv>              
                </S.User>
                <S.Select>
                    <div>                    
                    <S.SSpan onClick={()=>history.push(`/user/${params.id}`)}>판매 물품({user.item.length})</S.SSpan>
                    <S.SSpan onClick={()=>history.push(`/user/${params.id}/review`)}>거래 후기({user.comments.length})</S.SSpan>
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

                        /*
        axios.get('/api/mypage')
            .then(res => {
    
        });*/
        /*
        axios.get('/api/member/item')
        .then(res => {
            setUser({...user, item: [res.data]})
        })

        axios.get('/api/comment')
        .then(res => {
            setUser({...user, review: [res.data]})
        })
        console.log(params);z*/