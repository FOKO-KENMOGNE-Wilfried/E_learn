import styled from "styled-components";
import Card from "./Card";
// import { Progress } from "@material-tailwind/react";

const StyledPage = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
    gap: 40px;
    margin: 100px 0px 0px 0px;
`
const StyledDiv =styled.div`
    border-bottom: 1px solid black;
    width: 95%;
    font-size: 2em;
`
const StyledProgression = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
function Progression(){
    return (
        <StyledPage>
            <StyledDiv>
                <p>Cour Suivi(s)</p>
            </StyledDiv>
            <StyledProgression>
                <Card course={"HTML5 CSS3"} value={100}/>
                <Card course={"Learn Java"} value={23}/>
                <Card course={"React"} value={100}/>
                <Card course={"MongoBD"} value={77}/>
            </StyledProgression>
        </StyledPage>
    )
}

export default Progression;