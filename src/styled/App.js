import styled from 'styled-components'

export const Header = styled.div`
    top: 0;
    margin: 0px;    
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
    background-color: white;
    border-bottom: 1px solid #eeeeee;
`

export const HDiv = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
`

export const Logo = styled.h1`
    position: relative;
    margin: 0px;
    margin-right: 10px;
    color: royalblue;
`

export const LogoImg = styled.img`
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
`

export const SBox = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    display: flex;
    border: 3px solid royalblue;
    border-radius: 10px;
    width: 550px;
    height: 42px;
    background-color: white;
`

export const SSelect = styled.a`
    margin-left: 20px;
    font-size: 18px;
    text-decoration: none;
    color: black;
`

export const SS = styled.span`
    margin-left: 5px;
`

export const Search = styled.input`
    height: 36px;
    width: 100%;
    border: 0;
    font-size: 15px;
    outline: 0;
    margin: 0;
    position: relative;

    padding: 0px 10px;
`

export const M = styled.div`
    position: relative;
    left: 50%;
    width: 500px;
    transform: translateX(-50%);
`

export const Link = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`
export const MainBanner = styled.div`
    background-color: white;
    height: 500px;
`
export const BannerImage = styled.img`
    position: absolute;
    width: 100%;
    height: 500px;
    animation: next 10s 1 next;

    @keyfrmes next {
        0%{
            left: 0%;
        }
        100%{
            left: 100%;
        }
    }
`

export const Best = styled.h1`
    margin: 0px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    text-align: center;
    top: 10%;
`

export const CDiv = styled.div`
    position: relative;
    height: auto;
    width: 200px;
    display: flex;
    flex-direction: column;
`

export const TotalCategory = styled.button`
    background-color: #A0BAED;
    font-size: 18px;
    color: white;
    margin: 0px;
    border: 0px;
    height: 82px;
    width: 200px;
`

export const Category = styled.span`
    font-style: bold;
    font-size: 18px;
    width: 200px;
    height: 47px;
    color: white;
    display: flex;
    position: relative;
    justify-content: center;
    background-color: #B2CCFF;
    border-top: 1px solid #D6F0FF;

    :hover{
        color: #B2CCFF;
        background-color: white;
    }
`
export const CSpan = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    color: ${props => props.color};
`

export const Select = styled.div`
    border: 2px solid #eeeeee;
    height: auto;
    border-top: 0;
    position: relative;
    width: 180px;
    display: flex;
    flex-direction: column;
`

export const CSelect = styled.div`
    display: flex;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    width: 160px;
    height: 200px;
    border-top: 2px solid #eeeeee;
`

export const CBox = styled.div`
    height: auto;
`

export const MyDiv = styled.div`
    padding: 20px;
    width: 350px;
    height: 400px;
`

export const My = styled.div`
    display: flex;
`

export const MyImg = styled.img`
    border-radius: 50%;
    height: 60px;
    width: 60px;
`

export const MyInfoDiv = styled.div`
    position: relative;
    left: 20px;
    display: flex;
    flex-direction: column;
`

export const MyInfo = styled.span`
    color: ${props => props.color};
` 

export const OtherUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    position: relative;
    top: 30px;
`

export const OtherLi = styled.li`
    display: flex;
    align-items: center;
    height: 40px;
`

export const OtherTittle = styled.span`
    position: relative;
    top: 20px;
    color: gray;
`

export const OtherImg = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
`

export const OtherName = styled.span`
    padding-left: 10px;
    color: gray;
`

export const SearchH = styled.h5`
    color: royalblue;
`

export const C = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 20px;
`

export const ItemBox = styled.li`
    float: left;
    width: 300px;
    height: 355px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 1px solid #eeeeee;

    :hover{
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
    }
`

export const Page = styled.div`
    background-color: white;
    height: 40px;
`

export const Order = styled.ul`
    position: relative;
    top: 20px;
    padding: 10px;
    background-color: whitesmoke;
    height: 45px;
    margin: 0;
    list-style: none;
    display: flex;
`

export const Border = styled.div`
    position: relative;
    top: 40px;
    padding: 0;
    list-style: none;
    display: flex;
`

export const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
`

export const LoadingD = styled.div`
    display: flex;
    flex-direction: column;
`

export const LoadingP = styled.p`
    color: gray;
    font-size: 20px;
`

