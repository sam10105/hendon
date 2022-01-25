function Button({ children }) {
  return (
    <button className="inline-block border border-[#c28562] border-opacity-50 bg-white py-3.5 px-16 text-sm font-medium uppercase tracking-[0.3em] text-[#c28562]">
      {children}
    </button>
  );
}

export default Button;
