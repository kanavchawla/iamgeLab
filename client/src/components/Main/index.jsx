import styles from "./styles.module.css";
import Lottie from "lottie-react";
import animationData from "../assests/Animation.json";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>ImageEditor</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <Lottie
        className={styles.animation}
        animationData={animationData}
      ></Lottie>
      <a href="https://testautomationproject.netlify.app/">
        <button name="imageEditorLink" className={styles.click}>
          Click here to use Image editor
        </button>
      </a>
    </div>
  );
};

export default Main;
