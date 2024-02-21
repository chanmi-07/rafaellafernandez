import ItConcept2 from '@assets/images/projects/1.webp';
import SistemaSolarApi from '@assets/images/projects/2.webp';
import Petcontrado from '@assets/images/projects/3.webp';

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
        "url": "https://encuentratumascota.nijui.com/",
        "technologies":
        [
            "laravel", "spatie", "vonage", "socialite"
        ]
    },
    {
        "name": "It 2 - Concept",
        "description": "Información de la película IT Chapter Two diseñado por Andrii Domanchuk.",
        "image": ItConcept2,
        "url": "https://graceful-salamander-f77750.netlify.app/",
        "technologies":
        [
            "astro", "tailwindcss", "react"
        ]
    },
]