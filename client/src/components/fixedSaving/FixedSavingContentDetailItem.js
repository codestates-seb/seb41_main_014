import { Box, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const FiexedSavingContentDetailItem = ({ title, content }) => {
  return (
    <>
      <Box
        sx={() => ({
          backgroundColor: 'transparent',
          borderRadius: 1,
          opacity: 0.8,
          p: 2,
        })}
      >
        <Typography
          sx={(theme) => ({
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeight.bold,
            color: theme.colors.mainMiddle,
          })}
        >
          {title}
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: theme.fontSizes.lg,
            whiteSpace: 'pre-wrap',
            color: theme.colors.black,
          })}
        >
          {content}
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default FiexedSavingContentDetailItem;

FiexedSavingContentDetailItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
