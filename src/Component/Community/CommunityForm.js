import { useEffect, useState } from "react";
import React from 'react';
import { CloudinaryContext, Image, Video } from 'cloudinary-react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';


const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload';
const UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET';


const CommunityForm = () => {

    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if Geolocation API is available
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Successfully retrieved location
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err) => {
                    // Error retrieving location
                    setError(err.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    const [fileType, setFileType] = useState('image');
    const [uploadedFile, setUploadedFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        axios.post(CLOUDINARY_URL, formData)
            .then(response => {
                setUploadedFile(response.data.secure_url);
            })
            .catch(err => console.error(err));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    return (
        <div>
            <div className='text-xl md:text-3xl font-bold mt-4 md:mt-12 text-center'>Community Form</div>
            <div className='flex flex-col p-4 md:m-12'>
                <div>
                    <form className='flex flex-col md:flex-row gap-y-4 md:gap-x-24 w-full'>
                        <div className='flex flex-col navyBlueBorder rounded-md p-2 shadow-xl bg-gray-100 md:w-6/12 p-4 md:p-8'>
                            <label htmlFor='title' className='mb-1 text-navyBlue'>
                                Title
                            </label>
                            <input type='text' className='px-2 py-2 rounded-md border-2 mb-2' name='title' placeholder='Enter Title...' />
                            <label className='mb-1 text-navyBlue'>
                                Description
                            </label>
                            <textarea type='text' className='px-2 py-2 rounded-md border-2 mb-2 h-96 md:h-48' name='title' placeholder='Enter Description...' />
                            <label className='mb-1 text-navyBlue'>
                                Address
                            </label>
                            <input type='text' className='px-2 py-2 rounded-md border-2 mb-2' name='title' placeholder='Enter Address...' />
                        </div>
                        <div className='flex flex-col gap-y-4 md:gap-y-6 navyBlueBorder justify-between border-2 rounded-md p-2 shadow-xl bg-gray-100 md:w-6/12 md:p-4 md:p-8'>
                            <div>
                                <h3 className='text-navyBlue'>Add Image/Video</h3>
                                <div>
                                    <select onChange={(e) => setFileType(e.target.value)} value={fileType} className="mt-2 rounded-xl px-10 py-2">
                                        <option value="image">Image</option>
                                        <option value="video">Video</option>
                                    </select>

                                    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', marginTop: '20px' }}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop {fileType}s here, or click to select {fileType}s</p>
                                    </div>

                                    {uploadedFile && (
                                        fileType === 'image' ? (
                                            <CloudinaryContext cloudName="YOUR_CLOUD_NAME">
                                                <Image publicId={uploadedFile} />
                                            </CloudinaryContext>
                                        ) : (
                                            <CloudinaryContext cloudName="YOUR_CLOUD_NAME">
                                                <Video publicId={uploadedFile} controls />
                                            </CloudinaryContext>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h3 className='text-navyBlue'>Share Current Location</h3>
                                <div>
                                    <h1>Current Location</h1>
                                    {error && <p>Error: {error}</p>}
                                    {location.latitude && location.longitude ? (
                                        <p>
                                            Latitude: {location.latitude}, Longitude: {location.longitude}
                                        </p>
                                    ) : (
                                        <p>Fetching location...</p>
                                    )}
                                </div>
                            </div>
                            <button className='px-10 py-2 md:px-20 rounded-md hover:navyBlueHover navyBlue text-white mt-4 mx-auto'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommunityForm