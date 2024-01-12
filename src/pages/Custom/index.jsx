import { styled } from "styled-components";
import notification from "../../assets/logo/notification.png";
import user from "../../assets/logo/user.png";
import loop from "../../assets/logo/loop.png";

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
        <div>
            <div>
                <p>Course-Simple Swift App</p>
                <img src="" alt="img" />
            </div>
            <div>
                <p>Lesson</p>
                <div>
                    <div>One</div>
                    <div>Two</div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <img src="" alt="photo" />
                    <p>Text</p>
                </div>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut incidunt corrupti voluptatum, error aliquid accusamus culpa necessitatibus deserunt at perferendis.
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="icon" />
                </div>
                <div>
                    4+
                </div>
            </div>
        </div>

    </StyledPage>
    )
}

export default Custom;