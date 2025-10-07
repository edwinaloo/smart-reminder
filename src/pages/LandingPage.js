import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  // Temporary mock user data
  const user = { name: "Edwin", profilePic: "https://via.placeholder.com/40" };

  const stats = [
    { label: "Tasks Due Today", value: 3 },
    { label: "Reminders Pending", value: 2 },
    { label: "Tasks Completed", value: 12 },
  ];

  const recentTasks = [
    { title: "Complete project proposal", due: "Today", status: "Pending" },
    { title: "Attend team meeting", due: "3 PM", status: "Upcoming" },
    { title: "Submit report", due: "Tomorrow", status: "Pending" },
  ];

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="profile">
          <img src={user.profilePic} alt="Profile" />
          <span>{user.name}</span>
        </div>
        <h2 className="welcome-text">Welcome back, {user.name} 👋</h2>
        <button className="logout-btn">Logout</button>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* Task Preview Section */}
      <section className="tasks-preview">
        <h3>Recent Tasks</h3>
        <ul>
          {recentTasks.map((task, index) => (
            <li key={index} className="task-item">
              <div>
                <strong>{task.title}</strong>
                <p>{task.due}</p>
              </div>
              <span className={`status ${task.status.toLowerCase()}`}>
                {task.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Action Buttons */}
      <section className="actions">
        <button className="btn-primary">Add Task</button>
        <button className="btn-secondary">View All Tasks</button>
      </section>
    </div>
  );
}
