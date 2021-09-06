import React, { useState, useEffect } from 'react';
import {useParams, useLocation, Link, useRouteMatch} from "react-router-dom";
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
    20 식품
        21 과일
        22 견과/건과
        23 채소
        24 쌀/잡곡
        25 축산/계란
        26 수산물/건어물
        27 음료
        28 과자/시리얼
        29 면/통조림/가공식품
        30 가루/조미료/오일
        31 장/소스/드레싱/식초
        32 유제품/아이스크림
        33 건강식품
    34 주방용품
        35 냄비/프라이팬
        36 칼/도마
        37 주방조리도구
        38 그릇/홈세트
        39 수저/커트러리
        40 컵/잔/텀블러
        41 밀폐저장/도시락
        42 주방잡화
        43 일회용품/종이컵
        44 보온/보냉용품
        45 이유/유아식기
        46 베이킹용품
        47 교자상/제수용품
    48 생활용품
        49 헤어/바디/세안
        50 구강/면도
        51 화장지/물티슈
        52 생리대/성인기저귀
        53 기저귀
        54 세탁
        55 청소용품
        56 탈취/방향/살충
        57 건강/의료용품
        58 욕실 용품
        59 생활전기용품
        60 수납/정리
        61 생활잡화
    62 홈인테리어
        63 홈데코
        64 가구
        65 수납/정리
        66 침구
        67 커튼/블라인드
        68 카페트/쿠션/거실화
        69 수예/수선
        70 욕실용품
        71 조명/스탠드
        72 원예/가드닝
    73 가전디지털
        74 TV/영상가전
        75 냉장고
        76 세탁기/건조기
        77 청소기
        78 계전가전
        79 이미용가전
        80 건강가전
        81 주방가전
        82 노트북
        83 데스크탑
        84 모니터
        85 키보드 마우스
        86 저장장치
        87 프린터/복합기
        88 PC부품
    89 스포츠/레저
        90 캠핑
        91 홈트레이닝
        92 수영/수상스포츠
        93 골프
        94 자전거
        95 킥보드/스케이트
        96 낚시
        97 등산/아웃도어
        98 스포츠신발
        99 남성스포츠의류
        100 여성스포츠의류
        101 유아스포츠의류
        102 스포츠잡화
        103 구기스포츠
        104 라켓스포츠
        105 헬스/요가/댄스
    106 도서/음반/DVD
        107 유아/어린이
        108 소설/에세이/사
        109 초중고참고서
        110 가정 살림
        111 건강 취미
        112 경재 경영
        113 과학/공학
        114 국어/외국어/사전
        115 대학교재
        116 만화/라이트노벨
        117 사회 정치
        118 수험서/자격증
        119 여행
        120 역사
        121 예술
        122 인문
    123 반려동물용품
        124 강아지 사료/용품
        125 고양이 사료 용품
        126 관상어 용품
        127 소동물/가축용품
*/

