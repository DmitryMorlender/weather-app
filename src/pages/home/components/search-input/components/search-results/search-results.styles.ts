import styled from '@emotion/styled';

export const Wrapper = styled.div<{
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

export const ResultItem = styled.div`
  padding: 0.5rem 1rem;
  margin: 0 -1rem;
  cursor: pointer;

  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background-color: #0000001c;
  }
`;
