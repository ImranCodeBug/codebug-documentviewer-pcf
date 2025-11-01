import * as React from 'react';
export const TagLoaderComponent: React.FC = () => (
  <div className="tag-loader">
    <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="hourglass-icon"   
  >
    <path d="M6 2h12M6 22h12M6 2c0 6 6 6 6 10s-6 4-6 10M18 2c0 6-6 6-6 10s6 4 6 10" />
  </svg>
    <span className="loader-label">Loading tags...</span>
  </div>
);