export const ItemImg = styled.img`
    height: 190px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const ImageDiv = styled.div`
    width: 550px;
    height: 550px;
`

export const Heart = styled.div`
    position: relative;
    bottom: 40px;
    left: 605px;
    color: white;
`

export const Info = styled.div`
    margin-left: 40px;
    height: 410px;
`

export const ItDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 300px;
`

export const ADiv = styled.div`
    height: auto;
    border-bottom: 1px solid #eeeeee;
`

export const AProfile = styled.img`
    height: 50px;
`

export const Price = styled.div`
    height: 80px;
    border-bottom: 1px solid #eeeeee;
`

export const PText = styled.h2`
    color: crimson;
`
export const DText = styled.p`
    font-size: 15px;
    color: green;
`
export const Related = styled.div`
    margin: 0px;
    position: relative;
    top: 20px;
    height: 600px;
`

export const RelatedH = styled.h3`
    color: gray;
    position: relative;
    margin: 0;
`

export const Detail = styled.div`

`

export const ButtonDiv = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
`

export const Buy = styled.button`
    background-color: royalblue;
    width: 240px;
    height: 60px;
    border: 0px;
    color: white;
    font-size: 20px;
`

export const Bucket = styled.button`
    background-color: white;
    border: 1px solid #eeeeee;
    height: 60px;
    width: 240px;
    font-size: 20px;
`

export const IDiv = styled.div`
    height: 1000px;
    display: flex;
    justify-content: center;
`
export const EDiv = styled.div`
    width: 800px;
    height: 900px;
    display: flex;
    flex-direction: column;
`

export const BuyDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 700px;
    border: 1px solid #eeeeee;
    border-top: 0px;
    padding: 15px;
    margin-left: 30px;
`

export const BBill = styled.div`
    background-color: #eeeeee;
    width: 100%;
    height: 150px;
    position: relative;
    top: 30px;
`

export const BBillDiv = styled.div`
    height: 430px;
`

export const BB = styled.button`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.bkcolor};
    width: 240px;
    height: 60px;
    border: 0px;
    border: ${props => props.border} solid #eeeeee;
    color: ${props => props.color};
    font-size: 20px;
    margin-top: 10px;
`

export const BBDiv = styled.div`
    border-top: 1px solid gray;
    height: 70px;
    position: relative;
    display: flex;
    justify-content: space-between;
`

export const BuyImgDiv = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
`

export const BuyImg = styled.img`
    width: 80px;
    height: 80px;
    background-color: #eeeeee;
    margin: 10px;
`

export const O = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 100px;
    background-color: rgba(0, 0, 0, 0.02)
`
export const ODiv = styled.div`
    list-style: none;
    height: 70px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`

export const OBorder = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 900px;
    list-style: none;
`

export const Have = styled.li`
    background-color: skyblue;
    background-color: ${props => props.color};
    border-right: 1px solid white;
    height: 100%;
    width: 340px;
    color: white;
    text-align: center;
    font-size: 20px;
    display: flex;
    flex-direction: column;
`

export const HSpan = styled.p`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    margin: 0;
`

export const CTDiv = styled.div`
    position: relative;
    left: 10%;
    width: 80%;
    height: 100%;
    display: flex;
`

export const CBorder = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 1000px;
    height: 100%;
    background-color: white;
`

export const Cli = styled.li`
    margin-right: 15px;
    color: ${props => props.color}
`

export const DileveryTime = styled.p`
    font-size: 20px;
`

export const RelatedDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const RDiv = styled.div`
    width: 600px;
    height: 700px;
    margin: 0;
    margin-bottom: 20px;
    border: 2px solid #eeeeee;
    display: flex;
    flex-direction: column;
` 

export const RHead = styled.div`
    background-color: white;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
`

export const RHUser = styled.div`

`

export const RHImg  = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
`

export const RHName = styled.span`
    padding-left: 10px;
`

export const RImgDiv = styled.div`
    height: 200px;

`

export const RImg = styled.img`   
    height: 500px;
    width: 100%;
`

export const MyRDiv = styled.div`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

export const MyRBack = styled.div`
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    z-index: 10;
    :hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const RBody = styled.div`
    padding: 10px;
`

export const MyRImg = styled.img`
    height: 100%;
    width: 100%;
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`

export const Check = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const BDiv = styled.div`
    margin: 20px;
    height: 350px;
