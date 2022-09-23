import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components/macro";
function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState({
    cards: [
      {
        BikeName: "Gixxer",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://images.carandbike.com/bike-images/large/suzuki/gixxer-sf/suzuki-gixxer-sf.jpg?v=34",
      },
      {
        BikeName: "Duke",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://ic1.maxabout.us/autos/tw_india//2/2020/11/2021-royal-enfield-meteor-350-stellar-blue.jpg",
      },
      {
        BikeName: "Bullet",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://4.imimg.com/data4/QE/OU/MY-10509224/royal-enfield-classic-350-black-250x250.png",
      },
      {
        BikeName: "CBR",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://www.bikes4sale.in/pictures/default/honda-cbr-250rr/honda-cbr-250rr-640.jpg",
      },
      {
        BikeName: "Dominar",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://images.carandbike.com/bike-images/large/bajaj/dominar-400-2019/bajaj-dominar-400-2019.jpg?v=12",
      },
      {
        BikeName: "Himalaya",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://images.carandbike.com/bike-images/large/suzuki/gixxer-sf/suzuki-gixxer-sf.jpg?v=34",
      },
      {
        BikeName: "FZ",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://www.bikes4sale.in/pictures/default/honda-cbr-250rr/honda-cbr-250rr-640.jpg",
      },
      {
        BikeName: "Unicorn",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://images.carandbike.com/bike-images/colors/honda/cb-unicorn-150/honda-cb-unicorn-150-pearl-igneous-black.png",
      },
      {
        BikeName: "Glamour",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://www.drivespark.com/bikes-photos/models/750x550/glamour-i3s_1515499630.jpg/3/x.pagespeed.ic.595ulhhwld.jpg",
      },
      {
        BikeName: "BMW",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/03_The_all-new_BMW_M_1000_RR_1200x768.jpeg?m2XNglOXJ.tyXGRylyVsb0OTpzlMlP1l&size=770:433",
      },
      {
        BikeName: "R15",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://images.carandbike.com/bike-images/large/bajaj/dominar-400-2019/bajaj-dominar-400-2019.jpg?v=12",
      },
      {
        BikeName: "KTM",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://www.bajajautofinance.com/uploads/vehicles/KTM-RC-200.png",
      },
      {
        BikeName: "Pulsar",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://bd.gaadicdn.com/processedimages/bajaj/bajaj-pulsar-150/494X300/bajaj-pulsar-15062a2d89007e6f.jpg",
      },
      {
        BikeName: "Mateor",
        ShortText:
          "One of the most eye-catchy feature of CBR 250RR is the gorgeous front fascia and the dual LED",

        imageUrl:
          "https://ic1.maxabout.us/autos/tw_india//2/2020/11/2021-royal-enfield-meteor-350-stellar-blue.jpg",
      },
    ],
  });

  const [cards, setCards] = useState(state.cards);
  useEffect(() => {
    if (searchValue === "") {
      setState((prevState) => {
        return {
          ...prevState,
          cards: cards,
        };
      });
    } else {
      const newcards = cards.filter((value) =>
        value.BikeName.toLowerCase().includes(searchValue.toLowerCase())
      );

      setState((prevState) => {
        return {
          ...prevState,
          cards: newcards,
        };
      });
    }
  }, [searchValue]);

  return (
    <Container>
      <BikeSearch>
        <SearchDiv>
          <SearchIcn />
          <SearchInput
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Bike Name"
          ></SearchInput>
        </SearchDiv>
      </BikeSearch>

      <BikeList>
        <BikeTxt>Bikes</BikeTxt>
        <ListContainer>
          {state.cards.map((i) => (
            <Card>
              <ImgContainer>
                <Img src={i.imageUrl} />
              </ImgContainer>

              <ItemName>{i.BikeName}</ItemName>
              <ShorTxt>{i.ShortText}</ShorTxt>
            </Card>
          ))}
        </ListContainer>
      </BikeList>
    </Container>
  );
}

export default Home;
const BikeSearch = styled.div`
  padding: 10px;
  margin-top: 52px;
  position: fixed;
  top: 2px;
  width: 100%;
  background-color: #ecf2f5;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px; ;
`;

const Card = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;
const ImgContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 218px;
  object-fit: cover;
  @media (min-width: 360px) and (max-width: 453px) {
    height: 100px;
  }
  @media (min-width: 454px) and (max-width: 653px) {
    height: 150px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  row-gap: 15px;
  column-gap: 15px;

  @media (max-width: 1264px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 996px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 656px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BikeTxt = styled.h4`
  font-weight: bold;
  font-size: 1.2em;
  text-align: left;

  color: #30384d;
`;
const BikeList = styled.div`
  width: 100%;
  min-height: 85vh;
  margin-top: 127px;
  padding: 15px;
  background-image: linear-gradient(180deg, #ecf2f0, #6e8c82);
`;

const Container = styled.div``;
const SearchDiv = styled.div`
  position: relative;
  background-color: white;

  border-radius: 4px;
  padding: 10px;
  max-width: 450px;
  margin: 10px 10px 0px 10px;
`;

const SearchIcn = styled(SearchIcon)`
  position: absolute;
  width: 20px;
  height: 28px;
`;

const SearchInput = styled.input`
  border: unset;
  font-size: 0.8em;
  width: 92%;
  color: #30384d;
  background-color: white;

  /* :focus-visible {
    outline: unset
} */

  outline: none;

  margin-left: 20px;

  padding: 5px;
`;
const ItemName = styled.span`
  font-size: 0.85em;
  color: black;
  font-weight: 600;
`;

const ShorTxt = styled.span`
  font-weight: 500;
  font-size: 0.7em;
  color: black;
`;
