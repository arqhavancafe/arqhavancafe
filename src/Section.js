import ModelViewer from './ModelViewer';

function Section({ children, gradient, modelViewerProps, elemId, title }) {
    return (
        <div 
            className="section-wrapper"
            style={{
                backgroundImage: gradient ? `linear-gradient(${gradient})` : undefined
            }}
            id={elemId}
        >
            <div className="temp-toolbar"></div>
            <h2
                className="titles"
                dangerouslySetInnerHTML={{ __html: title }} 
            ></h2>

            <ModelViewer {...modelViewerProps} />
            {children}
        </div>
    );
}

export default Section;