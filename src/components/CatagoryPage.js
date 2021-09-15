import React, { useState, useEffect } from 'react';
import {useParams, useLocation, Link, useRouteMatch} from "react-router-dom";
import * as S from '../styled/App'
import P from '../images/p.png'
import R from '../images/r.png'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import { useHistory } from 'react-router-dom';
import Item from '../contents/Item'
import queryString from 'query-string';
import Page from '../contents/Page'
import Catagory from '../contents/Catagory'
import SetPath from '../contents/SetPath';


/*
    1 패션의류/잡화
        2 여성패션
        3 남성패션
        4 남녀 공용 의류
        5 유아동패션
    6 뷰티
        7 명품뷰티
        8 스킨케어
        9 클렌징/필링
        10 메이크업
        11 향수
        12 남성화장품
        13 네일
        14 뷰티소품
        15 어린이화장품
        16 로드샵
        17 헤어
        18 바디
        19 선물세트/키트
    20 주방용품
        21 냄비/프라이팬
        22 칼/도마
        23 주방조리도구
        24 그릇/홈세트
        25 수저/커트러리
        26 컵/잔/텀블러
        27 밀폐저장/도시락
        28 주방잡화
        29 일회용품/종이컵
        30 보온/보냉용품
        31 이유/유아식기
        32 베이킹용품
        33 교자상/제수용품
    34 생활용품
        35 헤어/바디/세안
        36 구강/면도
        37 화장지/물티슈
        38 생리대/성인기저귀
        39 기저귀
        40 세탁
        41 청소용품
        42 탈취/방향/살충
        43 건강/의료용품
        44 욕실 용품
        45 생활전기용품
        46 수납/정리
        47 생활잡화
    48 홈인테리어
        49 홈데코
        50 가구
        51 수납/정리
        52 침구
        53 커튼/블라인드
        54 카페트/쿠션/거실화
        55 수예/수선
        56 욕실용품
        57 조명/스탠드
        58 원예/가드닝
    59 가전디지털
        60 TV/영상가전
        61 냉장고
        62 세탁기/건조기
        63 청소기
        64 계절가전
        65 이미용가전
        66 건강가전
        67 주방가전
        68 노트북
        69 데스크탑
        70 저장장치
        71 프린터/복합기
        72 PC 부품/주변기기
        73 휴대폰
        74 태블릿PC
        75 스마트워치/밴드
        76 음향기기
        77 게임콘솔
        78 카메라
        79 차량용 디지털
    80 스포츠/레저
        95 캠핑
        96 홈트레이닝
        97 수영/수상스포츠
        98 골프
        99 자전거
        100 킥보드/스케이트
        101 낚시
        102 등산/아웃도어
        103 스포츠신발
        104 남성스포츠의류
        105 여성스포츠의류
        106 유아스포츠의류
        107 스포츠잡화
        108 구기스포츠
        109 라켓스포츠
        110 헬스/요가/댄스
        111 복싱/검도/태권도
        112 기타스포츠
        113 스키/겨울스포츠
    114 도서/음반/DVD
        115 유아/어린이
        116 소설/에세이/사
        117 초중고참고서
        118 가정 살림
        119 건강 취미
        110 경재 경영
        111 과학/공학
        112 국어/외국어/사전
        123 대학교재
        124 만화/라이트노벨
        125 사회 정치
        126 수험서/자격증
        127 여행
        128 역사
        129 예술
        130 인문
    131 반려동물용품
        132 강아지 사료/용품
        133 고양이 사료/용품
        134 관상어 용품
        135 소동물/가축용품
*/

