import React, { useState, useEffect } from 'react';
import {useParams, useLocation} from "react-router-dom";
import * as S from '../styled/App'
import P from '../images/p.png'
import R from '../images/r.png'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import Select from '../contents/Select'
import { useHistory } from 'react-router-dom';
import Item from '../contents/Item'
import queryString from 'query-string';
import Sta from '../contents/Star'

const CategoryPage = () => {

    let history = useHistory();

    const params = useParams();
    const location = useLocation();

    const [catagory, SetCatagory] = useState([]);

    const [price, setPrice] = useState({
        lowest: "",
        heighest: "",
    });

    const Brand = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>브랜드</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
    
        
    const Color = () => {
        const list = [{name: "블랙"}, {name: "네이비"}, {name: "그레이"}, {name: "실버"}, {name: "레드"}, {name: "오렌지"}, {name: "옐로우"}, {name: "그린"}, {name: "블루"}, {name: "퍼플"}, {name: "핑크"}, {name: "화이트"}, {name: "브라운"}, {name: "골드"}, {name: "베이지"}, {name: "혼합"}, {name: "투명"}];
        const [clist, setClist] = useState([list.slice(0, 5)]);
        return(
            <S.CatagoryDiv>
                <S.CaTittle>색상</S.CaTittle>
                <Select lists={list}/>
                {list.length > 6 ? <S.More onClick={() => setClist([...list])}>+더보기</S.More> : <></>}
            </S.CatagoryDiv>
        )

    }
   
    const Season = () => {
        const list = {name:"사계절용", name:"봄/가을용", name:"여름용", name:"겨울용"}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>사용계절</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
     
    const Target = () => {
        const list = {/*name:"남성용", name:"여성용", name: "남녀공용", name:"아동/유아용" */}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>사용대상</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
    
    const Size = () => {
        const list = {/*name:"XS", name:"S", name:"M", name:"L", name:"XL", name:"2XL", name:"3XL", name:"FREE (One Size)"*/}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const Patern = () => {

    }
        
    const Star = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>별점</S.CaTittle>
                <S.Box><div style={{display:"flex"}}><Sta star={4}/><span>4점 이상</span></div></S.Box>
                <S.Box><div style={{display:"flex"}}><Sta star={3}/><span>3점 이상</span></div></S.Box>
                <S.Box><div style={{display:"flex"}}><Sta star={2}/><span>2점 이상</span></div></S.Box>
                <S.Box><div style={{display:"flex"}}><Sta star={1}/><span>1점 이상</span></div></S.Box>
            </S.CatagoryDiv>
        )
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        const nextInputs = {
            ...price,
            [name]: value,
        }
        setPrice(nextInputs);
    };

        
    const Price = () => {
        return(
            <S.CatagoryDiv>
                <S.CaTittle>가격</S.CaTittle>
                <S.Box>7천원 이하</S.Box>
                <S.Box>7천원~1만 4천원</S.Box>
                <S.Box>1만 4천원~2만 8천원</S.Box>
                <S.Box>2만 8천원 이상</S.Box>
                <S.PriceDiv>
                <S.PriceInput onChange={onChange} name="lowest" value={price.lowest}></S.PriceInput>~
                <S.PriceInput onChange={onChange} name="heighest" value={price.heighest}></S.PriceInput>원
                <S.PriceButton onClick={console.log(price.lowest + '+' + price.heighest )}>검색</S.PriceButton>
                </S.PriceDiv>
            </S.CatagoryDiv>
        )
    }

    const Cap = () => {
        const list = {name:"뚜껑 있음", name:"뚜껑 없음"}
        return(
            <S.CatagoryDiv>
                <span>뚜껑 유뮤</span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
        
    const Caffein = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
    
    const Language = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
    
    const ShapeOfBook = () => {
        const list = [{name:"양장"},{name:"반양장"},{name:"페이퍼북"},{name:"보드북"},{name:"문고판"},{name:"큰글씨"},{name:"오디오북"}];
        return(
            <S.CatagoryDiv>
                <span>도서형태</span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
        
    const Flavor = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Sugar = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Compatible = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Weight = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Metarial = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Coting = () => {//코딩
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Lid = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Shape = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Kind = () => {//종류
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Configuration = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Wish = () => { //식기세척기
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Diameter = () => {//지름
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Induction = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

        
    const Antibacterial = () => { //향균
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const Function = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span>기능</span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }
    
    const Direction = () => {
        const list = {}
        return(
            <S.CatagoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const WomanSocks = () => {
        const list = {name:"덧신", name:"스니커즈 양말", name:"발목 양말", name:"무릎 양말", name:"허벅지 양말", name:"발목 양말", name:"허벅지 양말", name:"발가락 양말", name:"수면 양말", name:"양말세트", name:"레그워머"}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>여성 양말 종류</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const Caracter = () => {
        const list = {name:"요괴메카드", name:"신비아파트", name:"뽀로로", name:"겨울왕국", name:"카카오프렌즈", name:"헬로키티", name:"에디슨프렌드"}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>캐릭터</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const Oven = () => {
        const list = [{name:"오븐 가능"}]
        return(
            <S.CatagoryDiv>
                <S.CaTittle>오븐 가능 여부</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const Range = () => {
        const list = {name:"전자 레인지 가능"}
        return(
            <S.CatagoryDiv>
                <S.CaTittle>전자 레인지 가능 여부</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>
        )
    }

    const Dilivery = () => {
        const list = [{name:"로켓", i:R}, {name:"무료배송", i:P}]
        return(
            <S.CatagoryDiv>
                <S.CaTittle>배송</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv>
        );
    }

    const Subject = () => {
        const list = [{name: "국어"},{name: "수학"},{name: "영어"},{name: "사회"},{name: "역사"},{name: "과학"},{name: "한자/한문"},{name: "예체능"},{name: "제2외국어"},{name: "논술/작문"},{name: "전과목"}];
        return(
            <S.CatagoryDiv>
                <S.CaTittle>과목</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv>
        )
    }

    const useGrade = () => {
        const list = [{name: "초등1학년"},{name: "초등2학년"},{name: "초등3학년"},{name: "초등4학년"},{name: "초등5학년"},{name: "초등6학년"},{name: "중등1학년"},{name: "중등2학년"},{name: "중등3학년"},{name: "고등학생"}];
        return(
            <S.CatagoryDiv>
                <S.CaTittle>사용학년</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv>
        )
    }

    const Olganic = () => {
        const list = [{name: "인증 있음"}];
        return(
            <S.CatagoryDiv>
                <S.CaTittle>유기농/친환경 등</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv>
        )
    }

    //최소 연령

    const SetC = ({c}) => {
        switch(c){
            case 'closet' :
                return(
                    <>
                    <Color />
                    </>
                )
            break;
            case 'food' :
                return(
                <>
                </>
                )
            break;
            case 'car' :
                return(
                    <>

                    </>
                )
            break;
            case 'fenci' :
                return(
                    <>
                    </>
                )
            break; 
            case 'computer' : 
                return(
                    <>
                    </>
                )
            break;
            case 'novel' :
                return(
                    <>
                        <ShapeOfBook />
                    </>
                )
                break;
            case 'cup' :
                return(
                    <>
                    </>
                )
                break;
            case 'womansocks' :
                return(
                    <>
                        <WomanSocks />
                    </>
                )
                break;
            case 'onion' :
                return(
                    <>
                        <Olganic />
                    </>
                )
                break;
            case 'galric' :
                    return(
                        <>
                            <Olganic />
                        </>
                    )
                    break;
            default :
            break;
        }
    }

    const [list, setList] = useState([{id: 1, name: "1", price: 1, star: 1, img: A},{id: 2, name: "1", price: 1, star: 1, img: B},{id: 3, name: "1", price: 1, star: 1, img: B},{id: 4, name: "1", price: 1, star: 1, img: B},{id: 5, name: "1", price: 1, star: 1, img: B},{id: 6, name: "1", price: 1, star: 1, img: B}]);
    const [p, setP] = useState(location.search.slice(2, location.search.length));
    const [option, setOption] = useState(1);

    useEffect(()=>{
        const query = queryString.parse(location.search);
        console.log(query);
        console.dir(location);
    },[]);

    return(
        <>
        <S.OrderDiv />
        <S.C>
            <S.Select>
                <Dilivery />
                <Star />
                <Price />
                
            </S.Select>
            <S.CBox>
                <h3>카테고리</h3>
                <span>연관검색어: </span>
                <S.Order>
                    <S.Cli color={option === 1 ? "blue" : "black"} onClick={()=>setOption(1)}>별점순</S.Cli>
                    <S.Cli color={option === 2 ? "blue" : "black"} onClick={()=>setOption(2)}>낮은 가격순</S.Cli>
                    <S.Cli color={option === 3 ? "blue" : "black"} onClick={()=>setOption(3)}>높은 가격순</S.Cli>
                    <S.Cli color={option === 4 ? "blue" : "black"} onClick={()=>setOption(4)}>판매량</S.Cli>
                    <S.Cli color={option === 5 ? "blue" : "black"} onClick={()=>setOption(5)}>최신순</S.Cli>
                </S.Order>
                <S.Border>
                    <Item lists={list}/>
                </S.Border>
            </S.CBox>
        </S.C>
        <S.Next></S.Next>
        </>
    )
}

export default CategoryPage