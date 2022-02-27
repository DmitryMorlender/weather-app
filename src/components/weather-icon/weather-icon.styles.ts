import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;

  & .weather-icon.primary {
    font-size: 6rem;

    & + span {
      font-size: clamp(0.8rem, 0.8rem + 1vw, 1.2rem);
    }
  }

  & .weather-icon.secondary {
    font-size: clamp(2rem, 2rem + 1vw, 3.5rem);

    & + span {
      font-size: clamp(0.6rem, 0.6rem + 1vw, 1.2rem);
    }
  }

  & span {
    font-weight: 600;
    letter-spacing: -1px;
  }
`;
