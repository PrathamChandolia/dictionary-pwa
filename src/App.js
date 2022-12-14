import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Container, Switch } from '@mui/material';
import Header from './Components/Header/Header';
import Definitions from './Components/Definitions/Definitions';
import { alpha, styled } from '@mui/material/styles';
import {pink}  from '@mui/material/colors';
import Footer from './Components/Footer/Footer';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const DarkMode = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));


  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category])


  return (
    <div className='App' style={{ height: '100vh', backgroundColor: LightMode ? "#fff" : "#282c34", color: LightMode ? "black" : "white", transition: "all 0.5s linear", }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: "100vh", justifyContent:'space-evenly'}}>
        <div style={{position:'absolute', top:0, right:15, paddingTop:10}}>
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightMode={LightMode}/>
        {meanings && (<Definitions word={word} meanings={meanings} category={category} LightMode={LightMode}/>)}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
