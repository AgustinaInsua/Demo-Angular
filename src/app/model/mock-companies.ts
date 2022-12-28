import { Employee } from 'src/app/model/Employee';
import { Company } from "./Company";

export const COMPANIES : Company [] = [{
        name: 'BDF ',
        razonSocial: 'BDF SA ',
        cuit: 23232,
        employees:[
            {name: 'Leandro', surname: 'Fernandez', cuit: 458471, position: 'Developer'},
            {name: 'Agustina', surname: 'Insua', cuit: 17136, position: 'Developer'}
        ]
    },
    {
        name: 'Coto ',
        razonSocial: 'Coto yo te conozco(? ',
        cuit: 58791,
        employees: [
            {name: 'Lourdes', surname: 'Obregon', cuit: 98231, position: 'Student'},
            {name: 'Lionel', surname: 'Messi', cuit: 2879, position: 'Jogador de fuchibol'}
        ]
    }
]
