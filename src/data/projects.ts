import LitleNightmares from '@assets/images/projects/5.webp';
import SistemaSolarApi from '@assets/images/projects/2.webp';
import Petcontrado from '@assets/images/projects/3.webp';
import UbigeosPeru from '@assets/images/projects/4.webp';

export const projects =
[
    {
        "name": "Sistema Solar API",
        "description": "API para obtener información de los planetas del sistema solar.",
        "image": SistemaSolarApi,
        "url": "https://api-sistemasolar.vercel.app/",
        "technologies":
        [
            "laravel", "docusaurus"
        ]
    },
    {
        "name": "Petcontrado (Servivio Web)",
        "description": "Servicio web para encontrar, reportar y adoptar mascotas. Cuenta con login con google, funciones CRUD para el reporte de mascotas y envío de SMS con Vonage, roles y permisos con Spatie.",
        "image": Petcontrado,
        "url": "https://petcontrado.nijui.com/",
        "technologies":
        [
            "laravel", "spatie", "vonage", "socialite"
        ]
    },
    {
        "name": "Little Nightmares (Concepto de diseño)",
        "description": "Concepto de diseño de la página web del videojuego Little Nightmares. Cuenta con un diseño responsive y view transitions.",
        "image": LitleNightmares,
        "url": "https://little-nightmares.vercel.app/",
        "technologies":
        [
            "astro", "tailwindcss", "react"
        ]
    },
    {
        "name": "Ubigeos Perú",
        "description": "API para obtener información de los departamentos, provincias y distritos del Perú.",
        "image": UbigeosPeru,
        "url": "https://ubigeosperu.nijui.com/api",
        "technologies":
        [
            "lumen"
        ]
    }
]