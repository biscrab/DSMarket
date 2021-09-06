import React,{useEffect, useState} from "react";
import { useHistory, useParams } from "react-router";
import * as S from '../styled/App'

const SetPath = () => {

    let history = useHistory();
    let params = useParams();

    const c = [
"",
"여성패션",
"남성패션",
"남녀 공용 의류",
"유아동패션",

"",
"명품뷰티",
"스킨케어",
"클렌징/필링",
"메이크업",
"향수",
"남성화장품",
"네일",
"뷰티소품",
"어린이화장품",
"로드샵",
"헤어",
"바디",
"선물세트/키트",

"",
"과일",
"견과/건과",
"채소",
"쌀/잡곡",
"축산/계란",
"수산물/건어물",
"음료",
"과자/시리얼",
"면/통조림/가공식품",
"가루/조미료/오일",
"장/소스/드레싱/식초",
"유제품/아이스크림",
"건강식품",

"",
"냄비/프라이팬",
"칼/도마",
"주방조리도구",
"그릇/홈세트",
"수저/커트러리",
"컵/잔/텀블러",
"밀폐저장/도시락",
"주방잡화",
"일회용품/종이컵",
"보온/보냉용품",
"이유/유아식기",
"베이킹용품",
"교자상/제수용품",

"",
"헤어/바디/세안",
"구강/면도",
"화장지/물티슈",
"생리대/성인기저귀",
"기저귀",
"세탁",
"청소용품",
"탈취/방향/살충",
"건강/의료용품",
"욕실 용품",
"생활전기용품",
"수납/정리",
"생활잡화",

"",
"홈데코",
"가구",
"수납/정리",
"침구",
"커튼/블라인드",
"카페트/쿠션/거실화",
"수예/수선",
"욕실용품",
"조명/스탠드",
"원예/가드닝",

"",
"TV/영상가전",
"냉장고",
"세탁기/건조기",
"청소기",
"계전가전",
"이미용가전",
"건강가전",
"주방가전",
"노트북",
"데스크탑",
"모니터",
"키보드 마우스",
"저장장치",
"프린터/복합기",
"PC부품",

"",
"캠핑",
"홈트레이닝",
"수영/수상스포츠",
"골프",
"자전거",
"킥보드/스케이트",
"낚시",
"등산/아웃도어",
"스포츠신발",
"남성스포츠의류",
"여성스포츠의류",
"유아스포츠의류",
"스포츠잡화",
"구기스포츠",
"라켓스포츠",
"헬스/요가/댄스",

"",
"유아/어린이",
"소설/에세이/사",
"초중고참고서",
"가정 살림",
"건강 취미",
"경재 경영",
"과학/공학",
"국어/외국어/사전",
"대학교재",
"만화/라이트노벨",
"사회 정치",
"수험서/자격증",
"여행",
"역사",
"예술",
"인문",

"",
"강아지 사료/용품",
"고양이 사료 용품",
"관상어 용품",
"소동물/가축용품",
]

    return(
        <S.OrderSpan onClick={()=>history.push(`/catagory/${Number(params.catagory)}`)}>{c[Number(params.catagory)-1]}</S.OrderSpan>
    )
}

export default SetPath;