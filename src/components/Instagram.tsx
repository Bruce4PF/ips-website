import React from 'react';

const InstagramEmbed: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe
                src="https://www.instagram.com/iveyproductsociety_/embed"
                width="100%"
                height="100%"
                scrolling="no"
                allowTransparency={true}
                style={{ border: '1px solid #ccc', overflow: 'hidden', borderRadius: '10px' }}
                allow="encrypted-media"
            ></iframe>
        </div>
    );
};

export default InstagramEmbed;