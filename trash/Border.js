import React, { useState, useEffect } from 'react'
import * as S from '../styled/App'
import A from '../images/a.jpg'
import car from '../images/car.jpg'
import brand from '../images/brand.png'
import fenci from '../images/fenci.jpg'
import sports from '../images/sports.jpg'
import fashion from '../images/fashion.jpg'
import computer from '../images/computer.jpg'
import kitchen from '../images/kitchen.jpg'
import life from '../images/life.jpg'
import pet from '../images/pet.jpg'
import book from '../images/book.jpg'
import BorderCatagroy  from '../contents/BorderCatagory'

const Border = ({h, value}) => {

    const [menu, setMenu] = useState([1,2,3]);
    const [a, setA] = useState([]);
    const [b, setB] = useState([]);
    const [c, setC] = useState([]);

    const photo = [brand, fashion, kitchen, life, computer, fenci, sports, book, pet]

    const set = () => {
        switch(value){
            case 0:
                setMenu(["여성 패션","남성 패션","남녀 공용"]);                
                setA([{name: "여성 패션", path: 2}]);
                setB([{name: "남성 패션", path: 3}]);
                setC([{name: "유아동패션", path: 4},{name: "남녀 공용 의류", path: 5}]);
                break;
            case 1:
                setMenu(["화장품","뷰티","기타"]);
                setA([{name: "메이크업", path: 10},{name: "향수", path: 11},{name: "네일", path: 13},{name: "남성화장품", path: 12},{name: "어린이화장품", path: 15},]);
                setB([{name: "명품뷰티", path: 7},{name: "스킨케어", path: 8},{name: "클렌징/필링", path: 9},{name: "뷰티소품", path: 14},{name: "헤어", path: 17},{name: "바디", path: 18}]);
                setC([{name: "로드샵", path: 16},{name: "선물세트/키트", path: 19}]);
                break;
            case 2:
                setMenu(["식기","조리도구","기타"]);
                setA([{name: "그릇/홈세트", path: 24},{name: "수저/커트러리", path: 25},{name: "컵/잔/텀블러", path: 26},{name: "밀폐저장/도시락", path: 27},,{name: "보온/보냉용품", path: 30},,{name: "이유/유아식기", path: 31}]);
                setB([{name: "냄비/프라이팬", path: 21},{name: "칼/도마", path: 22},{name: "주방조리도구", path: 23},{name: "베이킹용품", path: 32}]);
                setC([{name: "일회용품/종이컵", path: 29}],[{name: "주방잡화", path: 28},{name: "교자상/제수용품", path: 33}]);
                break;
            case 3:
                setMenu(["청결도구","청소도구","기타"]);
                setA([{name: "헤어/바디/세안", path: 1},{name: "구강/면도", path: 1},{name: "세탁", path: 1},{name: "욕실 용품", path: 1},{name: "생활전기용품", path: 1}]);
                setB([{name: "청소용품", path: 1},{name: "화장지/물티슈", path: 1},{name: "수납/정리", path: 1},]);
                setC([{name: "생리대/성인기저귀", path: 1},{name: "기저귀", path: 1},{name: "건강/의료용품", path: 1},{name: "탈취/방향/살충", path: 1},{name: "생활잡화", path: ""}]);
                break;
            case 4:
                setMenu(["가구", "수납/정리", "기타"]);
                setA([       
                    {path: 49, name: "홈데코"},
                    {path: 50, name: "가구"},
                    {path: 52, name: "침구"},
                ]);
                setB([{path: 51, name: "수납/정리"},]);
                setC([{path: 54, name: "카페트/쿠션/거실화"},{path: 57, name: "조명/스탠드"}, {path: 58, name: "원예/가드닝"},{path: 53, name: "커튼/블라인드"},
                {path: 55, name: "수예/수선"},
                {path: 56, name: "욕실용품"},]);
            break;
            case 5:
                setMenu(["생활가전","PC","기타"]);
                setA([{name: "TV/영상가전", path: 60},{name: "냉장고", path: 61},{name: "세탁기/건조기", path: 62},{name: "청소기", path: 63}]);
                setB([{name: "노트북", path: 68},{name: "데스크탑", path: 69},{name: "저장장치", path: 70},{name: "프린터/복합기", path: 71},{name: "PC부품", path: 72}]);
                setC([{name: "계절가전", path: 64},{name: "이미용가전", path: 65},{name: "건강가전", path: 66},{name: "주방가전", path: 67}]);
                break;
            case 6:
                setMenu(["실내스포츠", "실외스포츠", "의류"]);
                setA([{name: "헬스/요가/댄스", path: ""},{name: "복싱/검도/태권도", path: ""},]);
                setB([{name: "캠핑", path: ""},{name: "골프", path: ""},{name: "자전거", path: ""},{name: "킥보드/스케이트", path: ""},{name: "낚시", path: ""},]);
                setC([{name: "기타스포츠", path: ""},{name: "스포츠잡화", path: ""},]);
                break;
            case 7:
                setMenu(["교육","교양","취미"]);
                setA([        
{path: 101, name: "유아/어린이"},
{path: 103, name: "초중고참고서"},
{path: 108, name: "국어/외국어/사전"},
{path: 109, name: "대학교재"},
{path: 112, name: "수험서/자격증"},]);
                setB([{path: 102, name: "소설/에세이/시"},{path: 104, name: "가정 살림"},{path: 106, name: "경재 경영"},{path: 107, name: "과학/공학"},{path: 111, name: "사회 정치"},{path: 113, name: "여행"},
                {path: 114, name: "역사"},
                {path: 115, name: "예술"},
                {path: 116, name: "인문"}]);
                setC([{path: 110, name: "만화/라이트노벨"},{path: 105, name: "건강 취미"}]);
                break;
            case 8:
                setMenu(["반려동물용품", "기타", ""]);
                setA([{name: "강아지 사료/용품", path: 118},{name: "고양이 사료/용품", path: 119},]);
                setB([{name: "관상어 용품", path: 120},{name: "소동물/가축용품", path: 121}]);
                setC([]);
                break;
            default :
                /*
            case 6:
                setMenu(["스포츠", "건강", "렌탈"],[],[]);
                break;
            default:
                setMenu([],[],["관상어 용품", "소동물/가축용품"])/*/
        }
    }

    useEffect(()=>{
        set();
    });

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