import React, { memo, useState, useEffect, useRef } from 'react';

const SortPopup = ({ items, onClickType, order, onClickOrder }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const [activeItem, setActiveItem] = useState(0);
	const sortRef = useRef();
	const activeLabel = items[activeItem].name;

	const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup);

	const selectType = (index, type) => {
		setActiveItem(index);
		onClickType(type);
		setVisiblePopup(false);
	};
	const selectOrder = () => onClickOrder(order === 'desc' ? 'asc' : 'desc');

	const handlerOutsideClick = (e) => !e.path.includes(sortRef.current) && setVisiblePopup(false);

	useEffect(() => document.body.addEventListener('click', handlerOutsideClick), []);

	return (
		<div ref={sortRef} className="sort">
			<div className="sort__label">
				<svg
					onClick={selectOrder}
					className={order === 'asc' ? 'rotated' : ''}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={toggleVisiblePopup}>{activeLabel}</span>
			</div>
			{visiblePopup && (
				<div className="sort__popup">
					<ul>
						{items &&
							items.map(({ name, type }, index) => (
								<li
									className={activeItem === index ? 'active' : ''}
									onClick={() => selectType(index, type)}
									key={`${name}_${type}`}
								>
									{name}
								</li>
							))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default memo(SortPopup);
