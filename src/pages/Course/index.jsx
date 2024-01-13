import { styled } from "styled-components";
import notification from "../../assets/logo/notification.png";
import user from "../../assets/logo/user.png";
import loop from "../../assets/logo/loop.png";
import react from "../../assets/img/React.png";
import face from "../../assets/logo/face.png";
import file from "../../assets/logo/file.jpg";
import Card from "./Card";

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
const StyledInput = styled.input`
    width: 50vw;
    height: 40px;
    border-radius: 15px;
    padding-left: 40px;
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
const StyledSubSubBox = styled.div`
    border-radius: 20px;
`
// const StyledBottom =styled.div`
//     width: 90%;
//     backdrop-filter: blur(5px);
//     height: 40px;
//     color: white;
//     border: 1px solid black;
//     border-radius: 10px;
//     font-size: 1.5em;
//     margin-bottom: 20px;
//     padding-top: 8px;
// `
const StyledBackImg =styled.img`
    border-radius: 20px;
    width: 50vw;
    height: 45vh;
`
const StyledBloc1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`
const StyledBloc2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
`
const StyledSubBloc1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const StyledSubBloc2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 50vw
`
const StyledSubSubBloc2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`
const StyledImg = styled.img`
    width: 50px;
    height: 50px;
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
    width: 6vw;
    background-color: #FBC5B1;
    font-size: 1.5em;
`
const StyledDivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`
const StyledFile = styled.img`
    width: 30px;
    height: 30px;
`
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
`

function Course(){
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

        <StyledBloc1>
            <StyledSubBloc1>
                <p style={{fontSize: 1.7 + "em"}}>Course-Simple Swift App</p>
                <StyledSubSubBox>
                    <StyledBackImg src={react} alt="" />
                    {/* <StyledBottom>
                        <ProgressBar completed={30} width="70%" isLabelVisible={false} />
                    </StyledBottom> */}
                </StyledSubSubBox>
            </StyledSubBloc1>

            <StyledSubBloc1>
                <p style={{fontSize: 1.7 + "em"}}>Lessons</p>
                <StyledContent>
                    <Card label={"How is React ?"} texte={"Lesson 4 - 6min"}/>
                    <Card label={"Use Create React App"} texte={"Lesson 5 - 10min"}/>
                    <Card label={"Create Your First Component"} texte={"Lesson 6 - 8min"}/>
                    <Card label={"Manage Your States"} texte={"Lesson 7 - 15min"}/>
                    <Card label={"Use The Hooks"} texte={"Lesson 8 - 10min"}/>
                </StyledContent>
            </StyledSubBloc1>
        </StyledBloc1>

        <StyledBloc2>
            <StyledSubBloc2>
                <StyledSubSubBloc2>
                    <StyledImg src={face} alt="photo" />
                    <div>
                        <p style={{fontSize: 1.5 + "em"}}>Lesson 1 - HTML5 CSS3</p>
                        <p style={{opacity: 0.5}}>@human</p>
                    </div>
                </StyledSubSubBloc2>

                <div style={{fontSize: 1.7 + "em"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Et repellat numquam repellendus nesciunt ut 
                    consequatur deserunt culpa aspernatur, explicabo 
                </div>

            </StyledSubBloc2>

            <StyledDivContainer>
                <StyledDiv>
                    <StyledFile src={file} alt="icon" />
                </StyledDiv>
                <StyledDiv>
                    <p>
                        4+
                    </p>
                </StyledDiv>
            </StyledDivContainer>
        </StyledBloc2>

    </StyledPage>
    )
}

export default Course;