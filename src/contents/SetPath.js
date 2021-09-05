import React,{useState} from "react";
import { useHistory } from "react-router";
import * as S from '../styled/App'

const SetPath = (n) => {

    let history = useHistory();

    const [c, setC] = useState();
    switch(n){
case 2:
setC("여성패션");
break;

case 3:
setC("남성패션");
break;

case 4:
setC("남녀 공용 의류");
break;

case 5:
setC("유아동패션");
break;

case 7:
setC("명품뷰티");
break;

case 8:
setC("스킨케어");
break;

case 9:
setC("클렌징/필링");
break;

case 10:
setC("메이크업");
break;

case 11:
setC("향수");
break;

case 12:
setC("남성화장품");
break;

case 13:
setC("네일");
break;

case 14:
setC("뷰티소품");
break;

case 15:
setC("어린이화장품");
break;

case 16:
setC("로드샵");
break;

case 17:
setC("헤어");
break;

case 18:
setC("바디");
break;

case 19:
setC("선물세트/키트");
break;

case 21:
setC("과일");
break;

case 22:
setC("견과/건과");
break;

case 23:
setC("채소");
break;

case 24:
setC("쌀/잡곡");
break;

case 25:
setC("축산/계란");
break;

case 26:
setC("수산물/건어물");
break;

case 27:
setC("음료");
break;

case 28:
setC("과자/시리얼");
break;

case 29:
setC("면/통조림/가공식품");
break;

case 30:
setC("가루/조미료/오일");
break;

case 31:
setC("장/소스/드레싱/식초");
break;

case 32:
setC("유제품/아이스크림");
break;

case 33:
setC("건강식품");
break;

case 35:
setC("냄비/프라이팬");
break;

case 36:
setC("칼/도마");
break;

case 37:
setC("주방조리도구");
break;

case 38:
setC("그릇/홈세트");
break;

case 39:
setC("수저/커트러리");
break;

case 40:
setC("컵/잔/텀블러");
break;

case 41:
setC("밀폐저장/도시락");
break;

case 42:
setC("주방잡화");
break;

case 43:
setC("일회용품/종이컵");
break;

case 44:
setC("보온/보냉용품");
break;

case 45:
setC("이유/유아식기");
break;

case 46:
setC("베이킹용품");
break;

case 47:
setC("교자상/제수용품");
break;

case 49:
setC("헤어/바디/세안");
break;

case 50:
setC("구강/면도");
break;

case 51:
setC("화장지/물티슈");
break;

case 52:
setC("생리대/성인기저귀");
break;

case 53:
setC("기저귀");
break;

case 54:
setC("세탁");
break;

case 55:
setC("청소용품");
break;

case 56:
setC("탈취/방향/살충");
break;

case 57:
setC("건강/의료용품");
break;

case 58:
setC("욕실 용품");
break;

case 59:
setC("생활전기용품");
break;

case 60:
setC("수납/정리");
break;

case 61:
setC("생활잡화");
break;

case 63:
setC("홈데코");
break;

case 64:
setC("가구");
break;

case 65:
setC("수납/정리");
break;

case 66:
setC("침구");
break;

case 67:
setC("커튼/블라인드");
break;

case 68:
setC("카페트/쿠션/거실화");
break;

case 69:
setC("수예/수선");
break;

case 70:
setC("욕실용품");
break;

case 71:
setC("조명/스탠드");
break;

case 72:
setC("원예/가드닝");
break;

case 74:
setC("TV/영상가전");
break;

case 75:
setC("냉장고");
break;

case 76:
setC("세탁기/건조기");
break;

case 77:
setC("청소기");
break;

case 78:
setC("계전가전");
break;

case 79:
setC("이미용가전");
break;

case 80:
setC("건강가전");
break;

case 81:
setC("주방가전");
break;

case 82:
setC("노트북");
break;

case 83:
setC("데스크탑");
break;

case 84:
setC("모니터");
break;

case 85:
setC("키보드 마우스");
break;

case 86:
setC("저장장치");
break;

case 87:
setC("프린터/복합기");
break;

case 88:
setC("PC부품");
break;

case 90:
setC("캠핑");
break;

case 91:
setC("홈트레이닝");
break;

case 92:
setC("수영/수상스포츠");
break;

case 93:
setC("골프");
break;

case 94:
setC("자전거");
break;

case 95:
setC("킥보드/스케이트");
break;

case 96:
setC("낚시");
break;

case 97:
setC("등산/아웃도어");
break;

case 98:
setC("스포츠신발");
break;

case 99:
setC("남성스포츠의류");
break;

case 100:
setC("여성스포츠의류");
break;

case 101:
setC("유아스포츠의류");
break;

case 102:
setC("스포츠잡화");
break;

case 103:
setC("구기스포츠");
break;

case 104:
setC("라켓스포츠");
break;

case 105:
setC("헬스/요가/댄스");
break;

case 107:
setC("유아/어린이");
break;

case 108:
setC("소설/에세이/사");
break;

case 109:
setC("초중고참고서");
break;

case 110:
setC("가정 살림");
break;

case 111:
setC("건강 취미");
break;

case 112:
setC("경재 경영");
break;

case 113:
setC("과학/공학");
break;

case 114:
setC("국어/외국어/사전");
break;

case 115:
setC("대학교재");
break;

case 116:
setC("만화/라이트노벨");
break

case 117:
setC("사회 정치");
break;

case 118:
setC("수험서/자격증");
break;

case 119:
setC("여행");
break;

case 120:
setC("역사");
break;

case 121:
setC("예술");
break;

case 122:
setC("인문");
break;

case 124:
setC("강아지 사료/용품");
break;

case 125:
setC("고양이 사료 용품");
break;

case 126:
setC("관상어 용품");
break;

case 127:
setC("소동물/가축용품");
break;

default:
break;     
}

    console.log("sadasd");

    return(
        <S.OrderSpan onClick={()=>history.push(`/catagory/${n}`)}>{c}</S.OrderSpan>
    )
}

export default SetPath;