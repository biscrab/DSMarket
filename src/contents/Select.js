import React,{useEffect, useState} from 'react'
import { useHistory, useLocation, useParams, Link} from 'react-router-dom'
import queryString from 'query-string'
import * as S from '../styled/App'

const Select = ({item, path}) => {
    
    const [check, setCheck] = useState(false);

    let history = useHistory();
    const location = useLocation();
    const params = useParams();
    const query = queryString.parse(location.search);

    const [l, setL] = useState();

    const setLink = () => {
        var a = `${path}=${item.link}`;
        var c = ""
        if(location.search.includes(path)){
            if(location.search.includes('&')){
                var b = location.search.split('&');
                for(var i = 0; i < b.length; i++){
                    if(b[i].includes(path)){
                        b[i]+=`,${item.link}`;
                    }
                    c += b[i];
                }
                setL(c);
            }
            else{
            setL(`,${item.link}`);
            }
        }
        else if(location.search === ""){
            setL(`?${a}`);
            console.log(l);
        }
        else{
            setL(`&${a}`);
            console.log(l);
        }
    }

    const Del = () => {
        var a;
        if(location.search.includes(`&${path}=${item.link}`)){
            if(location.search.includes(`&${path}=${item.link},`)){
                a = location.search.replace(`${item.link},`,""); 
            }
            else{
                a = location.search.replace(`&${path}=${item.link}`,""); 
            }   
        }
        else if(location.search.includes(`${path}=${item.link},`)){
            a = location.search.replace(`${item.link},`,""); 
        }
        else if(location.search.includes(`,${item.link}`)){
            a = location.search.replace(`,${item.link}`,""); 
        }
        else{
            a = location.search.replace(`&${path}=${item.link}`,"");
            a = location.search.replace(`?${path}=${item.link}`,"");
            a = a.replace(`${path}=${item.link}`,"");
        }

        history.push(a);
    }

    useEffect(()=>{
        setLink();
        var a = item.link;
        if(location.search.includes(a)){
            setCheck(true);
        }
    },[]);

    return(
        <>
        {check ? 
        <S.Box onClick={() => Del()}>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check}></input>{item.i ? <S.Icon src={item.i}></S.Icon> : <></>}<span>{item.name}</span>
            </div>
        </S.Box> 
        :       
        <Link to={{search: location.search + l}} style={{ textDecoration: 'none', color: 'black'}}>
        <S.Box>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check}></input>{item.i ? <S.Icon src={item.i}></S.Icon> : <></>}<span>{item.name}</span>
            </div>
        </S.Box>
        </Link>}
        </>
    );
}

const List = ({lists, path}) => {

    const itemList = lists.map(
        item => (
            <Select item={item} key={item.name} name={item.name} i={item.i} link={item.link} path={path}/>
        )
    )
    return itemList
}

export default List;