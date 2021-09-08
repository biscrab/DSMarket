import React,{useState} from 'react'
import * as S from '../styled/App'
import CSLi from '../contents/Csli'
import RegistOption from '../contents/RegistOption';
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
        78 계절가전
        79 이미용가전
        80 건강가전
        81 주방가전
        82 노트북
        83 데스크탑
        84 저장장치
        85 프린터/복합기
        86 PC 부품/주변기기
        87 휴대폰
        88 태블릿PC
        89 스마트워치/밴드
        90 음향기기
        91 게임콘솔
        92 카메라
        93 차량용 디지털
    94 스포츠/레저
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
        133 고양이 사료 용품
        134 관상어 용품
        135 소동물/가축용품
*/

const t = false;

const list = [{tittle: 1, a: 1, b:2}];

const RegistPage = () => {

    const [upload, setUpload] = useState(1);
    const [repre, setRepre] = useState(1);
    const [catagory, setCatagory] = useState([]);
    const [option, setOption] = useState([]);

    /*
    <S.RegistDiv>
            <p>가격</p>
            <S.Input></S.Input>
            </S.RegistDiv>
            <S.RegistDiv>
            <p>재조사</p>
            <S.Input></S.Input> 
            </S.RegistDiv>
            <p>브랜드</p>
            <S.RegistDiv>
            <S.Input></S.Input>
            <p>재고</p>
            </S.RegistDiv>
            
            <S.RegistDiv>
            <S.Input></S.Input>
            <p>검색어</p>
            </S.RegistDiv>
    */

    const SetO = (o) => {

        switch(o){
            case 1 :
                setOption([{name: "의류", path: 2},{name: "속옷/잠옷", path: 3},{name: "신발", path: 4},{name: "가방/잡화", path: 5}]);
            break;
            case 2 :
                setOption([{name: "유기농", path: 7},{name: "과일", path: 8},{name: "견과/건과", path: 9},{name: "채소", path: 10},{name: "쌀/잡곡", path: ""},{name: "축산/계란", path: ""},{name: "수산물/건어물", path: ""},{name: "생수/음료", path: ""},{name: "커피/원두/차", path: ""},{name: "과자/초콜릿/시리얼", path: ""},{name: "면/통조림/가공식품", path: ""},{name: "가루/조미료/오일", path: ""},{name: "장/소스/드레싱/식초", path: ""},{name: "유제품/아이스크림", path: ""},{name: "냉장/냉동/간편요리", path: ""},{name: "건강식품", path: ""}]);
            break;
            case 3 :
                setOption([{name: "사무용품 전문관", path: ""}, {name: "미술/화방용품", path: ""}, {name: "학용품/수업준비", path: ""},{name: "필기류", path: ""},{name: "노트/메모지", path: ""}, {name: "다이어리/플래너", path: ""}, {name: "바인더/파일", path: ""}, {name: "파티/이벤트", path: ""}, {name: "데코/포장용품", path: ""}, {name: "카드/엽서/봉투", path: ""}, {name: "앨범", path: ""}, {name: "복사용품/라벨지", path: ""},{name: "보드/칠판/광고", path: ""}],[],[]);
            break; 
            case 4 :
                setOption([{name: "유아/어린이", path: ""},{name: "소설/에세이/시", path: ""},{name:"초중고참고서", path: ""},{name: "가정 살림", path: ""},{name: "건강 취미", path: ""},{name: "경제 경영", path: ""},{name: "과학/공학", path: ""},{name: "국어/외국어/사전", path: ""},{name: "대학교재", path: ""},{name: "만화/라이트노벨", path: ""},{name: "사회 정치", path: ""},{name: "수험서/자격증", path: ""}]);
                break;
            case 5 :
                setOption([{name: "헤어/바디/세안", path: ""},{name: "구강/면도", path: ""},{name: "화장지/물티슈", path: ""},{name: "생리대/기저귀", path: ""}, {name: "세탁세제", path: ""}, {name: "청소/주방세제", path: ""}, {name: "틸취/방향/살충", path: ""}, {name: "건강/의료용품", path: ""}, {name: "욕실용품", path: ""}, {name: "생활전기용품", path: ""}, {name: "수납", path: ""}, {name: "생활잡화", path: ""}, {name: "공구/철물/DIY", path: ""}, {name: "안전/호신용품", path: ""}]);
            break;
            case 6 :
                setOption([{name: "강아지", path: ""}, {name: "고양이", path: ""}, {name: "관상어", path: ""}, {name: "소동물/가축용품", path: ""}]);
            break;
            case 7:
                setOption([{name: "TV/영상가전", path: ""},{name: "냉장고", path: ""},{name: "세탁기/건조기", path: ""},{name: "생활가전", path: ""},{name: "이미용가전", path: ""},{name: "건강가전", path: ""},{name: "노트북", path: ""},{name: "데스크탑", path: ""},{name: "모니터", path: ""},{name: "PC주변기기", path: ""},{name: "PC부품", path: ""},{name: "휴대폰", path: ""},{name: "태블릿PC", path: ""},{name: "스마트워치/밴드", path: ""},{name: "음향기기", path: ""},{name: "게임", path: ""},{name: "카메라", path: ""},{name: "전동킥보드/자전거", path: ""},{name: "차량용 디지털", path: ""}]);
            break;
            case 8 :
                setOption([{name: "캠핑", path: ""},{name: "홈트레이닝", path: ""},{name: "수영/수상스포츠", path: ""},{name: "골프", path: ""},{name: "자전거", path: ""},{name: "킥보드/스케이트", path: ""},{name: "낚시", path: ""},{name: "등산/아웃도어", path: ""},{name: "스포츠신발", path: ""},{name: "남성스포츠의류", path: ""},{name: "여성스포츠의류", path: ""},{name: "유아스포츠의류", path: ""},{name: "스포츠잡화", path: ""},{name: "구기스포츠", path: ""},{name: "라켓스포츠", path: ""},{name: "헬스/요가/댄스", path: ""},{name: "복싱/검도/태권도", path: ""},{name: "학교 체육 준비", path: ""},{name: "기타스포츠", path: ""},{name: "스키/겨울스포츠", path: ""}]);
            break;
            case 9: 
                setOption([{name: "신생아/영아완구", path: ""},{name: "로봇/작동완구", path: ""},{name: "역할놀이", path: ""},{name: "블록놀이", path: ""},{name: "인형", path: ""},{name: "물놀이/계절완구", path: ""},{name: "승용완구", path: ""},{name: "실내대형완구", path: ""},{name: "STEAM완구", path: ""},{name: "학습완구/교구", path: ""},{name: "보드게임", path: ""},{name: "RC완구/부품", path: ""},{name: "퍼즐/큐브/피젯토이", path: ""},{name: "프라모델", path: ""},{name: "피규어/다이캐스트", path: ""},{name: "콘솔/휴대용 게임기", path: ""},{name:  "파티/마술용품", path: ""}, {name: "DIY", path: ""}, {name: "악기/음향기기", path: ""}, {name: "원예/가드닝", path: ""}, {name: "수집품", path: ""}, {name: "키덜트샵", path: ""}]);
            break;
            case 10:
                setOption([{name: "주방가전" ,path: ""},{name: "냄비/프라이팬" ,path: ""},{name: "칼/도마" ,path: ""},{name: "주방조리도구" ,path: ""},{name: "그릇/홈세트" ,path: ""},{name: "수저/커트러리" ,path: ""},{name: "컵/잔/텀블러" ,path: ""},{name: "밀폐저장/도시락" ,path: ""},{name: "주방잡화" ,path: ""},{name: "일회용품/종이컵" ,path: ""},{name: "보온/보냉용품" ,path: ""},{name: "이유/유아식기" ,path: ""},{name: "베이킹용품" ,path: ""},{name: "교자상/제수용품", path: ""}]);
            break;
            default :
            
            break;
        }
    }

    const SetC = (c) => {
        switch(c){
            case 0:
                setCatagory([{name: "여성패션" , path: 2},{name: "남성패션" , path: 3},{name: "남녀 공용 의류" , path: 4},{name: "유아동패션" , path: 5}])
            break;
            case 1:
                setCatagory([{name: "명품뷰티", path: 7},{name: "스킨케어", path: 8},{name: "클렌징/필링", path: 9},{name: "메이크업", path: 10},{name: "향수", path: 11},{name: "남성화장품", path: 12},{name: "네알", path: 13},{name: "뷰티소품", path:14},
                {name: "어린이화장품", path: 15},{name: "로드샵", path: 16},{name: "헤어", path: 17},{name: "바디", path: 19},{name: "선물세트/키트", path: 19}]);
            break;
            case 2:
                setCatagory([{name: "과일", path: 21},{name: "견과", path: 22},{name: "채소", path: 23},{name: "쌀/잡곡", path: 24},{name: "축산/계란", path: 25},{name: "수산물/건어물", path: 26},{name: "음료", path: 27},{name: "과자/시리얼", path: 28},{name: "면/통조림/가공식품", path: 29},
                {name: "가루/조미료/오일", path: 31},{name: "유제품/아이스크림", path: 32},{name: "유제품/아이스크림", path: 32 },{name: "건강식품", path: 33}])
            break;
            case 3:
                setCatagory([{name: "냄비/프라이팬", path: 35},{name: "칼/도마", path: 36},{name: "주방조리도구", path: 37},{name: "그릇/홈세트", path: 38},{name: "수저/커트러리", path: 39},{name: "컵/잔/텀블러", path: 40},{name: "밀폐저장/도시락", path: 41},{name: "주방잡화", path: 42},{name: "일회용품/종이컵", path: 43},
                {name: "보온/보냉용품", path:44},{name: "이유/유아식기", path: 45},{name: "베이킹용품", path: 46},{name: "교자상/제수용품", path: 47}]);
            break;
            case 4: 
            setCatagory([       
{path: 49, name: "헤어/바디/세안"},
{path: 50, name: "구강/면도"},
{path: 51, name: "화장지/물티슈"},
{path: 52, name: "생리대/성인기저귀"},
{path: 53, name: "기저귀"},
{path: 54, name: "세탁"},
{path: 55, name: "청소용품"},
{path: 56, name: "탈취/방향/살충"},
{path: 57, name: "건강/의료용품"},
{path: 58, name: "욕실 용품"},
{path: 59, name: "생활전기용품"},
{path: 60, name: "수납/정리"},
{path: 61, name: "생활잡화"}])
            break;
            case 5:
                setCatagory([
{path: 63, name: "홈데코"},
{path: 64, name: "가구"},
{path: 65, name: "수납/정리"},
{path: 66, name: "침구"},
{path: 67, name: "커튼/블라인드"},
{path: 68, name: "카페트/쿠션/거실화"},
{path: 69, name: "수예/수선"},
{path: 70, name: "욕실용품"},
{path: 71, name: "조명/스탠드"},
{path: 72, name: "원예/가드닝"}
                ])

            break;
            case 6:
                setCatagory([
{path: 74, name: "TV/영상가전"},
{path: 75, name: "냉장고"},
{path: 76, name: "세탁기/건조기"},
{path: 77, name: "청소기"},
{path: 78, name: "계전가전"},
{path: 79, name: "이미용가전"},
{path: 80, name: "건강가전"},
{path: 81, name: "주방가전"},
{path: 82, name: "노트북"},
{path: 83, name: "데스크탑"},
{path: 84, name: "모니터"},
{path: 85, name: "키보드 마우스"},
{path: 86, name: "저장장치"},
{path: 87, name: "프린터/복합기"},
{path: 88, name: "PC부품"},
                ])
            break;
            case 7:
                setCatagory([
{path: 107, name: "유아/어린이"},
{path: 108, name: "소설/에세이/사"},
{path: 109, name: "초중고참고서"},
{path: 110, name: "가정 살림"},
{path: 111, name: "건강 취미"},
{path: 112, name: "경재 경영"},
{path: 113, name: "과학/공학"},
{path: 114, name: "국어/외국어/사전"},
{path: 115, name: "대학교재"},
{path: 116, name: "만화/라이트노벨"},
{path: 117, name: "사회 정치"},
{path: 118, name: "수험서/자격증"},
{path: 119, name: "여행"},
{path: 120, name: "역사"},
{path: 121, name: "예술"},
{path: 122, name: "인문"},
                ])
            break;
            case 8:
                setCatagory([
{path: 124, name: "강아지 사료/용품"},
{path: 125, name: "고양이 사료 용품"},
{path: 126, name: "관상어 용품"},
{path: 127, name: "소동물/가축용품"}
                ])
            break;
            default:
        }
    }

    const list = [{name: 1, option:[1,2,3]},{name: 2, option:[1,3,4]}];

    const [tittle, setTittle] = useState("");

    return(
        <S.R>
            <div style={{width: "70%"}}>
            <h1>상품 등록</h1>
            <p>카테고리를 입력하세요</p>

            <S.RegistDiv>
            <p>상품명</p>
            <S.InputDiv>
            <S.Input placeholder="노출상품명 입력(브랜드 + 제품명)" onChange={(e)=>setTittle(e.target.value)} value={tittle}></S.Input>
            <S.Max>{tittle.length}/100</S.Max>
            </S.InputDiv>
            </S.RegistDiv>

            <S.RegistDiv>
            <p>카테고리</p>
            <div style={{display: "flex"}}>
            <S.CSDiv>
                <S.CSUl>
                    <S.CSLi onClick={()=>SetC(0)}>패션의류잡화</S.CSLi>
                    <S.CSLi onClick={()=>SetC(1)}>뷰티</S.CSLi>
                    <S.CSLi onClick={()=>SetC(2)}>식품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(3)}>주방용품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(4)}>생활용품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(5)}>가전/디지털</S.CSLi>
                    <S.CSLi onClick={()=>SetC(6)}>스포츠/레져</S.CSLi>
                    <S.CSLi onClick={()=>SetC(9)}>도서/음반/DVD</S.CSLi>
                    <S.CSLi onClick={()=>SetC(10)}>완구/취미</S.CSLi>
                    <S.CSLi onClick={()=>SetC(11)}>반려/애완용품</S.CSLi>
                </S.CSUl>
            </S.CSDiv>
            {catagory ?  
            <S.CSDiv>
                <S.CSUl>
                    <CSLi lists={catagory}></CSLi>
                </S.CSUl>
            </S.CSDiv> : <></>
            }
            </div>
            </S.RegistDiv>

            <p>상세설정</p>
            <S.RegistDiv>
                <S.RegistDetailUl>
                    <span>카테고리</span>
                    <RegistOption lists={list}/>
                </S.RegistDetailUl>
            </S.RegistDiv>
            <S.Input></S.Input>
            <p>배송 관련 사항</p>
            <S.Input></S.Input>
            <p>반품/교환 관련 사항</p>
            <S.Input></S.Input>
                <div>
                <b>상품 이미지</b>
                </div>                
                <S.UploadButton onClick={()=>setRepre(1)} color={repre === 1 ? "white" : "black"} bkcolor={repre === 1 ? "royalblue" : "white"} border={repre === 1 ? "0px" : "1px"}>기본 등록</S.UploadButton>
                <S.UploadButton onClick={()=>setRepre(2)} color={repre === 2 ? "white" : "black"} bkcolor={repre === 2 ? "royalblue" : "white"} border={repre === 2 ? "0px" : "1px"}>옵션별 등록</S.UploadButton>
            <S.RegistDiv>
                <p>대표 이미지</p>
                <S.RegistImg>
                    <S.RegistSpan>+</S.RegistSpan>
                </S.RegistImg>
            </S.RegistDiv>
            <S.RegistDiv>
                <p>추가 이미지(0/9)</p>
                <S.RegistImg>
                    <S.RegistSpan>+</S.RegistSpan>
                </S.RegistImg>
            </S.RegistDiv>
            <p>상세설명</p>
            <div>
                <S.UploadButton onClick={()=>setUpload(1)} color={upload === 1 ? "white" : "black"} bkcolor={upload === 1 ? "royalblue" : "white"} border={upload === 1 ? "0px" : "1px"}>이미지 업로드</S.UploadButton>
                <S.UploadButton onClick={()=>setUpload(2)} color={upload === 2 ? "white" : "black"} bkcolor={upload === 2 ? "royalblue" : "white"} border={upload === 2 ? "0px" : "1px"}>에디터 작성</S.UploadButton>
                <S.UploadButton onClick={()=>setUpload(3)} color={upload === 3 ? "white" : "black"} bkcolor={upload === 3 ? "royalblue" : "white"} border={upload === 3 ? "0px" : "1px"}>HTML 작성</S.UploadButton>
            </div>
            <S.RegistDiv></S.RegistDiv>            
            
            <S.RegistDiv>
                <p>상품 주요정부</p>
                <RegistOption lists={list}/>
            <S.RegistDetailUl>

                <S.RegistDetail>
                <S.DetailSpan>브랜드</S.DetailSpan>
                <S.DetailDiv>
                <S.OInput></S.OInput>
                <input type="checkbox"></input>
                <span>브랜드 없음 (또는 자체 제작)</span>
                </S.DetailDiv>  
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>제조사</S.DetailSpan>
                <S.DetailDiv>
                <S.OInput></S.OInput>
                </S.DetailDiv>  
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>인당 최대구매수량</S.DetailSpan>
                <S.DetailDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>설정함</span>
                </S.DetailSDiv> 
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>설정안함</span>
                </S.DetailSDiv> 
                </S.DetailDiv>  
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>판매기간</S.DetailSpan>
                <S.DetailDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>설정함</span>
                </S.DetailSDiv> 
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>설정안함</span>
                </S.DetailSDiv> 
                </S.DetailDiv>  
                </S.RegistDetail>

                </S.RegistDetailUl>
            </S.RegistDiv>

            <p>구비서류</p>
            <p>옵션 설정</p>
            {t ?
            <S.RButton color="royalblue">판매요청</S.RButton>
            :
            <S.RButton>판매요청</S.RButton>
            }
            </div>
        </S.R>
    )

    /*
    <p>배송 관련 사항</p>
                <S.RegistDetailUl>

                <S.RegistDetail>
                <S.DetailSpan>출고지</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>배송방법</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>묶음배송</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>제주/도서산간 배송여부</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>택배사</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>택배비 종류</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>출고 소요시간</S.DetailSpan>
                <S.DetailDiv>
                </S.DetailDiv>
                </S.RegistDetail>

            <p>반품/교환</p>
            <S.RegistDetailUl>
                <S.RegistDetail>
                    <S.DetailSpan>반품/교환지</S.DetailSpan>
                    <S.DetailDiv>
                    </S.DetailDiv>
                </S.RegistDetail>
                <S.RegistDetail>
                    <S.DetailSpan>초도 배송비(편도)</S.DetailSpan>
                    <S.DetailDiv>
                    </S.DetailDiv>
                    </S.RegistDetail>
                    <S.RegistDetail>
                <S.DetailSpan>초도 배송비(편도)</S.DetailSpan>
                    <S.DetailDiv>
                    </S.DetailDiv>
                    </S.RegistDetail>
            </S.RegistDetailUl>

            <S.RegistDetail>
                <S.DetailSpan>미성년자 구매</S.DetailSpan>
                <S.DetailDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>가능</span>
                </S.DetailSDiv> 
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>불가능</span>
                </S.DetailSDiv>   
                </S.DetailDiv>  
            </S.RegistDetail>

                            <p>검색어</p>
                <S.Input></S.Input>


                            <S.RegistDetail>
                <S.DetailSpan>부과세</S.DetailSpan>
                <S.DetailDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>과세</span>
                </S.DetailSDiv> 
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>면세</span>
                </S.DetailSDiv> 
                </S.DetailDiv>  
                </S.RegistDetail>

                                <S.RegistDetail>
                <S.DetailSpan>인증정보</S.DetailSpan>
                <S.DetailDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>인증·신고·대상</span> 
                </S.DetailSDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>상세페이지 별도표기</span>
                </S.DetailSDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>인증·신고·대상 아님</span>
                </S.DetailSDiv>  
                </S.DetailDiv> 
                </S.RegistDetail>

                <S.RegistDetail>
                <S.DetailSpan>병행수입</S.DetailSpan> 
                <S.DetailDiv>
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>병행수입</span>
                </S.DetailSDiv> 
                <S.DetailSDiv>
                <input type="radio"></input>
                <span>병행수입 아님</span>
                </S.DetailSDiv>   
                </S.DetailDiv> 
                </S.RegistDetail>

    */

}

export default RegistPage