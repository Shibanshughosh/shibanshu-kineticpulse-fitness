import React, { useState } from 'react';
import { Search, AlertCircle, Clock, MapPin, User, Zap } from 'lucide-react';
import { classScheduleData } from '../data/gymData';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const CATEGORIES = ['All', 'HIIT', 'Pilates', 'Strength', 'Recovery'];

function getStatusClass(status) {
  if (status === 'Waitlist Only') return 'kp-status-badge kp-status-waitlist';
  if (status === 'Filling Fast' || status.includes('Slot')) return 'kp-status-badge kp-status-filling';
  return 'kp-status-badge kp-status-open';
}

export default function Schedule({ onOpenBookingModal, onShowToast }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClasses = classScheduleData.filter((cls) => {
    const matchesDay = cls.day === selectedDay;
    const matchesCat = selectedCategory === 'All' || cls.category === selectedCategory;
    const matchesSearch =
      cls.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDay && matchesCat && matchesSearch;
  });

  return (
    <div className="kp-page">
      <div className="kp-container">

        {/* Page Header */}
        <div className="kp-page-header">
          <span className="kp-section-label">Weekly Timetable</span>
          <h1 className="kp-page-title">
            CLASS <span className="neon-text-glow">SCHEDULE</span>
          </h1>
          <p className="kp-page-subtitle">
            Reserve your slot up to 7 days in advance. All classes include locker access, towel service, and post-workout recovery lounge.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="kp-day-tabs">
          {DAYS.map((day) => (
            <button
              key={day}
              id={`day-tab-${day.toLowerCase()}`}
              className={`kp-day-tab${selectedDay === day ? ' active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="kp-filter-bar">
          <div className="kp-cat-filters">
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.35rem' }}>
              Discipline:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase()}`}
                className={`kp-cat-filter${selectedCategory === cat ? ' active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="kp-search-wrap">
            <Search size={14} className="kp-search-icon" />
            <input
              id="schedule-search"
              type="text"
              className="kp-search-input"
              placeholder="Search class or coach..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Schedule Grid */}
        {filteredClasses.length === 0 ? (
          <div className="kp-empty-state">
            <AlertCircle size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
            <h3 className="font-heading" style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              NO CLASSES FOR THIS FILTER
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Try selecting a different day or category above.
            </p>
          </div>
        ) : (
          <div className="kp-schedule-grid">
            {filteredClasses.map((cls) => (
              <div key={cls.id} className="kp-class-card">
                <div>
                  {/* Top: category + status */}
                  <div className="kp-class-card-top" style={{ marginBottom: '0.75rem' }}>
                    <span className="kp-cat-badge">{cls.category}</span>
                    <span className={getStatusClass(cls.status)}>{cls.status}</span>
                  </div>

                  {/* Title & Instructor */}
                  <h3 className="kp-class-title">{cls.title}</h3>
                  <div className="kp-class-instructor">
                    <User size={13} color="var(--accent-lime)" />
                    <span>Master Coach: <strong style={{ color: 'var(--text-main)' }}>{cls.instructor}</strong></span>
                  </div>

                  {/* Meta */}
                  <div className="kp-class-meta">
                    <div className="kp-class-meta-item">
                      <Clock size={13} color="var(--accent-lime)" />
                      <span>{cls.time} ({cls.duration})</span>
                    </div>
                    <div className="kp-class-meta-item">
                      <MapPin size={13} color="var(--accent-lime)" />
                      <span>{cls.room}</span>
                    </div>
                    {cls.spotsLeft > 0 && (
                      <div className="kp-class-meta-item" style={{ gridColumn: '1 / -1' }}>
                        <Zap size={13} color="var(--accent-lime)" />
                        <span>{cls.spotsLeft} spots remaining</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  id={`book-btn-${cls.id}`}
                  onClick={() => {
                    if (cls.status === 'Waitlist Only') {
                      if (onShowToast) onShowToast(`Added to waitlist for ${cls.title}!`, 'success');
                    } else {
                      onOpenBookingModal(cls);
                    }
                  }}
                  className={`kp-w-full ${
                    cls.status === 'Waitlist Only' ? 'btn-ghost' : 'btn-primary'
                  }`}
                  style={{
                    marginTop: '1rem',
                    padding: '0.7rem',
                    borderRadius: 'var(--radius-sm)',
                    justifyContent: 'center',
                    ...(cls.status === 'Waitlist Only' && { color: '#FF3C38', borderColor: 'rgba(255,60,56,0.3)' }),
                  }}
                >
                  <Zap size={14} />
                  {cls.status === 'Waitlist Only' ? 'Join Waitlist Queue' : 'Book Class Spot'}
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
