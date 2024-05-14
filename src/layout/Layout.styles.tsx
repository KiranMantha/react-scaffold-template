import styled from 'styled-components';

export const StyledLayout = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;

  header {
    nav {
      background-color: #dedede;
      padding: 16px;

      ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
          display: inline-block;
          margin: 0 10px;

          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .container {
    padding: 16px;
  }

  footer {
    padding: 16px;
    background-color: #dedede;
  }
`;
