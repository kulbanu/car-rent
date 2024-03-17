const Input = ({ label, ...props }: {label: string} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input className="rounded-xl p-2 focus:outline-none" {...props} />
    </div>
  );
};

export default Input;
