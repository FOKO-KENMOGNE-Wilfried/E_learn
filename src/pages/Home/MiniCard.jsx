import PropTypes from "prop-types";
import styled from "styled-components";
import face from "../../assets/logo/face.png";

const StyledSubSubBox = styled.div`
    position: relative;
    background-size: cover;
    border-radius: 20px;
    width: 8vw;
    height: 25vh;
    gap: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
const StyledBottom =styled.div`
    position: relative;
    width: 80%;
    backdrop-filter: blur(5px);
    height: 50px;
    text-align: center;
    color: white;
    border-radius: 10px;
    padding-top: 10px;
`
const StyledBackImg =styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;;
`
const StyledP = styled.p`
    background-color: white;
    color: black;
    padding-top: 7px;
    width: 80px;
    height: 30PX;
    border-radius: 5px;
    margin-top: -30px;
    margin-left: 20px;
    z-index: 2;
`
const StyledImg =  styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    top: -90px;
    left: 15px;
    border-radius: 60px;
    border: 4px solid white;
`
const StyledFace = styled.img`
    position: absolute;
    left: 4px;
    top: 4px;
    width: 90%;
    height: 90%;
`
const StyledDivIndex = styled.div`
    position: relative;
`

function MiniCard({image, label}){
    return(
        <StyledSubSubBox>
            <StyledBackImg src={image} alt="background" />
            <StyledBottom>
                <StyledImg>
                    <StyledFace src={face} alt="face" />
                </StyledImg>
                <StyledDivIndex>
                    <StyledP>LIVE</StyledP>
                </StyledDivIndex>
            </StyledBottom>
        </StyledSubSubBox>
    )
}

MiniCard.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string
}

export default MiniCard;