const CategoryPage = () => {

    let history = useHistory();
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();

    const [list, setList] = useState([
        {id: 1, name: "1", price: 100, star: 1, img: A, brand: "samsung", sell: 50, catagory: 1, review: 100},
        {id: 1, name: "1", price: 10, star: 2, img: B, brand: "a", sell: 100 ,catagory: 1, review: 100},
        {id: 1, name: "1", price: 5, star: 3, img: C, brand: "a", sell: 200, catagory: 2, review: 100},
        {id: 1, name: "1", price: 6, star: 4, img: D, brand: "a", sell: 300, catagory: 3, review: 100},
        {id: 1, name: "1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
        {id: 1, name: "1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100}
    ]);
    

    const [rlist, setRlist]=useState(...list);
    const [p, setP] = useState(location.search.slice(2, location.search.length));
    const [option, setOption] = useState(1);
    
    const[page, setPage] = useState([1,2,3]);

    const query = queryString.parse(location.search);
    
    const [catagory, setCatagory] = useState({
        color: query.color,
        season: query.season,
        size: query.size,
        lowest: query.lowest,
        highest: query.highest,
        language: query.language,
        p: query.p,
        order: query.order,
        search: query.search,
        weight: query.weight,
    });

    const [a, setA] = useState("");

    const changeLink = () => {

        for(const property in catagory){

            console.log(`?${property}=${catagory[property]}`);

            if(catagory[property]){
                if(a){
                    setA(a + `&${property}=${catagory[property]}`)
                }else{
                    setA(a + `?${property}=${catagory[property]}`)
                }
            }
        }

        console.log("a:" + a);

        history.push({
            pathname: history.location.pathname,
            search: a
        })
    }

    const Select = ({item, path}) => {
        
            const [check, setCheck] = useState(false);
    
            useEffect(()=>{       
                if(location.search.includes(item.link)){
                    console.log(item.link);
                    setCheck(true);
                }
            },[]);

            
            const setLink = () => {
                setCatagory({...catagory, [path]: item.link});
                changeLink();
            }

            const Del = () => {
                setCatagory({...catagory, [path]: ""});
                changeLink();
            }
    
            return(
                <>
                {check ?
                <S.Box onClick={() => setLink()}>
                    <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                    <input type="checkbox" checked={check} style={{marginRight: "5px"}}></input><span>{item.name}</span>
                    </div>
                </S.Box>
                :
                <S.Box onClick={() => Del()}>
                <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                <input type="checkbox" checked={check} style={{marginRight: "5px"}}></input><span>{item.name}</span>
                </div>
                </S.Box>}
                </>
            );
            
            /*
            {check ? 
                <S.Box onClick={() => Del()}>
                    <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                    <input type="checkbox" checked={check} style={{marginRight: "5px"}}></input><span>{item.name}</span>
                    </div>
                </S.Box>
                }
            </> */
    }

    const [d, setD] = useState({name: "", path: ""});

    const [c, setC] = useState([]);

    const Cata = () => {
        return(
            <>
            {c ?
            <S.CatagoryDiv>
                <S.CaTittle>{d.name}</S.CaTittle>
                <Catagory lists={c}></Catagory>
            </S.CatagoryDiv>:
            <></>
            }
            </>
        )
    }

    const SetP = (n) => {
        var s = [];
        switch(n){
        case "1" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 2 && list[i].catagory <= 5){
                    s = [...s,list[i]];
                }
            }
        break;
        case "6" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 7 && list[i].catagory <= 19){
                    s = [...s,list[i]];
                }
            }
        break;
        case "20" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 21 && list[i].catagory <= 33){
                    s = [...s,list[i]];
                }
            }
        break;
        case "34" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 35 && list[i].catagory <= 57){
                    s = [...s,list[i]];
                }
            }
        break;
        case "58" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 59 && list[i].catagory <= 71){
                    s = [...s,list[i]];
                }
            }
        break;
        case "72" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 73 && list[i].catagory <= 82){
                    s = [...s,list[i]];
                }
            }
        break;
        case "83" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 84 && list[i].catagory <= 98){
                    s = [...s,list[i]];
                }
            }
        break;
        case "99" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 100 && list[i].catagory <= 114){
                    s = [...s,list[i]];
                }
            }
        break;
        case "115" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 116 && list[i].catagory <= 131){
                    s = [...s,list[i]];
                }
            }
        break;
        case "132" :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory >= 133 && list[i].catagory <= 135){
                    s = [...s,list[i]];
                }
            }
        break;
        default :
            for(var i = 0; i < list.length; i++){
                if(list[i].catagory == Number(n)){
                    s = [...s,list[i]];
                }
            }
        }
        setList(s);
    }

    const SetD = (cat) => {
        if(cat>= 1 && cat<=5){
            setD({name: "패션의류/잡화", path: 1});
            setC([{name: "여성패션" ,path: 2},
            {name:"남성패션", path: 3},
            {name:"남녀 공용 의류", path: 4},
            {name:"유아동패션", path: 5}]);

        }
        else if(cat>= 6 && cat<= 19){
            setD({name: "뷰티", path: 6});
            setC([{name: "명품뷰티", path: 7},
            {name: "스킨케어", path: 8},
            {name: "클렌징/필링", path: 9},
            {name: "메이크업", path: 10},
            {name: "향수", path: 11},
            {name: "남성화장품", path: 12},
            {name: "네일", path: 13},
            {name: "뷰티소품", path:14},
            {name: "어린이화장품", path: 15},
            {name: "로드샵", path: 16},
            {name: "헤어", path: 17},
            {name: "바디", path: 18},
            {name: "선물세트/키트", path: 19}]);
        }
        else if(cat>= 20 && cat <= 33){
            setD({name: "주방용품", path: 20});
            setC([
            {name:"냄비/프라이팬" ,path: 21},
            {name:"칼/도마" ,path: 22},
            {name:"주방조리도구" ,path: 23},
            {name:"그릇/홈세트" ,path: 24},
            {name:"수저/커트러리" ,path: 25},
            {name:"컵/잔/텀블러" ,path: 26},
            {name:"밀폐저장/도시락" ,path: 27},
            {name:"주방잡화" ,path: 28},
            {name:"일회용품/종이컵" ,path: 29},
            {name:"보온/보냉용품" ,path: 30},
            {name:"이유/유아식기" ,path: 31},
            {name:"베이킹용품" ,path: 32},
            {name:"교자상/제수용품", path: 33}]);
        }
        else if(cat>= 34 && cat<= 47){
            setD({name: "생활용품", path: 34});
            setC([{name: "헤어/바디/세안", path: 35},
            {name: "구강/면도", path: 36},
            {name: "화장지/물티슈", path: 37},
            {name: "생리대/기저귀", path: 38},
            {name: "기저귀", path: 39},
            {name: "세탁", path: 40},
            {name: "청소용품", path: 41},
            {name: "틸취/방향/살충", path: 42},
            {name: "건강/의료용품", path: 43},
            {name: "욕실 용품", path: 44},
            {name: "생활전기용품", path: 45},
            {name: "수납/정리", path: 46},
            {name: "생활잡화", path: 47},])
        }
        else if(cat>= 48 && cat<= 58){
            setD({name: "홈인테리어", path: 48 });
            setC([
            {path: 49, name: "홈데코"},
            {path: 50, name: "가구"},
            {path: 51, name: "수납/정리"},
            {path: 52, name: "침구"},
            {path: 53, name: "커튼/블라인드"},
            {path: 54, name: "카페트/쿠션/거실화"},
            {path: 55, name: "수예/수선"},
            {path: 56, name: "욕실용품"},
            {path: 57, name: "조명/스탠드"},
            {path: 58, name: "원예/가드닝"},
            ])
        }
        else if(cat>= 59 && cat<= 78){
            setD({name: "가전디지털", path: 59});
            setC([{name: "TV/영상가전" ,path: 60}, 
            {name:"냉장고" ,path: 61}, 
            {name:"세탁기/건조기" ,path: 62},
            {name:"청소기", path: 63},
            {name:"계절가전", path: 64},
            {name:"이미용가전" ,path: 65}, 
            {name:"건강가전" ,path: 66},
            {name:"주방가전" ,path: 67},  
            {name:"노트북" ,path: 68},
            {name:"데스크탑" ,path: 69}, 
            {name:"저장장치" ,path: 70}, 
            {name:"프린터/복합기" ,path: 71}, 
            {name:"Pcat부품/주변기기" ,path: 72},
            {name:"휴대폰" ,path: 73},
            {name:"태블릿PC" ,path: 88}, 
            {name:"스마트워치/밴드" ,path: 74},
            {name:"음향기기" ,path: 75},
            {name:"게임콘솔" ,path: 76}, 
            {name:"카메라" ,path: 77}, 
            {name:"차량용 디지털" ,path: 78}]);
        }
        else if(cat>= 79 && cat<= 99){
            setD({name: "스포츠/레저", path: 79});
            setC([{name: "캠핑" ,path: 80},
            {name:"홈트레이닝" ,path: 81},
            {name:"수영/수상스포츠" ,path: 82},
            {name:"골프" ,path: 83},
            {name:"자전거" ,path: 84},
            {name:"킥보드/스케이트" ,path: 85},
            {name:"낚시" ,path: 86},
            {name:"등산/아웃도어" ,path: 87},
            {name:"스포츠신발" ,path: 88},
            {name:"남성스포츠의류" ,path: 89},
            {name:"여성스포츠의류" ,path: 90},
            {name:"유아스포츠의류" ,path: 91}, 
            {name:"스포츠잡화" ,path: 92},
            {name:"구기스포츠" ,path: 93},
            {name:"라켓스포츠" ,path: 94}, 
            {name:"헬스/요가/댄스" ,path: 95},
            {name:"복싱/검도/태권도" ,path: 96}, 
            {name:"학교 체육 준비" ,path: 97}, 
            {name:"기타스포츠" ,path: 98},
            {name:"스키/겨울스포츠", path: 99}]);
        }
        else if(cat>= 100 && cat<= 116){
            setD({name: "도서/음반/DVD", path: 100});
            setC([{name: "유아/어린이", path: 101},
            {name: "소설/에세이/시", path: 102},
            {name:"초중고참고서", path: 103},
            {name: "가정 살림", path: 104},
            {name: "건강 취미", path: 105},
            {name: "경제 경영", path: 106},
            {name: "과학/공학", path: 107},
            {name: "국어/외국어/사전", path: 108},
            {name: "대학교재", path: 109},
            {name: "만화/라이트노벨", path: 110},
            {name: "사회 정치", path: 111},
            {name: "수험서/자격증", path: 112},
            {name: "여행", path: 113},
            {name: "역사", path: 114},
            {name: "예술", path: 115},
            {name: "인문", path: 116},
        ])
        }
        else if(cat>= 116 && cat<= 117){
            setD({name: "반려동물용품", path: 118});
            setC([{name: "강아지 사료/용품" , path: 119}, 
            {name: "고양이 사료/용품",path: 120}, 
            {name: "관상어 용품" ,path: 121}, 
            {name: "소동물/가축용품" ,path: 122}]);
        }
        else{
            setD({name: "카테고리", path: ""});
            setC([
                {name: "패션의류/잡화", path: 1},
                {name: "뷰티", path: 6},
                {name: "식품", path: 20},
                {name: "주방용품", path: 34},
                {name: "생활용품", path: 48},
                {name: "홈인테리어", path: 62},
                {name: "가전디지털", path: 73},
                {name: "스포츠/레저", path: 94},
                {name: "도서/음반/DVD", path: 114},
                {name: "반려동물용품", path: 131},
            ])
        }   
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
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        SetP(params.catagory);
        sCa(Number(params.catagory));
        console.log(query);
        setO(1);
        /*
        axios.get('백엔드 url')
            .then(response => {
                setList(response.data);
            });*/

        if(catagory.p === ""){
            setCatagory({...catagory, p: 1});
            changeLink();
        }
        console.log(query);
        SetD(Number(params.catagory));
    },[]);

    const SetPage = () => {
        var pageN = (list.length / 16);
        if(params.p === 1){
            setRlist(list.slice(0, 15));
        }
        else{
            setRlist(list.slice(params.p * 15 + 1 , params.p *15 + 16));
        }
        setList()
    }

    const prev = () => {
        if(query.p >= 11){
            setCatagory({...catagory, p: Number(query.p)-10});
        }
        else{
            setCatagory({...catagory, p: 1})
        }
    }

    const next = () => {
        if(query.p + 10 >= list.length-1){
            setCatagory({...catagory, p: list.length-1});
        }
        else{
            setCatagory({...catagory, p: Number(query.p) + 10});
        }
    }

    return(
        <>
        <S.OrderDiv>
            <S.OrderSpan onClick={()=>history.push('/catagory')}>전체</S.OrderSpan>
            <S.OrderSpan onClick={()=>history.push(`/catagory/${d.path}`)}>{d.name}</S.OrderSpan>
            {params.catagory ?
            <S.OrderSpan onClick={()=>history.push(`/catagory/${Number(params.catagory)}`)}><SetPath /></S.OrderSpan>
            :<></>}
        </S.OrderDiv>
        <S.C>
            <S.CBox>
                {query.search ?
                <S.SearchH>'{query.search}'에 대한 검색결과</S.SearchH> : <></> }
                {<SetPath/> === "" ? <S.CatagoryH><SetPath/></S.CatagoryH> : <S.CatagoryH>{d.name}</S.CatagoryH>}
                <S.Order> 
                    <S.Cli color={catagory.order === "latest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"latest"})}>최신순</S.Cli>
                    <S.Cli color={catagory.order === "old" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"old"})}>오래된순</S.Cli>
                    <S.Cli color={catagory.order === "lowest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"lowest"})}>낮은 가격순</S.Cli>
                    <S.Cli color={catagory.order === "highest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"highest"})}>높은 가격순</S.Cli>
                </S.Order>
                <S.Border>
                {list.length === 0 ?
                <S.None>해당 하는 상품이 없습니다.</S.None>
                :
                <Item lists={list}/> 
                } 
                </S.Border>  
            </S.CBox>
        </S.C>
        <S.Next>
            {query.p >= 2 ?
            <S.Pbutton onClick={()=>prev()}>{'<'}</S.Pbutton>
            : <S.Pbutton color="#eeeeee" onClick={()=>next()}>{'<'}</S.Pbutton>}
            <Page lists={page}/>
            <S.Pbutton>{'>'}</S.Pbutton>
        </S.Next>
        <button onClick={()=>console.log(catagory)}>112</button>
        </>
    )
}

