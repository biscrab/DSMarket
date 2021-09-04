import React,{useState} from 'react'
import * as S from '../styled/App'
import CSLi from '../contents/Csli'

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
                setCatagory([{name: "의류", path: ""},{name: "속옷/잠옷", path: ""},{name: "신발", path: ""},"가방/잡화"]);
            break;
            case 2 :
                setCatagory([{name: "유기농", path: ""},{name: "과일", path: ""},{name: "견과/건과", path: ""},{name: "채소", path: ""},{name: "쌀/잡곡", path: ""},{name: "축산/계란", path: ""},{name: "수산물/건어물", path: ""},{name: "생수/음료", path: ""},{name: "커피/원두/차", path: ""},{name: "과자/초콜릿/시리얼", path: ""},{name: "면/통조림/가공식품", path: ""},{name: "가루/조미료/오일", path: ""},{name: "장/소스/드레싱/식초", path: ""},{name: "유제품/아이스크림", path: ""},{name: "냉장/냉동/간편요리", path: ""},{name: "건강식품", path: ""}]);
            break;
            case 3 :
                setCatagory([{name: "사무용품 전문관", path: ""}, {name: "미술/화방용품", path: ""}, {name: "학용품/수업준비", path: ""},{name: "필기류", path: ""},{name: "노트/메모지", path: ""}, {name: "다이어리/플래너", path: ""}, {name: "바인더/파일", path: ""}, {name: "파티/이벤트", path: ""}, {name: "데코/포장용품", path: ""}, {name: "카드/엽서/봉투", path: ""}, {name: "앨범", path: ""}, {name: "복사용품/라벨지", path: ""},{name: "보드/칠판/광고", path: ""}]);
            break; 
            case 4 :
                setCatagory([{name: "유아/어린이", path: ""},{name: "소설/에세이/시", path: ""},{name:"초중고참고서", path: ""},{name: "가정 살림", path: ""},{name: "건강 취미", path: ""},{name: "경제 경영", path: ""},{name: "과학/공학", path: ""},{name: "국어/외국어/사전", path: ""},{name: "대학교재", path: ""},{name: "만화/라이트노벨", path: ""},{name: "사회 정치", path: ""},{name: "수험서/자격증", path: ""}]);
                break;
            case 5 :
                setCatagory([{name: "헤어/바디/세안", path: ""},{name: "구강/면도", path: ""},{name: "화장지/물티슈", path: ""},{name: "생리대/기저귀", path: ""}, {name: "세탁세제", path: ""}, {name: "청소/주방세제", path: ""}, {name: "틸취/방향/살충", path: ""}, "건강/의료용품", path: ""}, {name: "욕실용품", path: ""}, {name: "생활전기용품", path: ""}, {name: "수납", path: ""}, {name: "생활잡화", path: ""}, {name: "공구/철물/DIY", path: ""}, {name: "안전/호신용품", path: ""}]);
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
                setCatagory([{name: "신생아/영아완구"},{name: "로봇/작동완구"},{name: "역할놀이"},{name: "블록놀이"},{name: "인형"},{name: "물놀이/계절완구"},{name: "승용완구"},{name: "실내대형완구"},{name: "STEAM완구"},{name: "학습완구/교구"},{name: "보드게임"},{name: "RC완구/부품"},{name: "퍼즐/큐브/피젯토이"},{name: "프라모델"},{name: "피규어/다이캐스트"},{name: "콘솔/휴대용 게임기"},{name:  "파티/마술용품"}, {name: "DIY"}, {name: "악기/음향기기"}, {name: "원예/가드닝"}, {name: "수집품"}, {name: "키덜트샵"}]);
            break;
            case 10:
                setCatagory([{name: "주방가전"},{name: "냄비/프라이팬"},{name: "칼/도마"},{name: "주방조리도구"},{name: "그릇/홈세트"},{name: "수저/커트러리"},{name: "컵/잔/텀블러"},{name: "밀폐저장/도시락"},{name: "주방잡화"},{name: "일회용품/종이컵"},{name: "보온/보냉용품"},{name: "이유/유아식기"},{name: "베이킹용품"},{name: "교자상/제수용품"}]);
            break;
            default :
            
            break;
        }
    }

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
                    <S.CSLi>패션의류잡화</S.CSLi>
                    <S.CSLi>뷰티</S.CSLi>
                    <S.CSLi>출산/유아동</S.CSLi>
                    <S.CSLi>식품</S.CSLi>
                    <S.CSLi>주방용품</S.CSLi>
                    <S.CSLi>생활용품</S.CSLi>
                    <S.CSLi>가전/디지털</S.CSLi>
                    <S.CSLi>스포츠/레져</S.CSLi>
                    <S.CSLi>도서</S.CSLi>
                    <S.CSLi>문구/오피스</S.CSLi>
                    <S.CSLi>음반/DVD</S.CSLi>
                    <S.CSLi>완구/취미</S.CSLi>
                    <S.CSLi>반려/애완용품</S.CSLi>
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
            <button>판매요청</button>            
            
            <S.RegistDiv>
                <p>상품 주요정부</p>
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