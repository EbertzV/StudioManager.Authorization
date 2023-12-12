import React from 'react'
import { useState } from 'react'

export default function Semana() {
    const [dia, setDia] = useState('2023-12-12');
    const dataFoiAlterada = function (e) {
        setDia(e.target.value)
    }

    const [diasDaSemana, setDiasDaSemana] = useState([
        {
            dia: "2023-12-11",
            diaDaSemana: "segunda-feira",
            inicio: "08:00",
            fim: "22:00",
            reservas: [
                {
                    "id": 1,
                    "idCliente": 1,
                    "nome": "Mateus Braga",
                    "inicio": "08:00",
                    "fim": "09:00"
                }
            ]
        }
    ]);

    return (
        <>
            <input type="date" onChange={dataFoiAlterada}></input>
            <p>{dia}</p>
            <div className="agendaSemana">
                {
                    diasDaSemana.map(d=> 
                        <div key={d.dia}>
                            <h3>{d.diaDaSemana}</h3>
                            {
                                d.reservas.map(r => 
                                    <div key={r.id}>
                                        <p>{r.inicio} as {r.fim}: {r.nome}</p>
                                    </div>
                                )
                            }
                        </div> 
                    )
                }
            </div>
        </>
    );
}