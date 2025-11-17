import React, { useState } from "react";

const LogIn: React.FC = () => {
  const [values, setValues] = useState({ email: "", newPassword: "", confirmPassword: "" });
  const [touched, setTouched] = useState({ email: false, newPassword: false, confirmPassword: false });

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email === "";
  const passwordValid = values.newPassword.length >= 6 || values.newPassword === "";
  const confirmPasswordValid = values.confirmPassword === values.newPassword ;

  const canSubmit = () =>
    values.email &&
    values.newPassword &&
    values.confirmPassword &&
    emailValid &&
    passwordValid &&
    confirmPasswordValid
 
  function handleChange(
    e: React.FocusEvent<HTMLInputElement>
  ): void {
    const { name, value } = e.target; //e.target is the DOM element that triggered the event (input field)
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement>
  ): void {
    const { name } = e.target; //e.target is the DOM element that triggered the event (input field)
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (!canSubmit) return;
    console.log(values)
  }

  return (
    <div className="flex justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="card w-96 bg-base-100 shadow border border-base-300 p-6 space-y-4"
        noValidate
      >
        <h2 className="card-title">Login</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              name="email"
              type="email"
              placeholder="email address"
              className="input input-bordered"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} // this will handle for touch will emit when we lose focus from input field
              autoComplete="email"
              required
            />
          {!emailValid && touched.email && (
            <p className="text-xs text-red-500 mt-1">
              Invalid email format.
            </p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
            <input
              name="password"
              type="password"
              placeholder="min 6 characters"
              className="input input-bordered"
              value={values.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="new-password"
              required
            />
          {!passwordValid && touched.newPassword && (
            <p className="text-xs text-red-500 mt-1">
              Password must be at least 6 characters.
            </p>
          )}
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="min 6 characters"
              className="input input-bordered"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="confirm-password"
              required
            />
          {!confirmPasswordValid && touched.confirmPassword && (
            <p className="text-xs text-red-500 mt-1">
              Passwords do not match.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!canSubmit()}
        >
            Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;

// In React, a SyntheticEvent is React’s wrapper around the browser’s native event. Key points:

// Provides a consistent cross‑browser API (same properties in all browsers).
// Pooled for performance (won’t persist after the handler finishes unless you call event.persist()) in older React; in modern React pooling is removed but concept remains.
// Has the same interface as the native event (e.target, e.currentTarget, etc.) plus React-specific typing.
// You still interact with DOM elements, but through this normalized event object.


// e.preventDefault();   // Stop default browser action
// e.stopPropagation();  // Stop event bubbling to parent