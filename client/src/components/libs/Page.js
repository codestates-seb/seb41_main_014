/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, styled } from '@mui/material';

const PaginationButton = styled(Button)`
  font-size: 15px;
  border: 1px solid grey;
  background-color: ${(props) => (props.select ? 'orange' : 'white')};
  width: 50px;
  height: 50px;
  margin: 4px;
`;

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
      <PaginationButton
        className={css}
        onClick={this.handleClick.bind(this)}
        select={isActive}
      >
        <a className={linkCss} href={href} aria-label={ariaLabel}>
          {pageText}
        </a>
      </PaginationButton>
    );
  }
}
