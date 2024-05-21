const Button = ({
  name,
  icon,
  outlined,
  onClick,
  type,
}: {
  name: string;
  icon?: string;
  outlined?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  const btnClass = outlined
    ? "flex w-full items-center justify-center rounded-md bg-white border border-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    : "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  return (
    <div>
      <button type={type} className={btnClass} onClick={onClick}>
        {icon && <img className="mr-2 h-5 w-5" src={icon} alt="Google" />}
        {name}
      </button>
    </div>
  );
};

export { Button };
