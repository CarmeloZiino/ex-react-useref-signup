/* 💡 Premessa:
Stai sviluppando un form di registrazione per una piattaforma dedicata ai giovani sviluppatori web. 
Gli utenti devono iscriversi indicando le loro competenze e specializzazioni. */

import { useState, useMemo, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

function App() {
  const inputName = useRef(); //Input non controllato
  const [inputUserName, setInputUserName] = useState(""); //Input Controllato
  const [inputPassword, setInputPassword] = useState(""); //Input Controllato
  const inputNumber = useRef(); //Input non controllato
  const inputSpecializzazione = useRef(); //Input non controllato
  const [inputTextArea, setInputTextArea] = useState(""); //Input Controllato

  //Validazioni dei Caratteri

  const isInputUserNameValid = useMemo(() => {
    const caratteriValidi = [...inputUserName].every(
      //Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
      (c) => letters.includes(c.toLocaleLowerCase()) || numbers.includes(c)
    );
    return caratteriValidi && inputUserName.length >= 6;
  }, [inputUserName]);

  const isInputPasswordValid = useMemo(() => {
    //Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
    return (
      inputPassword.trim().length >= 6 &&
      [...inputPassword].some((c) => letters.includes(c)) &&
      [...inputPassword].some((c) => symbols.includes(c)) &&
      [...inputPassword].some((c) => numbers.includes(c))
    );
  }, [inputPassword]);

  const isInputTextAreaValid = useMemo(() => {
    //Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).
    return (
      inputTextArea.trim().length >= 100 && inputTextArea.trim().length < 1000
    );
  }, [inputTextArea]);

  //Funzione per l'onSubmit del Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputName.current.value.trim() || //INPUT NON CONTROLLATO
      !inputUserName.trim() ||
      !inputPassword.trim() ||
      !inputNumber.current.value.trim() || //INPUT NON CONTROLLATO
      !inputSpecializzazione.current.value.trim() || //INPUT NON CONTROLLATO
      inputNumber.current.value <= 0 || //INPUT NON CONTROLLATO
      !inputTextArea.trim() ||
      !isInputTextAreaValid ||
      !isInputPasswordValid ||
      !isInputUserNameValid
    ) {
      alert("Errore: Compilare tutti i campi");
      return;
    }
    console.log("Submit effetuato:", 
      `Name Complete: ${inputName.current.value};
        Username:${inputUserName} , 
        Password: ${inputPassword},
        yearsExperiens: ${inputNumber.current.value},
        Specializzation: ${inputSpecializzazione.current.value},
        Description: ${inputTextArea}
        `,
    );
  };

  //

  //Cosa ritorna il Componente
  return (
    <>
      <h1>Form:</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="formSection">
          <div>
            <label>Nome e Cognome</label>
            <input
              type="text"
              ref={inputName}
              placeholder="scrivi qui il tuo Nome"
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={inputUserName}
              onChange={(e) => setInputUserName(e.target.value)}
              placeholder="scrivi qui il tuo UserName"
            />
            {inputUserName.trim() && (
              <p style={{ color: isInputUserNameValid ? "green" : "red" }}>
                {isInputUserNameValid
                  ? "Username Valida"
                  : `Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).`}
              </p>
            )}
          </div>
        </div>
        <div className="formSection">
          <div>
            <label>Password</label>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="scrivi qui la tua Password"
            />
            {inputPassword.trim() && (
              <p style={{ color: isInputPasswordValid ? "green" : "red" }}>
                {isInputPasswordValid
                  ? "Password Valida"
                  : `Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.`}
              </p>
            )}
          </div>
        </div>
        <div className="formSection">
          <div>
            <label>Specializzazione</label>

            <select
              type="text"
              ref={inputSpecializzazione}
              placeholder="Specializzazione"
            >
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </div>
          <div>
            <label>Anni di esperienza</label>

            <input
              type="number"
              ref={inputNumber}
              placeholder="Quanta anni di esperienza hai?"
            />
          </div>
        </div>
        <div>
          <label>Descrizione</label>
          <textarea
            value={inputTextArea}
            onChange={(e) => setInputTextArea(e.target.value)}
            placeholder="Parlaci di Te"
            className="textArea"
          />

          {inputTextArea.trim() && (
            <p style={{ color: isInputTextAreaValid ? "green" : "red" }}>
              {isInputTextAreaValid
                ? "Descrizione Valida"
                : `Deve avere tra i 100 e i 1000 caratteri: ${
                    inputTextArea.trim().length
                  }`}
            </p>
          )}
        </div>
        <button type="">Registrati</button>
      </form>
    </>
  );
}

export default App;
