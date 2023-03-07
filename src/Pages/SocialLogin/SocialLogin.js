import {
  useAuthState,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import React from "react";
import * as Icon from "react-bootstrap-icons";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleGithubSignIN = () => {
    signInWithGithub();
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };
  return (
    <div>
      <div className="text-center text-danger">
        <h5>
          {googleError?.message}
          {githubError?.message}
          {facebookError?.message}
        </h5>
      </div>
      <div className="d-flex  justify-content-center align-items-center">
        <div style={{ height: "1px" }} className="w-25 bg-secondary "></div>
        <p className="mx-2 mt-3">OR</p>
        <div style={{ height: "1px" }} className="w-25 bg-secondary"></div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button
          onClick={() => handleGoogleSignIn()}
          className="btn btn-success w-25 my-2"
        >
          <Icon.Google
            style={{ height: "30px", width: "30px", color: "#9acd32" }}
          ></Icon.Google>
          <span className="ml-3">Google Sign In</span>
        </button>
        <button
          onClick={handleGithubSignIN}
          className="btn btn-success w-25 my-2"
        >
          <Icon.Github
            style={{ height: "30px", width: "30px", color: "black" }}
          ></Icon.Github>
          <span className="ml-3">GitHub Sign In</span>
        </button>

        <button
          onClick={handleFacebookSignIn}
          className="btn btn-success w-25 my-2"
        >
          <Icon.Facebook
            style={{ height: "30px", width: "30px", color: "#4169e1" }}
          ></Icon.Facebook>
          <span className="ml-3">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
