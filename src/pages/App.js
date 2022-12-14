import { useState } from 'react';
import githubLogo from '../assets/github.png';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import ItemRepo from '../components/ItemRepo/ItemRepo';
import { Container, Title, Image } from './styles';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [resRepos, setResRepos] = useState([]);

  const handleClickFetch = () => {
    fetch(`https://api.github.com/repos/${currentRepo}`)
      .then(res => res.json())
      .then(data => setResRepos(current => [...current, {
        name: data.name,
        full_name: data.full_name,
        link: data.html_url,
      }]))
  };

  return (
    <Container>
      <Title>GitHub Wiki</Title>
      <Image src={githubLogo} width={72} height={72} alt="GitHub Logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleClickFetch} />
      {resRepos.map((value, index) => <ItemRepo
        name={value.name}
        fullName={value.full_name}
        link={value.link}
        key={index}
      />)}
    </Container>
  );
}

export default App;
