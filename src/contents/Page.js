import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Item } from '../pages'
import * as S from '../styled/App'

const Page = ({item}) => {

    const [l, setL] = useState();

    const setLink = (path, link) => {
        var a = `${path}=${link}`;
        console.log("search:"+location.search);
        if(location.search.includes(`${path}=`)){
            if(location.search.includes('&')){
            }
            else{
            setL(`,${link}`);
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

        history.push(...location.search, l);
    }

    let location = useLocation();
    let history = useHistory();
    const query = queryString.parse(location.search);
    
    return(
        <S.Pbutton onClick={()=>setLink("p", item)} bkcolor={Number(query.p) === item ? "royalblue" : "white"} color={Number(query.p) === item ? "white" : "black"}>
            {item}
        </S.Pbutton>
    )
}

const List = ({lists}) => {
    const itemlist = lists.map(
        item => (
            <Page item={item} />
        )
    )
    return itemlist
}

export default List