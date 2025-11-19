import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../shared/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user/userSlice";
import { notify } from "../../../components/Toaster/Toaster";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email === "";
  const passwordValid = values.password.length >= 6 || values.password === "";

  const canSubmit = () =>
    values.email && values.password && emailValid && passwordValid;

  function handleChange(e: React.FocusEvent<HTMLInputElement>): void {
    const { name, value } = e.target; //e.target is the DOM element that triggered the event (input field)
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    const { name } = e.target; //e.target is the DOM element that triggered the event (input field)
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const docRef = doc(db, "Users", cred.user.uid); // change to "Users" if that is what you wrote
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const raw = docSnap.data();
        const userDetails = {
          ...raw,
          createdAt: raw.createdAt?.toMillis?.() ?? null, // Firestore Timestamp -> number
        };
        dispatch(userActions.SET_USER(userDetails));
        notify.success("Login successful");
        setTimeout(() => navigate("/"), 1200);
      } else {
        notify.error("Invalid User");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
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
            <p className="text-xs text-red-500 mt-1">Invalid email format.</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="min 6 characters"
            className="input input-bordered"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="current-password"
            required
          />
          {!passwordValid && touched.password && (
            <p className="text-xs text-red-500 mt-1">
              Password must be at least 6 characters.
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

        <div className="p-2 justify-center">
          Not registered yet?
          <Link to="/register" className="text-red-800 pl-2">
            Register
          </Link>
        </div>
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
