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
import QueryString from 'qs';
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
            <S.CategoryDiv>
                <S.CaTittle>브랜드</S.CaTittle>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }
    
        
    const Color = () => {
        const list = [{name: "블랙"}, {name: "네이비"}, {name: "그레이"}, {name: "실버"}, {name: "레드"}, {name: "오렌지"}, {name: "옐로우"}, {name: "그린"}, {name: "블루"}, {name: "퍼플"}, {name: "핑크"}, {name: "화이트"}, {name: "브라운"}, {name: "골드"}, {name: "베이지"}, {name: "혼합"}, {name: "투명"}];
        const [clist, setClist] = useState([list.slice(0, 5)]);
        return(
            <S.CategoryDiv>
                <S.CaTittle>색상</S.CaTittle>
                <Select lists={list}/>
                {list.length > 6 ? <S.More onClick={() => setClist([...list])}>+더보기</S.More> : <></>}
            </S.CategoryDiv>
        )

    }

        
    const Condition = () => {
        const list = [{name: "새 상품"},{name: "박스 훼손"},{name: "재포장"},{name: "리퍼"},{name: "중고"}];
        return(
            <S.CategoryDiv>
                <S.CaTittle>상품 상태</S.CaTittle>
                <Select lists={list}/>
            </S.CategoryDiv>
        )

    }

        
    const Season = () => {
        const list = {name:"사계절용", name:"봄/가을용", name:"여름용", name:"겨울용"}
        return(
            <S.CategoryDiv>
                <S.CaTittle>사용계절</S.CaTittle>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }
     
    const Target = () => {
        const list = {/*name:"남성용", name:"여성용", name: "남녀공용", name:"아동/유아용" */}
        return(
            <S.CategoryDiv>
                <S.CaTittle>사용대상</S.CaTittle>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }
    
    const Size = () => {
        const list = {/*name:"XS", name:"S", name:"M", name:"L", name:"XL", name:"2XL", name:"3XL", name:"FREE (One Size)"*/}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const Patern = () => {

    }
        
    const Star = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <S.CaTittle>별점</S.CaTittle>
                <div><Sta star={4}/><span>4점 이상</span></div>
                <div><Sta star={3}/><span>3점 이상</span></div>
                <div><Sta star={2}/><span>2점 이상</span></div>
                <div><Sta star={1}/><span>1점 이상</span></div>
            </S.CategoryDiv>
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
            <S.CategoryDiv>
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
            </S.CategoryDiv>
        )
    }

    const Cap = () => {
        const list = {name:"뚜껑 있음", name:"뚜껑 없음"}
        return(
            <S.CategoryDiv>
                <span>뚜껑 유뮤</span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }
        
    const Caffein = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }
    
        
    const Flavor = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Sugar = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Compatible = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Weight = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Metarial = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Coting = () => {//코딩
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Lid = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Shape = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Kind = () => {//종류
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Configuration = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Wish = () => { //식기세척기
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Diameter = () => {//지름
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Induction = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

        
    const Antibacterial = () => { //향균
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const Function = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span>기능</span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }
    
    const Direction = () => {
        const list = {}
        return(
            <S.CategoryDiv>
                <span></span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const WomanSocks = () => {
        const list = {name:"덧신", name:"스니커즈 양말", name:"발목 양말", name:"무릎 양말", name:"허벅지 양말", name:"발목 양말", name:"허벅지 양말", name:"발가락 양말", name:"수면 양말", name:"양말세트", name:"레그워머"}
        return(
            <S.CategoryDiv>
                <span>여성 양말 종류</span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const Caracter = () => {
        const list = {name:"요괴메카드", name:"신비아파트", name:"뽀로로", name:"겨울왕국", name:"카카오프렌즈", name:"헬로키티", name:"에디슨프렌드"}
        return(
            <S.CategoryDiv>
                <span>캐릭터</span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const Oven = () => {
        const list = {name:"오븐 가능"}
        return(
            <S.CategoryDiv>
                <span>오븐 가능 여부</span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const Range = () => {
        const list = {name:"전자 레인지 가능"}
        return(
            <S.CategoryDiv>
                <span>전자 레인지 가능 여부</span>
                <Select lists={list}/>
            </S.CategoryDiv>
        )
    }

    const Dilivery = () => {
        const list = [{name:"로켓", i:R}, {name:"무료배송", i:P}]
        return(
            <S.CategoryDiv>
                <Select lists={list}></Select>
            </S.CategoryDiv>
        );
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
            default :
                return(
                    <>
                    </>
                )
            break;
        }
    }

    const [list, setList] = useState([{name: "1", price: 1, star: 1, img: A},{name: "1", price: 1, star: 1, img: B},{name: "1", price: 1, star: 1, img: B},{name: "1", price: 1, star: 1, img: B},{name: "1", price: 1, star: 1, img: B},{name: "1", price: 1, star: 1, img: B}]);
    const [p, setP] = useState(location.search.slice(2, location.search.length));

    useEffect(()=>{
        console.dir(location);
        console.dir(params);
        const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
        console.log(p);
    },[]);

    return(
        <>
        <S.C>
            <S.Select>
                <Dilivery />
                <Condition />
                <Star />
                <Price />
                <SetC c={p} />
            </S.Select>
            <S.CBox>
                <h3>카테고리</h3>
                <span>연관검색어: </span>
                <S.Order>
                    <S.Cli>별점순</S.Cli>
                    <S.Cli>낮은 가격순</S.Cli>
                    <S.Cli>높은 가격순</S.Cli>
                    <S.Cli>판매량</S.Cli>
                    <S.Cli>최신순</S.Cli>
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