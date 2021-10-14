import styled from 'styled-components'


export const M = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
`

export const Select = styled.div`
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
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #EAEAEA;
    padding-bottom: 20px;
`

export const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const Profile = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-right: 20px;
`

export const UserInfo = styled.div`
    display: flex;
`
export const UserName = styled.h3`
    margin: 0;
    color: gray;
`

export const Div = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 830px;
    height: 100%;
    border: 1px solid #eeeeee;
    border-top: 0;
    background-color: white;
    padding: 20px;
`

export const ItemDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 350px;
 `

export const Introduce = styled.textarea`
    width: 690px;
    resize: none;
    padding: 10px;
    outline: 0;
    border: 0;
    min-height: 90px;
    border: 2px solid darkgray;
`

export const IButton = styled.button`
    height: 90px;
    width: 90px;
    background-color: white;
    border: 2px solid darkgray;
`

export const IDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 10px;
    justify-content: space-between;
`

/*export const IntroduceDiv = styled.div`
    position: relative;
    top: 10px;
    height: auto;
    width: 100%;
    resize: none;
    padding: 10px;
`*/

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
    height: 500px;
    overflow-y: scroll;
    ::-webkit-scrollbar-thumb {
        background-color: none;
    }
    ::-webkit-scrollbar {
        border-radius: 5px;
    }
`

export const RIDiv = styled.div`
    border: 2px dashed gray;
    width: 100%;
    height: 150px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const RDiv = styled.div`
    display: flex;
    margin-top: 10px;
    height: 70%;
    justify-content: space-between;
`

export const RText = styled.textarea`
    width: 89%;
    resize: none;
    padding: 10px;
    outline: 0;
    border: 2px solid darkgray;
    :focus-within{
        outline: 4px solid #D4F4FA;
    }
`

export const RButton = styled.button`
    width: 10%;
    background-color: white;
    border: 2px solid darkgray;
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

export const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0px;
    left: 0;
`