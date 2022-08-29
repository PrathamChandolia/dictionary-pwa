import React from 'react';
import "./Header.css";
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import categories from '../../data/category';


const Header = ({ setCategory, category, word, setWord, LightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: { main: LightMode ? "#000" : "#fff", },
            mode: LightMode ? "light" : "dark",
        },
    });

    const handleLangChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className='header'>
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField classname="search" label="Search a Word" variant="standard" value={word} onChange={(e) => setWord(e.target.value)} />
                    <TextField className='select' variant="standard"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleLangChange(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;