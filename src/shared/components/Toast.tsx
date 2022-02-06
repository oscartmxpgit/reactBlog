const Toast = ({ message, color }: Props) => {
  return (
    <div className="toast" style={{ backgroundColor: `var(--${color})` }}>
      <h2>{message}</h2>
    </div>
  );
};

interface Props {
  message: string;
  color: 'danger' | 'success' | 'warning' | 'info';
}

export default Toast;
