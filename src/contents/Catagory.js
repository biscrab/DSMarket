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

    const Set = () => {
        /*if(location.pathname.includes(`/${item.path}`)){
            //history.push(location.pathname.replace(`/${item.path}`));
            console.log(location.pathname);
        }
        else{
            var splice = location.pathname;
            splice = location.pathname.split('/');
            var c = ""
            for(var i = 0; i < 2; i++){
                c += splice[i];
            }
            history.push(c);
        }*/
        console.log(history);
    }

    return(
        <>
        <S.Box onClick={() => Set()}>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
                <span>{item.name}{location.pathname}</span>
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