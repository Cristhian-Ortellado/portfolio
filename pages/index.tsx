import type { NextPage } from "next";
import {
  Project,
  Container,
  Experience,
  GradientImage,
  Title,
  Button,
  SocialIcon,
} from "@components";
import styles from "@styles/pages/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import aboutMeImage from "@assets/img/placeholders/about-me-2.jpg";
import ovalDegrade from "@assets/img/placeholders/oval_degrade.png";
import ovalDegradeBottom from "@assets/img/placeholders/oval_degrade_bottom.png";
import { experiences } from "utils/constants/experiences.constants";
import { projects } from "utils/constants/projects.constants";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cristhian Ortellado | Back End Developer</title>
        <meta
          property="description"
          content="Cristhian Ortellado is a software engineer specializing in transforming business logic into robust automated systems."
        />
        <meta
          name="image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta
          property="og:title"
          content="Cristhian Ortellado | Back End Developer"
          key="title"
        />
        <meta
          property="og:description"
          content="Cristhian Ortellado is a software engineer specializing in transforming business logic into robust automated systems."
        />
        <meta
          name="og:image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta name="og:url" content="https://mariogyd.com/" />
        <meta name="og:type" content="website" />
      </Head>
      <section
        className={styles.section_header}
        aria-label="Introduction Section"
      >
        <Container size="md">
          <p
            style={{
              fontWeight: 500,
              color: "var(--color-bright-turquoise)",
              marginBottom: 10,
            }}
          >
            Hi my name is,
          </p>
          <h1 className={styles.bigTitle}>
            Cristhian Orellado <br />
            I&#39;m a <span className={styles.gradientText}>Backend</span>{" "}
            Engineer.
          </h1>
          <p className={styles.description}>
            I&#39;m a software engineer based on Paraguay.  I love 
            everything related to backend development such as query performance, real-time processing, database architecture, handling business logic, 
            security and more. I am focused on creating robust, scalable, and high-performance systems with high-quality code.
          </p>
        </Container>
      </section>
      <section
        className={styles.section_about_me}
        id="about-me"
        aria-label="About me"
      >
        <Container size="lg">
          <div className="u-hide-sm">
            <Title>About me</Title>
          </div>
          <div className={styles.section_about_container}>
            <div className={styles.section_about_description}>
              <div className="u-hide-md_lg">
                <Title>About me</Title>
              </div>
              <p>
                Hello! My name is Cristhian and I love creating new things from my mind with code.
                I started programming at the age of 15, my interest started because at that time I used to play video games and I wanted to know how they were built.
                <br />
                <br /> Until today I&#39;ve had the privilege to work at such
                amazing companies and teams.
                <br />
                <br /> I&#39;ve worked with different products such as &nbsp;
                <b>
                  <a
                    href="https://kwac.media/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web Services
                  </a>
                  ,{" "}
                  <a
                    href="https://www.sportninja.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    League management Platform
                  </a>
                  ,{" "}
                  <a
                    href="https://www.gdigital.com.py/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Digital transformation of companies
                  </a>
                </b>{" "}
                and also CMS web pages. Coding with WORDPRESS, CSS, HTML, JS, PHP, LARAVEL, MYSQL.
                <br />
                <br /> Nowadays, my main technologies are php, laravel, mysql, javascript, blade, html and bootstrap, looking forward to expand my knowledge in 
                devops, cloud and data science.
              </p>
            </div>
            <div>
              <GradientImage src={aboutMeImage} alt="About Me Image" />
            </div>
          </div>
          
          <SocialIcon
            type="linkedin"
            href="https://www.linkedin.com/in/cristhian-daniel-ortellado-fernandez-76540a199/"
          />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon type="github" href="https://github.com/Cristhian-Ortellado" />
        </Container>
      </section>
      <section
        className={styles.section_works}
        id="experience"
        aria-labelledby="experience-title"
      >
        <Container size="sm">
          <Title id="experience-title">Where I&#39;ve Worked</Title>
          <div className={styles.section_works__experience}>
            {experiences.map((work) => {
              return <Experience key={work.company + work.start} {...work} />;
            })}
          </div>
        </Container>
      </section>
      <section
        className={styles.section_projects}
        id="work"
        aria-labelledby="work-title"
      >
        <Container size="sm">
          <Title id="work-title">Some things I&#39;ve built</Title>
        </Container>
        <Container size="lg">
          <div className={styles.section__projects_container}>
            {projects.map((project, index) => (
              <div className={styles.project} key={index + project.title}>
                <Project is={index % 2 === 0 ? "even" : "odd"} {...project} />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section
        className={styles.section_contact}
        id="contact"
        aria-labelledby="contact-title"
      >
        <Container size="lg">
          <h2 id="contact-title">Get In Touch</h2>
          <p>
            I&#39;m always open to new opportunities. If you have any question
            or doubt, feel free to drop an email, I&#39;ll get back to you soon!
          </p>
          <Button href="mailto:cortelladofernandez@gmail.com">Say Hello</Button>
        </Container>
        <div className="u-hide-sm">
          <div className={styles.section_contact_bg_img}>
            <Image src={ovalDegrade} alt="" />
          </div>
        </div>
        <div className="u-hide-md_lg">
          <Image src={ovalDegradeBottom} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
