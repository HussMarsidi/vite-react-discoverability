import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import articleMock from '../constants/articlesMock';
import { useAppUrl } from '../hooks/useAppUrl';

interface ArticleType {
    slug: string;
    title: string;
    content: string;
    publishedAt: string;
}

export default function Article() {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<ArticleType | null>(null);
    const [loading, setLoading] = useState(true);
    const { baseUrl: BaseURL } = useAppUrl();

    const fetchArticle = useCallback(async () => {
        setLoading(true);
        const result = await new Promise<ArticleType | null>((resolve) => {
            setTimeout(() => {
                resolve(articleMock.find((article) => article.slug === slug) || null);
            }, 600); // Simulated latency
        });
        setArticle(result);
        setLoading(false);
    }, [slug]);

    useEffect(() => {
        if (slug) fetchArticle();
    }, [fetchArticle, slug]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <p className="animate-pulse text-base text-gray-500">Loading article...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-lg font-medium text-red-500">Article not found.</p>
            </div>
        );
    }

    return (
        <>
            {article && (
                <SEO
                    title={article.title}
                    description={article.content.slice(0, 150)}
                    url={`${BaseURL}/article/:${article.slug}`}
                />
            )}
            <article className="mx-auto max-w-3xl px-4 py-16">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
                    <time className="mt-2 block text-sm text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </time>
                </header>
                <section className="prose prose-lg text-gray-800">
                    <p>{article.content}</p>
                </section>
            </article>
        </>
    );
}
