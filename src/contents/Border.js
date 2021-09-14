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

    const photo = [brand, fashion, kitchen, life, fenci, computer, sports, book, pet]

    const set = () => {
        switch(value){
            case 0:
                setMenu(["여성 패션","남성 패션","남녀 공용"]);                
                setA([{name: "여성 패션", path: 2}]);
                setB([{name: "남성 패션", path: 1}]);
                setC([{name: "유아동패션", path: 1},{name: "남녀 공용 의류", path: 1}]);
                break;
            case 1:
                setMenu(["화장품","뷰티","기타"]);
                setA([{name: "메이크업", path: 1},{name: "향수", path: 1},{name: "네일", path: 1},{name: "남성화장품", path: 1},{name: "어린이화장품", path: 1},]);
                setB([{name: "명품뷰티", path: 1},{name: "스킨케어", path: 1},{name: "클렌징/필링", path: 1},{name: "뷰티소품", path: 1},{name: "헤어", path: 1},{name: "바디", path: 1}]);
                setC([{name: "로드샵", path: 1},{name: "선물세트/키트", path: 1}]);
                break;
            case 2:
                setMenu(["식기","조리도구","기타"]);
                setA([{name: "그릇/홈세트", path: 1},{name: "수저/커트러리", path: 1},{name: "컵/잔/텀블러", path: 1},{name: "밀폐저장/도시락", path: 1},,{name: "보온/보냉용품", path: 1},,{name: "이유/유아식기", path: 1}]);
                setB([{name: "냄비/프라이팬", path: 1},{name: "칼/도마", path: 1},{name: "주방조리도구", path: 1},{name: "베이킹용품", path: 1}]);
                setC([{name: "일회용품/종이컵", path: 1}],[{name: "주방잡화", path: 1},{name: "교자상/제수용품", path: 1}]);
                break;
            case 3:
                setMenu(["청결도구","청소도구","기타"]);
                setA([{name: "헤어/바디/세안", path: 1},{name: "구강/면도", path: 1},{name: "세탁", path: 1},{name: "욕실 용품", path: 1},{name: "생활전기용품", path: 1}]);
                setB([{name: "청소용품", path: 1},{name: "화장지/물티슈", path: 1},{name: "수납/정리", path: 1},]);
                setC([{name: "생리대/성인기저귀", path: 1},{name: "기저귀", path: 1},{name: "건강/의료용품", path: 1},{name: "탈취/방향/살충", path: 1},{name: "생활잡화", path: ""}]);
                break;
            case 4:
                setMenu(["생활가전","PC","기타"]);
                setA([{name: "TV/영상가전", path: 1},{name: "냉장고", path: 1},{name: "세탁기/건조기", path: 1},{name: "청소기", path: 1}]);
                setB([{name: "노트북", path: 1},{name: "데스크탑", path: 1},{name: "모니터", path: 1},{name: "키보드 마우스", path: 1},{name: "저장장치", path: 1},{name: "프린터/복합기", path: 1},{name: "PC부품", path: 1}]);
                setC([{name: "계절가전", path: 1},{name: "이미용가전", path: 1},{name: "건강가전", path: 1},{name: "주방가전", path: 1}]);
                break;
            case 5:
                setMenu(["가구", "수납/정리", "기타"]);
                setA([]);
                setB([]);
                setC([]);
                break;
            case 6:
                setMenu(["실내스포츠", "실외스포츠", "의류"]);
                setA([{name: "헬스/요가/댄스", path: ""},{name: "복싱/검도/태권도", path: ""},]);
                setB([{name: "캠핑", path: ""},{name: "골프", path: ""},{name: "자전거", path: ""},{name: "킥보드/스케이트", path: ""},{name: "낚시", path: ""},]);
                setC([{name: "기타스포츠", path: ""},{name: "스포츠잡화", path: ""},]);
                break;
            case 7:
                setMenu([["도서","음반","DVD"]]);
                setA([]);
                setB([]);
                setC([]);
                break;
            case 8:
                setMenu(["반려동물용품", "기타", ""]);
                setA([{name: "강아지 사료/용품", path: ""},{name: "고양이 사료/용품", path: ""},]);
                setB([{name: "관상어 용품", path: ""},{name: "소동물/가축용품", path: ""}]);
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