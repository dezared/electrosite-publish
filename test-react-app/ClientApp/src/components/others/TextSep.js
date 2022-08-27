import '../../styles/other/text-sep.css'

function TextSep(props) {
    return (
        <div className='text-sep-outer'>
            <div className="text-sep-block" />
            <p className="text-sep-text">{props.children}</p>
        </div>
    );
}

export default TextSep;