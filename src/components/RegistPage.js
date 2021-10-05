import React,{useState, useEffect} from 'react'
import * as S from '../styled/App'
//import axios from 'axios';
import { useHistory } from 'react-router';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Profile from '../images/profile.png'

const RegistPage = () => {

    let history = useHistory();

    function getCookie(cName) {
      cName = cName + '=';
      var cookieData = document.cookie;
      var start = cookieData.indexOf(cName);
      var cValue = '';
      if(start != -1){
      start += cName.length;
      var end = cookieData.indexOf(';', start);
      if(end == -1)end = cookieData.length;
      cValue = cookieData.substring(start, end);
      }
      return unescape(cValue);
      }

    const [item, setItem] = useState({
        name: "1",
        price: "1",
        info: "1",
        category: "1"
    });

    const Regist = () => {
        axios.post('http://13.124.26.107:9095/api/item', JSON.stringify({name: item.name, price: Number(item.price), info: "1", category: "1"}))
        .then(response => {
            alert("상품이 등록되었습니다.")
        })
        .catch(error => {
            alert("상품 등록에 실패했습니다.")
        })
    }

    /*
    useEffect(()=>{
        if(item.name&&item.price&&item.catagory){
            setUpload(true);
        }
    })*/

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

      const changeExplane = (e) => {
        if(item.info.length <= 200){
          setItem({...item, info: e.target.value})
        }
      }

      const [imgBase64, setImgBase64] = useState(""); // 파일 base64
      const [imgFile, setImgFile] = useState(null);	//파일	

      const handleChangeFile = (event) => {
        let reader = new FileReader();
    
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        }
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
          setImgFile(event.target.files[0]); // 파일 상태 업데이트
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
            <S.RegistDiv>
                <p>이미지</p>
    <section className="container">
      <S.Dropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()}  onChange={()=>handleChangeFile(acceptedFiles)}/>
        <span>드래그로 이미지 등록</span>
      </S.Dropzone>
    </section>
            </S.RegistDiv>
            <S.RegistDiv>
                <p>상품 설명</p>
                <S.Explane onChange={(e)=>changeExplane(e)} value={item.info}></S.Explane>
            </S.RegistDiv>
            <>
            {imgFile ?
            <>
            <S.RegistDiv>
                <p>미리보기</p>
    <S.PItem>
    <S.ImageDiv>
      <S.Image src={imgFile}/>
    </S.ImageDiv>
<S.ItDiv>
<S.IUSer>
    <S.Profile src={Profile}></S.Profile>
    <S.ProfileSpan>{localStorage.email}</S.ProfileSpan>
</S.IUSer>
<S.IEX>
<S.Profile src={Profile}></S.Profile>
<S.Iname>{item.name}</S.Iname>
<S.ItemPrice>{item.price}원</S.ItemPrice>

<S.Introduce>{item.info}</S.Introduce>
</S.IEX>
</S.ItDiv>
</S.PItem>      
</S.RegistDiv>
</>
            :<></>
            }
            </>     
            {item.name&&item.price ?
            <S.RButton color="white" bkcolor="royalblue" onClick={() => Regist()}>판매요청</S.RButton>
            :
            <S.RButton onClick={()=>alert("이름, 가격, 카테고리, 설명 을 모두 입력해주세요.")}>판매요청</S.RButton>
            }
            </div>
        </S.R>
    )
}

export default RegistPage