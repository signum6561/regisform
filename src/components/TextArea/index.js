const TextArea = ({
  name,
  title,
  rows,
  cols,
  onChange,
  value,
  placeholder,
  ...props
}) => (
  <div className='form-group'>
    <label className='form-label'>{title}</label>
    <textarea
      className='form-control'
      name={name}
      rows={rows}
      cols={cols}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default TextArea;
