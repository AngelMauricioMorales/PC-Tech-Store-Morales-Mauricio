import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ProductsItemList from '../../components/ProductsItemList/ProductsItemList';
import './ProductsListContainer.css';

function ProductsListContainer() {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const { itemCategory } = useParams();

	useEffect(() => {
		const firestoreDatabase = getFirestore();
		const queryCollection = collection(firestoreDatabase, "items");
		const queryFilter = itemCategory ? query(queryCollection, where("category", "==", itemCategory)) : queryCollection;

		getDocs(queryFilter)
			.then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}, [itemCategory]);

	return (
		isLoading
			?
			(<div className="isLoading-container"><p className="isLoading">Cargando...</p></div>)
			:
			<section id="catalogue" className="items-list-section">
				<div className="items-list-section_container">
					<h2 className="items-list-section_title">CATÁLOGO</h2>
					<ul className="items-list">
						<ProductsItemList products={products} />
					</ul>
				</div>
			</section>
	)
};

export default ProductsListContainer;
