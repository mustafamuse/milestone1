import React, { useEffect, useState } from "react";
import { styled } from "@linaria/react";
import Container from "../common/Container";
import { dummyRooms } from "../../utils/data";
import RoomCard from "./RoomCard";
import { IRoomCard } from "../../interfaces/interfaces";

const HeroSection = () => {
  const [rooms, setRooms] = useState<IRoomCard[]>();
  let copyDummyRooms = rooms;

  useEffect(() => {
    if (!rooms?.length) {
      // For now we're just setting the dummy data.
      setRooms(dummyRooms);
    }
  }, [rooms]);

  const deleteListing = (id: any) => {
    const currentRentalsListings = copyDummyRooms?.filter((rental) => {
      return rental.id !== id;
    });
    setRooms(currentRentalsListings);
  };

  return (
    <HeroSectionContainer>
      <Container>
        <h1>My current listings</h1>

        <ListingContainer>
          {rooms &&
            rooms.map(
              ({
                id,
                title,
                description,
                beds,
                baths,
                guests,
                price,
                type,
                imgSrc,
              }) => {
                return (
                  <RoomCard
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    beds={beds}
                    baths={baths}
                    guests={guests}
                    price={price}
                    type={type}
                    imgSrc={imgSrc}
                    onDelete={deleteListing}
                  />
                );
              }
            )}
        </ListingContainer>
      </Container>
    </HeroSectionContainer>
  );
};

const HeroSectionContainer = styled.div`
  padding: 100px 0;
`;

const ListingContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1.2rem;
  flex-wrap: wrap;
`;

export default HeroSection;
