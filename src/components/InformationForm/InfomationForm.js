import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { useFormik } from "formik";
import { v4 as uuid } from "uuid";

import Input from "../Input";
import Button from "../Button";

import InformationSchema from "./information-schema";
import PrefixSelect from "../PrefixSelect/PrefixSelect";

function InformationForm({ saveUser }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      prefix: "",
      phone: "",
      email: "",
      addressOne: "",
      addressTwo: "",
      zipCode: "",
      country: "",
      state: "",
      city: "",
    },
    validationSchema: InformationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      saveUser({ id: uuid(), ...values });

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="First name"
          id="firstName"
          value={formik.values.firstName}
          placeholder="First name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.firstName}
          errorMessage={formik.errors.firstName}
        />
        <Input
          type="text"
          label="Last name"
          id="lastName"
          value={formik.values.lastName}
          placeholder="Last name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.lastName}
          errorMessage={formik.errors.lastName}
        />
        <PrefixSelect
          type="number"
          label="Prefix"
          id="prefix"
          value={formik.values.prefix}
          placeholder="Phone Number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.prefix}
          errorMessage={formik.errors.prefix}
        />
        <Input
          type="tel"
          label="Phone Number"
          id="phone"
          value={formik.values.phone}
          placeholder="Phone Number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phone}
          errorMessage={formik.errors.phone}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          value={formik.values.email}
          placeholder="Email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="Address 1"
          id="addressOne"
          value={formik.values.addressOne}
          placeholder="Input address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.addressOne}
          errorMessage={formik.errors.addressOne}
        />
        <Input
          type="text"
          label="Address 2"
          id="addressTwo"
          value={formik.values.addressTwo}
          placeholder="Input second address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.addressTwo}
          errorMessage={formik.errors.addressTwo}
        />
        <Input
          type="text"
          label="Zip code"
          id="zipCode"
          value={formik.values.zipCode}
          placeholder="Enter zipcode"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.zipCode}
          errorMessage={formik.errors.zipCode}
        />
        <Input
          type="text"
          label="Country"
          id="country"
          value={formik.values.country}
          placeholder="Enter coutry"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.country}
          errorMessage={formik.errors.country}
        />
        <Input
          type="text"
          label="State"
          id="state"
          value={formik.values.state}
          placeholder="Enter state"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.state}
          errorMessage={formik.errors.state}
        />
        <Input
          type="text"
          label="City"
          id="city"
          value={formik.values.city}
          placeholder="Enter city"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.city}
          errorMessage={formik.errors.city}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/checkout/step-2" />}
    </>
  );
}

export default InformationForm;
