import React,{useState, useEffect} from 'react'
import * as S from '../styled/App'
import RegistOption from '../contents/RegistOption';
import axios from 'axios';

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

const RegistPage = () => {

    const [upload, setUpload] = useState(false);
    const [repre, setRepre] = useState(1);
    const [catagory, setCatagory] = useState([]);
    const [option, setOption] = useState([]);
    const [item, setItem] = useState({
        name: "",
        price: "",
        image: [],
        catagory: "1",
        option: {color: "", size: "", season: "", language: ""},
    });

/*
const CSLi = () => {
    const Item = ({item}) => {

        return(
            <S.CSLi onClick={() => setItem}>{item}</S.CSLi>
        );
    }
    
    const List = ({lists}) => {
        const itemList = lists.map(
            item => (
                <Item item={item}/>
            )
        )
        return itemList;
    }
    
    return List
}*/

    const Regist = () => {
        /*axios.post('/item', {
        }*/
    }

    useEffect(()=>{
        if(item.name&&item.price&&item.catagory){
            setUpload(true);
        }
    })

    const SetC = (c) => {
        switch(c){
            case 0:
                setCatagory([{name: "여성패션", link: 1}, {name: "남성패션", link: 1}, {name: "남녀 공용 의류", link: 1}, {name: "유아동패션", link: 1}])
            break;
            case 1:
                setCatagory([{name: "명품뷰티", link: 1}, {name: "스킨케어", link: 1}, {name: "클렌징/필링", link: 1}, {name: "메이크업", link: 1}, {name: "향수", link: 1}, {name: "남성화장품", link: 1}, {name: "네알", link: 1}, {name: "뷰티소품", link: 1},
                {name: "어린이화장품", link: 1}, {name: "로드샵", link: 1}, {name: "헤어", link: 1}, {name: "바디", link: 1}, {name: "선물세트/키트", link: 1}]);
            break;
            case 2:
                setCatagory([{name: "냄비/프라이팬", link: 1}, {name: "칼/도마", link: 1}, {name: "주방조리도구", link: 1}, {name: "그릇/홈세트", link: 1}, {name: "수저/커트러리", link: 1}, {name: "컵/잔/텀블러", link: 1}, {name: "밀폐저장/도시락", link: 1}, {name: "주방잡화", link: 1}, {name: "일회용품/종이컵", link: 1},
                {name: "보온/보냉용품", link: 1}, {name: "이유/유아식기", link: 1}, {name: "베이킹용품", link: 1}, {name: "교자상/제수용품", link: 1}]);
            break;
            case 3: 
            setCatagory([{name: "헤어/바디/세안", link: 1}, {name: "구강/면도", link: 1}, {name: "화장지/물티슈", link: 1}, {name: "생리대/성인기저귀", link: 1}, {name: "기저귀", link: 1}, {name: "세탁", link: 1}, {name: "청소용품", link: 1}, {name: "탈취/방향/살충", link: 1}, {name: "건강/의료용품", link: 1}, {name: "욕실 용품", link: 1}, {name: "생활전기용품", link: 1}, {name: "수납/정리", link: 1}, {name: "생활잡화", link: 1}])
            break;
            case 4:
                setCatagory([{name: "홈데코", link: 1}, {name: "가구", link: 1}, {name: "수납/정리", link: 1}, {name: "침구", link: 1}, {name: "커튼/블라인드", link: 1}, {name: "카페트/쿠션/거실화", link: 1}, {name: "수예/수선", link: 1}, {name: "욕실용품", link: 1}, {name: "조명/스탠드", link: 1}, {name: "원예/가드닝", link: 1}
                ])

            break;
            case 5:
                setCatagory([{name: "TV/영상가전", link: 1}, {name: "냉장고", link: 1}, {name: "세탁기/건조기", link: 1}, {name: "청소기", link: 1}, {name: "계전가전", link: 1}, {name: "이미가", link: 1}, {name: "건강가전", link: 1}, {name: "주방가전", link: 1}, {name: "노트북", link: 1}, {name: "데스크탑", link: 1}, {name: "모니터", link: 1}, {name: "키보드 마우스", link: 1}, {name: "저장장치", link: 1}, {name: "프린터/복합기", link: 1}, {name: "PC부품", link: 1}])
            break;
            case 6:
                setCatagory([{name: "유아/어린이", link: 1},{name: "소설/에세이/사", link: 1},{name: "초중고참고서", link: 1},{name: "가정 살림", link: 1},{name: "건강 취미", link: 1},{name: "경재 경영", link: 1},{name: "과학/공학", link: 1},{name: "국어/외국어/사전", link: 1},{name: "대학교재", link: 1},{name: "만화/라이트노벨", link: 1},{name: "사회 정치", link: 1},{name: "수험서/자격증", link: 1},{name: "여행", link: 1},{name: "역사", link: 1},{name: "예술", link: 1},{name: "인문", link: 1}])
            break;
            case 7:
                setCatagory([{name: "강아지 사료/용품", link: 1},{name: "고양이 사료 용품", link: 1},{name: "관상어 용품", link: 1},{name: "소동물/가축용품", link: 1}])
            break;
            default:
        }
    }

    const [list, setList] = useState([]);

    const [tittle, setTittle] = useState("");

    const Color = () => {
        setList([...list,{name: "색상", option: 
        [{name: "설정안함", link:""},
        {name: "블랙", link:"black"},
        {name: "네이비", link:"navy"},
        {name: "그레이", link:"gray"},
        {name: "실버", link:"sliver"},
        {name: "레드", link:"red"},
        {name: "오렌지", link:"orange"},
        {name: "옐로우", link:"yellow"},
        {name: "그린", link:"green"},
        {name: "블루", link:"blue"},
        {name: "퍼플", link:"purple"},
        {name: "핑크", link:"pink"},
        {name: "화이트", link:"white"},
        {name: "브라운", link:"brown"},
        {name: "골드", link:"gold"},
        {name: "베이지", link:"beiege"},
        {name: "혼합", link:"mixed"},
        {name: "투명", link:"limpidity"}]}]);
    }

    const Season = () => {
        setList([...list,{name:"계절", option:[
            {name:"설정안함", link:""},
            {name:"사계절용", link:"four"},
            {name:"봄/가을용", link:"spfa"},
            {name:"여름용", link: "summer"},
            {name:"겨울용", link:"winter"}]}]);
    }

    useEffect(()=>{
    },[]);

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setItem({
          ...item, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };

    return(
        <S.R>
            <div style={{width: "70%"}}>
            <h1>상품 등록</h1>
            <p>카테고리를 입력하세요</p>

            <S.RegistDiv>
            <p>상품명</p>
            <S.InputDiv>
            <S.Input placeholder="노출상품명 입력(브랜드 + 제품명)" name="name" onChange={(e)=>onChange(e)} value={item.name}></S.Input>
            <S.Max>{item.name.length}/100</S.Max>
            </S.InputDiv>
            </S.RegistDiv>

            <S.RegistDiv>
            <p>가격</p>
            <S.InputDiv>
            <S.Input placeholder="₩ 가격" name="price" onChange={(e)=>onChange(e)} value={item.price}></S.Input>
            </S.InputDiv>
            </S.RegistDiv>

            <S.RegistDiv>
            <p>카테고리</p>
            <div style={{display: "flex"}}>
            <S.CSDiv>
                <S.CSUl>
                    <S.CSLi onClick={()=>SetC(0)}>패션의류잡화</S.CSLi>
                    <S.CSLi onClick={()=>SetC(1)}>뷰티</S.CSLi>
                    <S.CSLi onClick={()=>SetC(2)}>주방용품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(3)}>생활용품</S.CSLi>
                    <S.CSLi onClick={()=>SetC(4)}>가전/디지털</S.CSLi>
                    <S.CSLi onClick={()=>SetC(5)}>스포츠/레져</S.CSLi>
                    <S.CSLi onClick={()=>SetC(6)}>도서/음반/DVD</S.CSLi>
                    <S.CSLi onClick={()=>SetC(7)}>완구/취미</S.CSLi>
                    <S.CSLi onClick={()=>SetC(8)}>반려/애완용품</S.CSLi>
                </S.CSUl>
            </S.CSDiv>
            {catagory ?  
            <S.CSDiv>
                <S.CSUl>
                    {catagory.map(item =>{
                        var a = <S.CSLi item={item} name={item.name} link={item.link} value={item.link} onClick={()=>console.log(item.link)}>{item.name}</S.CSLi>;
                        return a;
                    })}
                </S.CSUl>
            </S.CSDiv> : <></>
            }
            <S.CS>{item.catagory}</S.CS>
            </div>
            </S.RegistDiv>

            <p>상세설명</p>
            <S.RegistDiv>
                <S.RegistDetailUl>
                    <span>옵션</span>
                    <RegistOption lists={list}/>
                </S.RegistDetailUl>
            </S.RegistDiv>

                <p>상품 이미지</p>             
            <S.RegistDiv>
                <p>이미지(0/9)</p>
                <S.RegistImg>
                    <S.RegistSpan>+</S.RegistSpan>
                </S.RegistImg>
            </S.RegistDiv>
            <p>상품 설명</p>
            <S.RegistDiv>
                <S.Explane></S.Explane>
            </S.RegistDiv>     
            {upload ?
            <S.RButton color="white" bkcolor="royalblue" onClick={() => Regist()}>판매요청</S.RButton>
            :
            <S.RButton onClick={()=>alert("이름, 가격, 카테고리, 설명 을 모두 입력해주세요.")}>판매요청</S.RButton>
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

                            <S.RegistDiv>
            <p>배송 관련 사항</p>
            <S.Input></S.Input>
            <p>반품/교환 관련 사항</p>
            <S.Input></S.Input>
            </S.RegistDiv>

                        <p>상세설명</p>
            <div>
                <S.UploadButton onClick={()=>setUpload(1)} color={upload === 1 ? "white" : "black"} bkcolor={upload === 1 ? "royalblue" : "white"} border={upload === 1 ? "0px" : "1px"}>이미지 업로드</S.UploadButton>
                <S.UploadButton onClick={()=>setUpload(2)} color={upload === 2 ? "white" : "black"} bkcolor={upload === 2 ? "royalblue" : "white"} border={upload === 2 ? "0px" : "1px"}>에디터 작성</S.UploadButton>
                <S.UploadButton onClick={()=>setUpload(3)} color={upload === 3 ? "white" : "black"} bkcolor={upload === 3 ? "royalblue" : "white"} border={upload === 3 ? "0px" : "1px"}>HTML 작성</S.UploadButton>
            </div>
            <S.RegistDiv></S.RegistDiv>      
            
                        <S.RegistDiv>
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

            <S.UploadButton onClick={()=>setRepre(1)} color={repre === 1 ? "white" : "black"} bkcolor={repre === 1 ? "royalblue" : "white"} border={repre === 1 ? "0px" : "1px"}>기본 등록</S.UploadButton>
                <S.UploadButton onClick={()=>setRepre(2)} color={repre === 2 ? "white" : "black"} bkcolor={repre === 2 ? "royalblue" : "white"} border={repre === 2 ? "0px" : "1px"}>옵션별 등록</S.UploadButton>

    */

}

export default RegistPage