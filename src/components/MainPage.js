import React, { useState, useEffect } from 'react';
import {useParams, useLocation, Link, useRouteMatch} from "react-router-dom";
import * as S from '../styled/App'
import A from '../images/a.jpg'
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import Profile from '../images/profile.png'
import Loading from '../contents/Loading'

const MainPage = () => {  

    let history = useHistory();
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();

    const [list, setList] = useState([]);

    const [slist, setSlist] = useState([]);
    const [snum, setSnum] = useState(9);

    const [loading , setLoading] = useState(true);
    
    const LoadItem = () => {
        axios.get('http://13.124.26.107:9095/api/item/all', config)
        .then(response => {
            console.log([...response.data.data]);
            setList([...response.data.data])
            setSlist([...list.slice(0, snum)])
            setLoading(false);
        })
        .catch(error => {
        })
    }

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
    
    const Item = ({lists}) => {

        const Select = ({item}) => {
                const [change, setChange] = useState(false);
                const [edit, setEdit] = useState(false);

                const [image, setImage] = useState();

                
        const iconfig = {
            headers: {
              'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
              'Content-Type': 'application/png',
              'Access-Control-Allow-Origin': "*"
            }
          }
                
                useEffect(()=>{
                    axios.get(`http://13.124.26.107:9095/api/image/${item.identifyId}`, iconfig)
                        .then(response => {
                            setImage(response.data)
                            console.log(image);
                        })
                },[])

                const Delete = () => {
                    if(window.confirm("제품을 삭제하시겠습니까?")){
                        axios.delete('http://13.124.26.107:9095/api/item', 
                        {
                            headers: {
                            'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': "*"
                            },
                            data: {name: item.name, info: item.info, price: item.price, category: item.smallCategory}
                        })
                        .then(response => {
                            alert("성공적으로 삭제 했습니다.")
                            LoadItem();
                        })
                        .catch(error => {
                            alert("상품 삭제에 실패했습니다.");
                        })
                    }
                }
            
                const Edit = () => {
            
                }
            
             
                const EditBorder = () => {
                    return(
                    <S.LoginBackground>
                     <S.Xbutton onClick={()=>setEdit(false)}><svg aria-label="닫기" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></S.Xbutton>
                    <S.EditBorder>
                        <S.Edit onClick={()=>Delete()} color="red">삭제</S.Edit>
                        <S.Edit onClick={()=>Edit()}>수정</S.Edit>
                        <S.BEdit onClick={()=>setEdit(false)}>닫기</S.BEdit>
                    </S.EditBorder>
                    </S.LoginBackground>
                    )
                }
            
                const ItemBorder = () => {
                    return(
                <S.LoginBackground>
                <S.Xbutton onClick={()=>setChange(false)}><svg aria-label="닫기" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></S.Xbutton>
                        <S.Item>
                    <S.ImageDiv>
                      <S.Image src={image}/>
                    </S.ImageDiv>
                <S.ItDiv>
                <S.IUSer>
                    <S.Profile src={Profile}></S.Profile>
                    <S.ProfileSpan>{item.member.name}</S.ProfileSpan>
                </S.IUSer>
                <S.IEX>
                    <S.Iname>{item.name} ({item.price}원)</S.Iname>
                    <S.IP>{item.info}</S.IP>
                </S.IEX>
                </S.ItDiv>      
                </S.Item>
                </S.LoginBackground>
                    );
                }
            
                return(
                    <>
                    <S.RDiv>
                        <S.RHead>
                            <S.RHUser>
                                <S.RHImg src={Profile}></S.RHImg>
                                <S.RHName>{item.member.name}</S.RHName>
                            </S.RHUser>
                            <S.RI onClick={()=>setEdit(true)}>
                                <i style={{color:"gray"}} class="fa fa-bars fa-lg"></i>
                            </S.RI>
                        </S.RHead>
                        <S.RImg  onClick={()=>setChange(true)} src={`http://13.124.26.107:9095/api/image/${item.identifyId}`}/>
                        <S.RBody>
                            <S.Rp>{item.name} ({item.price}원)</S.Rp>
                            <p>{item.info}</p>
                        </S.RBody>
                    </S.RDiv>
                    {change === true ?
                        <ItemBorder />
                        :
                        <></>
                    }
                    {edit === true ? 
                        <EditBorder />
                        :
                        <></>
                    }
                    </>
                );
            }
            
            return(
                lists.map(
                    item => ( 
                        <Select item={item}/>
                    )
                )
            )
    }

    useEffect(()=>{
        LoadItem();
        setSlist([...list.slice(0, snum)])
    },[]);

        const config = {
            headers: {
              'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': "*"
            }
          }
    
    /*
    useEffect(()=>{
        if(document.documentElement.scrollTop + window.innerHeight >= document.body.scrollHeight) {
            if(snum <= list.length){
                setSnum(snum+3);
                setSlist([list.slice(0, snum)])
            }
        }
    })*/

    return(
        <S.C>
            <S.Border id="border">
                {loading === true ?
                <Loading />
                :
                <S.ItemD>
                    <Item lists={list}/>
                </S.ItemD>
                }
            </S.Border>
        </S.C>
    )
}

export default MainPage