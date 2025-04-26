import { Link } from 'react-router-dom';
import articles from '../constants/articlesMock';

function Main() {
    return (
        <div className="min-h-screen min-w-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-[1600px]">
                <div className="mb-8 flex items-center justify-between">
                    <p className="text-xl font-bold text-content-primary">Explore all Articles</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
                    {articles.map((article) => (
                        <Link
                            to={`/article/${article.slug}`}
                            key={article.slug}
                            className="flex min-h-[120px] max-w-[512px] items-center gap-4 rounded-2xl bg-background-elevated px-6 py-5 transition-transform hover:scale-105 xl:h-[180px]"
                        >
                            <div className="flex h-20 w-20 items-center justify-center text-4xl">📝</div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-semibold text-content-highlight">{article.title}</span>
                                <span className="mt-1 text-sm text-content-secondary">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;
