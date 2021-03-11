import React from 'react';
import { useForm } from 'react-hook-form';
import db from '../firebase';
import { storage } from '../firebase';

const IndexPage = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [url, setUrl] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderBtn = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <button
          disabled={!isValid}
          type="submit"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Create Account
        </button>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next Step
        </button>
      );
    }
  };
  const imageUpload = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    }
  };
  const submitForm = (data) => {
    console.log(data);
    db.collection('users')
      .add(data)
      .then(() => {
        alert('data added!!!');
        completeFormStep();
      });
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)',
          height: '34rem',
        }}
        className="absolute bg-gray-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-10 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-10 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10 text-left">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(submitForm)}>
            {formStep >= 0 && (
              <section className={formStep === 0 ? 'block' : 'hidden'}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information ({formStep + 1})
                </h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="text-input w-full border-2 border-gray-300"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please Enter Name',
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-600 text-sm mt-2">
                    {errors.name.message}
                  </span>
                )}
                <br />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-input w-full border-2 border-gray-300"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please Enter Email',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm mt-2">
                    {errors.email.message}
                  </span>
                )}
                <br />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="text-input w-full border-2 border-gray-300"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please Enter Email',
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-600 text-sm mt-2">
                    {errors.password.message}
                  </span>
                )}
              </section>
            )}
            {formStep >= 1 && (
              <section className={formStep === 1 ? 'block' : 'hidden'}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information ({formStep + 1})
                </h2>
                <label htmlFor="dob">DOB</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="text-input w-full border-2 border-gray-300"
                  ref={register({
                    required: true,
                  })}
                />
                <br />
                <label htmlFor="image">Profile Pic</label>
                <input
                  type="hidden"
                  id="image"
                  name="image"
                  value={url}
                  className="text-input w-full border-2 border-gray-300"
                  ref={register}
                />
                <input
                  type="file"
                  id="image"
                  className="text-input w-full border-2 border-gray-300"
                  onChange={imageUpload}
                />
                <progress value={progress} max="100" />
              </section>
            )}
            {formStep === 2 && (
              <h2 className="font-semibold text-3xl mb-8">Congratulations!</h2>
            )}
            {renderBtn()}
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