`
export const Bfont = styled.p`
    font-size: 18px;
    margin-bottom: 5px;
`
export const Bprice = styled.span`
    font-style: bold;
    font-size: 20px;
    margin: 0;
`

export const BCDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 200px;
    height: 455px;
    border-right: 2px solid #eeeeee;
`

export const BCTDiv = styled.div`
    display: flex;
`

export const Quick = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 45px;
`
export const BImg = styled.img`
    position: relative;
    top: 40px;
    width: 320px;
    height: 200px;
    background-color: whitesmoke;
`

export const Ad = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 40px;
    width: 320px;
    height: 300px;
`

export const ATittle = styled.h3`
    position: relative;
    margin: 0;
    top: 40px;
`

export const AExplane = styled.p`
    position: relative;
    top: 40px;
    color: gray;
`

export const PointDiv = styled.div`
    display: flex;
    align-content: center;
    padding: 0 8px;
    width: 100px;
    height: 20px;
    border: solid 1px #ccc;
    border-radius: 10px;
    font-size: 13px;
    box-sizing: border-box;
`

export const Pspan = styled.span`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

export const SImg = styled.img`
    position: relative;
    top: 5px;
    left: 7px;
    color: whitesmoke;
    width: 32px;
    height: 32px;
`

export const Qtext = styled.p`
    margin: 0%;
    position: relative;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
`

export const SDiv = styled.div`
    width: 495px;
    position: relative;
    left: 5px;
    margin-right: 10px;
`

export const SBorder = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 45px;
    z-index: 1;
    list-style: none;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
    width: 530px;
    height: 441px;
`

export const SLi = styled.li`
    padding: 0;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
`

export const Sspan = styled.span`
    margin-left: 15px;
    color: gray;
`

export const Ip = styled.p`
    position: relative;
    font-size: 17px;
    top: 10px;
`
export const Recent = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    width: 95%;
    height: 40px;
    border-bottom: 1px solid #eeeeee;
`

export const RecentP = styled.p`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

export const Input = styled.input`
    width: 80%;
    height: 30px;
    font-size: 15px;
    padding: 0px 10px;
    :forcus{
        outline: 1px solid royalblue;
    }
`

export const OInput = styled.input`
    width: 450px;
    height: 30px;
    :forcus{
        outline: 1px solid royalblue;
    }
`

export const Max = styled.div`
    background-color: #eeeeee;
    height: 30px;
    width: 70px;
    padding: 5px;
    text-align: center;
    border: 1px solid lightgray;
`

export const R = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 100px;
`
export const ImgDiv = styled.div`
    width: 80%;
    height: 300px;
    border: 1px solid #eeeeee;
`
export const Next = styled.div`
    position: relative;
    top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: white;
`

export const LR = styled.div`
    position: relative;
    background-color: white;
    border-bottom: 1px solid #eeeeee;
    height: 35px;
`

export const LD = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 1055px;
`

export const Head = styled.div`
    position: fixed;
    width: 100%;
    top: 0; 
    z-index: 100;   
    display: flex;
    flex-direction: column;
`

export const S = styled.div`    
    position: relative;
    top: 20px;
    display: flex;
    justify-content: center;
`
export const L = styled.span`
    color: gray;
    margin-right: 10px;
`

export const LogOut = styled.button`
    position: relative;
    background-color: white;
    border: 1px solid #cccccc;
    color: gray;
    height: 25px;
    margin: 0px;
`

export const CTittle = styled.h3`
    color: gray;
    position: relative;
    top: 20px;
    margin-bottom: 35px;
`

export const LoginBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 1000;
    width: 100%;
    height: 110%;
    top: -70px;
    padding-top: 70px;
    background-color: rgba(0, 0, 0, 0.5);
`

export const Xbutton = styled.button`
    background-color: rgba(0,0,0,0);
    border: 0;
    position: absolute;
    left: 96%;
    top: 12%;
`

export const LoginDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 20%;
    width: 450px;
    height: 550px;
    margin: 0;
`

export const LoginInput = styled.input`
    position: relative;
    margin-bottom: 50px;
    width: 80%;
    height: 40px;
    margin-top: 10px;
    transform: translateX(-50%);
    left: 50%;
`

