import React, { memo, useState } from 'react';

const Categories = ({ items, onClickItem }) => {
	const [activeItem, setActiveItem] = useState(null);

	const selectHandler = (index) => {
		setActiveItem(index);
		onClickItem(index);
	};

	return (
		<div className="categories">
			<ul>
				<li
					className={activeItem === null ? 'active' : ''}
					onClick={() => selectHandler(null)}
				>
					Все
				</li>
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
};

export default memo(Categories);
