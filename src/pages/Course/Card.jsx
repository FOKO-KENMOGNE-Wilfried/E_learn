import styled from "styled-components";
import PropTypes from "prop-types";
import react from "../../assets/logo/react.png"


const StyledStep = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const StyledIcon = styled.div`
    padding: 15px 15px 15px 15px;
    border-radius: 15px;
    background-color: #E88021;
`
export default function Card({label, texte}){
    return (
        <StyledStep>
            <StyledIcon>
                <img src={react} alt="img" style={{width: 20 + "px", height: 20 + "px"}} />
            </StyledIcon>
            <div>
                <p>{label}</p>
                <p  style={{opacity: 0.5}}>{texte}</p>
            </div>
        </StyledStep>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    texte: PropTypes.string
}