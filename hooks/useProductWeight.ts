import { useState } from "react";

const useProductWeight = (initialWeight: number, increment: number) => {
    const [weight, setWeight] = useState(initialWeight);

    const incrementWeight = () => {
        setWeight(prevWeight => prevWeight + increment);
    };

    const decrementWeight = () => {
        if (weight > increment) {
            setWeight(prevWeight => prevWeight - increment);
        }
    };

    return { weight, incrementWeight, decrementWeight };
};

export default useProductWeight;
