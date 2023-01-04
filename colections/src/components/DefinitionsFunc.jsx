import PropTypes from 'prop-types'
function DefinitionsFunc({data}){
    return(
        <>
            <dt>{data.dt}</dt>
            <dd>{data.dd}</dd>
        </>
    )
}

DefinitionsFunc.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DefinitionsFunc
