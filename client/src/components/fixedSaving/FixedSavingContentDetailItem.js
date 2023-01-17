import { Box, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const FiexedSavingContentDetailItem = ({ title, content }) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.mainMiddle,
          borderRadius: 1,
          opacity: 0.8,
          p: 2,
          color: theme.colors.white,
        })}
      >
        <Typography
          sx={(theme) => ({
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeight.bold,
          })}
        >
          {title}
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: theme.fontSizes.lg,
            whiteSpace: 'pre-wrap',
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
