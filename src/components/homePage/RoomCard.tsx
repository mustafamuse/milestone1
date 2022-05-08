import React from "react";
// import HouseImg from "../../assets/1.jpeg";
import HeadingWithDesc from "../common/HeadingWithDesc";
import { styled } from "@linaria/react";
import { IRoomCard } from "../../interfaces/interfaces";
import { dummyRooms } from "../../utils/data";

const RoomCard: React.FC<IRoomCard> = ({
  id,
  title,
  description,
  baths,
  beds,
  guests,
  price,
  type,
  imgSrc,
  onDelete,
}) => {
  return (
    <ListingItem>
      <ListImgContainer>
        <ListingImg src={imgSrc} />
      </ListImgContainer>

      <ListItemBelowImageSectionContainer>
        <BelowImageTitle>{title}</BelowImageTitle>

        <Description>{description}</Description>

        <PPNHeading>Price / night</PPNHeading>

        <BelowNightRateTextContainer>
          <NightRateContainer>
            <NightRate>${price}</NightRate>
            <PropertyType>{type}</PropertyType>
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </NightRateContainer>

          <HouseDetailContainer>
            <HeadingWithDesc
              withRightBorder={true}
              heading={beds}
              desc={"Beds"}
            />
            <HeadingWithDesc
              withRightBorder={true}
              heading={baths}
              desc={"Baths"}
            />
            <HeadingWithDesc
              withRightBorder={false}
              heading={guests}
              desc={"Guests"}
            />
          </HouseDetailContainer>
        </BelowNightRateTextContainer>
      </ListItemBelowImageSectionContainer>
    </ListingItem>
  );
};

const ListingItem = styled.div`
  max-width: 400px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ListingImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;

const ListImgContainer = styled.div`
  position: relative;
`;

const ListItemBelowImageSectionContainer = styled.div`
  padding: 1rem;
`;

const Description = styled.div`
  font-size: 14px;
  margin: 8px 0 1.5rem;
`;

const BelowImageTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const PPNHeading = styled.div`
  font-size: 14px;
  color: #868686;
`;

const NightRate = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const PropertyType = styled.div`
  background: rgba(66, 250, 66, 0.56);
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 10px;
  margin-top: 4px;
`;

const BelowNightRateTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HouseDetailContainer = styled.div`
  display: flex;
  grid-gap: 8px;
  align-items: center;
`;

const NightRateContainer = styled.div``;

const DeleteButton = styled.button`
  background: #black;
  padding: 4px 10px;
  font-size: 8px;
  border-radius: 10px;
  margin-top: 4px;
`;

export default RoomCard;
