
  {/* <form onSubmit={formik.handleSubmit} className={styles.flex}>
            <input
              autoFocus
              className={`${styles.flex} ${styles.value} ${styles.inputCor}`}
              type="text"
              id="value"
              value={formik.values.value}
              onChange={formik.handleChange}
            />
            <button
              type="submit"
              className={`${styles.flex} ${styles.btn} ${styles.btnToSubmit}`}
            >
              подтвердить
            </button>
          </form> */}
  // const validate = values => {
  //   const errors = {};

  //   // if (!values.value) {
  //   //   errors.value = '. is not required';
  //   // } else if (!/./i.test(values.value)) {
  //   //   errors.value = 'Invalid email address';
  //   // }

  //   if (!values.value) {
  //     errors.value = 'Required';
  //   } else if (!/[0-9]/i.test(values.value)) {
  //     errors.value = 'Invalid email address';
  //   }
  //   return errors;
  // };

  // const formik = useFormik({
  //   initialValues: { value },
  //   onSubmit: values => {
  //     if (values.value === '') {
  //       togleEdit();
  //       return;
  //     }
  //     if (values.value !== 0) {
  //       const newValue = Number(values.value) - balance;
  //       dispatch(addBalance({ amount: newValue }));
  //       setValue('');
  //       togleEdit();
  //     }
  //   },
  // });