export const LoginSpan = styled.span`
    text-align: start;
    position: relative;
    left: 40px;
    font-size: 20px;
    color: darkgray;
    margin: 0;
`

export const LoginTittle = styled.div`
    background-color: royalblue;
    color: white;
    font-size: 30px;
    height: 60px;
    margin-bottom: 30px;
`

export const LT = styled.span`
    position: relative;
    top: 10px;
`

export const LoginButton = styled.button`
    border: 0;
    width: 80%;
    height: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.color};
    color: ${props => props.c};
    margin-bottom: 20px;
    font-size: 20px;
`

export const X = styled.span`
    position: relative;
    left: 33%;
`

export const AdminDiv = styled.div`
    background-color: white;
    position: relative;
    margin-top: 50px;
    height: 900px;
    width: 1000px;
    left: 50%;
    transform: translateX(-50%);
`

export const A = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    background: #eeeeee;
`

export const ASDiv = styled.div`
    height: 70px;
    display: flex;
    list-style: none;
`

export const AS = styled.li`
    width: 50%;
    height: 70px;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 20px;
    background-color: ${props => props.color};
    border-right: 1px solid white;
`

export const AUl = styled.ul`
    height: 830px;
    width: 920px;
    list-style: none;
`
export const ALi = styled.li`
    height: 50px;
    border-bottom: 2px solid #eeeeee;
`

export const Box = styled.div`
    position: relative;
    height: 27px;
    font-size: 15px;
    color : ${props => props.color};
    :hover{
        background-color: #eeeeee;
    }
`

export const Ca = styled.div`
    background-color: #eeeeee;
    height: 1000px;
`

export const PriceInput = styled.input`
    width: 40px;
    height: 25px;
    border: 1px solid #eeeeee;
`

export const PriceButton = styled.button`
    background-color: royalblue;
    position: relative;
    height: 27px;
    left: 5px;
    color: white;
    border: 0;
`

export const CartNumber = styled.em`
    background-color: royalblue;
    color: white;
    border-radius: 50%;
    position: absolute;
    height: 20px;
    width: 20px;
    top: -5px;
    text-align: center;
    font-size: 15px;
    font-style: normal;
`

export const CartImg = styled.img`
    position: relative;
    left: 180px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
`

export const CartTittle = styled.h1`
    position: relative;
    left: 180px;
    margin: 0;
    font-size: 35px;
`

export const CartHead = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #f3f3f3;
`

export const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 900px;
    padding: 0;
    margin: 0;
    list-style: none;
`

export const Si  = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    padding-top: 20px;
`

export const SignUpInput = styled.input`
    width: 400px;
    height: 40px;
    margin-bottom: 55px;
    padding: 0px 10px;
`

export const SiDiv = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 550px;
`

export const SiButton = styled.button`
    background-color: royalblue;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: white;
    border: 0;
    border-radius: 5px;
`

export const RegistDiv = styled.div`
    background-color: white;
    height: auto;
    width: 1050px;
    border: 1px solid lightgray;
    padding: 20px;
    margin-bottom: 20px;
`

export const Dropzone = styled.div`
    background-color: rgba(0, 0, 0, 0.03);
    height: 400px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    font-size: 20px;
`

export const Explane = styled.textarea`
    width: 80%;
    height: 300px;
    padding: 10px;
    resize: none;
`

export const CS = styled.span`
    position: relative;
    font-size: 20px;
    left: 20px;
`

export const CSDiv = styled.div`
    height: 300px;
    width: 200px;
    border: 1px solid lightgray;
    overflow-y: auto;
`

export const CSLi = styled.li`
    padding: 7px;
    :hover{
        background-color: #D4F4FA;
    }
`

export const CSUl = styled.ul`
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
`

export const InputDiv = styled.div`
    display: flex;
`

export const RegistImg = styled.div`
    border-style: dashed solid;
    border-color: #eeeeee;
    outline: 0;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
`

export const RegistDetail = styled.li`
    display: flex;
    padding: 0px 10px;
    height: 50px;
    border-bottom: 2px solid #eeeeee;
    align-items: center;
`

export const RegistSpan = styled.span`
    color: royalblue;
    font-size: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

export const Pbutton = styled.button`
    height: 40px;
    width: 40px;
    font-size: 15px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 5px;
    margin-left: 5px;
    background-color: white;
    background-color: ${props => props.bkcolor};
    color: black;
    color: ${props => props.color};
    border: 0;
    border-radius: 50%;
`

