import meusstyles from './Heading.module.css';

// Download "CSS Modules" extension

export function Heading(props) {
  console.log(meusstyles);
  //return <h1 className='heading purple'>Olá mundo!</h1>;

  //const classes = 'heading';
  //const classes = `${styles.heading} ${styles.outraClasseCSS}`;
  //return <h1 className={classes}>Olá mundo!</h1>;
  //return <h1 className={`${meusstyles.heading} ${meusstyles.outraClasseCSS}`}>Olá mundo!</h1>; //Mais de uma classe em um componente
  console.log(props);
  return <h1 className={meusstyles.heading}>{props.children}</h1>;
  //elementos passados dentro da tag do componente sempre vão estar dentro do children
  // Fora do children, são os criados e personalizáveis como o attr e attr2 em <Heading attr={123} attr2='String'>[CHILDREN]</Heading>
}
