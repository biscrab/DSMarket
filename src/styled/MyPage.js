import styled from 'styled-components'


export const M = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
`

export const Select = styled.div`
    border-top: 1px solid #EAEAEA;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SSpan = styled.span`
    font-size: 16px;
    font-style: bold;
    color: #BDBDBD;
    color: ${props => props.color};
    padding: 8px 20px;
    font-family: 'Nanum Gothic', sans-serif;
`

export const User = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
`

export const Profile = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-right: 20px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 830px;
`

export const ItemDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 `

export const Introduce = styled.textarea`
    position: relative;
    top: 20px;
    height: 400px;
    resize: none;
    padding: 10px;
`

export const IntroduceDiv = styled.div`
    position: relative;
    top: 20px;
    height: 400px;
    resize: none;
    padding: 10px;
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
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
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

export const XButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: 0;
`