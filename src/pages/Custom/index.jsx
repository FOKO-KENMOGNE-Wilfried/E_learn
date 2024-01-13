import { styled } from "styled-components";
import notification from "../../assets/logo/notification.png";
import user from "../../assets/logo/user.png";
import loop from "../../assets/logo/loop.png";
import react from "../../assets/img/React.png";
import ProgressBar from "@ramonak/react-progress-bar";

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
    gap: 10px;
`
const StyledBloc2 = styled.div`
    display: flex;
    flex-direction: row;
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
    gap: 30px;
`
function Custom(){
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
                <p>Course-Simple Swift App</p>
                <StyledSubSubBox>
                    <StyledBackImg src={react} alt="" />
                    {/* <StyledBottom>
                        <ProgressBar completed={30} width="70%" isLabelVisible={false} />
                    </StyledBottom> */}
                </StyledSubSubBox>
            </StyledSubBloc1>
            <div>
                <p>Lesson</p>
                <div>
                    <div>One</div>
                    <div>Two</div>
                </div>
            </div>
        </StyledBloc1>
        <StyledBloc2>
            <StyledSubBloc2>
                <StyledSubSubBloc2>
                    <img src="" alt="photo" />
                    <div>
                        <p>Lesson 1 - HTML5 CSS3</p>
                        <p>@human</p>
                    </div>
                </StyledSubSubBloc2>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Et repellat numquam repellendus nesciunt ut 
                    consequatur deserunt culpa aspernatur, explicabo 
                    eveniet esse delectus, quo doloribus. Odio earum ad 
                    consequatur illum debitis ipsa mollitia sunt laborum. 
                    Quod saepe ex nobis accusamus, consequatur iusto quaerat 
                    nam eius ad eveniet doloremque blanditiis expedita 
                    excepturi minus, sunt distinctio enim dolorem beatae 
                    at eos accusantium ab? Cumque aut excepturi provident 
                    quos eum, minus voluptates tempore quas voluptatem 
                    dolorem animi consequatur incidunt veritatis nobis 
                    dolorum inventore! Laudantium minima deserunt ex 
                    accusamus blanditiis provident inventore dolorem 
                    aspernatur laborum, officia illum, minus cumque 
                    molestiae labore voluptas nemo unde optio.
                </div>
            </StyledSubBloc2>
            <div>
                <div>
                    <img src="" alt="icon" />
                </div>
                <div>
                    4+
                </div>
            </div>
        </StyledBloc2>

    </StyledPage>
    )
}

export default Custom;