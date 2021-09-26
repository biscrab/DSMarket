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


const CatagoryPage = () => {    

    let history = useHistory();
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();
    
    let sp;

    if(params.catagory){
        sp = cac[Number(params.catagory)-1];
    }

    const [list, setList] = useState([
        {id: 1, name: "상품1", price: 100, star: 1, img: A, brand: "samsung", sell: 50, catagory: 1, review: 100},
        {id: 1, name: "상품1", price: 10, star: 2, img: B, brand: "a", sell: 100 ,catagory: 1, review: 100},
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

    const changeLink = () => {

        let a = ""

        if(catagory.p){
            if(catagory.order){
                a += `?p=${catagory.p}&order=${catagory.order}`
            }
            else{
                a += `?p=${catagory.p}`
            }
        }
        else if(catagory.order){
            a += `?order=${catagory.order}`
        }

        if(catagory.search){
            a += `&search=${catagory.search}`
        }

        console.log("a:" + a);

        history.push({
            pathname: history.location.pathname,
            search: a
        })
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
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        //SetP(params.catagory);
        sCa(Number(params.catagory));
        console.log(query);
        setO(1);  
        SetPage();
            
        /*
        axios.get('백엔드 url')
            .then(response => {
                setList(response.data);
            });*/

        const data = axios.get('https://www.everdevel.com/ReactJS/axios/myDeviceData.json');
        console.log('data is ' + JSON.stringify(data)); 
    },[]);        

    const SetC = ({cata}) => {

        let abc;

        if(cata >= 1 && cata <=5){
            abc = "패션의류/잡화";
        }
        else if(cata >= 6 && cata <= 19){
            abc = "뷰티";
        }
        else if(cata >= 20 && cata  <= 33){
            abc ="주방용품"
        }
        else if(cata >= 34 && cata <= 47){
            abc = "생활용품"
        }
        else if(cata >= 48 && cata <= 58){
            abc = "홈인테리어"
        }
        else if(cata >= 59 && cata <= 78){
            abc = "가전디지털"
        }
        else if(cata >= 79 && cata <= 99){
            abc = "스포츠/레저"
        }
        else if(cata >= 100 && cata <= 116){
            abc = "도서"
        }      
        else if(cata >= 116 && cata <= 117){
            abc = "반려동물용품"
        }
        else{
            abc = "카테고리"
        }

        return(abc);
    }

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
        p: query.p,
        order: query.order,
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

    useEffect(()=>{
        changeLink();
        setO();
    },[catagory]);

    useEffect(()=>{
        if(catagory.p === undefined){
            setCatagory({...catagory, p: 1});   
            changeLink();    
        }
        if(catagory.order === undefined){
            setCatagory({...catagory, order: "latest"});
            changeLink();
        }
    })

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

    return(
        <S.CA>
        <S.OrderDiv>
            <S.OrderSpan onClick={()=>history.push('/catagory')}>전체</S.OrderSpan>
            <S.OrderSpan onClick={()=>SETP("a")}>{<SetC cata={Number(params.catagory)}/>}</S.OrderSpan>
        </S.OrderDiv>
        <SelectD />
        <S.C>
            <S.CBox>
                
                {query.search ?
                <S.SearchH>'{query.search}'에 대한 검색결과</S.SearchH> : <></> }
                {sp ? <S.CatagoryH>{sp}</S.CatagoryH> : <S.CatagoryH><SetC cata={Number(params.catagory)}/></S.CatagoryH>}
                <S.Order> 
                    <S.Cli color={query.order === "latest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"latest"})}>최신순</S.Cli>
                    <S.Cli color={query.order === "old" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"old"})}>오래된순</S.Cli>
                    <S.Cli color={query.order === "lowest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"lowest"})}>낮은 가격순</S.Cli>
                    <S.Cli color={query.order === "highest" ? "royalblue" : "black"} onClick={()=>setCatagory({...catagory, order:"highest"})}>높은 가격순</S.Cli>
                </S.Order>
                
                
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
                    <S.My>
                    <S.MyImg src={A}></S.MyImg>
                    <S.MyInfoDiv>
                        <S.MyInfo color="gray">이메일</S.MyInfo>
                        <S.MyInfo>이름</S.MyInfo>
                    </S.MyInfoDiv>
                    </S.My>
                    <S.OtherTittle>회원님만을 위한 추천</S.OtherTittle>
                    <S.OtherUl>
                        
                    </S.OtherUl>
                </S.MyDiv>

                </S.Border>
                

            </S.CBox>   
        </S.C>
        </S.CA>
    )
}

export default CatagoryPage

/*        {1 === 0 ?
        <></>:
        <S.Next>
            {catagory.p >= 2 ?
            <S.Pbutton onClick={()=>prev()}>{'<'}</S.Pbutton>
            : <S.Pbutton onClick={()=>prev()} color="#eeeeee">{'<'}</S.Pbutton>}
            {page.map(i => {
                return(
                <Page item={i}/>
                );
            })}
            {Number(catagory.p) < rlist.length ?
                <S.Pbutton onClick={()=>next()} >{'>'}</S.Pbutton> 
                : <S.Pbutton onClick={()=>next()} color="#eeeeee">{'>'}</S.Pbutton>
            }
        </S.Next>
        } */

/*        useEffect(()=>{

        if(Number(params.catagory) >= 1 && Number(params.catagory) <=5){
            setD([{name: "여성패션", path: 2},
            {name:"남성패션", path: 3},
            {name:"남녀 공용 의류", path: 4},
            {name:"유아동패션", path: 5}]);

        }
        else if(Number(params.catagory) >= 6 && Number(params.catagory) <= 19){
            setD([{name: "명품뷰티", path: 7},
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
        else if(Number(params.catagory) >= 20 && Number(params.catagory)  <= 33){
            setD([{name:"냄비/프라이팬" ,path: 21},
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
        else if(Number(params.catagory) >= 34 && Number(params.catagory) <= 47){
            setD([{name: "헤어/바디/세안", path: 35},
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
            {name: "생활잡화", path: 47}]);
        }
        else if(Number(params.catagory) >= 48 && Number(params.catagory) <= 58){
            setD([{path: 49, name: "홈데코"},
            {path: 50, name: "가구"},
            {path: 51, name: "수납/정리"},
            {path: 52, name: "침구"},
            {path: 53, name: "커튼/블라인드"},
            {path: 54, name: "카페트/쿠션/거실화"},
            {path: 55, name: "수예/수선"},
            {path: 56, name: "욕실용품"},
            {path: 57, name: "조명/스탠드"},
            {path: 58, name: "원예/가드닝"}
            ]);
        }
        else if(Number(params.catagory) >= 59 && Number(params.catagory) <= 78){
            setD([{name: "TV/영상가전" ,path: 60}, 
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
            {name:"PC부품/주변기기" ,path: 72},
            {name:"휴대폰" ,path: 73},
            {name:"태블릿PC" ,path: 74}, 
            {name:"스마트워치/밴드" ,path: 75},
            {name:"음향기기" ,path: 76},
            {name:"게임콘솔" ,path: 77}, 
            {name:"카메라" ,path: 78}, 
            {name:"차량용 디지털" ,path: 79}]);
        }
        else if(Number(params.catagory) >= 80 && Number(params.catagory) <= 99){
            setD([{name: "캠핑" ,path: 81},
            {name:"홈트레이닝" ,path: 82},
            {name:"수영/수상스포츠" ,path: 83},
            {name:"골프" ,path: 84},
            {name:"자전거" ,path: 85},
            {name:"킥보드/스케이트" ,path: 86},
            {name:"낚시" ,path: 87},
            {name:"등산/아웃도어" ,path: 88},
            {name:"스포츠신발" ,path: 89},
            {name:"남성스포츠의류" ,path: 90},
            {name:"여성스포츠의류" ,path: 91},
            {name:"유아스포츠의류" ,path: 92}, 
            {name:"스포츠잡화" ,path: 93},
            {name:"구기스포츠" ,path: 94},
            {name:"라켓스포츠" ,path: 95}, 
            {name:"헬스/요가/댄스" ,path: 96},
            {name:"복싱/검도/태권도" ,path: 97}, 
            {name:"기타스포츠" ,path: 98},
            {name:"스키/겨울스포츠", path: 99}]);
        }
        else if(Number(params.catagory) >= 100 && Number(params.catagory) <= 116){
            setD([{name: "유아/어린이", path: 101},
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
            {name: "인문", path: 116}]);
        }      
        else if(Number(params.catagory) >= 116 && Number(params.catagory) <= 117){
            setD([{name: "강아지 사료/용품" , path: 119}, 
            {name: "고양이 사료/용품",path: 120}, 
            {name: "관상어 용품" ,path: 121}, 
            {name: "소동물/가축용품" ,path: 122}]);
        }
        else{
            setD([{name: "패션의류/잡화", path: 1},
                {name: "뷰티", path: 6},
                {name: "주방용품", path: 20},
                {name: "생활용품", path: 34},
                {name: "홈인테리어", path: 48},
                {name: "가전디지털", path: 59},
                {name: "스포츠/레저", path: 80},
                {name: "도서", path: 100},
                {name: "반려동물용품", path: 117}]);
        }
    }); */
        

    /*    const SetD = () => {

        const [d, setD] = useState([]);
        
        return(
        <>
        {d.map(i => {
            return(
            <S.OrderSpan i={i} name={i.name} path={i.path} onClick={()=>history.push(`/catagory/${i.path}?p=1&order=latest`)}>{i.name}</S.OrderSpan>
            );
        })}
        </>
        )
    } */