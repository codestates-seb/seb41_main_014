import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Box, List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Notice = ({ isWarning }) => {
  let title;
  let contents;
  if (isWarning) {
    title = '주의';
    contents = [
      '본 사이트에서는 최신정보 제공을 위해 노력하고 있으나, 금융회사의 상품별 이자율 등 거래조건이 수시로 변경되어 지연공시될 수 있으므로 거래전 반드시 해당 금융회사에 문의하시기 바랍니다.',
      '세전 이자율은 우대조건을 반영하지 않은 기본금리입니다. 상세정보의 우대조건에 해당시 보다 높은 이자율이 적용될 수 있습니다.',
      '세후 이자율은 이자소득 원천징수세 15.4%(소득세 14%, 지방소득세 1.4%)를 차감한 금리입니다.',
      '세후이자 및 세후 실수령액은 원단위 절사, 복리의 경우 월복리 가정 등을 적용하여 비교 편의를 위해 예시한 계산금액으로 실제 실수령액과 차이가 발생할 수 있으므로 검색결과 ‘상세정보’를 반드시 확인하시고, 상품 가입시 해당 금융회사에 정확한 금액을 직접 문의하시기 바랍니다. (자유적립식 적금상품은 적금액이 일정하지 않으므로 산출하지 않습니다.)',
      '상세정보에서 확인할 수 있는 ‘우대조건’은 금융회사가 가입조건에 따른 우대이율을 부여할 경우 작성하도록 하고 있습니다.',
    ];
  } else {
    title = '나에게 맞는 적금 추천 받는 방법';
    contents = [
      '나에게 딱 맞는 상품을 높은 이율 순으로 알려줘요!',
      '관심 적금 상품 발견 시 클릭하면 상세 정보를 알 수 있어요!',
      '월 저축금액과 저축 희망 기간에 따라 예상이자를 확인할 수 있어요!',
    ];
  }
  return (
    <Box
      sx={(theme) => ({
        mt: theme.spacing(2),
        mb: theme.spacing(2),
        p: theme.spacing(4),
        backgroundColor: isWarning
          ? theme.colors.accent
          : theme.colors.mainMiddle,
        borderRadius: 2,
      })}
    >
      <h1 style={{ color: 'white' }}>
        {isWarning ? (
          <AnnouncementTwoToneIcon sx={{ pr: 2 }} />
        ) : (
          <AutoAwesomeTwoToneIcon sx={{ pr: 2 }} />
        )}
        {title}
      </h1>
      <List>
        {contents.map((content, index) => (
          <ListItem
            key={index}
            sx={{ p: 1, color: 'white', alignItems: 'start' }}
          >
            <VisibilityTwoToneIcon sx={{ pr: 1 }} />
            <Typography
              sx={(theme) => ({
                fontSize: theme.fontSizes.lg,
              })}
            >
              {content}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notice;

Notice.propTypes = {
  isWarning: PropTypes.bool,
};