export const PriceDiv = styled.div`
    margin-bottom: 10px;
`

export const More = styled.span`
    color: royalblue;
`

export const CaLi = styled.li`
    height: 50px;
    background-color: white;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const CaBottom = styled.div`
    height: 30px;
    width: 790px;
    background-color: #f8f9fa;
    position: relative;
    padding-left: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
`

export const Bill = styled.div`
    border-bottom: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
`

export const CA = styled.div`
    padding-bottom: 100px;
`

export const OrderDiv = styled.div`
    height: auto;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    background-color: #eeeeee;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const OrderDivD = styled.div`
    width: 1130px;
`

export const OrderSpanD = styled.div`
    position: relative;
    font-size: 16px;
    padding: 10px;

    :hover{
        color: royalblue;
    }
`

export const CaDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 600px;
    padding-left: 2%;
`

export const CaImg = styled.img`
    height: 80px;
    width: 80px;
`

export const CaSpan = styled.span`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid lightgray;

    :hover {
        text-decoration: underline;
    }
`
export const CaInput = styled.input`
    width: 40px;
    height: 20px;
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid gray;
`

export const CaB = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CaPrice = styled.span`
    height: 30px;
    display: flex;
    align-items: center;
`

export const UploadButton = styled.button`
    border: ${props => props.border} solid #eeeeee;
    width: 100px;
    height: 40px;
    color: ${props => props.color};
    background-color: ${props => props.bkcolor};
`

export const RegistDetailUl = styled.ul`
    list-style: none;
    padding: 0;
    height: auto;
    display: flex;
    flex-direction: column;
` 
export const DetailDiv = styled.div`
    position: relative;
    display: flex;
    align-content: center;
    width: auto;
    justify-content: space-around;
`

export const DetailSelect = styled.select`
    height: 30px;
    width: 100px;
`
export const DetailSpan = styled.span`
    width: 100px;
`

export const DetailSDiv = styled.div`
    margin-right: 20px;
`

export const SignUpDiv = styled.div`
    display: flex;
    position: relative;
    top: 20px;
`

export const SignSpan = styled.span`
    width: 150px;
`

export const OrderSpan = styled.span`
    position: relative;
    left: 270px;
    font-size: 16px;
    padding: 10px;

    :hover{
        color: royalblue;
    }
`

export const StarDiv = styled.div`
color: #aaa9a9; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #2b2a29;
`

export const StarBase = styled.div`
    z-index: 0;
    padding: 0;
`

export const StarRating = styled.div`
width: ${props => props.width};
color: #fff58c;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: gold;
`

export const Top = styled.div`
    position: relative;
    display: flex;
    top: 15px;
    height: 98px;
    padding: 10px;
`

export const BillDiv = styled.div`
    background-color: white;
    margin-left: 20px;
    padding: 20px;
    width: 330px;
    height: 400px;
    display: flex;
    flex-direction: column;
`

export const CaD = styled.div`
    position: relative;
    top: 50px;
    display: flex;
    justify-content: center;
`

export const Myitem = styled.div`
    height: 50px;
    border-bottom: 1px solid #eeeeee;
`

export const BD = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
`

export const MoreDiv = styled.div`
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8) 66%, rgba(255, 255, 255, 0.94) 83%, rgba(255, 255, 255, 0.98) 91%, #ffffff);
    width: 800px;
    height: 100px;
    z-index: 100;
    bottom: 100px;
    position: absolute;
`

export const MoreButton = styled.button`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 50px;
    color: royalblue;
    background-color: white;
    font-size: 20px;
    border: 1px solid royalblue;
`

export const MoreButtonDiv = styled.div`
    position: relative;
    background-color: white;
    height: 100px;
    width: 800px;
    display: flex;
    align-items: center;
`

export const MDiv = styled.div`
    position: relative;
    width: 800px;
    height: 100px;
`

export const EI = styled.div`
    width: 800px;
    height: 900px;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
`

export const Rp = styled.p`
    margin: 0;
    width: 100%;
    position: relative;
    top: 5px;
    font-size: 16px;
    padding: 0px 5px;
`
export const Rprice = styled.b`
    position: relative;
    top: 10px;
    font-size: 15px;
    text-decoration: bold;
    margin: 0;
    padding: 0px 5px;
