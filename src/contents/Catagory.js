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
        if(location.pathname.includes(`/${item.path}`)){
            location.pathname = location.pathname.replace(`/${item.path}`);
        }
        else{
            var count = 0;
            var searchChar = '/'; // 찾으려는 문자
            var pos = location.pathname.indexOf(searchChar); 
            while (pos !== -1) {
                count++;
                pos = location.pathname.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
            }
            if(count >= 3){

            }
            else{
                
            }
        }
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