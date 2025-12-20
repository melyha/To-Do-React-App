import './Footer.css';

// Footer component that displays a message and copyright
export function Footer(props) {
    return (
        <footer>
            <p>{props.message}</p>
            <p>Copyright © 2026 Melxcreative. All rights reserved.</p>
        </footer>
    );
}