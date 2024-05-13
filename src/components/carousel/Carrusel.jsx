import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Carrusel.css';

const Carrusel = () => {
    // Estado para controlar la imagen actual
    const navigate = useNavigate()
    const [imagenActual, setimagenActual] = useState(0);
    const [tituloActual, setTituloActual] = useState(0);
    const [localizacionActual, setLocalizacionActual] = useState(0);

    // Arreglo de URLs de las imágenes
    const images = [
			"https://i.postimg.cc/rpx8R4Xx/castellfollit-de-la-roca-girona.avif",
			"https://i.postimg.cc/MpxJHpbr/La-Alhambra-de-Granada.jpg",
			"https://i.postimg.cc/P54swnSf/Playa-Malvarrosa-Valencia.avif",
			"https://i.postimg.cc/pLgWdZ7P/palafrugell-girona-s144973225.avif",
			"https://i.postimg.cc/Gpm0PgfF/Real-Alcazar-de-Sevilla.avif",
			"https://i.postimg.cc/N0M05yj8/La-Sagrada-Familia-landing.jpg",
			"https://i.postimg.cc/y8J6B5Lf/pn-aiguestortes.avif"
		];
    const titles = ['Castellfollit de la Roca','La Alhambra','Playa Malvarrosa','Palafrugell','Real Alcazar','La Sagrada Familia','Parque Nacional de Aiguestortes']

    const locations = ['Girona','Granada','Valencia','Girona','Sevilla','Barcelona','Lleida']


    // Efecto que consigue que la imagen, título y localización, se desplace al índice anterior cada 3500ms en bucle.
    useEffect(() => {
        const interval = setInterval(() => {
            setimagenActual((prevImage) => (prevImage - 1 + images.length) % images.length);
            setTituloActual((prevTitle) => (prevTitle - 1 + titles.length) % titles.length);
            setLocalizacionActual((prevLocation) => (prevLocation - 1 + locations.length) % locations.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
			<>
				<section className="carrusel__page" style={{ backgroundImage: `url(${images[imagenActual]})` }}>
					<span className="carrusel__background"></span>
					<div className="carrusel__section">
						<div className="carrusel__location-container">
							<svg
								className="carrusel__location-icon"
								viewBox="0 0 40 40"
								fill="white"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M34.3667 14.0833C32.6167 6.38332 25.9 2.91666 20 2.91666C20 2.91666 20 2.91666 19.9833 2.91666C14.1 2.91666 7.36667 6.36666 5.61667 14.0667C3.66667 22.6667 8.93334 29.95 13.7 34.5333C15.4667 36.2333 17.7333 37.0833 20 37.0833C22.2667 37.0833 24.5333 36.2333 26.2833 34.5333C31.05 29.95 36.3167 22.6833 34.3667 14.0833ZM20 22.4333C17.1 22.4333 14.75 20.0833 14.75 17.1833C14.75 14.2833 17.1 11.9333 20 11.9333C22.9 11.9333 25.25 14.2833 25.25 17.1833C25.25 20.0833 22.9 22.4333 20 22.4333Z" />
							</svg>
							<h4 className="carrusel__location">
								{titles[tituloActual]}
								<br />({locations[localizacionActual]})
							</h4>
						</div>
						<div className="carrusel__main-container">
							<h1 className="carrusel__title">Los mejores planes urbanos y rurales</h1>
							<p className="carrusel__content">Disfruta de más de 400 planes por toda España a tan solo un clic.</p>
							<div className="carrusel__button-container">
								<button type="button" onClick={() => navigate("/signup")} className="carrusel__button">
									Registro
								</button>
								<button type="button" onClick={() => navigate("/login")} className="carrusel__button-trans">
									Iniciar sesión
								</button>
							</div>
						</div>
					</div>
				</section>
			</>
		);
};

export default Carrusel;
