import React from 'react';

const InstagramEmbed: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                src="https://www.instagram.com/iveyproductsociety_/embed"
                width="100%"
                height="687vh"
                scrolling="no"
                allowTransparency={true}
                style={{ border: '1px solid #ccc', overflow: 'hidden', borderRadius: '10px' }}
                allow="encrypted-media"
            ></iframe>
        </div>
    );
};

export default InstagramEmbed;