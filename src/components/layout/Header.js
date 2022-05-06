import React from "react";
import { Link } from "react-router-dom";
import {styled} from "@linaria/react";

const Header = () => {
  return (
      <styledHeader>
                  <h1>
                      Muse airbnb Listings
                  </h1>

                  <newListingBtn to={'/add'}>
                      Add a new listing
                  </newListingBtn>
      </styledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1.5rem 0;
    background: #0000ff44;
`;

const newListingBtn = styled(Link)`
  text-align: center;
  padding: 8px 1rem;
  border-radius: 8px;
  background: rgba(66, 250, 66, 0.56);
  font-weight: bold;
`;

export default Header;
