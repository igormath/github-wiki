import { ItemRepoContainer } from "./styles";

const ItemRepo = ({ name, fullName, link }) => {
    return (
        <ItemRepoContainer>
            <h3>{name}</h3>
            <p>{fullName}</p>
            <a href={link} target="_blank" rel="noreferrer">Link para o repositório</a>
        </ItemRepoContainer>
    );
};

export default ItemRepo;
