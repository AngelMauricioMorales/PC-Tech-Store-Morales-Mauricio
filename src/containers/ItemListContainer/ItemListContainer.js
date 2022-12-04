import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'; 

function ItemListContainer() {
  	const [loading, setLoading] = useState(true);
  	const [products, setProducts] = useState([]);

	const {itemCategory} = useParams();

	useEffect(() => {
		const firestoreDatabase = getFirestore();
		const queryCollection = collection(firestoreDatabase, "items");
		const queryFilter = itemCategory ? query(queryCollection, where("category", "==", itemCategory)) : queryCollection;
	
		getDocs(queryFilter)
			.then(resp => setProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
			.catch(err => console.log(err))
			.finally(() => setLoading(false)) 
    }, [itemCategory]);

  	return loading 	? 	(<p id="loading">Cargando...</p>) 	: 	(	
																	<ul className="itemList">
																		<ItemList products={products} />
																	</ul>
  																);
};

export default ItemListContainer;
