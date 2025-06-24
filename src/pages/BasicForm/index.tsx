import { useCallback, useState } from "react";

interface FormEvent {
  target: {
    name: string;
    value: unknown;
  };
}
interface Form {
  name: string;
  age: string;
}

const BasicForm = () => {
  const [form, setForm] = useState<Form>({ name: "", age: "" });
  const [errors, setErrors] = useState<Record<string, unknown>>({});
  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = useCallback(() => {
    const newErrors: Record<string, unknown> = {};
    if (!form.name.trim()) newErrors.name = "name not empty";
    if (!form.age.trim()) newErrors.age = "age not empty";
    if (isNaN(Number(form.age))) newErrors.age = "age not number";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [form]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validate()) {
        console.log(form);
      }
    },
    [form, validate]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} name="name" type="text" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={handleChange} name="age" type="text" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {Object.keys(errors).length > 0 && <div>{`${errors.toString()}`}</div>}
    </div>
  );
};
export default BasicForm;
