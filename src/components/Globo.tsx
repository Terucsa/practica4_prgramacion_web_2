interface GloboProps {
    balloonStyle: {
        width: string,
        height: string,
        transform: string,
        backgroundColor: string,
    }
    method: () => void
}

const balloonLine = {
    position: 'relative',
    width: '3px',
    height: '60px',
    backgroundColor: '#E5E1E1',
    top: '85%',
    left: '49%',
    opacity: 0.8,
    zIndex: -1,
};

function Globo({ balloonStyle, method }: GloboProps) {
    const mergedStyle = {
        ...balloonStyle.balloonStyle,
        position: 'relative',
        borderRadius: '50%',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    };

    const nuddoFuction = ({width,backgroundColor}: mergedStyle) => {
        const widthValue = parseInt(width);
        const valueWidth = widthValue < 50 ? '10px' : '20px';
        const left = widthValue < 50 ? '30%' : '39%';
        const top = widthValue < 50 ? '90%' : '95%';
        const balloonStyleNudo = {
            position: 'relative',
            width: valueWidth,
            height: '10px',
            backgroundColor: backgroundColor,
            borderRadius: '25%',
            top: top,
            left: left,
        };
        return balloonStyleNudo;
    }
    console.log(nuddoFuction(mergedStyle))
    return (
        <>
            <div onClick={method}>
                <div style={mergedStyle}>
                    <div style={nuddoFuction(mergedStyle)}></div>
                    <div style={balloonLine}></div>
                </div>
            </div>
        </>
    )
}

export default Globo