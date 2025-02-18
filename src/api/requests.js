const baseUrl = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
     const response = await fetch(baseUrl);
     const data = await response.json();
     return data;
};

export const deleteProduct = async (id) => {
     const response = await fetch(`${baseUrl}/${id}`, {
          method: "DELETE"
     })
     return await response.json();
}

export const postProduct = async (product) => {
     console.log(product);

     const response = await fetch(baseUrl, {
          method: "POST",
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
     })
     return await response.json
}