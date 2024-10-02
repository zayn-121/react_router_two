import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homediv">
      <h1>Home</h1>
      <p className="homep">This is the home page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt est harum nobis doloremque, facere, alias consectetur veritatis amet hic odit, ipsum odio quisquam tenetur aperiam molestiae minus. Sed, obcaecati quis. Molestiae aperiam hic mollitia, optio quasi excepturi eum tempora quo pariatur fuga esse autem necessitatibus, voluptas quidem maiores? Ea, eius nostrum error exercitationem explicabo veritatis aut ratione numquam ipsum eveniet vitae rem. Quas atque perspiciatis cumque tenetur at quod numquam laudantium debitis soluta ullam alias vel id, iusto distinctio accusamus earum quidem, expedita, quae dicta eligendi error? Tempore nesciunt nostrum totam cum blanditiis itaque aperiam aliquam nemo aliquid doloribus.</p>
      <p className="homepL">Go to{" "}
        <Link to="/profile">Profile</Link>
      </p>
    </div>
  );
};

export default Home;
