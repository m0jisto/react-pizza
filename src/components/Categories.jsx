import React, { memo } from 'react';

const Categories = ({ items, activeCategory, onClickItem }) => {
	const selectHandler = (index) => onClickItem(index);

	return (
		<div className="categories">
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => selectHandler(null)}>
					Все
				</li>
				{items &&
					items.map((text, index) => (
						<li
							className={activeCategory === index ? 'active' : ''}
							onClick={() => selectHandler(index)}
							key={text}
						>
							{text}
						</li>
					))}
			</ul>
		</div>
	);
};

export default memo(Categories);
