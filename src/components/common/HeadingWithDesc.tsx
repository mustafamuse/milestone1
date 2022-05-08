import React from "react";
import {styled} from "@linaria/react";

interface IHeadingWithDesc {
    withRightBorder: boolean;
    heading: number;
    desc: string;
}

const HeadingWithDesc: React.FC<IHeadingWithDesc> = ({withRightBorder,heading,desc,...props}) => {
    return(
        <HeadingWithDescContainer {...props}>
            <Heading>
                {heading}
            </Heading>
            <Desc>
                {desc}
            </Desc>
        </HeadingWithDescContainer>
    )
}

const HeadingWithDescContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 8px;
  
`;

const Heading = styled.div`
font-size: 18px;
  font-weight: bold;
`;

const Desc = styled.div`
font-size: 14px;
`;

export default HeadingWithDesc;