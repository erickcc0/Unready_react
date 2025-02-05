import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    // console.log(props);
    

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle }</p>
            <p>{name }</p>
        </>
    )
}

FirstApp.PropTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    name:'Alejandro',
    subTitle:'No hay subtitulo',
    title:'No hay titulo',
}