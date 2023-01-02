import { Employee } from 'src/app/model/Employee';
import { Company } from "./Company";

export const COMPANIES : Company [] = [{
        name: 'BDF TECHNOLOGY SOLUTIONS',
        razonSocial: 'BDF SA',
        cuit: 23232,
        employees:[
            {name: 'Leandro', surname: 'Fernandez', cuit: 458471, position: 'Developer'},
            {name: 'Agustina', surname: 'Insua', cuit: 17136, position: 'Developer'}
        ]
    },
    {
        name: 'Coto',
        razonSocial: 'Coto CICSA',
        cuit: 58791,
        employees: [
            {name: 'Juan', surname: 'Perez', cuit: 35481, position: 'Repositor'},
            {name: 'Pedra', surname: 'Bambino', cuit: 25469, position: 'Cajera'}
        ]
    },
    {
        name: 'Dia',
        razonSocial: 'Dia SRL',
        cuit: 5454,
        employees: [
            {name: 'Lourdes', surname: 'Obregon', cuit: 42578, position: 'Encargada'},
            {name: 'Rodrigo', surname: 'Gutierrez', cuit: 37195, position: 'Limpieza'}
        ]
    }
]
