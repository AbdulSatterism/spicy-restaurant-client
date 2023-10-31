import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const imageHostingToken = process.env.REACT_APP_image_token;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

    const onSubmit = data => {
        const formData = new FormData(); //for image file host
        formData.append('image', data.image[0])
        fetch(imageHostingURL, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgURL = imageRes.data.display_url;
                    const { name, category, price, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            reset();
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'New item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })
    };


    return (
        <div className='w-full px-10 '>
            <Helmet>
                <title>Spicy-Restaurant | Add an item </title>
            </Helmet>
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name* </span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full  " />

                </div>

                <div className='flex my-4'>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Category*</span>

                        </label>
                        <select
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled defaultValue='Pick One'>Pick One</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>deshi</option>
                            <option>salad</option>
                            <option>drinks</option>
                            <option>dessert</option>
                        </select>

                    </div>

                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Price* </span>
                        </label>
                        <input type="number" placeholder="Type here"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full  " />

                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="recipe details"></textarea>
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full  " />

                </div>
                <input className='btn btn-sm mt-4 ' type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItem;