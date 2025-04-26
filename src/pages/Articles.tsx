import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    const navigate = useNavigate();

    const fetchArticle = useCallback(async () => {
        setLoading(true);
        const result = await new Promise<ArticleType | null>((resolve) => {
            setTimeout(() => {
                resolve(articleMock.find((article) => article.slug === slug) || null);
            }, 600);
        });
        setArticle(result);
        setLoading(false);
    }, [slug]);

    useEffect(() => {
        if (slug) fetchArticle();
    }, [fetchArticle, slug]);

    if (loading) {
        return (
            <div className="flex min-h-screen min-w-screen items-center justify-center bg-gray-100 p-8">
                <div className="flex flex-col items-center">
                    <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" />
                    <p className="text-base font-medium text-gray-600">Loading article...</p>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-lg font-medium text-red-500">Article not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen min-w-screen bg-gray-100 p-8">
            {article && (
                <SEO
                    title={article.title}
                    description={article.content.slice(0, 150)}
                    url={`${BaseURL}/articles/${article.slug}`}
                />
            )}

            <div className="mx-auto max-w-[800px]">
                {/* Back Button */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 rounded-2xl bg-background-elevated px-4 py-2 text-white shadow-sm transition hover:scale-105"
                    >
                        <span className="text-2xl">←</span>
                        <span className="text-base font-semibold">Back</span>
                    </button>
                </div>

                <article className="rounded-2xl bg-background-elevated px-6 py-8 shadow-sm">
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold text-content-highlight">{article.title}</h1>
                        <time className="mt-2 block text-sm text-content-secondary">
                            {new Date(article.publishedAt).toLocaleDateString()}
                        </time>
                    </header>
                    <section className="prose prose-lg text-gray-800">
                        <p>{article.content}</p>
                    </section>
                </article>
            </div>
        </div>
    );
}
