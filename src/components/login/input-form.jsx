function InputForm({ children, callback, name, value, actions, type = 'email' }) {
  const eventHandler = (event) => {
    const key = event.target.name;
    // eslint-disable-next-line no-shadow
    const { value } = event.target;
    callback((userInput) => ({ ...userInput, [key]: value }));
  };

  return (
    <div className="relative">
      <input
        className="absolute w-full px-10 py-2.5 bg-[#F5F7FB] rounded-full lg:py-3.5"
        name={name}
        placeholder={name}
        type={type}
        value={value[name]}
        onChange={eventHandler}
        onKeyPress={actions}
      />
      {children}
    </div>
  );
}

export default InputForm;
