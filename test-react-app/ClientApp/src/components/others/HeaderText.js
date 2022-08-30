import '../../styles/other/header-text.css'

function HeaderText(props) {
    return (
        <div className='header-text-block'>
            <div className="header-text-outline" />
            <p className="header-text">{props.children}</p>
        </div>
    );
}

export default HeaderText;