import { styled } from "styled-components";
import html from "../../assets/img/html.jpg";
import react from "../../assets/img/React.png";
import Card from "./Card";
import MiniCard from "./MiniCard";

const StyledPage = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
    gap: 40px;
    margin: 50px 0px 0px 20px;
`
const StyledBox1 =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
function Home(){
    return (
        <StyledPage>

            <StyledBox1>
                <form action="">
                    <label htmlFor="">
                        <img src="" alt="img" />
                    </label>
                    <input type="text" />
                </form>
                <div>
                    <img src="" alt="img1" />
                    <img src="" alt="img2" />
                </div>
            </StyledBox1>

            <StyledBox2>
                <StyledP>Your unfinished courses</StyledP>
                <StyledSubBox>
                    <Card image={html} text={"10h"} label={"Learning how to create the simple web page using HTML5 and CSS3"} />
                    <Card image={react} text={"16h"} label={"label"} />
                </StyledSubBox>
            </StyledBox2>

            <StyledBox3>
                <StyledP>Live lesson</StyledP>
                <StyledSubBox3>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                    <MiniCard image={react} text={"16h"} label={"label"}/>
                </StyledSubBox3>
            </StyledBox3>

        </StyledPage>
    )
}

export default Home;