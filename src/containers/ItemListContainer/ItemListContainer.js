import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'; 

function ItemListContainer() {
  	const [isLoading, setisLoading] = useState(true);
  	const [products, setProducts] = useState([]);

	const {itemCategory} = useParams();

	useEffect(() => {
		const firestoreDatabase = getFirestore();
		const queryCollection = collection(firestoreDatabase, "items");
		const queryFilter = itemCategory ? query(queryCollection, where("category", "==", itemCategory)) : queryCollection;
	
		getDocs(queryFilter)
			.then(resp => setProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
			.catch(err => console.log(err))
			.finally(() => setisLoading(false)) 
    }, [itemCategory]);

  	return (
		isLoading 	
		? 	
		(<p id="isLoading">Cargando...</p>) 	
		:
		<section className="itemsListSection">
			<ul className="itemsList">
				<ItemList products={products} />
			</ul>
		</section> 	
	)
};

export default ItemListContainer;
