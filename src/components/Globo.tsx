interface GloboProps {
    balloonStyle: {
        width: string,
        height: string,
        transform: string,
        backgroundColor: string,
    },
}

// const balloonNudo = {
//     position: 'relative',
//     width: '20px',
//     height: '10px',
//     backgroundColor: 'red',
//     borderRadius: '25%',
//     top: '95%',
//     left: '39%',
// };

const balloonLine = {
    position: 'relative',
    width: '3px',
    height: '30px',
    backgroundColor: 'blue',
    top: '95%',
    left: '51%',
    opacity: 0.8,
};

function Globo({ balloonStyle }: GloboProps) {
    const mergedStyle = {
        ...balloonStyle.balloonStyle,
        position: 'relative',
        borderRadius: '50%',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    };

    console.log(mergedStyle);

    return (
        <>
            <div >
                <div style={mergedStyle}>
                    {/*<div style={balloonNudo}></div>*/}
                    <div style={balloonLine}></div>
                </div>
            </div>
        </>
    )
}

export default Globo