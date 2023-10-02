import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = (media) => {
    media()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleGoogleLogin(googleLogin)}
          className="btn btn-neutral btn-sm"
        >
          Google
        </button>
        <button
          onClick={() => handleGoogleLogin(githubLogin)}
          className="btn btn-neutral btn-sm"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
