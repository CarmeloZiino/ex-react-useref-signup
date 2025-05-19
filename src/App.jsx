/* 💡 Premessa:
Stai sviluppando un form di registrazione per una piattaforma dedicata ai giovani sviluppatori web. 
Gli utenti devono iscriversi indicando le loro competenze e specializzazioni. */

function App() {
  return (
    <>
      <h1>Form:</h1>
      <div className="form">
        <input type="text" placeholder="Il tuo Nome" />
        <div className="formSection">
          <input type="text" placeholder="Il tuo UserName" />
          <input type="password" placeholder="La tua Password" />
        </div>
        <div className="formSection">
          <select type="text" placeholder="Specializzazione">
            <option>Full Stack</option>
            <option>Frontend</option>
            <option>Backend</option>
          </select>
          <input type="number" placeholder="Quanta anni di esperienza hai?" />
        </div>
        <input type="text-area" placeholder="Parlaci di Te" className="textArea"/>
      </div>
    </>
  );
}

export default App;
