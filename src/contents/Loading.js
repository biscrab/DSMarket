import * as S from '../styled/App'

const Loading = () => {
    return (
        <S.LoadingDiv>
            <S.LoadingD>
            <div class="spinner-border text-secondary" style={{width: "4rem", height: "4rem"}} role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <S.LoadingP>
                로딩중...
            </S.LoadingP>
            </S.LoadingD>
        </S.LoadingDiv>
    );
}

export default Loading