import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 500px) {
    flex-flow: column wrap;
  }

  @media (min-width: 501px) {
    align-items: center;
  }
`;
