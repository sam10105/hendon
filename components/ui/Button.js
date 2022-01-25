function Button({ children }) {
  return (
    <button className="inline-block bg-white text-[#c28562] border border-[#c28562] border-opacity-50 text-sm font-medium tracking-[0.3em] uppercase py-3.5 px-16">
      {children}
    </button>
  );
}

export default Button;
