import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from "react-router-dom"
import SlideRoutes from "react-slide-routes";
import { styled } from "styled-components";
import Home from "../pages/Home";
import PropTypes from "prop-types"
import Progression from "../pages/Progress";
import Comment from "../pages/Comment";
import Course from "../pages/Course";

const StyledPage = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    background-color: #5B49A9;
    width: 100vw;
    height: 100vh;
    position: relative;
    padding-left: 10px;
`
const StyleContainDiv = styled.div`
    margin: 20px 10px 20px 0px;
    background-color: white;
    border-radius: 40px;
`
const StyleContainDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 80px;
    gap: 120px;
    font-size: 2em;
`
const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 10px;
`
const StyledNavBar =styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`
const StyledBorderDivTop = styled.div`
    //border: 1px solid white;
    background-color: #5B49A9;
    padding: 25px;
    width: 146.5%;
    border-radius: 0px 20px 20px 0px;
    z-index: 3;
`
const StyledBorderDivBottom = styled.div`
    //border: 1px solid white;
    background-color: #5B49A9;
    padding: 25px;
    width: 146.5%;
    border-radius: 0px 20px 20px 0px;
    z-index: 3;
`
const StyledSlideDiv = styled.div`
    position: absolute;
    top: ${({ position }) => {
        console.log(position)
        switch (position) {
            case 1:
                return "35px";
            case 2:
                return "75px";
            case 3:
                return "125px";
            case 4:
                return "175px";
            default:
                return "35px";
        }
    }};
    background-color: white;
    padding: 45px;
    height: 30px;
    width: 146.5%;
    z-index: 2;
`
const StyledP = styled.p`
    z-index: 2;
`
const StyledNavLink1 = styled(NavLink)`
    //border: 1px solid white;
    text-decoration: none;
    color: white;
    width: 156.8%;
    margin-left: -20px;
    padding: 5px 0px 5px 25px;
    border-radius: 0px 20px 20px 0px;
    background-color: #5B49A9;
    z-index: 2;
    &.active{
        border-radius: 20px;
        background-color: white;
        color: orange;
    }
`
const StyledNavLink2 = styled(NavLink)`
    //border: 1px solid white;
    text-decoration: none;
    color: white;
    width: 156.8%;
    margin-left: -20px;
    padding: 5px 0px 5px 25px;
    border-radius: 0px 20px 20px 0px;
    background-color: #5B49A9;
    z-index: 2;
    &.active{
        border-radius: 20px;
        background-color: white;
        color: orange;
    }
`
const StyledNavLink3 = styled(NavLink)`
    //border: 1px solid white;
    text-decoration: none;
    color: white;
    width: 156.8%;
    margin-left: -20px;
    padding: 5px 0px 5px 25px;
    border-radius: 0px 20px 20px 0px;
    background-color: #5B49A9;
    z-index: 2;
    &.active{
        border-radius: 20px;
        background-color: white;
        color: orange;
    }
`
const StyledNavLink4 = styled(NavLink)`
    //border: 1px solid white;
    text-decoration: none;
    color: white;
    width: 156.8%;
    margin-left: -20px;
    padding: 5px 0px 5px 25px;
    border-radius: 0px 20px 20px 0px;
    background-color: #5B49A9;
    z-index: 2;
    &.active{
        border-radius: 20px;
        background-color: white;
        color: orange;
    }
`
const StyledE = styled.div`
    padding: 10px 20px 10px 20px;
    background-color: #6553B2;
    border-radius: 20px;
`
function Navbar(){

    // I need to add 40 to the top value to switch to the next menu
    const [navbar, setNavBar] = useState(1);
    
    function handleClick(value){
        setNavBar(value);
        console.log(value);
    }

    return (
        <BrowserRouter>
            <StyledPage>
                <StyleContainDiv2>
                    <StyledName>
                        <StyledE>E</StyledE> <p>E-Learn</p>
                    </StyledName>

                    <StyledNavBar>
                        <StyledSlideDiv position={navbar}></StyledSlideDiv>
                        <StyledBorderDivTop></StyledBorderDivTop>
                        <StyledNavLink1 onClick={() => {handleClick(1)}} className="link" to={"/"}><StyledP>Home</StyledP></StyledNavLink1>
                        <StyledNavLink2 onClick={() => {handleClick(2)}} className="link" to={"/course"}><StyledP>Course</StyledP></StyledNavLink2>
                        <StyledNavLink3 onClick={() => {handleClick(3)}} className="link" to={"/progress"}><StyledP>Progress</StyledP></StyledNavLink3>
                        <StyledNavLink4 onClick={() => {handleClick(4)}} className="link" to={"/comment"}><StyledP>Comment</StyledP></StyledNavLink4>
                        <StyledBorderDivBottom></StyledBorderDivBottom>
                    </StyledNavBar>
                </StyleContainDiv2>

                <StyleContainDiv>
                    <SlideRoutes animation="vertical-slide" duration={800}>
                        <Route path="/" element={<Home />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/progress" element={<Progression />} />
                        <Route path="/comment" element={<Comment />} />
                    </SlideRoutes>
                </StyleContainDiv>
            </StyledPage>
        </BrowserRouter>
    )
}

Navbar.propTypes = {
    position : PropTypes.number
}

export default Navbar;