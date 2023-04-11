const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",    
  });
  const [errors, setErrors] = useState({});
  const schema = {
    firstname: Joi.string().min(1).max(20).required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(100).max(200).required(),    
  };

  const validateForm = (event) => {
    event.preventDefault();
    const result = Joi.validate(customer, 
        schema, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
    }
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let customerData = { ...customer };
    customerData[name] = value;
    setCustomer(customerData);
    setErrors(errorData);
  };
  

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const clearState = () => {
    setCustomer({
      firstname: "",
      lastname: "",
      username: "",
      password: '',      
    });
  };