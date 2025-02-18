import * as Yup from 'yup';

const ProductValidation = Yup.object().shape({
     title: Yup.string().required("Title is required"),
     price: Yup.number().positive("Price must be positive").required("Price is required"),
     rate: Yup.number().min(0, "Rating must be at least 0"),
     count: Yup.number().min(0, "Count must be at least 0"),
});

export default ProductValidation;
