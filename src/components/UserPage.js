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

    const RegistComment = () => {
        axios.post('http://13.124.26.107:9095/api/comment', review)
            .then(response => {
                alert("완료");
            })
            .catch(error => {
                alert("오류");
            })
    }

    const DeleteComment = () => {
        //axios.delete(`http://13.124.26.107:9095/api/comment?id=${params.id}`)
    }   

    const [review, setReview] = useState("");

    const Border = () => {
        if(params.review === "review"){
            return(
                <>
                <S.Review>
                    <Review lists={user.review}/>
                </S.Review>
                <S.RIDiv>
                    <span>이메일</span>
                    <S.RDiv>
                    <S.RText onChange={(e) => setReview(e.target.value)} value={review}></S.RText>
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

    const EndEdit = () => {

        setChexplane(false);
        axios.post('/api/comment', user)
            .then(res => {

            })
    }

    useEffect(()=>{
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
                <S.Introduce onChange={(e)=>setUser({...user, introduce: e.target.value})}onMouseLeave={()=>EndEdit()} value={user.introduce}></S.Introduce>               
                </S.User>
                <S.Select>
                    <div>                    
                    <S.SSpan onClick={()=>history.push('/user/1')}>판매 물품({user.item.length})</S.SSpan>
                    <S.SSpan onClick={()=>history.push('/user/1/review')}>거래 후기({user.review.length})</S.SSpan>
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