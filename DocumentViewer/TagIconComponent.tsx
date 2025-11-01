import * as React from 'react';

const TagIconComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    className="tag-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="M6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8.8c0-.53-.21-1.04-.59-1.41l-4.8-4.8A2 2 0 0 0 13.2 2H6zm7 1.5L18.5 9H15a2 2 0 0 1-2-2V3.5z"
      transform="translate(0,1)"
    />
  </svg>
);

export { TagIconComponent };