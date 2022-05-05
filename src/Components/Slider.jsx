import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../data";
import { Mobile } from "../responsive";
import { theme } from "./Context/ThemeContext";


const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobile({ display: 'none'})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: ${({themevalue})=>!themevalue ? 'black' : 'white'};
  color: ${({themevalue})=>themevalue? 'black': 'white'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.2;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${({themevalue})=>!themevalue ? '#fbf0f4' : '#202225'};
  color: ${({themevalue})=>themevalue? '#E5E5E5': 'black'};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 90px;
`;

const InfoContainer = styled.div`
padding: 15px;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
flex: 1;  
margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  width:18%;
  height: 6.5vh;
  padding: 10px;
  font-size: 20px;
  background: teal;
  border: none;
  cursor: pointer;
  color: white;
`;

const Slider = () => {

  const {themevalue} = useContext(theme);

  const navigate = useNavigate()

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container >
      <Arrow direction="left" onClick={() => handleClick("left")} themevalue={themevalue}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} themevalue={themevalue}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button themevalue={themevalue} onClick={()=>{navigate('/Products')}}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")} themevalue={themevalue}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;