import styled from '@emotion/styled';

export const Background = styled.div<{ backgroundImageUrl?: string }>`
  background-image: ${({ backgroundImageUrl }) =>
    backgroundImageUrl ? `url(${backgroundImageUrl})` : 'linear-gradient(54deg, rgba(34,193,195,0.8589636538209033) 0%, rgba(253,187,45,0.8785714969581583) 100%);'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(3px);
  height: 100%;
  max-width: 100%;
`;

export const Container = styled.div`
  height: 100%;
  position: relative;
  min-width: 320px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;

  max-height: 80%;
  min-height: 70%;
  width: 80%;
  max-width: 1600px;
  border-radius: 20px;
  padding: 2rem;
  /* background: #f2f2f25e; */
  background: linear-gradient(90deg, rgba(249, 249, 249, 0.16) 0%, rgba(246, 246, 246, 0) 50%, rgba(255, 255, 255, 0.06) 100%);
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: unset;
    min-height: unset;
    width: 100%;
    height: 100%;
    border-radius: unset;
  }
`;
