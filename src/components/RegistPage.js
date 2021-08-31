import React,{useState} from 'react'
import * as S from '../styled/App'

const list = [{tittle: 1, a: 1, b:2}];

const RegistPage = () => {

    const [upload, setUpload] = useState(1);
    const [repre, setRepre] = useState(1);

    return(
        <S.R>
            <div>
            <h1>상품 등록</h1>
            <span>카테고리를 입력하세요</span>
            <p>상품명</p>
            <S.Input></S.Input>
            <p>가격</p>
            <S.Input></S.Input>
            <p>재조사</p>
            <S.Input></S.Input>
            <p>브랜드</p>
            <S.Input></S.Input>
            <p>재고</p>
            <S.Input></S.Input>
            <p>검색어</p>
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
            </S.RegistDiv>
            <S.RegistDiv><p>추가 이미지</p></S.RegistDiv>
            <p>상세설명</p>
            <div>
                <S.UploadButton onClick={()=>setUpload(1)} color={upload === 1 ? "white" : "black"} bkcolor={upload === 1 ? "royalblue" : "white"} border={upload === 1 ? "0px" : "1px"}>이미지 업로드</S.UploadButton>
                <S.UploadButton onClick={()=>setUpload(2)} color={upload === 2 ? "white" : "black"} bkcolor={upload === 2 ? "royalblue" : "white"} border={upload === 2 ? "0px" : "1px"}>에디터 작성</S.UploadButton>
                <S.UploadButton onClick={()=>setUpload(3)} color={upload === 3 ? "white" : "black"} bkcolor={upload === 3 ? "royalblue" : "white"} border={upload === 3 ? "0px" : "1px"}>HTML 작성</S.UploadButton>
            </div>
            <S.RegistDiv></S.RegistDiv>
            <p>미성년자 구매 불가</p>
            <button>판매요청</button>            
            <p>상품 주요정부</p>
            <S.RegistDetailUl>

                <S.RegistDetail>
                <span>브랜드</span>  
                </S.RegistDetail>

                <S.RegistDetail>
                <span>브랜드</span>  
                </S.RegistDetail>
            </S.RegistDetailUl>
            </div>
        </S.R>
    )
}

export default RegistPage