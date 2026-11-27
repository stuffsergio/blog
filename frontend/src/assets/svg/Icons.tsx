export function Home({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.833"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <path d="M3.234 6.15 L6.734 3.286 C7.47 2.683 8.53 2.683 9.266 3.286 L12.766 6.15 C13.231 6.53 13.5 7.098 13.5 7.698 L13.5 11.5 C13.5 12.605 12.605 13.5 11.5 13.5 L4.5 13.5 C3.395 13.5 2.5 12.605 2.5 11.5 L2.5 7.698 C2.5 7.098 2.769 6.53 3.234 6.15 Z" />
        <path d="M6.25 13.5 L6.25 11.2 C6.25 10.537 6.787 10 7.45 10 L8.55 10 C9.213 10 9.75 10.537 9.75 11.2 L9.75 13.5" />
      </g>
    </svg>
  );
}

export function Search({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.833"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <circle cx="7" cy="7" r="4.75" />
        <line x1="10.375" y1="10.375" x2="13.75" y2="13.75" />
      </g>
    </svg>
  );
}

export function Menu({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.833"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <line x1="3" y1="5" x2="13" y2="5" />
        <line x1="3" y1="11" x2="10.5" y2="11" />
      </g>
    </svg>
  );
}

export function X({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.833"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <line x1="3.75" y1="3.75" x2="12.25" y2="12.25" />
        <line x1="12.25" y1="3.75" x2="3.75" y2="12.25" />
      </g>
    </svg>
  );
}

export function Trash({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.833"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <path d="M3.5 4.25 L4.105 11.907 C4.187 12.948 5.055 13.75 6.098 13.75 L9.902 13.75 C10.945 13.75 11.813 12.948 11.895 11.907 L12.5 4.25" />
        <line x1="2.25" y1="4.25" x2="13.75" y2="4.25" />
        <path d="M6 4.25 L6 3.25 C6 2.698 6.448 2.25 7 2.25 L9 2.25 C9.552 2.25 10 2.698 10 3.25 L10 4.25" />
        <line x1="6.75" y1="7" x2="6.75" y2="11" />
        <line x1="9.25" y1="7" x2="9.25" y2="11" />
      </g>
    </svg>
  );
}

export function ImageUp({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.833"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>
        <path d="M14 7.5 L14 4.75 C14 3.645 13.105 2.75 12 2.75 L4 2.75 C2.895 2.75 2 3.645 2 4.75 L2 11.25 C2 12.355 2.895 13.25 4 13.25 L7.5 13.25" />
        <circle cx="10.25" cy="6" r="1.25" />
        <path d="M2.25 12.25 L5.25 9.25 L7.5 11.5" />
        <line x1="11.75" y1="13.75" x2="11.75" y2="9.75" />
        <path d="M9.75 11.75 L11.75 9.75 L13.75 11.75" />
      </g>
    </svg>
  );
}
