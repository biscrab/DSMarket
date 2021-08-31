import React,{useState} from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import queryString from 'query-string'
import * as S from '../styled/App'

const Select = ({item, path}) => {
    
    const [check, setCheck] = useState(false);

    let history = useHistory();
    const location = useLocation();
    const params = useParams();
    const query = queryString.parse(location.search);

    const Link = () => {
        if(location.search !== ''){
            history.push(`?${path}=${item.link}`);
        }
        else{
            history.push(`&${path}=${item.link}`);
        }
    }

    return(
        <S.Box onClick={() => Link()}/*{check ? setCheck(false) : setCheck(true)}}*/>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check}></input>{item.i ? <S.Icon src={item.i}></S.Icon> : <></>}<span>{item.name}</span>
            </div>
        </S.Box>
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