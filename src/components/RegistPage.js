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
      name: "4",
      info: "perfect",
      price: 10000,
      category: "남성패션"
  });

    const config = {
      headers: {
        'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    }

    const Regist = () => {
        axios.post('http://13.124.26.107:9095/api/item', JSON.stringify(item), config)
        .then(response => {
                let id = response.data.data
                const formData = new FormData(acceptedFiles[0]);
                console.log("가느다란");
                console.log(id);
        })
        .catch(error => {
            alert("상품 등록에 실패했습니다.");
        })
        
        const RegistImg = (id, formData) => {
            axios.post(`http://13.124.26.107:9095/api/image/${id}`, formData, config)
              .then(response => {
              alert("이미지가 등록되었습니다.1")
            })
            .catch(error => {
              alert("실패1")
            })
        }

        console.log(acceptedFiles);

        const fd = new FormData();

        fd.append('filename', acceptedFiles[0]);

        console.log(fd);


    }

    const [c, setC] = useState();

    const setName = (e) => {
      setItem({...item, name: e.target.value.slice(0, 30)});
    }

    const setPrice = (e) => {
      setItem({...item, price: e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 8)})
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

      const changeExplane = (e) => {
        if(item.info.length <= 200){
          setItem({...item, info: e.target.value})
        }
      }

      const handleFileOnChange = () => {
        acceptedFiles.preventDefault();
        let reader = new FileReader();
        let file = acceptedFiles[0];
        reader.onloadend = () => {
          this.setState({
            file : file,
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
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
            <S.Max>{item.price.string().length}/8</S.Max>
            </S.InputDiv>
            </S.RegistDiv>        
            <S.RegistDiv>
                <p>이미지</p>
    <section className="container" style={{padding:"0px"}}>
      <S.Dropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()}/>
        <span>드래그로 이미지 등록</span>
      </S.Dropzone>
    </section>
            </S.RegistDiv>
            <S.RegistDiv>
                <p>상품 설명</p>
                <S.Explane onChange={(e)=>changeExplane(e)} value={item.info}></S.Explane>
            </S.RegistDiv>
            <>
            {item.name&&item.price&&acceptedFiles[0] ?
            <S.RButton color="white" bkcolor="royalblue" onClick={() => Regist()}>판매요청</S.RButton>
            :
            <S.RButton onClick={()=>alert("이름, 가격, 카테고리, 설명 을 모두 입력해주세요.")}>판매요청</S.RButton>
            }      
            </>
            </div>
        </S.R>
    )
}

export default RegistPage