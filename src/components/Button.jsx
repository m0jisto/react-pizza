import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => (
	<button type="button" onClick={onClick} className={classNames('button', className, { 'button--outline': outline })}>
		{children}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	outline: PropTypes.bool,
	children: PropTypes.node,
};

export default Button;
