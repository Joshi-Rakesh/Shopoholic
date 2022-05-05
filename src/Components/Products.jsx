import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "./Context/ThemeContext";
import { Productitem } from "./Context/CartContext";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@material-ui/icons";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 3%;
`;

const Heading = styled.div`
  font-weight: bolder;
  font-size: 2rem;
  height: 8vh;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Filters = styled.div`
  padding: 20px 0px;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;

  & .selected {
    background-color: teal;
    color: white;
  }

  ${Mobile({ height: "25vh", color: "white", flexWrap: "wrap" })}
`;

const SearchBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
  display: none;
  ${Mobile({ display: "flex" })}
`;

const Search = styled.input`
  height: 100%;
  width: 70%;
  padding: 0px 10px;
  outline: none;
  border-radius: 5px;
  border: 2px solid lightgray;
`;

const Select = styled.select`
  height: 5vh;
  width: 10%;
  border-radius: 10px;
  padding: 8px;
  outline: none;
  font-size: 0.9rem;
  font-weight: bold;
  ${Mobile({ width: "26%" })}
`;

const Option = styled.option`
  font-size: 0.9rem;
  font-weight: bold;
`;

const Button = styled.button`
  height: 5vh;
  width: 6%;
  border-radius: 10px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  ${Mobile({ width: "25%", padding: "0px" })}
`;

const ClearFilter = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  color: black;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: underline;
  ${Mobile({ width: "52%", paddingLeft: "7px" })}
`;

const Wrapper = styled.div`
  border: 2px solid lightgray;
  margin-top: 1%;
  padding: 10px 0px;
  transition: 0.2s all ease-in-out;

  &:hover {
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 310px;
`;

const Image = styled.img`
  height: 90%;
  object-fit: contain;
  width: 60%;
`;

const ProductDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  line-height: 30px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
const Rating = styled.div`
  font-weight: bold;
`;
const Desc = styled.div``;

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const Icon = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  color: white;
  border-radius: 50%;
  outline: 0;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  button:focus {
    outline: none;
  }
`;

const Products = () => {
  const { themevalue } = useContext(theme);
  const { searchterm, SetSearchTerm } = useContext(Productitem);
  const {
    product,
    SetProduct,
    cartproducts,
    SetCartProducts,
    wishlist,
    SetWishlist,
    filtered,
    SetFiltered,
  } = useContext(Productitem);
  const [buttonValue, setButtonValue] = useState("All");

  const API_ID = "https://fakestoreapi.com/products";
  const filt = filtered.filter((val) => {
    if (searchterm === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchterm.toLowerCase())) {
      return val;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    data();
    Reset();
  }, []);

  const data = async () => {
    const appData = await fetch(API_ID);
    const dataJson = await appData.json();
    dataJson.map((e) => (e.qty = 1));
    SetProduct(dataJson);
    SetFiltered(dataJson);
  };

  const AddToCart = (item) => {
    let check = cartproducts.find((c) => c.id === item.id);

    if (check === undefined) {
      SetCartProducts([...cartproducts, item]);
      toast("Item successfully added to cart");
    } else {
      check.qty += 1;
      toast("Item successfully added to cart");
    }
  };

  const AddedToWishlist = (item) => {
    let check = wishlist.find((c) => c.id === item.id);

    if (check === undefined) {
      SetWishlist([...wishlist, item]);
      toast("Item successfully added to Wishlist");
    } else {
      toast.warn("Item already added to Wishlist");
    }
  };

  const FilterData = (item) => {
    console.log(item);
    setButtonValue(item);
    const result = product.filter((cat) => {
      return cat.category === item;
    });
    SetFiltered(result);
  };

  const LeftOption = (val) => {
    if (val === "1") {
      const data = filtered.sort(
        (firstItem, secondItem) => firstItem.price - secondItem.price
      );
      SetFiltered([...data]);
    } else if (val === "2") {
      const sata = filtered.sort(
        (firstItem, secondItem) => secondItem.price - firstItem.price
      );
      SetFiltered([...sata]);
    }
  };

  const RightOption = (val) => {
    if (val === "1") {
      const mata = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      SetFiltered([...mata]);
    } else {
      const rata = filtered.sort((a, b) => b.rating.count - a.rating.count);
      SetFiltered([...rata]);
    }
  };

  const Reset = async (e) => {
    console.log(e);
    setButtonValue(e);
    const appData = await fetch(API_ID);
    const dataJson = await appData.json();
    dataJson.map((e) => (e.qty = 1));
    SetProduct(dataJson);
    SetFiltered(dataJson);
  };

  return (
    <>
      <Heading>PRODUCTS TO BAG</Heading>
      <SearchBar>
        <Search
          placeholder="Search here!"
          onChange={(event) => {
            SetSearchTerm(event.target.value);
          }}
          type="text"
        ></Search>
      </SearchBar>
      <Filters>
        <Select onChange={(event) => LeftOption(event.target.value)}>
          <Option value="0" disabled hidden>
            Select Filter
          </Option>
          <Option value="1">Price: Low to High</Option>
          <Option value="2">Price: High to Low</Option>
        </Select>

        <Button
          onClick={() => Reset("All")}
          className={buttonValue === "All" ? "selected" : ""}
        >
          All
        </Button>
        <Button
          onClick={() => FilterData(`men's clothing`)}
          className={buttonValue === "men's clothing" ? "selected" : ""}
        >
          Men
        </Button>
        <Button
          onClick={() => FilterData(`women's clothing`)}
          className={buttonValue === "women's clothing" ? "selected" : ""}
        >
          Women
        </Button>
        <Button
          onClick={() => FilterData(`electronics`)}
          className={buttonValue === "electronics" ? "selected" : ""}
        >
          Electronics
        </Button>
        <Button
          onClick={() => FilterData(`jewelery`)}
          className={buttonValue === "jewelery" ? "selected" : ""}
        >
          Jewellery
        </Button>

        <Select onChange={(event) => RightOption(event.target.value)}>
          <Option value="0" disabled hidden>
            Select Filter
          </Option>
          <Option value="1">Ratings</Option>
          <Option value="2">Popularity</Option>
        </Select>
        <ClearFilter onClick={Reset}>Remove all filters</ClearFilter>
      </Filters>
      <Container>
        {product.length === 0 ? (
          <Oval color="teal" secondaryColor="gray" height="40vh" />
        ) : (
          <>
            {filt.length ? (
              filt.map((item) => (
                <Wrapper themevalue={themevalue} key={item.id}>
                  <ImageContainer>
                    {" "}
                    <Image src={item.image} />{" "}
                  </ImageContainer>
                  <ProductDetails>
                    <Info>
                      <Title>{item.title.slice(0, 20)}</Title>
                      <Rating>
                        {item.rating.rate}{" "}
                        <StarOutlined
                          style={{ color: "teal", verticalAlign: "-5px" }}
                        />{" "}
                        | {item.rating.count} (Ratings)
                      </Rating>
                      <Desc>{item.description.slice(0, 25)}...</Desc>
                      <Price>₹{item.price}</Price>
                    </Info>
                    <Icons>
                      <Icon onClick={() => AddToCart(item)}>
                        <ShoppingCartOutlined />
                      </Icon>
                      <Icon onClick={() => AddedToWishlist(item)}>
                        <FavoriteBorderOutlined />
                      </Icon>
                    </Icons>
                  </ProductDetails>
                </Wrapper>
              ))
            ) : (
              <div
                style={{
                  height: "40vh",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1>No results found</h1>
              </div>
            )}{" "}
          </>
        )}
      </Container>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Products;
