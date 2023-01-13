import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from '@mui/material';

const FixedSaving = () => {
  return (
    <>
      <Box>
        <Paper elevation={4}>
          <TextField
            defaultValue={'나에게 맞는 적금 추천 받는 방법'}
            InputProps={{
              readOnly: true,
            }}
          />
          <List>
            <ListItem>
              <ListItemText>적금 희망여부에 따라 등록이 가능해요!</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                나에게 딱 맞는 상품을 높은 이율 순으로 알려줘요!
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                관심 적금 상품 발견 시 클릭하면 상세 정보를 알 수 있어요
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </>
  );
};

export default FixedSaving;
