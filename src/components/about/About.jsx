import "./about.css";
import hiking from '../../img/hiking.jpg'
import Resume from '../../img/resume.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={hiking}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I'm a recent graduate of George Washington University's Full Stack Development Certificate program. During my time in the program I learned the introcacies of both the Frontend and Backend of Web Development.
        </p>
        <p className="a-sub"> My Technical Skills include:</p>
        <p className="a-desc">
        Frontend: 
        HTML, CSS, JavaScript, Command line fundamentals, APIs: Server-side and Third Party, and Git fundamentals, React. 
        </p>
        <br></br>
        <p className="a-desc">
        Backend:
        Node.js, OOP, Express.js, SQL (MySQL and Sequelize), ORM, MVCs, NoSQL(MongoDB and Mongoose) 
        I am excited to take the knowledge and skills I learned in this program and help an organization continue to grow and achieve their goals. 
        </p>
        <br></br>
        <p>
        Apart from coding, some other activities that I love to do!
        </p>
          <ul>
            <li className="a-desc">
            Hiking
            </li>
            <li className="a-desc">
            Playing sports
            </li>
            <li className="a-desc">
            Travelling
            </li>
          </ul>
          <div className="a-award">
          <img src={Resume} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <a 
            href="https://docs.google.com/document/d/1M9TjR2JbGdRUqUTpjlhC-K7JPO5TGuEiL9DeSa8WXk4/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="text-decoration-none">
            <h4 className="a-award-title">Click to view my resume</h4>
          </a>
            {/* <p>Resume.pdf</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;