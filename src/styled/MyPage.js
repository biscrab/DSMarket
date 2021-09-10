import styled from 'styled-components'


export const M = styled.div`
    display: flex;
    justify-content: center;
`

export const Select = styled.div`
    border-bottom: 2px solid #EAEAEA;
    height: 40px;
`

export const SSpan = styled.span`
    font-size: 20px;
    font-style: bold;
    color: #BDBDBD;
    color: ${props => props.color};
    padding: 8px 20px;
`

export const User = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
`

export const Profile = styled.img`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-right: 20px;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`

export const ItemDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Card = styled.div`
    width: 200px;
    margin-bottom: 50px;
`

export const ItemImg = styled.img`
    height: 180px;
`

export const Review = styled.div`
    display: flex;
    flex-direction: column;
`

export const ReviewLi = styled.li`
    border-bottom: 2px solid #eeeeee;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background-color: rgba(0, 0, 0, 0.015);
` 