`

export const Sel = styled.select`
    height: 40px;
    width: 110px;
    border: 0;
    outline: 0;
`

export const None = styled.h2`
    color: gray;
    position: relative;
    top : 50px;
    text-align: center;
`

export const RButton = styled.button`
    border: 1px solid lightgray;
    background-color: ${props => props.bkcolor};
    color: ${props => props.color};
    width: 200px;
    height: 50px;
    position: relative;
    left: 850px;
`

export const CaSelect = styled.input`
    width: 17px;
    height: 17px;
    position: relative;
    margin-right: 30px;
    top: 40%;
    left: 10px;
    transform: translateY(-50%);
`

export const P = styled.div`
    display: flex;
    justify-content: center;
`

export const UserInfo = styled.ul`
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    height: 60px;
    width: 500px;
`

export const UIspan = styled.span`
    width: 50px;
`

export const PADiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    margin-right: 20px;
    margin-left: 20px;
`

export const ItemInfo =  styled.div`
    border: 2px solid gray;
    width: 500px;
    height: auto;
`

export const InfoNumber = styled.div`
    background-color: #eeeeee;
    margin: 10px;
    height: 60px;
    text-align: center;
    font-size: 20px;
`

export const DiliveryDiv = styled.ul`
    height: 150px;
    padding: 0px 10px;
    border-bottom: 2px solid lightgray;
`

export const DiliverySpan = styled.span`
    width: 100px;
`
export const DiliveryLi = styled.div`
    height: 40px;
    display: flex;
`

export const DName = styled.input`
    height: 20px;
    width: 200px;
`

export const DNum = styled.input`
    height: 20px;
    width: 50px;
    margin-left: 5px;
    margin-right: 5px;
`

export const DF = styled.select`
    height: 26.5px;
    width: 57px;
    margin-right: 10px;
`

export const PaymentDiv = styled.div`
    height: 250px;
    border: 3px solid royalblue;
    padding: 20px;
    width: 458px;
    margin-top: 30px;
`

export const PaymentButton = styled.button`
    height: 70px;
    width: 100%;
    position: relative;
    background-color: royalblue;
    color: white;
    border: 0;
`

export const CatagoryDivLi = styled.li`
    width: 100%;
    font-size: 17px;
    text-align: center;
    color: gray;
    padding: 5px;
`

export const CatagoryDivUl = styled.ul`
    list-style: none;
    text-align: start;
    padding: 20px;
    padding-top: 0;
    margin: 0;
`

export const CommentSpan = styled.span`
    width: 70%;
    margin-left: 20px;
`

export const CommentUl = styled.ul`
    height: ${props => props.height};
    border-top: 2px solid darkgray;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    padding: 0;
`

export const CommentH = styled.h2`
    color: gray;
    margin-bottom: 20px;
`

export const Item = styled.div`
    background-color: white;
    width: 850px;
    height: 550px;
    display: flex;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

export const CatagoryH = styled.h3`
    position: relative;
    top: 5px;
`

export const OrderItemDiv = styled.li`
    background-color: white;
    height: 100px;
    border: 1px solid #eeeeee;
    display: flex;
`

export const OrderItemImg = styled.img`
    height: 80px;
    width: 80px;
    padding: 10px;
`

export const OrderItemSpan = styled.span`
    width: 100px;
    height: 20px;
    font-size: 18px;
    padding: 10px;
`

export const ATop = styled.div`
    height: 330px;
`

export const Card = styled.div`
    width: 300px;
    margin-bottom: 50px;
`

export const IUSer = styled.div`
    height: 65px;
    padding: 10px;
    border-bottom: 2px solid #eeeeee;
`

export const IExplane = styled.div`
    border-bottom: 2px solid #eeeeee;
    padding: 10px;
`

export const ItemPrice = styled.p`
    font-size: 16px;
`

export const Iname = styled.p`

`

export const Gray = styled.p`
    color: gray;
`

export const Profile = styled.img`
    width: 40px;
    height: 40px;
`

export const ProfileSpan = styled.span`
    position: relative;
    left: 10px;
    font-size: 18px;
`

export const Unknown = styled.h1`
    position: relative;
    top: 50px;
    font-size: 50px;
    text-align: center;
`

export const Gohome = styled.h4`
    position: relative;
    top: 60px;
    text-align: center;
`