import React, { useState } from 'react';
import firebase from 'firebase';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail('');
        alert('Please check you email for password reset');
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            alert(err.message);
            break;
        }
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
      <div className="max-w-xl w-full mt-10 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10 text-left">
        <div className="px-16 py-10">
          <form onSubmit={submitForm}>
            <section>
              <h2 className="font-semibold text-3xl mb-8">Forgot Password</h2>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name={email}
                className="text-input w-full border-2 border-gray-300"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </section>
            <button
              type="submit"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
