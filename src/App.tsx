// export function App(){}; // É a terceira forma de exportar ao invés de usar function App(){} para usar o export... no final do arquivo.
import './styles/theme.css';
import './styles/global.css';
import './App.css';
export function App() {
  console.log('Oi');
  return (
    <>
      <h1>Olá, porra! do App</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a orci
        sit amet neque interdum iaculis. Etiam dictum aliquam placerat. Maecenas
        quis tincidunt quam. Donec sollicitudin nisl justo, nec egestas risus
        auctor nec.
      </p>
    </>
  );
}

//export default App; // Pode receber qualquer nome (QualquerCoisa) por causa do "default"
// export { App }; //Agora precisa receber o nome "App"

// <></> -> React Fragment
// Que é o mesmo que importar e usar <Fragment></Fragment> de
// import { Fragment } from 'react/jsx-runtime';
