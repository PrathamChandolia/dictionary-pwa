import React from 'react';
import './Definitions.css';

const Definitions = ({ word, meanings, category, LightMode}) => {
  return (
    <div className="meanings">

      <div>
        {/* audio---------------------------- */}
        {meanings[0] && word && category === "en" && (
        <audio controls
          style={{ backgroundColor: LightMode ? "rgb(183 84 122)" : "#fff" , borderRadius: 10, padding: 20 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
        >
          <p>Your browser does not support the audio element.</p>
        </audio>
        )}
        {/* audio---------------------------- */}
      </div>
      

      {/* <hr style={{ backgroundColor: "black", width: "100%" }} /> */}
      {(word === "")
        ? <span className="subTitle">Start by typing a word in Search</span>
        : (
          meanings.map((mean) => mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className='singleMeaning' style={{  backgroundColor: LightMode ? "rgb(183 84 122) /*rgb(56 94 115)8*/" : "white", color: LightMode ? "white" : "black", }}>
                <b>{def.definition}</b>
                <hr style={{ width: "100%" }} />
                {def.example && (<span><b>Example: </b>{def.example}</span>)}
                {def.synonyms && (<span><b>Synonyms: </b>{def.synonyms.map((s) => `${s}, `)}</span>)}
              </div>
            ))
          ))
        )
      }

    </div>
  );
};

export default Definitions;