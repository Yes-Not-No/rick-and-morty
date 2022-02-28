import { useEffect } from 'react';
import './pagination.scss';

//links - amount of links
//currentPage - current active page in window
//pageSetter - useState function which set current page

function Pagination({ links, currentPage, pageSetter }) {
	useEffect(() => {
		document.querySelector('.pagination-item').classList.add('pagination-item__current');
	}, []);

	function paginationHandler(e) {
		e.preventDefault();
		const page = Number(e.target.innerText);
		pageSetter(page);
		document.querySelectorAll('.pagination-item').forEach(item => {
			item.classList.remove('pagination-item__current');
		});
		e.target.classList.add('pagination-item__current');
	}

	return (
		<div className="pagination">
			{links.map(item => {
				if (currentPage === 1 && item < 7) {
					return (
						<a className="pagination-item" href="#" style={{ marginRight: 20 }} onClick={paginationHandler}>
							{item}
						</a>
					);
				}
				if (item >= currentPage - 1 && item < currentPage + 5) {
					return (
						<a className="pagination-item" href="#" style={{ marginRight: 20 }} onClick={paginationHandler}>
							{item}
						</a>
					);
				}
				return null;
			})}
		</div>
	);
}

export { Pagination };
