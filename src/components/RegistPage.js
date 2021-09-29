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
    });

    const Regist = () => {
        /*

        axios.post('/api/item')
        .then(res => {
            alert("상품이 등록되었습니다.")
        })
        .catch(error => {
            alert("상품 등록에 실패했습니다.")
        })*/
    }

    useEffect(()=>{
        if(item.name&&item.price&&item.catagory){
            setUpload(true);
        }
    })

    const [list, setList] = useState({name: "", option:[]});

    const [tittle, setTittle] = useState("");

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
            <>
            {fileRejections >= 1?
            <>
            <S.RegistDiv>
                <p>미리보기</p>
                <img src={acceptedFileItems}></img>
            </S.RegistDiv>
            </>
            :<></>
            }
            </>
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
}

export default RegistPage