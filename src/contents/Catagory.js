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

    const Del = () => {
        var a = location.pathname;
        a = a.replace(`/${item.path}`,"");

        history.push(a);
    }


    return(
        <>
        {b ?        
        <S.Box>
            <div onClick={()=> Del()}style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                <span>{item.name}{location.pathname}</span>
            </div>
        </S.Box> 
        :  
        <S.Box onClick={() => history.push(location.pathname+`/${item.path}`)}>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                <span>{item.name}{location.pathname}</span>
            </div>
        </S.Box>
        }
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