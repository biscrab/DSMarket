import React from 'react'
import * as S from '../styled/App'

const Detail = ({item}) => {
    return(
        <S.RegistDetail>
            <span>{item.tittle}</span>
            <S.RegistSelect>
                <div>
                <input type="radiobox"></input>
                <span>{item.a}</span>
                </div>
                <div>
                <input type="radiobox"></input>
                <span>{item.b}</span>
                </div>
                {item.c ?
                <div>
                <input type="radiobox"></input>
                <span>{item.c}</span>
                </div> 
                : 
                <></>}
            </S.RegistSelect>
        </S.RegistDetail>
    );
}

const List = ({lists}) => {
    const itemList = lists.map = (
        item => (
            <Detail item={item} key={item.tittle} tittle={item.tittle} a={item.a} b={item.a} c={item.a}/>
        )
    )
    return itemList;
}

export default List
