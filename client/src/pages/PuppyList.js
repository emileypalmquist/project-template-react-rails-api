import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "../styles";

function PuppyList() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    fetch("/puppies")
      .then((r) => r.json())
      .then(setPuppies);
  }, []);

  return (
    <Wrapper>
      {puppies.length > 0 ? (
        puppies.map((puppy) => (
          <Puppy key={puppy.id}>
            <Box>
              <h2>{puppy.name}</h2>
              <img src={puppy.image} />
              <p>
                <em>Puppy breed: {puppy.breed}</em>
              </p>
            </Box>
          </Puppy>
        ))
      ) : (
        <>
          <h2>No Puppies Found</h2>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Puppy = styled.article`
  margin-bottom: 24px;
`;

export default PuppyList;
