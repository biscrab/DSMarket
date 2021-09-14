import styled from 'styled-components'


export const M = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
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

export const RegistButton = styled.button`
    height: 60px;
    border: 0;
    background-color: royalblue;
    color: white;
    font-size: 20px;
    border-radius: 5px;
`

export const Introduce = styled.textarea`
    position: relative;
    top: 20px;
    height: 400px;
    resize: none;
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
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
` 

export const RProfile = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`

export const Span = styled.span`
    position: relative;
    top: 5px;
    left: 40px;
    color: gray;
`