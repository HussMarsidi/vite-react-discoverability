interface SeoProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
}

export function SEO({ title, description, url, image }: SeoProps) {
    return (
        <>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />

            {/* Open Graph */}
            <meta
                property="og:title"
                content={title}
            />
            <meta
                property="og:description"
                content={description}
            />
            {url && (
                <meta
                    property="og:url"
                    content={url}
                />
            )}
            {image && (
                <meta
                    property="og:image"
                    content={image}
                />
            )}

            {/* Twitter */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                name="twitter:title"
                content={title}
            />
            <meta
                name="twitter:description"
                content={description}
            />
            {image && (
                <meta
                    name="twitter:image"
                    content={image}
                />
            )}
        </>
    );
}
