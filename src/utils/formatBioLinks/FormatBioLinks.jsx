export const convertUrlsToLinks = (text) => {
    if (!text) return '';

    // Match URLs as a whole without capturing groups for extensions
    const urlRegex =
        /(?:https?:\/\/[^\s]+)|(?:www\.[^\s]+)|(?:[^\s]+\.(?:com|org|net|edu|gov|io|dev|co|me|app|xyz|ai|tech|uk|de|fr)[^\s]*)/gi;

    let lastIndex = 0;
    const matches = Array.from(text.matchAll(urlRegex));
    const result = [];

    matches.forEach((match) => {
        // Add text before the match
        if (match.index > lastIndex) {
            result.push(text.substring(lastIndex, match.index));
        }

        const url = match[0];
        const href = url.startsWith('http')
            ? url
            : url.startsWith('www.')
              ? `https://${url}`
              : `https://${url}`;

        result.push(
            <a
                key={match.index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bio-link"
            >
                {url}
            </a>,
        );

        lastIndex = match.index + url.length;
    });

    // Add remaining text
    if (lastIndex < text.length) {
        result.push(text.substring(lastIndex));
    }

    return result;
};