export default CategoryPage

/*                {loading ? 
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
                : */

    /*
    const Star = () => {

        return(
            <S.CatagoryDiv>
                <S.CaTittle>별점</S.CaTittle> 
                <S.Box onClick={()=>setLink("star",1)}><div style={{display:"flex"}}><Sta star={4}/><span>4점 이상</span></div></S.Box>
                <S.Box onClick={()=>setLink("star",2)}><div style={{display:"flex"}}><Sta star={3}/><span>3점 이상</span></div></S.Box>
                <S.Box onClick={()=>setLink("star",3)}><div style={{display:"flex"}}><Sta star={2}/><span>2점 이상</span></div></S.Box>
                <S.Box onClick={()=>setLink("star",4)}><div style={{display:"flex"}}><Sta star={1}/><span>1점 이상</span></div></S.Box>
            </S.CatagoryDiv>
        )
    }*/

        /*
    const SetC = () => {

        setCatagory([{name:"과일", link: 21},
                    {name:"견과/건과", link: 22},
                    {name:"채소", link: 23},
                    {name:"쌀/잡곡", link: 24},
                    {name:"축산/계란", link: 12},
                    {name:"수산물/건어물", link: 13},
                    {name:"생수/음료", link: 14},
                    {name:"커피/원두/차", link: 15},
                    {name:"과자/초콜릿/시리얼", link: 16},
                    {name:"면/통조림/가공식품", link: 17},
                    {name:"가루/조미료/오일", link: 18},
                    {name:"장/소스/드레싱/식초", link: 19},
                    {name:"유제품/아이스크림", link: 20},
                    {name:"냉장/냉동/간편요리", link: 21},
                    {name:"건강식품", link: 22}]);

        setCatagory([{name: "사무용품 전문관", link: 1},
                    {name: "미술/화방용품", link: 1},
                    {name: "학용품/수업준비", link: 1},
                    {name: "필기류", link: 1},
                    {name: "노트/메모지", link: 1},
                    {name: "다이어리/플래너", link: 1},
                    {name: "바인더/파일", link: 1},
                    {name: "파티/이벤트", link: 1},
                    {name:"데코/포장용품", link: 1},
                    {name:"카드/엽서/봉투", link: 1},
                    {name:"앨범", link: 1},
                    {name:"복사용품/라벨지", link: 1},
                    {name:"보드/칠판/광고", link: 1}]);

        setCatagory([{name: "유아/어린이", link: 1},
                    {name: "소설/에세이/시", link: 1},
                    {name:"초중고참고서", link: 1},
                    {name: "가정 살림", link: 1},
                    {name: "건강 취미", link: 1},
                    {name: "경제 경영", link: 1},
                    {name: "과학/공학", link: 1},
                    {name: "국어/외국어/사전", link: 1},
                    {name: "대학교재", link: 1},
                    {name: "만화/라이트노벨", link: 1},
                    {name: "사회 정치", link: 1},
                    {name: "수험서/자격증", link: 1}])

        setCatagory([{name:"신생아/영아완구" ,link: 1},
                    {name:"로봇/작동완구" ,link: 1},
                    {name:"역할놀이" ,link: 1},
                    {name:"블록놀이" ,link: 1},
                    {name:"인형" ,link: 1},
                    {name:"물놀이/계절완구" ,link: 1},
                    {name:"승용완구" ,link: 1},
                    {name:"실내대형완구" ,link: 1},
                    {name:"STEAM완구" ,link: 1},
                    {name:"학습완구/교구" ,link: 1},
                    {name:"보드게임" ,link: 1},
                    {name:"RC완구/부품" ,link: 1},
                    {name:"퍼즐/큐브/피젯토이" ,link: 1},
                    {name:"프라모델" ,link: 1},
                    {name:"피규어/다이캐스트" ,link: 1},
                    {name:"콘솔/휴대용 게임기" ,link: 1},
                    {name: "파티/마술용품" ,link: 1},
                    {name: "DIY" ,link: 1},
                    {name: "악기/음향기기" ,link: 1},
                    {name: "원예/가드닝" ,link: 1},
                    {name: "수집품" ,link: 1},
                    {name: "키덜트샵", link: 1}]);

                        const Caffein = () => {
        const list = [{name:"카페인", link: "none"},{name: "무카페인", link: "caffein"}];
        return(
            <>
            {c === 27 ?
            <S.CatagoryDiv>
                <S.CaTittle>카페인</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>:
            <></>
            }
            </>
        )
    }

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

            const Olganic = () => {
        const list = [{name: "인증 있음"}];
        return(
            <>
            {c >= 21 && c <= 24 ?
            <S.CatagoryDiv>
                <S.CaTittle>유기농/친환경 등</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv> :
            <></>
            }
            </>
        )
    }
    }
    
        const Dilivery = () => {
        const list = [{name:"로켓", i:R, link:"rocket"}, {name:"무료배송", i:P, link:"free"}]
        const path = 'dilivery'
        return(
            <>
            {c ?
            <S.CatagoryDiv>
                <S.CaTittle>배송</S.CaTittle>
                <Select lists={list} path={path}></Select>
            </S.CatagoryDiv> :
            <></>
            }
            </>
        );

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
            <>
            {c ?
            <S.CatagoryDiv>
                <S.CaTittle>전자 레인지 가능 여부</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv> :
            <></>
            }
            </>
        )
    }

    }*/