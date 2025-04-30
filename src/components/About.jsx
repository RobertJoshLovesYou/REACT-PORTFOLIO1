const About = () => {
  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>About <span className="color-primary">Me</span></h1>
          <p className="width70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nulla aperiam enim dignissimos nobis error cumque atque distinctio, deserunt excepturi, voluptatem adipisci eius. Ipsa sunt officiis aspernatur impedit animi accusantium! </p>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src="/images/me.jpg" alt="myphoto" />
          </div>
          <div className="section-right">
            <section >
              <h2 className="weight-light">Hi, I'm <span className="color-primary">Robert Josh F. Deiparine</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae similique, ratione aperiam veniam incidunt debitis. Sapiente quod vero obcaecati fuga, quo tempora, autem numquam consectetur rerum animi fugiat alias.</p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
              <div>
                <p><strong>Name:</strong>Robert Josh F. Deiparine</p>
                <p><strong>Age:</strong> 20 years</p>
                <p><strong>Language:</strong> English, Tagalog, Bisaya, Bicol</p>
                <p><strong>Address:</strong> Quezon Prov, Lucena City, Isabang, Inmaculada</p>
                <p><strong>Freelance:</strong> Available</p>
              </div>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Skills</span></h2>
            <section>HTML, CSS</section>
            <hr />
            <section>JavaScript, ReactJS</section>
            <hr />
            <section>Python, Nodejs</section>
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Experience</span></h2>
            <section><p>HB Barista<br />2021</p></section>
            <hr />
            <section><p>Namimitik<br />2021 - Current</p></section>
            <hr />
            <section><p>Dancer sa Bar<br />Current</p></section>
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Education</span></h2>
            <section><p>CSTC Lucena<br />2021-2023</p>
            </section>
            <hr />
            <section>DLL<p>2023 - Current</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;