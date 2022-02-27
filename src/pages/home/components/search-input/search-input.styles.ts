import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const Search = styled.div`
  position: relative;
  padding: 1rem 1rem;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  flex: 0.5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  max-width: 100%;

  & input {
    font-size: clamp(1rem, 1rem + 0.1vw, 1.3rem);
    flex: 1;
    padding-right: 36px;
    overflow: hidden;
    text-overflow: ellipsis;

    &::placeholder {
      color: gray;
    }
  }

  @media (max-width: 768px) {
    margin-block-start: 10px;
    flex: 1;
  }
`;

export const ClearIcon = styled.span`
  display: flex;
  position: absolute;
  right: 1em;
  cursor: pointer;
`;

export const Suggestions = styled.div<{
  emptyListMessage?: string;
}>`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border-radius: 10px;
  margin-top: 0.2rem;
  position: absolute;
  width: 100%;
  max-height: 272px;
  overflow-y: auto;

  &:empty::before {
    content: '${({ emptyListMessage }) => (emptyListMessage ? emptyListMessage : 'No results...')}';
  }
`;
