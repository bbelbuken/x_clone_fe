const ImgMedia = ({ postIMG }) => {
    const getThumbnailUrl = (url) => {
        const fileId = url.split('=')[1];
        return `https://drive.google.com/thumbnail?id=${fileId}`;
    };

    const media = postIMG
        ? `${postIMG}` // Use cached Base64 image data
        : '/default_profile_200x200.png'; // Fallback to default image

    return (
        <div className="h-full w-full">
            <div className={'block'}>
                {postIMG && postIMG.length > 0
                    ? postIMG.map((url, index) => (
                          <img
                              src={media}
                              alt={`Media ${index + 1}`}
                              key={index}
                              className="h-auto w-full object-cover"
                          />
                      ))
                    : ''}
            </div>
        </div>
    );
};

export default ImgMedia;
