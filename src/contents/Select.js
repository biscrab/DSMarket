import React,{useEffect, useState} from 'react'
import { useHistory, useLocation, useParams, Link } from 'react-router-dom'
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
        if(location.search){
            setL(`?${path}=${item.link}`);
        }
        else{
            setL(location.search+`&${path}=${item.link}`);
        }
    }

    useEffect(()=>{
        setLink();
        var a = `${path}=${item.link}`;
        if(location.search.includes(a)){
            setCheck(true);
        }

        console.log(a);
    },[]);

    return(
        <Link to={{search: l}} style={{ textDecoration: 'none', color: 'black'}}>
        <S.Box>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check}></input>{item.i ? <S.Icon src={item.i}></S.Icon> : <></>}<span>{item.name}</span>
            </div>
        </S.Box>
        </Link>
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