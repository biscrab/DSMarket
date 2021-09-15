import React,{useState, useEffect} from 'react'
import { useHistory, Link, useLocation } from 'react-router-dom'
import * as S from '../styled/App'

const Catagory = ({item}) => {

    let history = useHistory();
    let location = useLocation();
    const [b, setB] = useState(location.pathname.includes(`/${item.path}`));
    
    useEffect(()=>{
        setB(location.pathname.includes(`/${item.path}`));
    })

    return(
        <>
        <S.Box color={location.pathname.includes(item.path) ? "royalblue" : "black"} onClick={() => history.push(`/catagory/${item.path}`)}>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                <span>{item.name}</span>
            </div>
        </S.Box>
        </>
    );
}

const List = ({lists}) => {

    const itemList = lists.map(
        item => (
            <Catagory item={item} name={item.name} path={item.path}/>
        )
    )
    return itemList
}

export default List;