import React, { useState } from 'react';
import firebase from 'firebase';
import { useLocation } from 'react-router-dom';

function Reset() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { search } = useLocation();
  const code = new URLSearchParams(search).get('oobCode') || '';

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password == confirmPassword) {
      firebase
        .auth()
        .confirmPasswordReset(code, password)
        .then(() => {
          alert('Password reset successfully!! Go to login page');
          setPassword('');
          setConfirmPassword('');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert('Please match both fields');
    }
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
              <h2 className="font-semibold text-3xl mb-8">Change Password</h2>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name={password}
                className="text-input w-full border-2 border-gray-300"
                onChange={(e) => setPassword(e.target.value)}
              />

              <br />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name={confirmPassword}
                className="text-input w-full border-2 border-gray-300"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
}

export default Reset;
