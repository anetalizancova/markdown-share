"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type MarkdownFileInfo = {
  slug: string;
  filename: string;
  title: string;
  url: string;
  date: string;
  time: string;
  size: number;
};

export default function AdminPanel() {
  const [files, setFiles] = useState<MarkdownFileInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await fetch("/api/admin/files");
      const data = await res.json();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (url: string) => {
    const fullUrl = `${window.location.origin}${url}`;
    navigator.clipboard.writeText(fullUrl);
    // You could add a toast notification here
  };

  const handleOpen = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDelete = async (slug: string) => {
    if (!confirm(`Opravdu chceš smazat ${slug}?`)) {
      return;
    }

    setDeleting(slug);
    try {
      const res = await fetch(`/api/admin/files/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setFiles(files.filter((f) => f.slug !== slug));
      } else {
        alert("Chyba při mazání souboru");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Chyba při mazání souboru");
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("mdshare_admin");
    router.push("/");
  };

  const totalFiles = files.length;
  const command = "./share-markdown.sh soubor.md";

  return (
    <main className="container">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">MD Share</h1>
        </div>
        <button onClick={handleLogout} className="btn btn-secondary">
          Odhlásit se
        </button>
      </div>

      <div className="admin-content">
        <h2 className="admin-subtitle">Přehled souborů</h2>
        <p className="admin-description">Podívejte se na své sdílené soubory</p>

        <div className="admin-stats">
          <p>
            <strong>Celkem souborů:</strong> {totalFiles}
          </p>
          <p>
            <strong>Příkaz pro nahrání:</strong>{" "}
            <code className="command-code">{command}</code>
          </p>
        </div>

        {loading ? (
          <p>Načítání...</p>
        ) : files.length === 0 ? (
          <p className="admin-empty">Žádné soubory</p>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>SOUBOR</th>
                  <th>URL</th>
                  <th>STAV</th>
                  <th>DATUM</th>
                  <th>AKCE</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.slug}>
                    <td>
                      <strong>{file.filename}</strong>
                    </td>
                    <td>
                      <code>{file.url}</code>
                    </td>
                    <td>
                      <span className="status-badge status-active">AKTIVNÍ</span>
                    </td>
                    <td>
                      <div>
                        <div>{file.date}</div>
                        <div className="time">{file.time}</div>
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => handleCopy(file.url)}
                          className="action-btn"
                          title="Kopírovat URL"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="8"
                              height="8"
                              rx="1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M3 11L3 3C3 2.44772 3.44772 2 4 2L10 2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleOpen(file.url)}
                          className="action-btn"
                          title="Otevřít v novém okně"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 3L13 3L13 8M13 3L8 8M13 13L3 13L3 3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(file.slug)}
                          className="action-btn action-btn-danger"
                          title="Smazat"
                          disabled={deleting === file.slug}
                        >
                          {deleting === file.slug ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="spinner"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeDasharray="37.7"
                                strokeDashoffset="9.4"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 4L12 12M4 12L12 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
