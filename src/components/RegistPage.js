import React,{useState, useEffect} from 'react'
import * as S from '../styled/App'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDropzone } from 'react-dropzone';


const RegistPage = () => {

    let history = useHistory();

    const [upload, setUpload] = useState(false);
    const [repre, setRepre] = useState(1);
    const [catagory, setCatagory] = useState([]);
    const [option, setOption] = useState([]);
    const [item, setItem] = useState({
        name: "",
        price: "",
        info: "",
        catagory: "1",
    });

    axios.defaults.baseURL = "http://13.124.26.107:9095";
    axios.defaults.withCredentials = true;

    const Regist = () => {
        axios.post(`${url}/api/item`)
        .then(function(response){
            alert("상품이 등록되었습니다.")
        })
        .catch(function(error){
            alert("상품 등록에 실패했습니다.")
        })
    }

    useEffect(()=>{
        if(item.name&&item.price&&item.catagory){
            setUpload(true);
        }
    })

    const [list, setList] = useState({name: "", option:[]});

    const [tittle, setTittle] = useState("");
    
    var url = "http://13.124.26.107:9095";

    useEffect(()=>{
        

    },[]);

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setItem({
          ...item, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };

    const [c, setC] = useState();

    const setName = (e) => {
        if(item.name.length < 30){
            setItem({...item, name: e.target.value});
        }
    }

    const setPrice = (e) => {
        setItem({...item, price: e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')})
    }

    const changeCatagory = (link, name) => {
        setItem({...item, catagory: link});
        setC(name);
    }

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
      } = useDropzone({
        accept: 'image/jpeg, image/png',    
        maxFiles: 1
      });
    
      const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
      const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
       return (
         <li key={file.path}>
              {file.path} - {file.size} bytes
              <ul>
                {errors.map(e => <li key={e.code}>{e.message}</li>)}
             </ul>
         </li>
       ) 
      });

    return(
        <S.R>
            <div style={{width: "70%"}}>
            <h1>상품 등록</h1>
            <p>카테고리를 입력하세요</p>

            <S.RegistDiv>
            <p>상품명</p>
            <S.InputDiv>
            <S.Input placeholder="노출상품명 입력(브랜드 + 제품명)" name="name" onChange={(e)=>setName(e)} value={item.name}></S.Input>
            <S.Max>{item.name.length}/30</S.Max>
            </S.InputDiv>
            </S.RegistDiv>

            <S.RegistDiv>
            <p>가격</p>
            <S.InputDiv>
            <S.Input placeholder="₩ 가격" name="price" onChange={(e)=>setPrice(e)} value={item.price}></S.Input>
            </S.InputDiv>
            </S.RegistDiv>
                <p>상품 이미지</p>             
            <S.RegistDiv>
                <p>이미지</p>
    <section className="container">
      <S.Dropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <span>드래그로 이미지 등록</span>
      </S.Dropzone>
    </section>
            </S.RegistDiv>
            <S.RegistDiv>
                <p>미리보기</p>
                <img src={acceptedFileItems}></img>
            </S.RegistDiv>
            <S.RegistDiv>
                <p>상품 설명</p>
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

/*        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul> */

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

          /*
    const RegistOption = ({item}) => {

        const Option = ({lists}) => {
            const itemList = lists.map(
                item => (
                <option>
                    {item.name}
                </option> 
                )
            )
            return itemList;
        }
    
        return(
                <S.RegistDetail>
                <S.DetailSpan>{item.name}</S.DetailSpan>
                <S.DetailSelect>
                    <Option lists={item.option}/>
                </S.DetailSelect>  
                </S.RegistDetail>
        )
    
        //        <Option lists={item.option}/>
}*/

    /*

                    <S.RegistImg>
                    <S.RegistSpan>+</S.RegistSpan>
                </S.RegistImg>
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