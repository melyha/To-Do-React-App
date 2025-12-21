import './Header.css';

// Header component that displays title and message
export function Header(props) {
    // props is some JSON that looks like {title: str, message: str}
    return (<>
        <header>
            <div className="header-content">
                
                <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            </div>
            </div>
        </header>
    </>);
}