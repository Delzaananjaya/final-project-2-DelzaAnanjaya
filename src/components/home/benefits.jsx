function Benefits({ text, Icon }) {
  return (
    <div className="text-center md:px-24">
      {Icon}
      <h3 className="text-2xl font-medium md:text-3xl">{text}</h3>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        consectetur, purus id
      </p>
    </div>
  );
}

export default Benefits;
