type InputProps = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  link?: JSX.Element;
};
const Input = ({
  name,
  label,
  type,
  required,
  link,
  autoComplete,
}: InputProps) => {
  return (
    <div>
      <div className={link && "flex items-center justify-between"}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {link}
      </div>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export { Input };
