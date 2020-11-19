import React, { memo } from 'react';

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

export default memo(Categories);
