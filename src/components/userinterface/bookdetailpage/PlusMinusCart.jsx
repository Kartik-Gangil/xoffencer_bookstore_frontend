import { useState, useContext } from "react"
import MainContext from "../../../context/MainContext";
export default function PlusMinusCart({ qty, id }) {
    const [overState, setOverState] = useState('#b5b5b5')
    const [value, setValue] = useState(qty);
    const { UpdateCartItem } = useContext(MainContext)

    const handlePlus = () => {
        const sign = '+';
        let v = value;
        v++;
        setValue(v);
        UpdateCartItem(id, sign)
    }

    const handleMinus = () => {
        const sign = '-';
        if (value > 0) {
            let v = value;
            v--;
            setValue(v);
            UpdateCartItem(id, sign)
        }


    }


    return (<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 50 }}>

        <div style={{ width: 165, height: 35, borderRadius: 17.5, marginTop: 8, color: '#0c5273', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <div onClick={handleMinus} style={{ cursor: 'pointer', width: 35, height: 35, borderRadius: 17.5, border: `1px solid ${overState}`, color: '#0c5273', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</div>
            <div>{value}</div>
            <div onClick={handlePlus} style={{ cursor: 'pointer', width: 35, height: 35, borderRadius: 17.5, border: `1px solid ${overState}`, color: '#0c5273', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>

        </div>

    </div>)
}