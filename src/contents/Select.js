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

    useEffect(()=>{       
        if(location.search.includes(item.link)){
            console.log(item.link);
            setCheck(true);
        }
    },[]);

    return(
        <>
        {check ? 
        <S.Box>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check} style={{marginRight: "5px"}}></input><span>{item.name}</span>
            </div>
        </S.Box> 
        :
        <S.Box>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check} style={{marginRight: "5px"}}></input><span>{item.name}</span>
            </div>
        </S.Box>
        }
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