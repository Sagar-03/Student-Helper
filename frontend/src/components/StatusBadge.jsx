export default function StatusBadge({ sold }) {
    return (
      <span style={{
        padding: '4px 10px',
        background: sold ? '#ff4d4f' : '#52c41a',
        color: '#fff',
        borderRadius: '6px',
        fontSize: '0.8rem',
        fontWeight: 'bold'
      }}>
        {sold ? 'Sold' : 'Live'}
      </span>
    );
  }