import React, { memo, useState } from 'react';

const Categories = memo(({ items, onClickItem }) => {
	const [activeItem, setActiveItem] = useState(0);

	const selectHandler = (index) => {
		setActiveItem(index);
		onClickItem(index);
	};

	return (
		<div className="categories">
			<ul>
				{items &&
					items.map((text, index) => (
						<li
							className={activeItem === index ? 'active' : ''}
							onClick={() => selectHandler(index)}
							key={text}
						>
							{text}
						</li>
					))}
			</ul>
		</div>
	);
});

export default Categories;
