import { useState, useEffect } from 'react';
import Globo from "./components/Globo.tsx";
import './App.css';

function App() {
    const [time, setTime] = useState(30);
    const [contador, setContador] = useState(0);
    const [balloonStyleGlobo, setBalloonStyleGlobo] = useState({balloonStyle: {
            width: '75px',
            height: '83px',
            backgroundColor: 'red',
            transform: 'translate(1100px, -18px)'
        }});

    const colorsRandom = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'gold', 'LightSkyBlue'];
        const indice = Math.floor(Math.random() * colors.length);
        return colors[indice];
    }
    const widthGlobo =  () => {
        return Math.floor(Math.random() * 81) + 20;
    }
    const transformGlobo = () => {
        const y = Math.floor(Math.random() * 419) - 18;
        const x = Math.floor(Math.random() *1100) + 1;
        return `translate(${x}px,${y}px)`;
    }
    const createGlobo = () => {
        const width = widthGlobo();
        const value = {
            balloonStyle: {
                width: `${width}px`,
                height: `${width+8}px`,
                backgroundColor: colorsRandom(),
                transform: transformGlobo(),
            }
        }
        return value;
    }
    const onGloboClick = () => {
        setContador((prev) => prev + 1);
        setBalloonStyleGlobo(createGlobo())
    }

    useEffect(() => {
        let cronometro = 0
        if ( time != 0 ) {
            cronometro = setInterval(() => {
                setTime((valor) => valor - 1)
            }, 1000);

            if ( time % 2 == 0 ) {
                setBalloonStyleGlobo(createGlobo())
            }
        }

        return () => clearInterval(cronometro);
    }, [time]);

    return (
        <>
            <div className="flex flex-col min-h-150  gap-4 justify-center items-center">
                <div className="flex w-full justify-between items-center">
                    <p><strong>{`Cantidad: ${contador}`}</strong></p>
                    <p><strong>Revienta los globos</strong></p>
                    <p><strong>{`Tiempo: ${time}`}</strong></p>
                </div>
                <div className="w-full flex-1 bg-amber-50 pt-5 rounded-lg border-5 border-purple-400 relative" >
                    <Globo balloonStyle={balloonStyleGlobo} method={onGloboClick} />
                </div>
            </div>
        </>
    )
}
export default App
