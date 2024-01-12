import { styled } from "styled-components";
import html from "../../assets/img/html.jpg";
import react from "../../assets/img/React.png";
import loop from "../../assets/logo/loop.png";
import user from "../../assets/logo/user.png";
import live from "../../assets/img/live.jpeg";
import notification from "../../assets/logo/notification.png";
import Card from "./Card";
import MiniCard from "./MiniCard";

const StyledPage = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
    gap: 40px;
    margin: 35px 0px 0px 20px;
`
const StyledBox1 =styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 92%;
    justify-content: space-between;
`
const StyledBox2 =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const StyledSubBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`
const StyledBox3 =styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledSubBox3 = styled.div`
    display: flex;
    gap: 37px;
    flex-direction: row;
    align-items: center;
`
const StyledP = styled.p`
    font-size: 2em;
`
const StyledInput = styled.input`
    width: 40vw;
    height: 40px;
    border-radius: 15px;
    padding-left: 40px;
    background-color: ;
`
const StyledSearchLogo = styled.img`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
`
const StyledLogo = styled.img`
    width: 35px;
    height: 35px;
`
const StyledUtils = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
function Home(){
    return (
        <StyledPage>

            <StyledBox1>
                <div>
                    <StyledSearchLogo src={loop} alt="img" />
                    <StyledInput type="text" placeholder="Search" />
                </div>
                <StyledUtils>
                    <StyledLogo src={user} alt="user" />
                    <StyledLogo src={notification} alt="notification" />
                </StyledUtils>
            </StyledBox1>
            <StyledBox2>
                <StyledP>Your unfinished courses</StyledP>
                <StyledSubBox>
                    <Card image={html} text={"10h"} label={"Learning how to create the simple web page using HTML5 and CSS3"} />
                    <Card image={react} text={"16h"} label={"Learn how to create a SPA and the complete application with React"} />
                </StyledSubBox>
            </StyledBox2>

            <StyledBox3>
                <StyledP>Live lesson</StyledP>
                <StyledSubBox3>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                    <MiniCard image={live} text={"16h"} label={"label"}/>
                </StyledSubBox3>
            </StyledBox3>

        </StyledPage>
    )
}

export default Home;