import React from 'react'
import { useState, useEffect } from 'react'

export default function Semana() {
    const [dia, setDia] = useState('2023-12-12');
    const dataFoiAlterada = function (e) {
        setDia(e.target.value)
    }

    const definirEstiloCelula = function (status) {
        if (status === 'ocupado')
            return "horarioOcupado";
        else if (status === 'livre')
            return "horarioLivre";
        else return "";
    }

    const [diasDaSemana, setDiasDaSemana] = useState(null);
    const diasDaSemanaAlterados = function (data) {
        setDiasDaSemana(data);
    };

    useEffect(() => {
        fetch('http://localhost:5113/api/ReservasPorSemana?referencia=' + dia + '&diasParaFrente=6')
            .then(res => {
                return res.json();
            }, err => {
                console.log(err);
            })
            .then(data => {
                diasDaSemanaAlterados(data)
                console.log(diasDaSemana)
            }, err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <input type="date" onChange={dataFoiAlterada}></input>
            <p>{dia}</p>
            <div className="agendaSemana">
                {
                    diasDaSemana.map(d => 
                        <div key={d.dia} className="diaSemana">
                            <div className="diaSemanaHeader">
                                <h3>{d.diaDaSemana}</h3>
                                <p>{d.dia}</p>
                            </div>
                            {
                                d.reservas.map(r =>
                                    <div key={r.id} className={ definirEstiloCelula(r.status) }>
                                        <p>{r.inicio} as {r.fim}: {r.status}</p>
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