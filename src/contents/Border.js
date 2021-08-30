import React, { useState, useEffect } from 'react'
import * as S from '../styled/App'
import A from '../images/a.jpg'
import car from '../images/car.jpg'
import baby from '../images/baby.jpg'
import brand from '../images/brand.png'
import fenci from '../images/fenci.jpg'
import food from '../images/food.jpg'
import sports from '../images/sports.jpg'
import fashion from '../images/fashion.jpg'
import computer from '../images/computer.jpg'

const Border = ({h, value}) => {

    const [menu, setMenu] = useState([]);
    const [a, setA] = useState([]);

    const photo = [brand, fashion, baby, food, fenci, computer, sports, car]

    const seta = () => {
    switch(value){
        case 0:
            setA(["브랜드 여성의류", "브랜드 남성의류", "브랜드 진/캐주얼"]);
            break;
        case 1:
            setA(["여성의류", "남성의류", "언더웨어", "유아동아류"]);
            break;
        case 2:
            setA(["출산/육아", "장난감/완구", "유아동 의류", "신발/잡화"]);
            break;
        case 3:
            setA(["신선식품", "가공식품", "건강식품", "커피/음료"]);
            break;
        case 4:
            setA(["홈데코", "문구", "취미/반려"]);
            break;
        case 5:
            setA(["컴퓨터", "디지털", "가전"]);
            break;
        case 6:
            setA(["스포츠", "건강", "렌탈"]);
            break;
        default:
            setA(["자동차", "공구"])
    }
}

    const set = () => {
        switch(value){
            case 0:
                setMenu(["브랜드의류", "브랜드잡화", "스포츠브랜드"]);
                break;
            case 1:
                setMenu(["패션의류", "잡화", "뷰티"]);
                break;
            case 2:
                setMenu(["유아동"]);
                break;
            case 3:
                setMenu(["식품", "생활동"]);
                break;
            case 4:
                setMenu(["홈데코", "문구", "취미/반려"]);
                break;
            case 5:
                setMenu(["컴퓨터", "디지털", "가전"]);
                break;
            case 6:
                setMenu(["스포츠", "건강", "렌탈"]);
                break;
            default:
                setMenu(["자동차", "공구"])
        }
    }

    useEffect(()=>{
        set();
    })

    const List = ({menu}) => {
        const itemList = menu.map(
            item => (
                <span>{menu}</span>
            )
        )
        return itemList
    }

    return(
        <>
            {h === true ?
             <S.CBorder>
                 <S.BCTDiv>
                     <S.BCDiv>
                        <S.CTittle>{menu[0]}</S.CTittle>
                        <ul>

                        </ul>
                     </S.BCDiv>
                     <S.BCDiv>
                        <S.CTittle>{menu[1]}</S.CTittle>
                        <ul>
                            
                        </ul>
                     </S.BCDiv>
                     <S.BCDiv>
                        <S.CTittle>{menu[2]}</S.CTittle>
                        <ul>
                            
                        </ul>
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