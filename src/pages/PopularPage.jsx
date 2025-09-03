import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import Pagination from "../components/Pagination.jsx";
import Spinner from "../components/Spinner.jsx";
import ErrorAlert from "../components/ErrorAlert.jsx";
import { fetchPopular } from "../services/tmdb.js";

export default function PopularPage() {
    const [params, setParams] = useSearchParams();
    const page = parseInt(params.get("page") || "1", 10);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;
        async function load() {
            setLoading(true);
            try {
                const data = await fetchPopular(page);
                if (!active) return;
                setMovies(data.results || []);
                setTotalPages(data.total_pages || 1);
            } catch (err) {
                if (active) setError("Erro ao carregar filmes populares.");
            } finally {
                if (active) setLoading(false);
            }
        }
        load();
        return () => (active = false);
    }, [page]);

    const goto = (p) => setParams({ page: String(p) });

    if (loading) return <Spinner />;
    if (error) return <ErrorAlert message={error} />;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Filmes Populares</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {movies.map((m) => (
                    <MovieCard key={m.id} movie={m} />
                ))}
            </div>
            <Pagination current={page} total={Math.min(totalPages, 500)} onPage={goto} />
        </div>
    );
}
