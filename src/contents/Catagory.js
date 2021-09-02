import React,{useState, useEffect} from 'react'
import { useHistory, useLocation, useParams, Link } from 'react-router-dom'
import queryString from 'query-string'
import * as S from '../styled/App'

const Catagory = ({item, path}) => {

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
    },[]);

    return(
        <Link to={{search: l}}>
        <S.Box>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                <span>{item.name}</span>
            </div>
        </S.Box>
        </Link>
    );
}

const List = ({lists, path}) => {

    const itemList = lists.map(
        item => (
            <Catagory item={item} name={item.name} link={item.link} path={path}/>
        )
    )
    return itemList
}

export default List;