import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	const {detailId} = useParams();

    useEffect(() => {
        const firestoreDatabase = getFirestore(); 
        const queryProduct = doc(firestoreDatabase, "items", detailId);

        getDoc(queryProduct)
        	.then(resp => setProduct({id: resp.id, ...resp.data()}))
        	.catch(err => console.log(err))
        	.finally(() => setLoading(false))
    }, [detailId]);

	return loading ? <div className="loading-container"><p className="loading">Espere...</p></div> : <ItemDetail item={product} />
};

export default ItemDetailContainer;
