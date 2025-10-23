export default ({ id ,label, ...props}) => {
  return (
    <p className="input">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </p>
  );
};
