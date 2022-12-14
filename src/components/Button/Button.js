import { ButtonElement } from "./styles";

const Button = ({ onClick }) => {
    return (
        <ButtonElement onClick={onClick}>Buscar</ButtonElement>
    );
}

export default Button;
