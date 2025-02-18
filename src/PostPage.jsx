import { Button, FormControl, Input } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import ProductValidation from "./validation";
import { postProduct } from "./api/requests";

const PostPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      rate: 0,
      count: 0,
    },
    validationSchema: ProductValidation,
    onSubmit: (values) => {
      const newObj = {
        title: values.title,
        price: values.price,
        rating: {
          rate: values.rate,
          count: values.count,
        },
      };
      postProduct(newObj).then((res) => {
        console.log(res);

        alert("Product Gonderildi");
      });
    },
  });

  return (
    <div className="container">
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "50%", margin: "auto" }}
      >
        <input
          className="input"
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
          type="text"
          placeholder="Title"
          style={{ marginTop: "20px" }}
        />
        <input
          className="input"
          value={formik.values.price}
          onChange={formik.handleChange}
          name="price"
          type="number"
          placeholder="Price"
          style={{ marginTop: "20px" }}
        />
        <input
          className="input"
          value={formik.values.rate}
          onChange={formik.handleChange}
          name="rate"
          type="number"
          placeholder="Rate"
          style={{ marginTop: "20px" }}
        />
        <input
          className="input"
          value={formik.values.count}
          onChange={formik.handleChange}
          name="count"
          type="number"
          placeholder="Count"
          style={{ marginTop: "20px" }}
        />
        <Button
          type="submit"
          variant="outlined"
          style={{ marginTop: "20px", width: "100%" }}
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default PostPage;
