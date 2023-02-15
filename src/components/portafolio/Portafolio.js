import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './Portafolio.css'
import portafolioimg from './26432.svg'
import user from './user.png'
import punto from './punto.png'
import linea from './linea.png'
import vue from './vue.png'
import react from './react.png'
import node from './node.png'
import python from './python.jpg'
import TextField from '@mui/material/TextField';

const Portafolio = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid  className='left' item xs={12} md={8}>
                    <Grid item xs={4} pl={4}>
                        <h1>David Prado</h1>
                    </Grid>
                    <Grid item xs={12} md={6} pl={12} pt={12}> 
                        <h1>Desarrollador Full-Stack.</h1>  
                        <p> Me gusta crear productos front-end y back-end solidos y escalables con excelentes
                            experiencias de usuario
                        </p>     
                    </Grid>
                    <div>
                        <img className='img-puntos' src={portafolioimg}  alt='user' />
                    </div>
                    <div className='img-user'>

                        <img src={user}  alt='user' />
                    </div>
                    <Grid spacing={2} container xs={12} md={6} pl={12} pt={4}>
                        <Grid item xs={12} md={6} pl={12} pt={4}>

                            Altamente capacitado en mejora progresiva, sistemas de diseño e ingenieria de interfaz de usuario
                        </Grid>
                        <Grid item xs={12}  md={6} pl={12} pt={4}>
                            Meia decada de experiencia en la creacion de productos para diferentes clientes
                        </Grid>

                    </Grid>
                </Grid>

                <Grid className='rigth' item xs={12} md={4}  />

                <Grid className='options' container xs={12} >
                    <Grid item xs={12} md={4} ml={12}>
                        <Grid>
                        <h1 className='title'>Front-End</h1>

                        </Grid>
                        <div>Parte encargada de la interaccion con el usuario final de la aplicacion, es la primer parte
                            del contacto del usuario con la maquina en el desarrollo de software
                        </div>
                        <img src={linea} className='linea' alt='linea' />
                    </Grid>
                    <Grid className='container-backend' item xs={12} md={6}>
                        <Grid>
                        <img src={punto}  alt='punto' />
                        <h1 className='title'>Back-End</h1>
                        </Grid>
                        <div>Parte encargada de la encargada de la logica y transaccion con la BD de la aplicacion, es la parte no visible
                            para el usuario final en el desarrollo de software
                        </div>
                    </Grid>
                </Grid>

                <Grid className='experiencie' container xs={12} >
                    <Grid item xs={12} md={4} ml={12}>
                        <Grid>
                        <h1 className='title'>En los ultimos 5 años</h1>

                        </Grid>
                        <div>
                            <p>
                                He creado productos para empresas y negocios de todo suramerica, desde sitios web de marketin
                            hasta soluciones complejas y aplicaciones empresariales centradas en experiencias de usuarios rapidas,
                             elegantes y accesibles.
                                </p>
                            <p>
                                Actualmente trabajo en un compañia para la entrega de medicanmentos como desarrollador full-stack nivel 3
                                desarrollando aplicaciones en Vue.js, React.js para la parte del Frontend y Para el BackEnd Node.js, python 
                                </p>
                        </div>
                    </Grid>
                    <Grid className='' container spacing={2} xs={12} md={6}>
                        <Grid item md={4} ml={6} mt={8}>
                            <img className='react' src={react}  alt='react' />
                        </Grid>
                        <Grid item md={6} ml={6} mt={8}>
                            <img className='vue' src={vue}  alt='vue' />
                        </Grid>
                        <Grid item md={4} ml={6} mt={8}>
                            <img className='node' src={node}  alt='node' />
                        </Grid>
                        <Grid item md={6} ml={6} mt={8}>
                            <img className='python' src={python}  alt='python' />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className='projects' container spacing={2} >
                    <Grid  className='projects-item' item pb={8} xs={12} md={5}  ml={12}>
                        <Grid item>
                            <h1 >Yo construyo y diseño cosas </h1>

                            <div>
                                Proyectos de codigo abiento, aplicaciones web y experimentales
                            </div>
                        </Grid >
                        <Grid mt={6} item>
                            <a className="button button3" href='https://farmadomicilios.epssura.com/login' target="_blank">Ver mis trabajos</a>
                        </Grid>
                    </Grid >
                    <Grid  item ml={12} xs={8} md={4} >
                        <Grid>
                            <h1 >Monto bicicleta a veces  </h1>
                            <div>
                                Practico con algunos cursos que voy encontrando en la web
                            </div>
                        </Grid>
                        <Grid mt={6}>
                            <Link href="www.enyoi.co/full-stack-developer/">
                                <Button variant="outlined">
                                    Ver cursos
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className='message' container spacing={2} >
                    <Grid  item  xs={12} md={12} >
                        <Grid item md={12}>
                            <h1 > Envieme un mensaje !</h1>

                            <div>
                                ¿Tinenes una pregunta o propuesta, o solo quieres salidar? Adelante
                            </div>
                        </Grid >
                        <Grid container  md={12}>
                            <Grid mt={4} md={4} item>
                                <TextField
                                    id="outlined-error"
                                    label="Su nombre"
                                />
                            </Grid>
                            <Grid mt={4} md={4} item>
                                <TextField
                                    id="outlined-error-helper-text"
                                    label="Direccion de correo electronico"
                                />
                            </Grid>
                            <Grid mt={4} md={4} item>
                                <TextField
                                    id="outlined-error"
                                    label="Tu mensaje"
                                />
                            </Grid>
                        </Grid>
                        <Grid mt={6} item>
                            <a className="button button3" href='https://farmadomicilios.epssura.com/login' target="_blank">Enviar mensaje</a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portafolio