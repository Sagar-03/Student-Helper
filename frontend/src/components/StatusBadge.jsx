export default function StatusBadge({ sold }) {
  return (
    <span
      className={`px-3 py-1 rounded-md text-white text-sm font-bold ${
        sold ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      {sold ? 'Sold' : 'Live'}
    </span>
  );
}
