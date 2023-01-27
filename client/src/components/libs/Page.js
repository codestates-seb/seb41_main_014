/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Box, Button, Link, Typography } from '@mui/material';

export default class Page extends Component {
  static propTypes = {
    pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    pageNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool,
    activeClass: PropTypes.string,
    activeLinkClass: PropTypes.string,
    itemClass: PropTypes.string,
    linkClass: PropTypes.string,
    disabledClass: PropTypes.string,
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
  };

  static defaultProps = {
    activeClass: 'active',
    disabledClass: 'disabled',
    itemClass: undefined,
    linkClass: undefined,
    activeLinkCLass: undefined,
    isActive: false,
    isDisabled: false,
    href: '#',
  };

  handleClick(e) {
    const { isDisabled, pageNumber } = this.props;
    e.preventDefault();
    if (isDisabled) {
      return;
    }
    this.props.onClick(pageNumber);
  }

  render() {
    let {
      pageText,
      pageNumber,
      activeClass,
      itemClass,
      linkClass,
      activeLinkClass,
      disabledClass,
      isActive,
      isDisabled,
      href,
      ariaLabel,
    } = this.props;

    const css = cx(itemClass, {
      [activeClass]: isActive,
      [disabledClass]: isDisabled,
    });

    const linkCss = cx(linkClass, {
      [activeLinkClass]: isActive,
    });

    return (
      <Box
        sx={(theme) => ({
          p: 3,
          borderRadius: '4px',
          fontSize: theme.fontSizes.basic,
          backgroundColor: isActive ? theme.colors.mainMiddleLight : '',
        })}
        className={css}
        onClick={this.handleClick.bind(this)}
      >
        <Link className={linkCss} href={href} aria-label={ariaLabel}>
          <Typography
            sx={(theme) => ({
              color: isActive ? theme.colors.white : '',
            })}
          >
            {pageText}
          </Typography>
        </Link>
      </Box>
    );
  }
}
