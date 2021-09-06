import React,{useState} from 'react'
import * as S from '../styled/App'
import CSLi from '../contents/Csli'
import RegistOption from '../contents/RegistOption';

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
        57 교자상/제수용품
    58 생활용품
        59 헤어/바디/세안
        60 구강/면도
        61 화장지/물티슈
        62 생리대/성인기저귀
        63 기저귀
        64 세탁
        65 청소용품
        66 탈취/방향/살충
        67 건강/의료용품
        68 욕실 용품
        69 생활전기용품
        70 수납/정리
        71 생활잡화
    72 홈인테리어
        73 홈데코
        74 가구
        75 수납/정리
        76 침구
        77 커튼/블라인드
        78 카페트/쿠션/거실화
        79 수예/수선
        80 욕실용품
        81 조명/스탠드
        82 원예/가드닝
    83 가전디지털
        84 TV/영상가전
        85 냉장고
        86 세탁기/건조기
        87 청소기
        88 계전가전
        89 이미용가전
        90 건강가전
        91 주방가전
        92 노트북
        93 데스크탑
        94 모니터
        95 키보드 마우스
        96 저장장치
        97 프린터/복합기
        98 PC부품
    99 스포츠/레저
        99 캠핑
        100 홈트레이닝
        101 수영/수상스포츠
        102 골프
        103 자전거
        104 킥보드/스케이트
        105 낚시
        106 등산/아웃도어
        107 스포츠신발
        108 남성스포츠의류
        109 여성스포츠의류
        110 유아스포츠의류
        111 스포츠잡화
        112 구기스포츠
        113 라켓스포츠
        114 헬스/요가/댄스
    115 도서/음반/DVD
        116 유아/어린이
        117 소설/에세이/사
        118 초중고참고서
        119 가정 살림
        120 건강 취미
        121 경재 경영
        122 과학/공학
        123 국어/외국어/사전
        124 대학교재
        125 만화/라이트노벨
        126 사회 정치
        127 수험서/자격증
        128 여행
        129 역사
        130 예술
        131 인문
    132 반려동물용품
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

    const SetC = ({c}) => {
        switch(c){
            case 1 :
                setCatagory([{name: "의류", path: 2},{name: "속옷/잠옷", path: 3},{name: "신발", path: 4},{name: "가방/잡화", path: 5}]);
            break;
            case 2 :
                setCatagory([{name: "유기농", path: 7},{name: "과일", path: 8},{name: "견과/건과", path: 9},{name: "채소", path: 10},{name: "쌀/잡곡", path: ""},{name: "축산/계란", path: ""},{name: "수산물/건어물", path: ""},{name: "생수/음료", path: ""},{name: "커피/원두/차", path: ""},{name: "과자/초콜릿/시리얼", path: ""},{name: "면/통조림/가공식품", path: ""},{name: "가루/조미료/오일", path: ""},{name: "장/소스/드레싱/식초", path: ""},{name: "유제품/아이스크림", path: ""},{name: "냉장/냉동/간편요리", path: ""},{name: "건강식품", path: ""}]);
            break;
            case 3 :
                setCatagory([{name: "사무용품 전문관", path: ""}, {name: "미술/화방용품", path: ""}, {name: "학용품/수업준비", path: ""},{name: "필기류", path: ""},{name: "노트/메모지", path: ""}, {name: "다이어리/플래너", path: ""}, {name: "바인더/파일", path: ""}, {name: "파티/이벤트", path: ""}, {name: "데코/포장용품", path: ""}, {name: "카드/엽서/봉투", path: ""}, {name: "앨범", path: ""}, {name: "복사용품/라벨지", path: ""},{name: "보드/칠판/광고", path: ""}]);
            break; 
            case 4 :
                setCatagory([{name: "유아/어린이", path: ""},{name: "소설/에세이/시", path: ""},{name:"초중고참고서", path: ""},{name: "가정 살림", path: ""},{name: "건강 취미", path: ""},{name: "경제 경영", path: ""},{name: "과학/공학", path: ""},{name: "국어/외국어/사전", path: ""},{name: "대학교재", path: ""},{name: "만화/라이트노벨", path: ""},{name: "사회 정치", path: ""},{name: "수험서/자격증", path: ""}]);
                break;
            case 5 :
                setCatagory([{name: "헤어/바디/세안", path: ""},{name: "구강/면도", path: ""},{name: "화장지/물티슈", path: ""},{name: "생리대/기저귀", path: ""}, {name: "세탁세제", path: ""}, {name: "청소/주방세제", path: ""}, {name: "틸취/방향/살충", path: ""}, {name: "건강/의료용품", path: ""}, {name: "욕실용품", path: ""}, {name: "생활전기용품", path: ""}, {name: "수납", path: ""}, {name: "생활잡화", path: ""}, {name: "공구/철물/DIY", path: ""}, {name: "안전/호신용품", path: ""}]);
            break;
            case 6 :
                setCatagory([{name: "강아지", path: ""}, {name: "고양이", path: ""}, {name: "관상어", path: ""}, {name: "소동물/가축용품", path: ""}]);
            break;
            case 7:
                setCatagory([{name: "TV/영상가전", path: ""},{name: "냉장고", path: ""},{name: "세탁기/건조기", path: ""},{name: "생활가전", path: ""},{name: "이미용가전", path: ""},{name: "건강가전", path: ""},{name: "노트북", path: ""},{name: "데스크탑", path: ""},{name: "모니터", path: ""},{name: "PC주변기기", path: ""},{name: "PC부품", path: ""},{name: "휴대폰", path: ""},{name: "태블릿PC", path: ""},{name: "스마트워치/밴드", path: ""},{name: "음향기기", path: ""},{name: "게임", path: ""},{name: "카메라", path: ""},{name: "전동킥보드/자전거", path: ""},{name: "차량용 디지털", path: ""}]);
            break;
            case 8 :
                setCatagory([{name: "캠핑", path: ""},{name: "홈트레이닝", path: ""},{name: "수영/수상스포츠", path: ""},{name: "골프", path: ""},{name: "자전거", path: ""},{name: "킥보드/스케이트"},{name: "낚시"},{name: "등산/아웃도어"},{name: "스포츠신발"},{name: "남성스포츠의류"},{name: "여성스포츠의류"},{name: "유아스포츠의류"},{name: "스포츠잡화"},{name: "구기스포츠"},{name: "라켓스포츠"},{name: "헬스/요가/댄스"},{name: "복싱/검도/태권도"},{name: "학교 체육 준비"},{name: "기타스포츠"},{name: "스키/겨울스포츠"}]);
            break;
            case 9: 
                setCatagory([{name: "신생아/영아완구", path: ""},{name: "로봇/작동완구", path: ""},{name: "역할놀이", path: ""},{name: "블록놀이", path: ""},{name: "인형", path: ""},{name: "물놀이/계절완구", path: ""},{name: "승용완구", path: ""},{name: "실내대형완구", path: ""},{name: "STEAM완구", path: ""},{name: "학습완구/교구", path: ""},{name: "보드게임", path: ""},{name: "RC완구/부품", path: ""},{name: "퍼즐/큐브/피젯토이", path: ""},{name: "프라모델", path: ""},{name: "피규어/다이캐스트", path: ""},{name: "콘솔/휴대용 게임기", path: ""},{name:  "파티/마술용품", path: ""}, {name: "DIY", path: ""}, {name: "악기/음향기기", path: ""}, {name: "원예/가드닝", path: ""}, {name: "수집품"}, {name: "키덜트샵"}]);
            break;
            case 10:
                setCatagory([{name: "주방가전" ,path: ""},{name: "냄비/프라이팬" ,path: ""},{name: "칼/도마" ,path: ""},{name: "주방조리도구" ,path: ""},{name: "그릇/홈세트" ,path: ""},{name: "수저/커트러리" ,path: ""},{name: "컵/잔/텀블러" ,path: ""},{name: "밀폐저장/도시락" ,path: ""},{name: "주방잡화" ,path: ""},{name: "일회용품/종이컵" ,path: ""},{name: "보온/보냉용품" ,path: ""},{name: "이유/유아식기" ,path: ""},{name: "베이킹용품" ,path: ""},{name: "교자상/제수용품"}]);
            break;
            default :
            
            break;
        }
    }

    const list = [{name: 1, option:[1,2,3]},{name: 2, option:[1,3,4]}];

    return(
        <S.R>
            <div style={{width: "70%"}}>
            <h1>상품 등록</h1>
            <p>카테고리를 입력하세요</p>

            <S.RegistDiv>
            <p>상품명</p>
            <S.InputDiv>
            <S.Input placeholder="노출상품명 입력(브랜드 + 제품명)"></S.Input>
            <S.Max>0/100</S.Max>
            </S.InputDiv>
            </S.RegistDiv>

            <S.RegistDiv>
            <p>카테고리</p>
            <div style={{display: "flex"}}>
            <S.CSDiv>
                <S.CSUl>
                    <S.CSLi onClick={()=>SetC(1)}>패션의류잡화</S.CSLi>
                    <S.CSLi onClick={()=>SetC(2)}>뷰티</S.CSLi>
                    <S.CSLi onClick={()=>SetC(2)}>식품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(3)}>주방용품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(4)}>생활용품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(5)}>가전/디지털</S.CSLi>
                    <S.CSLi onClick={()=>SetC(6)}>스포츠/레져</S.CSLi>
                    <S.CSLi onClick={()=>SetC(7)}>도서</S.CSLi>
                    <S.CSLi onClick={()=>SetC(8)}>문구/오피스</S.CSLi>
                    <S.CSLi onClick={()=>SetC(9)}>음반/DVD</S.CSLi>
                    <S.CSLi onClick={()=>SetC(10)}>완구/취미</S.CSLi>
                    <S.CSLi onClick={()=>SetC(11)}>반려/애완용품</S.CSLi>
                </S.CSUl>
            </S.CSDiv>
            {catagory ?  
            <S.CSDiv>
                <S.CSUl>
                    <S.RegistDetail>
                    <CSLi lists={catagory}></CSLi>
                    </S.RegistDetail>
                </S.CSUl>
            </S.CSDiv> : <></>
            }
            </div>
            </S.RegistDiv>

            <p>상세설정</p>
            <S.RegistDiv>
                <S.RegistDetailUl>
                    <span>카타고리</span>
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