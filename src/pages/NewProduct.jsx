import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handelChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url);
      })
  }
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt='local file'></img>}
      <form onSubmit={handleSubmit}>
        <input type='file' accept='image/*' name='file' required onChange={handelChange}></input>
        <input type='text' name='title' value={product.title ?? ''} placeholder='제품명' required onChange={handelChange}></input>
        <input type='number' name='price' value={product.price ?? ''} placeholder='가격' required onChange={handelChange}></input>
        <input type='text' name='category' value={product.category ?? ''} placeholder='카테고리' required onChange={handelChange}></input>
        <input type='text' name='description' value={product.description ?? ''} placeholder='제품 설명' required onChange={handelChange}></input>
        <input type='text' name='options' value={product.options ?? ''} placeholder='옵션 (, 로 구분)' required onChange={handelChange}></input>
        <Button text={'제품 등록하기'}></Button>
      </form>
    </section>
  );
}
