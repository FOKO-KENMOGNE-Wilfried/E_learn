import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";

const StyledProgressBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 300px;
    width: 95%;
    background-color: #E8E8E8;
    height: 150px;
    border-radius: 20px;
    font-size: 2.5em;
`
const StyledP = styled.p`
    margin-left: 50px;
`
const StyledProgress = styled(ProgressBar)`
    margin-right: 50px;
`
function Card({course, value}){
    return (
        <StyledProgressBox>
            <StyledP>{course}</StyledP>
            <StyledProgress completed={value} height="30px" width="600px" bgColor="#E88021" baseBgColor="black" />
        </StyledProgressBox>
    )
}

Card.propTypes = {
    course : PropTypes.string,
    value : PropTypes.number
}

export default Card;