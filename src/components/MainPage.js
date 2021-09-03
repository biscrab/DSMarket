import React,{useState, useEffect, useRef} from 'react'
import * as S from '../styled/App'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import Border from '../contents/Border'
import { useHistory } from 'react-router-dom'
import Recommendation from '../contents/Recommendation'

const MainPage = () => {
    var arr=[A, B, C, D];
    const [i, setI] = useState(0);

    function showImage() {
        if(i <= arr.length){
            setI(i+1);
        }
        else{
            setI(0);
        }
    }

    useEffect(()=>{
         setInterval(showImage(), 1000);
    },[])

    let history = useHistory();

    const [hover, setHover] = useState(false);
    const [value, setValue] = useState(1);

    const Sale = [{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"}];
    const Best = [{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"}];
    const New = [{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"}];;

    return(
        <>
            <S.MainBanner>
                <S.BannerImage src={arr[i]}></S.BannerImage>
                <S.CTDiv onMouseOut={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <S.CDiv>
                    <S.TotalCategory onClick={() => history.push('/catagory')}>전체 카테고리</S.TotalCategory>
                    <S.Category onMouseOut={()=>setValue(0)} onClick={() => history.push('/catagory/fashion')}><S.CSpan>브랜드패션</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(1)} onClick={() => history.push('/catagory/food')}><S.CSpan>패션의류·잡화·뷰티</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(2)} onClick={() => history.push('/catagory/food')}><S.CSpan>유아동</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(3)} onClick={() => history.push('/catagory/intelier')}><S.CSpan>식품·생필품</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(4)} onClick={() => history.push('/catagory/travel')}><S.CSpan>홈데코·문구·취미·반려</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(5)} onClick={() => history.push('/catagory/computer')}><S.CSpan>컴퓨터·디지털·가전</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(6)} onClick={() => history.push('/catagory/sport')}><S.CSpan>스포츠·건강·렌탈</S.CSpan></S.Category>
                    <S.Category onMouseOut={()=>setValue(7)} onClick={() => history.push('/catagory/car')}><S.CSpan>자동차·공구</S.CSpan></S.Category>
                </S.CDiv>
                <Border h={hover} value={value}>1</Border>
                </S.CTDiv>
            </S.MainBanner>
            <S.BestItem>
                <S.Best>최고의 인기 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={Best} />
                </S.BestDiv> 
            </S.BestItem>
        </>
    );
    /*            <S.BestItem>
                <S.Best>세일 중인 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={Sale} />
                </S.BestDiv> 
            </S.BestItem>
            <S.BestItem>
                <S.Best>새로운 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={New} />
                </S.BestDiv> 
            </S.BestItem>
             */
}

export default MainPage;