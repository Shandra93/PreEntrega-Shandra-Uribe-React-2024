import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getProducts() {
    const snapshot = await getDocs(collection(db, "Productos"));

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}

export async function getProductById(id) {
    const snapshot = await getDoc(doc(db, "Productos", id));

    if (!snapshot.exists()) {
        return null;
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
}