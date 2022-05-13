function FilterInput({ eventHandler, name, value }) {
  return (
    <input
      className="w-full border-2 rounded-xl py-0.5 text-center text-[#211F1C] capitalize"
      type="number"
      min="1"
      name={name}
      value={value}
      placeholder={name}
      onChange={eventHandler}
    />
  );
}

export default FilterInput;
