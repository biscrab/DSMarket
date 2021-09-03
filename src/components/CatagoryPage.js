import React, { useState, useEffect } from 'react';
import {useParams, useLocation, Link} from "react-router-dom";
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
import Page from '../contents/Page'
import Catagory from '../contents/Catagory'

const CategoryPage = () => {

    let history = useHistory();

    const params = useParams();
    const location = useLocation();

    const [price, setPrice] = useState({
        lowest: "",
        highest: "",
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
        const list = [{name: "블랙", link:"black"}, 
                    {name: "네이비", link:"navy"}, 
                    {name: "그레이", link:"gray"}, 
                    {name: "실버", link:"sliver"}, 
                    {name: "레드", link:"red"}, 
                    {name: "오렌지", link:"orange"},
                    {name: "옐로우", link:"yellow"}, 
                    {name: "그린", link:"green"}, 
                    {name: "블루", link:"blue"}, 
                    {name: "퍼플", link:"purple"}, 
                    {name: "핑크", link:"pink"}, 
                    {name: "화이트", link:"white"}, 
                    {name: "브라운", link:"brown"}, 
                    {name: "골드", link:"gold"}, 
                    {name: "베이지", link:"beiege"}, 
                    {name: "혼합", link:"mixed"}, 
                    {name: "투명", link:"limpidity"}
    ];

        const path = "color";

        const [clist, setClist] = useState(list.slice(0, 5));
        return(
            <S.CatagoryDiv>
                <S.CaTittle>색상</S.CaTittle>
                <Select lists={clist} path={path}/>
                {list.length > 6 && clist.length <= 6 ? <S.More onClick={() => setClist([...list])}>+더보기</S.More> : <S.More onClick={() => setClist(list.slice(0, 5))}>-닫기</S.More>}
            </S.CatagoryDiv>
        )

    }
   
    const Season = () => {
        const list = [{name:"사계절용", link:"four"}, {name:"봄/가을용", link:"spfa"}, {name:"여름용", link: "summer"}, {name:"겨울용", link:"winter"}];
        const path = "season"
        return(
            <S.CatagoryDiv>
                <S.CaTittle>사용계절</S.CaTittle>
                <Select lists={list} path={path}/>
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

        return(
            <S.CatagoryDiv>
                <S.CaTittle>별점</S.CaTittle>
                <Link to={{search:"?star=1"}} style={{ textDecoration: 'none', color: 'black'}}> 
                <S.Box><div style={{display:"flex"}}><Sta star={4}/><span>4점 이상</span></div></S.Box>
                </Link>
                <Link to={{search:"?star=2"}} style={{ textDecoration: 'none', color: 'black'}}>
                <S.Box><div style={{display:"flex"}}><Sta star={3}/><span>3점 이상</span></div></S.Box>
                </Link>
                <Link to={{search:"?star=3"}} style={{ textDecoration: 'none', color: 'black'}}>
                <S.Box><div style={{display:"flex"}}><Sta star={2}/><span>2점 이상</span></div></S.Box>
                </Link>
                <Link to={{search:"?star=4"}} style={{ textDecoration: 'none', color: 'black'}}>
                <S.Box><div style={{display:"flex"}}><Sta star={1}/><span>1점 이상</span></div></S.Box>
                </Link>
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

        const setP = ({highest, lowest}) => {
            if(location.search){
                if(lowest){
                    if(highest){
                        location.search = "?lowest="+`${lowest}`+"&highest="+`${highest}`;
                    }
                    else{
                        location.search = "?lowest="+`${lowest}`;
                    }
                }
                else{
                    if(highest){
                        location.search = "?highest="+`${highest}`;
                    }
                }  
            }
            else{
                if(lowest){
                    if(highest){
                        location.search = "&lowest="+`${lowest}`+"&highest="+`${highest}`;
                    }
                    else{
                        location.search = "&lowest="+`${lowest}`;
                    }
                }
                else{
                    if(highest){
                        location.search = "&highest="+`${highest}`;
                    }
                }
            }
            console.log(location);
            history.push(location.search);
            console.log(query);
        }

        return(
            <S.CatagoryDiv>
                <S.CaTittle>가격</S.CaTittle>
                <S.Box onClick={()=>setP({highest: "", lowest: "7000"})}>7천원 이하</S.Box>
                <S.Box onClick={()=>setP({highest: "7000", lowest: "14000"})}>7천원~1만 4천원</S.Box>
                <S.Box onClick={()=>setP({highest: "14000", lowest: "28000"})}>1만 4천원~2만 8천원</S.Box>
                <S.Box onClick={()=>setP({highest: "28000", lowest: ""})}>2만 8천원 이상</S.Box>
                <S.PriceDiv>
                <S.PriceInput onChange={onChange} name="lowest" value={price.lowest}></S.PriceInput>~
                <S.PriceInput onChange={onChange} name="highest" value={price.highest}></S.PriceInput>원
                <Link to={{search:`lowest=${price.lowest}&highest=${price.highest}`}}>
                <S.PriceButton>검색</S.PriceButton>
                </Link>
                </S.PriceDiv>
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
        const list = [{name:"로켓", i:R, link:"rocket"}, {name:"무료배송", i:P, link:"free"}]
        const path = 'dilivery'
        return(
            <S.CatagoryDiv>
                <S.CaTittle>배송</S.CaTittle>
                <Select lists={list} path={path}></Select>
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
            case 'wcloset' :
            case 'mcloset' :
                setCatagory(["의류","속옷/잠옷","신발","가방/잡화"]);
                return(
                    <>
                        <Color />
                    </>
                )
            break;
            case 'food' :
                setCatagory(["유기농","과일","견과/건과","채소","쌀/잡곡","축산/계란","수산물/건어물","생수/음료","커피/원두/차","과자/초콜릿/시리얼","면/통조림/가공식품","가루/조미료/오일","장/소스/드레싱/식초","유제품/아이스크림","냉장/냉동/간편요리","건강식품"]);
                return(
                <>
                </>
                )
            break;
            case 'fenci' :
                setCatagory(["사무용품 전문관", "미술/화방용품", "학용품/수업준비", "필기류", "노트/메모지", "다이어리/플래너", "바인더/파일", "파티/이벤트","데코/포장용품","카드/엽서/봉투","앨범","복사용품/라벨지","보드/칠판/광고"]);
                return(
                    <>
                    </>
                )
            break; 
            case 'book' :
                setCatagory(["유아/어린이","소설/에세이/시","초중고참고서","가정 살림","건강 취미","경제 경영","과학/공학","국어/외국어/사전","대학교재","만화/라이트노벨","사회 정치","수험서/자격증"])
                return(
                    <>
                        <ShapeOfBook />
                    </>
                )
                break;
            case 'life' :
                setCatagory(["헤어/바디/세안","구강/면도","화장지/물티슈","생리대/기저귀", "세탁세제", "청소/주방세제", "틸취/방향/살충", "건강/의료용품", "욕실용품", "생활전기용품", "수납", "생활잡화", "공구/철물/DIY", "안전/호신용품"]);
                return(
                    <>
                    </>
                )
            break;
            case 'pet' :
                setCatagory(["강아지", "고양이", "관상어", "소동물/가축용품"]);
            break;
            case 'homeappliances':
                setCatagory(["TV/영상가전","냉장고","세탁기/건조기","생활가전","이미용가전","건강가전","노트북","데스크탑","모니터","PC주변기기","PC부품","휴대폰","태블릿PC","스마트워치/밴드","음향기기","게임","카메라","전동킥보드/자전거","차량용 디지털"]);
            break;
            case 'sport' :
                setCatagory(["캠핑","홈트레이닝","수영/수상스포츠","골프","자전거","킥보드/스케이트","낚시","등산/아웃도어","스포츠신발","남성스포츠의류","여성스포츠의류","유아스포츠의류","스포츠잡화","구기스포츠","라켓스포츠","헬스/요가/댄스","복싱/검도/태권도","학교 체육 준비","기타스포츠","스키/겨울스포츠"]);
            break;
            case 'toy': 
                setCatagory(["신생아/영아완구","로봇/작동완구","역할놀이","블록놀이","인형","물놀이/계절완구","승용완구","실내대형완구","STEAM완구","학습완구/교구","보드게임","RC완구/부품","퍼즐/큐브/피젯토이","프라모델","피규어/다이캐스트","콘솔/휴대용 게임기", "파티/마술용품", "DIY", "악기/음향기기", "원예/가드닝", "수집품", "키덜트샵"]);
            break;
            case 'kitchen':
                setCatagory(["주방가전","냄비/프라이팬","칼/도마","주방조리도구","그릇/홈세트","수저/커트러리","컵/잔/텀블러","밀폐저장/도시락","주방잡화","일회용품/종이컵","보온/보냉용품","이유/유아식기","베이킹용품","교자상/제수용품"]);
            break;
            default :
            
            break;
        }
    }

    const Cata = () => {

        const list = [{name:"1", path:"1"},{name:"2", path:"2"}];

        return(
            <S.CatagoryDiv>
                <S.CaTittle>카테고리</S.CaTittle>
                <Catagory lists={list}></Catagory>
            </S.CatagoryDiv>
        )
    }

    const setC = () => {
        if(location.search.includes(`lowest`)){
            setList(list.filter(query.lowest <= list.price));
        }
        if(location.search.includes(`highest`)){
            setList(list.filter(query.highest >= list.price));
        }
        if(location.search.includes(`star`)){
            setList(list.filter(query.star <= list.star));
        }
        if(location.search.includes(`search`)){
            setCatagory(`"${query.search}"에 대한 검색 결과`);
            var s =  [];
            for(var i = 0; i < list.length; i++){
                if(list[i].name.includes(query.search)){
                    s = [...s,list[i]];
                }
            }
            setList(s);
        }
        if(location.search.includes(`brand`)){
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

    const setS = () => {

    }

    const [list, setList] = useState([
    {name: "1", price: 1, star: 1, img: A, brand: "samsung"},
    {name: "1", price: 1, star: 1, img: B, brand: "a"},
    {name: "1", price: 1, star: 1, img: B, brand: "a"},
    {name: "1", price: 1, star: 1, img: B, brand: "a"},
    {name: "1", price: 1, star: 1, img: B, brand: "a"},
    {name: "1", price: 1, star: 1, img: B, brand: "a"}
]);
    const [p, setP] = useState(location.search.slice(2, location.search.length));
    const [option, setOption] = useState(1);
    const query = queryString.parse(location.search);
    const [catagory, setCatagory] = useState([]);

    const[page, setPage] = useState([1,2,3]);

    useEffect(()=>{
        console.log(query);
        console.dir(params);
        console.dir(location);
        setC();
    },[]);

    return(
        <>
        <S.OrderDiv>
            <S.OrderSpan onClick={()=>history.push('/catagory')}>전체</S.OrderSpan>
        </S.OrderDiv>
        <S.C>
            <S.Select>
                <Dilivery />
                <Star />
                <Price />
                <Cata />
                <Color />
                <Season />
            </S.Select>
            <S.CBox>
                {query.search ?
                <h3>'{query.search}'에 대한 검색결과</h3> : <></> }
                <S.Order>
                    <S.Cli color={option === 1 ? "royalblue" : "black"} onClick={()=>setOption(1)}>별점순</S.Cli>
                    <S.Cli color={option === 2 ? "royalblue" : "black"} onClick={()=>setOption(2)}>낮은 가격순</S.Cli>
                    <S.Cli color={option === 3 ? "royalblue" : "black"} onClick={()=>setOption(3)}>높은 가격순</S.Cli>
                    <S.Cli color={option === 4 ? "royalblue" : "black"} onClick={()=>setOption(4)}>판매량</S.Cli>
                    <S.Cli color={option === 5 ? "royalblue" : "black"} onClick={()=>setOption(5)}>최신순</S.Cli>
                </S.Order>
                <S.Border>
                    {list.length === 0 ?
                    <h2>해당 하는 상품이 없습니다.</h2>
                    :
                    <Item lists={list}/> 
                    }
                </S.Border>
            </S.CBox>
        </S.C>
        <S.Next>
            <Page lists={page}/>
        </S.Next>
        </>
    )
}

export default CategoryPage