import { Container, styled } from '@mui/material';

export const ColumnContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

export const RouteContainer = styled(ColumnContainer)`
  align-items: center;
`;

export const RowCenterContainer = styled(RowContainer)`
  justify-content: center;
`;
