import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'

const Select = ({item}) => {

    let history = useHistory();

    const [change, setChange] = useState(-1);

    const Delete = () => {
        if(window.confirm("제품을 삭제하시겠습니까?")){
            //삭제
        }
        else{

        }
    }

    return(
        <S.RDiv>
            <S.RImgDiv>
            <S.RImg src={item.img} onClick={()=>history.push(`/item/${item.id}`)}/>
            <S.SMY onClick={() => setChange(change*-1)}><i class="fas fa-bars "></i></S.SMY>
            {change === 1 ? 
                <S.SelectMyUl>
                    <S.SelectLi>판매중</S.SelectLi>
                    <S.SelectLi>거래중</S.SelectLi>
                    <S.SelectLi color="crimson" onClick={()=>Delete()}>삭제</S.SelectLi>
                </S.SelectMyUl>
                :
                <></>
            }
            </S.RImgDiv>
            <S.Rp>{item.name}</S.Rp>
            <S.Rprice>{item.price}원</S.Rprice>
        </S.RDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item} key={item.name} name={item.name} price={item.price} img={item.img} id={item.id}/>
        )
    )
    return itemList
}

export default List;