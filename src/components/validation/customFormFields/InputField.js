import { useField } from "formik";

const InputField = ({ label, ...props }) => {

  //this component will create coustom input  fields component for uses in the form component
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default InputField;
