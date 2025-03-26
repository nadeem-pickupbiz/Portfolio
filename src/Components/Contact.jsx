import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


const Contact = () => {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors }, 
        } = useForm();
      const onSubmit = async(data) => {
        const userInfo ={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/bmdkxpza",userInfo),
            toast.success("Your Message has been sent"); 
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
      }
  return (
    <>
    <div name="Contact" className="max-w-screen-2xl container px-4 md:px-20 my-16 bg-cover bg-center p-10" style={{ backgroundImage: "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bmdkxpza" 
            // method="POST"
            className='bg-slate-200 w-96  px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label className="block text-gray-700">FullName</label>
                    <input 
                    {...register("name", { required: true })}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leadnig-tight focus-outline-none focus:shadow-outline"
                    id='name'
                    name='name'
                    type="text" 
                    placeholder='Enter Your FullName'/>
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className='flex flex-col mb-4'>
                    <label className="block rounded-lg text-gray-700">Email Address</label>
                    <input
                    {...register("email", { required: true })}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leadnig-tight focus-outline-none focus:shadow-outline" 
                    id='email' 
                    name='email'
                    type="text"
                    placeholder='Enter Your Email Address'/>
                    {errors.email && <span>This field is required</span>}
                </div>


                <div className='flex flex-col mb-4'>
                    <label className="block rounded-lg text-gray-700">Message</label>
                    <textarea 
                    {...register("message", { required: true })}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leadnig-tight focus-outline-none focus:shadow-outline"
                    id='message'
                    name='message'
                    type="text"
                    placeholder='Enter Your Message Here'/>
                    {errors.message && <span>This field is required</span>}
                </div>

                <button type='submit' className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>

            </form>
        </div>
    </div>
    </>
  )
}
export default Contact;