const CategoryPage = () => {

    const [l, setL] = useState();
    const [d, setD] = useState({name: "", path: ""});

    const setLink = (c, path) => {
        var a = `star=${c}`;
        var c = ""
        if(location.search.includes(`${path}=`)){
            if(location.search.includes('&')){
                var b = location.search.split('&');
                for(var i = 0; i < b.length; i++){
                    console.log(b[i]);
                    if(b[i].includes(`${path}=`)){
                        b[i]+=`,${c}`;
                    }
                    c += b[i];
                }
                location.search = c;
            }
            else{
            setL(`,${c}`);
            }
        }
        else if(location.search === ""){
            setL(`?${a}`);
            console.log(l);
        }
        else{
            setL(`&${a}`);
            console.log(l);
        }
    }

    const Del = (c, path) => {
        var a;
        if(location.search.includes(`&${path}=${c}`)){
            if(location.search.includes(`&${path}=${c},`)){
                a = location.search.replace(`${c},`,""); 
            }
            else{
                a = location.search.replace(`&${path}=${c}`,""); 
            }   
        }
        else if(location.search.includes(`${path}=${c},`)){
            a = location.search.replace(`${c},`,""); 
        }
        else if(location.search.includes(`,${c}`)){
            a = location.search.replace(`,${c}`,""); 
        }
        else if(location.search.includes(`${c}&`)){
            a = location.search.replace(`${c}`,""); 
        }
        else{
            a = location.search.replace(`&${path}=${c}`,"");
            a = location.search.replace(`?${path}=${c}`,"");
            a = a.replace(`${path}=${c}`,"");
        }

        history.push(location.pathname + a);
    }


    let history = useHistory();
    const match = useRouteMatch();
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
            <>
            {c <= 6 ? 
            <S.CatagoryDiv>
                <S.CaTittle>색상</S.CaTittle>
                <Select lists={clist} path={path}/>
                {list.length > 6 && clist.length <= 6 ? <S.More onClick={() => setClist([...list])}>+더보기</S.More> : <S.More onClick={() => setClist(list.slice(0, 5))}>-닫기</S.More>}
            </S.CatagoryDiv>
            :<></>
            }
            </>
        )

    }
   
    const Season = () => {
        const list = [{name:"사계절용", link:"four"}, {name:"봄/가을용", link:"spfa"}, {name:"여름용", link: "summer"}, {name:"겨울용", link:"winter"}];
        const path = "season"
        return(
            <>
            {c <= 6 ? 
            <S.CatagoryDiv>
                <S.CaTittle>사용계절</S.CaTittle>
                <Select lists={list} path={path}/>
            </S.CatagoryDiv>
            : <></>
            }
            </>
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

        const SetStar = () => {

        }

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

        const SetPrice = ({highest, lowest}) => { 
            if(highest){
            setLink("heighest", highest);
            }
            if(lowest){
            setLink("lowest", lowest);
            }
        }

        return(
            <S.CatagoryDiv>
                <S.CaTittle>가격</S.CaTittle>
                <S.Box onClick={()=>SetPrice({highest: "", lowest: 7000})}>7천원 이하</S.Box>
                <S.Box onClick={()=>SetPrice({highest: 7000, lowest: 14000})}>7천원~1만 4천원</S.Box>
                <S.Box onClick={()=>SetPrice({highest: 14000, lowest: 28000})}>1만 4천원~2만 8천원</S.Box>
                <S.Box onClick={()=>SetPrice({highest: 28000, lowest: ""})}>2만 8천원 이상</S.Box>
                <S.PriceDiv>
                <S.PriceInput onChange={onChange} name="lowest" value={price.lowest}></S.PriceInput>~
                <S.PriceInput onChange={onChange} name="highest" value={price.highest}></S.PriceInput>원
                <Link to={{search:`lowest=${price.lowest}&highest=${price.highest}`}}>
                <S.PriceButton onClick={()=>SetPrice({highest: price.highest, lowest: price.lowest})}>검색</S.PriceButton>
                </Link>
                </S.PriceDiv>
            </S.CatagoryDiv>
        )
    }
        
    const Caffein = () => {
        const list = [{name:"카페인"},{name: "무카페인"}];
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
    
    const Language = () => {
        const list = [{name: "한국어"},{name: "영어"},{name: "일본어"},{name: "중국어"},{name: "독일어"},{name: "프랑스어"},{name: "스페인어"},{name: "이탈리어어"},{name: "러시아어"},{name: "증동/아랍어"}]
        return(
            <>
            {c === 116 || c === 117 || c === 125 ?  
            <S.CatagoryDiv>
                <S.CaTittle>언어</S.CaTittle>
                <Select lists={list}/>
            </S.CatagoryDiv>:
            <></>
            }
            </>
        )
    }
    
    const ShapeOfBook = () => {
        const list = [{name:"양장"},{name:"반양장"},{name:"페이퍼북"},{name:"보드북"},{name:"문고판"},{name:"큰글씨"},{name:"오디오북"}];
        return(
            <>
            {c >= 115 && c <= 131 ?
            <S.CatagoryDiv>
                <span>도서형태</span>
                <Select lists={list}/>
            </S.CatagoryDiv> :
            <></>
            }
            </>
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
    }

    const Subject = () => {
        const list = [{name: "국어"},{name: "수학"},{name: "영어"},{name: "사회"},{name: "역사"},{name: "과학"},{name: "한자/한문"},{name: "예체능"},{name: "제2외국어"},{name: "논술/작문"},{name: "전과목"}];
        return(
            <>
            {c === 118?
            <S.CatagoryDiv>
                <S.CaTittle>과목</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv> :
            <></>
            }
            </>
        )
    }

    const useGrade = () => {
        const list = [{name: "초등1학년" , link: ""},{name: "초등2학년" , link: ""},{name: "초등3학년", link: ""},{name: "초등4학년", link: ""},{name: "초등5학년"},{name: "초등6학년"},{name: "중등1학년"},{name: "중등2학년"},{name: "중등3학년"},{name: "고등학생"}];
        return(
            <>
            {c === 118 ?
            <S.CatagoryDiv>
                <S.CaTittle>사용학년</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv> :
            <></>
            }
            </>
        )
    }

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

    const KindofLanguageTest = () => {
        const list = [{name: "TOEIC"},{name: "TEPS"},{name: "TOFLE"},{name: "NEAT"},{name: "TOSEL"},{name: "SAT"},{name: "GRE"},{name: "G-TELP"},{name: "IELTS"},{name: "PELT"},{name: "OPIc"},{name: "JLPT"},{name: "HSK"},{name: "한자능력검정"}];
        return(
            <>
            {c === 123 ?
            <S.CatagoryDiv>
                <S.CaTittle>유기농/친환경 등</S.CaTittle>
                <Select lists={list}></Select>
            </S.CatagoryDiv> :
            <></>
            }
            </>
        )
    }

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

    }

    const Cata = () => {
        return(
            <>
            {catagory ?
            <S.CatagoryDiv>
                <S.CaTittle>카테고리</S.CaTittle>
                <Catagory lists={catagory}></Catagory>
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

    const SetD = () => {
        if(c >= 1 && c <=5){
            setD({name: "패션의류/잡화", path: 1});
            setCatagory([{name: "의류" ,link: 2},
            {name:"속옷/잠옷", link: 3},
            {name:"신발", link: 4},
            {name:"가방/잡화", link: 5}]);

        }
        else if(c >= 6 && c <= 19){
            setD({name: "뷰티", path: 6});
            
        }
        else if(c >= 20 && c <= 33){
            setD({name: "식품", path: 20});
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
        }
        else if(c >= 34 && c <= 47){
            setD({name: "주방용품", path: 34});
            setCatagory([{name: "주방가전" ,link: 1},
            {name:"냄비/프라이팬" ,link: 1},
            {name:"칼/도마" ,link: 1},
            {name:"주방조리도구" ,link: 1},
            {name:"그릇/홈세트" ,link: 1},
            {name:"수저/커트러리" ,link: 1},
            {name:"컵/잔/텀블러" ,link: 1},
            {name:"밀폐저장/도시락" ,link: 1},
            {name:"주방잡화" ,link: 1},
            {name:"일회용품/종이컵" ,link: 1},
            {name:"보온/보냉용품" ,link: 1},
            {name:"이유/유아식기" ,link: 1},
            {name:"베이킹용품" ,link: 1},
            {name:"교자상/제수용품", link: 1}]);
        }
        else if(c >= 48 && c <= 61){
            setD({name: "생활용품", path: 48});
            setCatagory([{name: "헤어/바디/세안", link: 1},
            {name: "구강/면도", link: 1},
            {name: "화장지/물티슈", link: 1},
            {name: "생리대/기저귀", link: 1},
            {name: "세탁세제", link: 1},
            {name: "청소/주방세제", link: 1},
            {name: "틸취/방향/살충", link: 1},
            {name: "건강/의료용품", link: 1},
            {name: "욕실용품", link: 1},
            {name: "생활전기용품", link: 1},
            {name: "수납", link: 1},
            {name: "생활잡화", link: 1},
            {name: "공구/철물/DIY", link: 1},
            {name: "안전/호신용품", link: 1}]);
        }
        else if(c >= 62 && c <=72){
            setD({name: "홈인테리어", path: 62 });
        }
        else if(c >= 73 && c <= 88){
            setD({name: "가전디지털", path: 73});
            setCatagory([{name: "TV/영상가전" ,link: 1}, 
            {name:"냉장고" ,link: 1}, 
            {name:"세탁기/건조기" ,link: 1},
            {name:"생활가전" ,link: 1}, 
            {name:"이미용가전" ,link: 1}, 
            {name:"건강가전" ,link: 1}, 
            {name:"노트북" ,link: 1},
            {name:"데스크탑" ,link: 1}, 
            {name:"모니터" ,link: 1}, 
            {name:"PC주변기기" ,link: 1}, 
            {name:"PC부품" ,link: 1},
            {name:"휴대폰" ,link: 1},
            {name:"태블릿PC" ,link: 1}, 
            {name:"스마트워치/밴드" ,link: 1},
            {name:"음향기기" ,link: 1},
            {name:"게임" ,link: 1}, 
            {name:"카메라" ,link: 1}, 
            {name:"전동킥보드/자전거" ,link: 1},
            {name:"차량용 디지털" ,link: 1}]);
        }
        else if(c >= 89 && c <= 105){
            setD({name: "스포츠/레저", path: 89});
            setCatagory([{name: "캠핑" ,link: 1},
            {name:"홈트레이닝" ,link: 1},
            {name:"수영/수상스포츠" ,link: 1},
            {name:"골프" ,link: 1},
            {name:"자전거" ,link: 1},
            {name:"킥보드/스케이트" ,link: 1},
            {name:"낚시" ,link: 1},
            {name:"등산/아웃도어" ,link: 1},
            {name:"스포츠신발" ,link: 1},
            {name:"남성스포츠의류" ,link: 1},
            {name:"여성스포츠의류" ,link: 1},
            {name:"유아스포츠의류" ,link: 1}, 
            {name:"스포츠잡화" ,link: 1},
            {name:"구기스포츠" ,link: 1},
            {name:"라켓스포츠" ,link: 1}, 
            {name:"헬스/요가/댄스" ,link: 1},
            {name:"복싱/검도/태권도" ,link: 1}, 
            {name:"학교 체육 준비" ,link: 1}, 
            {name:"기타스포츠" ,link: 1},
            {name:"스키/겨울스포츠", link: 1}]);
        }
        else if(c >= 106 && c <= 122){
            setD({name: "도서/음반/DVD", path: 106});
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
        }
        else if(c >= 123 && c <= 127){
            setD({name: "반려동물용품", path: 123});
            setCatagory([{name: "강아지" , linke: 1}, 
            {name: "고양이",link: 1}, 
            {name: "관상어" ,link: 1}, 
            {name: "소동물/가축용품" ,link: 1}]);
        }   
    }

    const setC = () => {
        if(location.search.includes(`lowest`)){
            setList(list.filter(query.lowest <= list.price));
        }
        if(location.search.includes(`highest`)){
            setList(list.filter(query.highest >= list.price));
        }
        if(location.search.includes(`star`)){
            var s = [];
            for(var i = 0; i < list.length; i++){
                if(list[i].star >= query.star){
                    s = [...s,list[i]];
                }
            }
            setList(s);
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
    {id: 1, name: "1", price: 100, star: 1, img: A, brand: "samsung", sell: 50, catagory: 1, review: 100},
    {id: 1, name: "1", price: 10, star: 2, img: B, brand: "a", sell: 100 ,catagory: 1, review: 100},
    {id: 1, name: "1", price: 5, star: 3, img: C, brand: "a", sell: 200, catagory: 2, review: 100},
    {id: 1, name: "1", price: 6, star: 4, img: D, brand: "a", sell: 300, catagory: 3, review: 100},
    {id: 1, name: "1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
    {id: 1, name: "1", price: 18, star: 6, img: B, brand: "a", sell: 500, catagory: 1, review: 100}
]);
    const [p, setP] = useState(location.search.slice(2, location.search.length));
    const [option, setOption] = useState(1);
    const query = queryString.parse(location.search);
    const [catagory, setCatagory] = useState([]);
    const c = Number(params.catagory);

    const[page, setPage] = useState([1,2,3]);

    const setO = (n) => {
        setOption(n);
        var s = list;
        if(option === 1){ //별점순
            s.sort(function(a, b){
                return b.star - a.star;
            });
        }
        else if(option === 2){ //낮은 가격순
            s.sort(function(a, b){
                return b.price + a.price;
            });
        }
        else if(option === 3){ // 높은 가격순
            s.sort(function(a, b){
                return b.price - a.price;
            });
            
        }
        else if(option === 4){ //판매량
            s.sort(function(a, b){
                return b.sell - a.sell;
            });
        }
        setList(s);
    }

    useEffect(()=>{
        console.log(query);
        console.dir(params.catagory);
        console.dir(match);
        console.dir(location);
        SetP(params.catagory);
        setC();
        setO(1);
        SetD();
    },[]);

    return(
        <>
        <S.OrderDiv>
            <S.OrderSpan onClick={()=>history.push('/catagory')}>전체</S.OrderSpan>
            <S.OrderSpan onClick={()=>history.push(`/catagory/${d.path}`)}>{d.name}</S.OrderSpan>
            <SetPath/>
        </S.OrderDiv>
        <S.C>
            <S.Select>
                <Dilivery />
                <Star />
                <Price />
                <Cata />
                <Color />
                <Olganic />
                <Caffein />
                <Season />
                <Subject />
                <useGrade />
                <KindofLanguageTest />
                <Language />
                <ShapeOfBook />
            </S.Select>
            <S.CBox>
                {query.search ?
                <h3>'{query.search}'에 대한 검색결과</h3> : <></> }
                <S.Order>
                    <S.Cli color={option === 1 ? "royalblue" : "black"} onClick={()=>setO(1)}>별점순</S.Cli>
                    <S.Cli color={option === 2 ? "royalblue" : "black"} onClick={()=>setO(2)}>낮은 가격순</S.Cli>
                    <S.Cli color={option === 3 ? "royalblue" : "black"} onClick={()=>setO(3)}>높은 가격순</S.Cli>
                    <S.Cli color={option === 4 ? "royalblue" : "black"} onClick={()=>setO(4)}>판매량</S.Cli>
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
            <Page lists={page}/>
        </S.Next>
        </>
    )
}

export default CategoryPage