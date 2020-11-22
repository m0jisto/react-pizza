import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Categories = ({ items, activeCategory, onClickCategory }) => (
	<div className="categories">
		<ul>
			<li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>
				Все
			</li>
			{items &&
				items.map((text, index) => (
					<li
						className={activeCategory === index ? 'active' : ''}
						onClick={() => onClickCategory(index)}
						key={text}
					>
						{text}
					</li>
				))}
		</ul>
	</div>
);

Categories.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
	activeCategory: PropTypes.number,
	onClickCategory: PropTypes.func,
};

export default memo(Categories);
