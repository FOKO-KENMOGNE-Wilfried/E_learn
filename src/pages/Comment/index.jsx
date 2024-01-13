import styled from "styled-components";
import face from "../../assets/logo/face.png"
import send from "../../assets/logo/send.png"

const StyledPage = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
    gap: 40px;
    margin: 35px 0px 0px 20px;
    font-size: 1.7em;
`
const StyledP = styled.p`
    background-color: #D9D9D9;
    padding: 30px;
    width: 92%;
    border-radius: 20px;
`
const StyledDiv = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    background-color: #D9D9D9;
    padding: 20px;
    width: 92%;
    gap: 40px;
    border-radius: 10px;
`
const StyledInput = styled.input`
    height: 50px;
    width: 85%;
    border-radius: 10px;
    padding-left: 20px;
`
const StyledSend = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
`
const StyledDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
function Comment(){
    return (
        <StyledPage>
            <StyledP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Modi voluptate vitae quasi impedit laborum non, possimus 
                in culpa omnis reiciendis, adipisci tempora nostrum vel 
                quia deserunt reprehenderit necessitatibus? Hic velit quae 
                ratione, delectus alias odio est quisquam autem eos veniam 
                temporibus mollitia, praesentium incidunt soluta iure 
                pariatur fuga repellat inventore atque quas dolorum culpa! 
                Incidunt natus sunt vel odit illum, unde harum in impedit 
                nostrum! Assumenda minus.
            </StyledP>
            <StyledDivContainer>
                <StyledDiv>
                    <img src={face} alt="img" style={{width: 50 + "px", height:50 + "px"}} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa incidunt consequuntur voluptate amet minima! 
                        Commodi facere maxime cupiditate beatae ducimus!
                    </p>
                </StyledDiv>
                <StyledDiv>
                    <img src={face} alt="img" style={{width: 50 + "px", height:50 + "px"}} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa incidunt consequuntur voluptate amet minima! 
                        Commodi facere maxime cupiditate beatae ducimus!
                    </p>
                </StyledDiv>
            </StyledDivContainer>
            <StyledSend>
                <StyledInput type="text" placeholder="Write your comment" />
                <img src={send} alt="img" style={{width: 40 + "px", height: 40 + "px"}}/>
            </StyledSend>
        </StyledPage>
    )
}

export default Comment;