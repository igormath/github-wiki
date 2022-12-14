import { InputElement } from "./styles";

const Input = ({ value, onChange }) => {
    return (
        <InputElement value={value} onChange={onChange} />
    );
}

export default Input;
