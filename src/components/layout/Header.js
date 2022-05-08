import React from 'react';
import Container from "../common/Container";
import {styled} from "@linaria/react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <TopHeader>
            <Container>
                <Navbar>
                    <h1>
                        Muse Airbnb Houses
                    </h1>

                    <AddRoomBtn to={'/add'}>
                        Add a new listing
                    </AddRoomBtn>

                </Navbar>
            </Container>
        </TopHeader>
    );
};

const TopHeader = styled.header`
  padding: 1.5rem 0;
  background: #0000FF44;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddRoomBtn = styled(Link)`
  text-align: center;
  padding: 8px 1rem;
  border-radius: 8px;
  background: rgba(66, 250, 66, 0.56);
  font-weight: bold;
`

export default Header;