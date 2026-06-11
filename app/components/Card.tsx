type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`border border-zinc-800 rounded-xl bg-zinc-950 p-5 ${className}`}
    >
      {children}
    </div>
  );
}