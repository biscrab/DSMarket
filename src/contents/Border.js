import React, { useState, useEffect } from 'react'
import * as S from '../styled/App'
import A from '../images/a.jpg'
import car from '../images/car.jpg'
import brand from '../images/brand.png'
import fenci from '../images/fenci.jpg'
import food from '../images/food.jpg'
import sports from '../images/sports.jpg'
import fashion from '../images/fashion.jpg'
import computer from '../images/computer.jpg'
import kitchen from '../images/kitchen.jpg'
import life from '../images/life.jpg'
import BorderCatagroy  from '../contents/BorderCatagory'

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

const Border = ({h, value}) => {

    const [menu, setMenu] = useState([1,2,3]);
    const [a, setA] = useState([]);
    const [b, setB] = useState([]);
    const [c, setC] = useState([]);

    const photo = [brand, fashion, food, kitchen, life, fenci, computer, sports, car]

    const set = () => {
        switch(value){
            case 1:
                setMenu(["패션","뷰티","기타"]);
                setA([{name: "여성 패션", path: 1},{name: "남성 패션", path: 1},{name: "남녀 공용 의류", path: 1},{name: "유아동패션", path: 1}]);
                setB([{name: "명품뷰티", path: 1},{name: "스킨케어", path: 1},{name: "클렌징/필링", path: 1},{name: "메이크업", path: 1},{name: "향수", path: 1},{name: "네일", path: 1},{name: "뷰티소품", path: 1},{name: "헤어", path: 1},{name: "바디", path: 1}]);
                setC([{name: "남성화장품", path: 1},{name: "어린이화장품", path: 1},{name: "로드샵", path: 1},{name: "선물세트/키트", path: 1}]);
                break;
            case 2:
                setMenu(["과일/견과","축산물","기타.가공식품"]);
                setA([
                    {name: "과일", path: 1},
                    {name: "견과/건과", path: 1},
                    {name: "채소", path: 1},
                    {name: "쌀/잡곡", path: 1},
                    {name: "음료", path: 1}]);


                setB([{name: "축산/계란", path: 1},{name: "수산물/건어물", path: 1}]);
                setC([{name: "과자/시리얼", path: 1},
                    {name: "면/통조림/가공식품", path: 1},
                    {name: "가루/조미료/오일", path: 1},
                    {name: "장/소스/드레싱/식초", path: 1},
                    {name: "유제품/아이스크림", path: 1},
                    {name: "건강식품", path: 1}]);
                break;
            case 3:
                setMenu(["식기","조리도구","기타"]);
                setA([{name: "그릇/홈세트", path: 1},{name: "수저/커트러리", path: 1},{name: "컵/잔/텀블러", path: 1},{name: "밀폐저장/도시락", path: 1},,{name: "보온/보냉용품", path: 1},,{name: "이유/유아식기", path: 1}]);
                setB([{name: "냄비/프라이팬", path: 1},{name: "칼/도마", path: 1},{name: "주방조리도구", path: 1},{name: "베이킹용품", path: 1}]);
                setC([{name: "일회용품/종이컵", path: 1}],[{name: "주방잡화", path: 1},{name: "교자상/제수용품", path: 1}]);
                break;
            case 4:
                setMenu(["식기","조리도구","기타"]);
                setA([{name: "헤어/바디/세안", path: 1},{name: "구강/면도", path: 1},{name: "화장지/물티슈", path: 1},{name: "생리대/성인기저귀", path: 1},{name: "기저귀", path: 1},{name: "세탁", path: 1},{name: "청소용품", path: 1},{name: "탈취/방향/살충", path: 1},{name: "건강/의료용품", path: 1},{name: "욕실 용품", path: 1},{name: "생활전기용품", path: 1},{name: "수납/정리", path: 1},{name: "생활잡화", path: ""}]);
                break;
            case 5:
                setMenu(["식기","조리도구","기타"]);
                setA([]);
                setB([{name: "TV/영상가전", path: 1},{name: "냉장고", path: 1},{name: "세탁기/건조기", path: 1},{name: "청소기", path: 1},{name: "계전가전", path: 1},{name: "이미용가전", path: 1},{name: "건강가전", path: 1},{name: "주방가전", path: 1},{name: "노트북", path: 1},{name: "데스크탑", path: 1},{name: "모니터", path: 1},{name: "키보드 마우스", path: 1},{name: "저장장치", path: 1},{name: "프린터/복합기", path: 1},{name: "PC부품", path: ""}]);
                setC([]);
                break;
            default :
                /*
            case 6:
                setMenu(["스포츠", "건강", "렌탈"],[],[]);
                break;
            default:
                setMenu(["강아지 사료/용품"],["고양이 사료/용품"],["관상어 용품", "소동물/가축용품"])/*/
        }
    }

    useEffect(()=>{
        set();
    })

    return(
        <>
            {h === true ?
             <S.CBorder>
                 <S.BCTDiv>
                     <S.BCDiv>
                        <S.CTittle>{menu[0]}</S.CTittle>
                        <S.CatagoryDivUl>
                            {a ? 
                            <BorderCatagroy lists={a}/>
                            :<></>}
                        </S.CatagoryDivUl>
                     </S.BCDiv>
                     <S.BCDiv>
                        <S.CTittle>{menu[1]}</S.CTittle>
                        <S.CatagoryDivUl>
                            {b ? 
                            <BorderCatagroy lists={b}/>
                            :<></>}
                        </S.CatagoryDivUl>
                     </S.BCDiv>
                     <S.BCDiv>
                        <S.CTittle>{menu[2]}</S.CTittle>
                        <S.CatagoryDivUl>
                            {c ? 
                            <BorderCatagroy lists={c}/>
                            :<></>}
                        </S.CatagoryDivUl>
                     </S.BCDiv>
                     <S.Ad>
                        <S.BImg src={photo[value]}></S.BImg>
                        <S.ATittle>제목</S.ATittle>
                        <S.AExplane>설명</S.AExplane>
                     </S.Ad>
                 </S.BCTDiv>
                 <S.Quick>
                     <S.Qtext>바로가기{">"}</S.Qtext>
                 </S.Quick>
             </S.CBorder> 
            :
            <></> 
            }
        </>
    )
}

export default Border