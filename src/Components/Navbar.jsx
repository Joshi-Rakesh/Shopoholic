import { Badge } from "@material-ui/core";
import {
  AccountCircleOutlined,
  MenuOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { DarkMode, LightModeOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import styled from "styled-components";
import { Mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { theme } from "./Context/ThemeContext";
import { Productitem } from "./Context/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
   @media only screen and (max-width:830px) {
    overflow-y: ${({ translate }) => (!translate ? "hidden" : "visible")};
  }  
}
`;
const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: ${({ themevalue }) => (themevalue ? "#04111D" : "white")};
  color: ${({ themevalue }) => (themevalue ? "#E5E5E5" : "#04111D")};
  height: 10vh;
  width: 100%;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  ${Mobile({ height: "7vh" })}
`;

const Wrapper = styled.div`
  padding: 0px 30px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  width: 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({ paddingLeft: "10px" })}
`;

const ToggleBorder = styled.div`
  border: 1px solid lightgray;
  cursor: pointer;
  box-sizing: border-box;
  height: 3vh;
  width: 48px;
  border-radius: 10px;
  border: none;
  background-color: teal;
  display: flex;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: black;
  transform: ${({ themevalue }) =>
    themevalue ? "translateX(19px)" : "translateX(o%)"};
  box-shadow: 0px 0px 4px 2px
    ${({ themevalue }) => (themevalue ? "white" : "orange")};
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  > :nth-child(2) {
    display: ${({ themevalue }) => (themevalue ? "none" : "block")};
  }

  > :nth-child(1) {
    display: ${({ themevalue }) => (!themevalue ? "none" : "block")};
  }
`;

const Searchcontainer = styled.div`
  background-color: ${({ themevalue }) =>
    !themevalue ? "transparent" : "lightgray"};
  height: 4.5vh;
  width: 200%;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid gray;
  padding: 5px;
  ${Mobile({ display: "none" })}
`;

const Input = styled.input`
  background-color: transparent;
  padding: 5px;
  width: 100%;
  border: none;
  outline: none;
  ${Mobile({ width: "50px" })}

  &::placeholder {
    color: gray;
  }
`;

const Center = styled.div``;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bolder;
  ${Mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  width: 25%;
  ${Mobile({ display: "flex", justifyContent: "flex-end" })}
`;

const RightIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({
    flexDirection: "column",
    top: "7vh",
    position: "absolute",
    width: "100%",
    justifyContent: "flex-start",
    gap: "10%",
  })}
  @media only screen and (max-width:830px) {
    background: ${({ themevalue }) => (!themevalue ? "#fbf0f4" : "#202225")};
    color: ${({ themevalue }) => (themevalue ? "#E5E5E5" : "black")};
    transition: 0.8s height ease-in-out;
    height: ${({ translate }) => (translate ? "0" : "100vh")};
  }
`;

const ThemeSwitcher = styled.div`
  ${Mobile({ paddingLeft: "10px" })}
`;

const Menuitem = styled.div`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  @media only screen and (max-width: 830px) {
    transition: visibility 0.3s ease-in-out, opacity 1s ease-in-out;
    visibility: ${({ translate }) => (translate ? "hidden" : "visible")};
    opacity: ${({ translate }) => (translate ? "0" : "1")};
    padding-top: 16%;
  }
`;

const Ham = styled.div`
  display: none;
  ${Mobile({ display: "block", padding: "0px 10px" })}
`;

const Navbar = () => {
  let navigate = useNavigate();

  const { themevalue, click } = useContext(theme);
  const { cartproducts, SetSearchTerm } = useContext(Productitem);
  const { translate, burger } = useContext(Productitem);
  const { status, setStatus } = useContext(Productitem);

  return (
    <Container themevalue={themevalue} translate={translate}>
      <GlobalStyle translate={translate} />
      <Wrapper>
        <Left>
          <Logo
            onClick={() => {
              navigate("/Home");
            }}
          >
            ShopaHolic.
          </Logo>
          <ThemeSwitcher>
            <ToggleBorder onClick={click} themevalue={themevalue}>
              <Circle themevalue={themevalue}>
                <DarkMode
                  style={{ color: "white", fontSize: "20px" }}
                  themevalue={themevalue}
                />
                <LightModeOutlined
                  style={{ color: "orange", fontSize: "20px" }}
                  themevalue={themevalue}
                />{" "}
              </Circle>
            </ToggleBorder>
          </ThemeSwitcher>
        </Left>

        <Center>
          <Searchcontainer themevalue={themevalue}>
            <Input
              placeholder="Search"
              themevalue={themevalue}
              onChange={(event) => {
                SetSearchTerm(event.target.value);
              }}
              type="text"
              onClick={() => navigate("/products")}
            ></Input>
            <Search style={{ color: "gray", fontSize: 20 }} />
          </Searchcontainer>
        </Center>

        <Right>
          <RightIcons
            themevalue={themevalue}
            onClick={burger}
            translate={translate}
          >
            {status ? (
              <Menuitem translate={translate}>
                <AccountCircleOutlined
                  style={{ fontSize: "30px" }}
                ></AccountCircleOutlined>
              </Menuitem>
            ) : null}
            {status ? (
              <Menuitem onClick={() => setStatus(false)} translate={translate}>
                Logout
              </Menuitem>
            ) : null}
            {!status ? (
              <Menuitem
                onClick={() => {
                  navigate("/Register");
                }}
                translate={translate}
              >
                Register
              </Menuitem>
            ) : null}
            {!status ? (
              <Menuitem
                onClick={() => {
                  navigate("/Login");
                }}
                translate={translate}
              >
                Login
              </Menuitem>
            ) : null}
            <Menuitem
              onClick={() => {
                navigate("/Wishlist");
              }}
              translate={translate}
            >
              Wishlist
            </Menuitem>
            <Menuitem
              onClick={() => {
                navigate("/Cart");
              }}
              translate={translate}
            >
              <Badge badgeContent={cartproducts.length} color="primary">
                <ShoppingCartOutlined
                  themevalue={themevalue}
                  style={{ fontSize: "30px" }}
                />
              </Badge>
            </Menuitem>
          </RightIcons>
          <Ham>
            <MenuOutlined onClick={burger} />
          </Ham>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
