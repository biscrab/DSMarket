import React,{useState} from 'react'
import * as S from '../styled/App'

const Select = ({item}) => {
    
    const [check, setCheck] = useState(false);

    return(
        <S.Box onClick={() => {check ? setCheck(false) : setCheck(true)}}>
            <div style={{position:"relative", top:"50%", transform:"translateY(-50%)"}}>
            <input type="checkbox" checked={check}></input>{item.i ? <S.Icon src={item.i}></S.Icon> : <></>}<span>{item.name}</span>
            </div>
        </S.Box>
    );
}

const List = ({lists}) => {

    const itemList = lists.map(
        item => (
            <Select item={item} key={item.name} name={item.name} i={item.i}/>
        )
    )
    return itemList
}

export default List;