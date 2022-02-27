import styled from '@emotion/styled';

export const Forcast = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(2, min-content);
  grid-auto-rows: min-content;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  color: white;
  margin-top: 10px;

  @media (min-width: 981px) {
    grid-template-columns: min-content repeat(auto-fit, minmax(250px, 1fr));
    height: auto;
  }

  @media (max-width: 1056px) {
    /* height: 100%; */
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
  margin-top: auto;
`;

export const ErrorMessage = styled(LoaderContainer)`
  color: white;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  margin-bottom: auto;
  margin-top: 1rem;
`;

export const Primary = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-column: 1/-1;
  grid-row: 1/2;
  justify-items: center;
  padding: 2.2rem;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.41);
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border-radius: 10px;
  margin: 0.5rem;

  & .primary-caption {
    text-align: center;
    margin-top: 0.5rem;
    grid-column: 1/2;
    grid-row: 3/-1;
  }

  & .temp-wrapper {
    grid-column: 1/-1;
    grid-row: 3/-1;

    font-size: clamp(2rem, 5vw, 5.5rem);
    & span {
      font-size: clamp(1.5rem, 2vw, 3.5rem);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-block-start: 2rem;
    padding-block-end: 0.5rem;
    margin: 0.5rem;
    width: auto;
  }

  @media (min-width: 980px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const WeatherIconAndTemperature = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const EmptyListMessage = styled.div<{ emptyListMessage: string }>`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  color: white;
  margin-top: 2rem;
  margin-bottom: auto;

  &::before {
    content: '${({ emptyListMessage }) => emptyListMessage}';
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Weekly = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column: 1/-1;
  grid-row: 2/-1;
  gap: 0.5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }

  @media (min-width: 980px) {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }
`;

export const Secondary = styled.div`
  display: grid;
  padding: 1rem;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  background: #00000030;
  border-radius: 10px;
  align-items: center;
  justify-items: center;

  & .secondary-caption {
    grid-column: 1/2;
    grid-row: 3/-1;
  }

  & .temp-wrapper {
    grid-column: 2/-1;
    grid-row: 1/-1;
    font-size: clamp(1.5rem, 1.5vw, 3.5rem);
    & span {
      font-size: clamp(1.5rem, 1.5vw, 3.5rem);
    }
  }
`;

export const WeekDay = styled.p`
  grid-column: 1/1;
  grid-row: 1/2;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Icon = styled.div`
  width: 50%;
  text-align: center;
  grid-column: 1/2;
  grid-row: 2/3;
  color: white;
`;
