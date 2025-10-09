import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const STATUS_OPTIONS = ["Open", "In Progress", "Resolved"];

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState(() => {
    try {
      const raw = localStorage.getItem("citizenComplaints");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const updateStatus = (id, status) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status, updatedAt: new Date().toISOString() }
          : c
      )
    );
  };

  const updateResponse = (id, response) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, response, updatedAt: new Date().toISOString() }
          : c
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("citizenComplaints", JSON.stringify(complaints));
  }, [complaints]);

  return (
    <div className="ad-page">
      <header className="ad-header">
        <h1>Admin Dashboard</h1>
      </header>

      <section className="ad-section">
        <h2>All Citizen Complaints</h2>
        {complaints.length === 0 ? (
          <p className="ad-muted">No complaints submitted yet.</p>
        ) : (
          <ul className="ad-list">
            {complaints.map((c) => (
              <li key={c.id} className="ad-list-item">
                <div className="ad-list-main">
                  <div className="ad-list-title">{c.title}</div>
                  <div className="ad-list-sub">
                    {c.category} • Created: {new Date(c.createdAt).toLocaleString()}
                  </div>
                  <div className="ad-list-desc">{c.description}</div>

                  <div className="ad-response-section">
                    <label>Status:</label>
                    <select
                      value={c.status}
                      onChange={(e) => updateStatus(c.id, e.target.value)}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>

                    <label>Admin Response:</label>
                    <textarea
                      placeholder="Type response..."
                      value={c.response}
                      onChange={(e) => updateResponse(c.id, e.target.value)}
                      rows={2}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
