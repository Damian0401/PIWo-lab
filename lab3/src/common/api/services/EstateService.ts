import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { IEstate } from "../../interfaces";
import { firestore } from "../config";
import { Collections } from "../../enums/Collections";

export const getAllEstates = async (): Promise<IEstate[]> => {
    const estatesRef = collection(firestore, Collections.Estates);
    const querySnapshot = await getDocs(estatesRef);
    const estates = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as IEstate));

    return estates;
}

export const getEstateById = async (id: string): Promise<IEstate | undefined> => {
    const estatesRef = collection(firestore, Collections.Estates);
    const estatesQuery = query(estatesRef, where("__name__", "==", id));
    const querySnapshot = await getDocs(estatesQuery);
    const doc = querySnapshot.docs[0];

    if (!doc) {
        return undefined;
    }

    return { id: doc.id, ...doc.data() } as IEstate;
}

export const addEstate = async (estate: IEstate) => {
    const estatesRef = collection(firestore, Collections.Estates);
    delete estate.id;
    await addDoc(estatesRef, estate);
}

export const updateEstate = async (id: string, estate: IEstate) => {
    const estateRef = doc(firestore, Collections.Estates, id);
    delete estate.id;
    await updateDoc(estateRef, { ...estate});
}