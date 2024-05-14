import styled from 'styled-components';

export const ErrorContainer = styled.section`
  padding: 16px;
  border-radius: 10px;
  background-color: #fff;

  fieldset {
    padding: 16px;
    border-radius: 10px;
    border: 1px solid #dedede;
    legend {
      display: block;
      padding: 0 4px;
    }
    code {
      border-radius: 10px;
    }
  }
`;
