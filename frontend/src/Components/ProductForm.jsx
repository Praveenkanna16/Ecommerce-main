import React, { useState, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link to navigate to other pages
import NavBar from '../Components/Navbar'; 

export const ProductForm = () => {
   const nameRef = useRef();
   const descriptionRef = useRef();
   const categoryRef = useRef();
   const tagsRef = useRef();
   const priceRef = useRef();
   const stockRef = useRef();
   const emailRef = useRef();

   const [images, setImages] = useState([]);
   const [previewImages, setPreviewImages] = useState([]);
   const [avatarPreview, setAvatarPreview] = useState(null); // State for avatar preview

   const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      setImages((prev) => [...prev, ...files]);
      const imagePreviews = files.map((file) => URL.createObjectURL(file));
      setPreviewImages((prev) => [...prev, ...imagePreviews]);
   };

   const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setAvatarPreview(reader.result); // Set preview of the image
         };
         reader.readAsDataURL(file); // Read the file as a data URL
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
      const category = categoryRef.current.value;
      const tags = tagsRef.current.value;
      const price = priceRef.current.value;
      const stock = stockRef.current.value;
      const email = emailRef.current.value;

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("tags", tags);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("email", email);
      images.forEach((image) => formData.append("images[]", image));

      try {
         const res = await axios.post("http://localhost:3000/api/products", formData, {
            headers: { "Content-Type": "multipart/form-data" },
         });

         if (res.status === 200) {
            alert("Product added successfully");
            setImages([]);
            setPreviewImages([]);
            nameRef.current.value = "";
            descriptionRef.current.value = "";
            categoryRef.current.value = "";
            tagsRef.current.value = "";
            priceRef.current.value = "";
            stockRef.current.value = "";
            emailRef.current.value = "";
         }
      } catch (err) {
         console.log(err);
      }
   };

   const categoriesData = ["Electronics", "Fashion", "Books", "Home Appliance"];

   return (
      <div className="bg-gray-900/50 rounded-md p-6">
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
                  Add Product
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           ref={emailRef}
                           id="email"
                           name="email"
                           type="email"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  {/* Product Name Input */}
                  <div>
                     <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Product Name
                     </label>
                     <div className="mt-2">
                        <input
                           ref={nameRef}
                           id="name"
                           name="name"
                           type="text"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  {/* Description Input */}
                  <div>
                     <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Description
                     </label>
                     <div className="mt-2">
                        <textarea
                           ref={descriptionRef}
                           id="description"
                           name="description"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                     </div>
                  </div>

                  {/* Category Dropdown */}
                  <div>
                     <label
                        htmlFor="category"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Category
                     </label>
                     <div className="mt-2">
                        <select
                           ref={categoryRef}
                           id="category"
                           name="category"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                           <option value="">Select Category</option>
                           {categoriesData.map((cat, index) => (
                              <option key={index} value={cat}>
                                 {cat}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>

                  {/* Tags Input */}
                  <div>
                     <label
                        htmlFor="tags"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Tags (comma separated)
                     </label>
                     <div className="mt-2">
                        <input
                           ref={tagsRef}
                           id="tags"
                           name="tags"
                           type="text"
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  {/* Price Input */}
                  <div>
                     <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Price
                     </label>
                     <div className="mt-2">
                        <input
                           ref={priceRef}
                           id="price"
                           name="price"
                           type="number"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  {/* Stock Input */}
                  <div>
                     <label
                        htmlFor="stock"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Stock
                     </label>
                     <div className="mt-2">
                        <input
                           ref={stockRef}
                           id="stock"
                           name="stock"
                           type="number"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                     <label
                        htmlFor="images"
                        className="block text-sm font-medium leading-6 text-white"
                     >
                        Upload Images
                     </label>
                     <div className="mt-2">
                        <input
                           type="file"
                           multiple
                           className="hidden"
                           id="images"
                           onChange={handleImageChange}
                        />
                        <label
                           htmlFor="images"
                           className="cursor-pointer flex items-center space-x-2 text-blue-500"
                        >
                           <AiOutlinePlusCircle size={25} />
                           <span>Choose Images</span>
                        </label>
                     </div>
                     {/* Image Previews */}
                     <div className="flex flex-wrap mt-2">
                        {previewImages.map((img, index) => (
                           <div key={index} className="relative w-24 h-24 m-2">
                              <img
                                 src={img}
                                 alt="preview"
                                 className="w-full h-full object-cover rounded-md"
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
                     >
                        Add Product
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};