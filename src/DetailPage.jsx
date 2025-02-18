import { useParams } from "react-router-dom";
import { getProducts, postProduct, updateProduct } from "./api/requests";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import ProductValidation from "./validation";

const DetailPage = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      rate: "",
      count: "",
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
      updateProduct(id, newObj).then((res) => {
        console.log(res);
        alert("Product Gonderildi");
      });
    },
  });

  useEffect(() => {
    getProducts().then((data) => {
      const productItem = data.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (productItem) {
        formik.setValues({
          title: productItem.title || "",
          price: productItem.price || "",
          rate: productItem.rating?.rate || "",
          count: productItem.rating?.count || "",
        });
      }
    });
  }, [id]);

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

export default DetailPage;
