import './Card.css';

// Card component that displays title, subtitle, content, and image
export function Card(props) {
    const { title, subtitle, content, image } = props;

    return (
        <div className="card">
            {image && (
                <img src={image} alt={title} className="card-image" />
            )}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                {subtitle && <h3 className="card-subtitle">{subtitle}</h3>}
                {content && <p className="card-text">{content}</p>}
            </div>
        </div>
    );
}