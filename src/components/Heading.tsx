import meusstyles from './Heading.module.css';

// Download "CSS Modules" extension

export function Heading() {
  console.log(meusstyles);
  //return <h1 className='heading purple'>Olá mundo!</h1>;

  //const classes = 'heading';
  //const classes = `${styles.heading} ${styles.outraClasseCSS}`;
  //return <h1 className={classes}>Olá mundo!</h1>;
  //return <h1 className={`${meusstyles.heading} ${meusstyles.outraClasseCSS}`}>Olá mundo!</h1>; //Mais de uma classe em um componente
  return <h1 className={meusstyles.heading}>Olá mundo!</h1>;
}
