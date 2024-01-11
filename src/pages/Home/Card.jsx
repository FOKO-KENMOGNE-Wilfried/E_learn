import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSubSubBox = styled.div`
    position: relative;
    background-size: cover;
    border-radius: 20px;
    width: 33vw;
    height: 40vh;
    gap: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const StyledTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 350px;
    z-index: 2;
`
const StyledBottom =styled.div`
    width: 80%;
    backdrop-filter: blur(5px);
    height: 80px;
    text-align: center;
    color: white;
    border-radius: 10px;
    padding-top: 20px;
    font-size: 1.5em;
`
const StyledBackImg =styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;;
`
const StyledTime = styled.div`
    padding: 10px 30px 10px 30px;
    background-color: white;
    border-radius: 5px;
    color: black;
`

function Card({image, text, label}){
    return(
        <StyledSubSubBox>
            <StyledBackImg src={image} alt="" />
            <StyledTop>
                <img src="" alt="photo-1" />
                <StyledTime>{text}</StyledTime>
            </StyledTop>
            <StyledBottom>
                <p>{label}</p>
            </StyledBottom>
        </StyledSubSubBox>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string
}

export default Card;