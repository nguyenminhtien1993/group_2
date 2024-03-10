import { React, useEffect } from "react";

import "../Content_About/Content_About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import content_history from "../../Img/content-history.png";
import hatgiay from "../../Img/hatgiay.jpg";
import tetholiday from "../../Img/img-about/Tet holiday of children.png";
import BDG1 from "../../Img/img-about/hinh_1.png";
import BDG2 from "../../Img/img-about/hinh_2.png";
import BDG3 from "../../Img/img-about/hinh_3.png";
function Content_About() {
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // end animation
  return (
    <div>
      {/* origami original */}
      <section>
        <div className="content-history-psychology">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 data-aos="zoom-in-right" className="a-brief-history">A brief history of origami</h2>

                <div className="content-history" data-aos="fade-up">
                  <div className="img-content-history">
                    <img
                      src={content_history}
                      alt="content-history"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p>
                      There is much debate about the true history of origami. No
                      one knows exactly where or when origami first began. Paper
                      is one of the first things to degrade and disappear. Most
                      people think that origami was first invented in China, but
                      this may not be true at all. We do know that paper was
                      first invented in China during the first century A.D.
                      Paper was then brought from China to Japan by Buddhist
                      monks during the sixth century A.D. However there is also
                      a lot of examples of origami in other countries, and where
                      there is paper, there is bound to have been some folding
                      going on!
                    </p>
                  </div>
                </div>
                <p data-aos="fade-up" >
                  Origami became a very prominent art form in Japan and in
                  Europe from as early as 1490. One of the oldest documents
                  written about origami is the ‘Senbazuru Orikita’, which
                  translates to ‘One Thousand Origami Cranes’, and was written
                  in around 1797. ‘The oldest unequivocal document of origami is
                  a short poem composed by Ihara Saikaku in 1680. It reads:
                  Rosei-ga yume-no cho-wa orisue (The butterflies in Rosei’s
                  dream would be origami.) Here he referred to an origami model
                  called Ocho Mecho (Male and Female Butterflies) as “orisue.”
                  We use it to wrap sake bottles mainly at the wedding
                  ceremony.’ – https://origami.ousaan.com/library/historye.html
                  Origami has gone through many different styles, including very
                  loosely folded origami in Japan that had no exact fold
                  position, it was up to personal taste to decide the shape. On
                  the other hand, European origami, traditionally had more
                  measuring and aligning involved. Modern origami all around the
                  world today has taken a more exact method. Diagrams are like
                  architectural drawings, crisp and precise. The final model
                  should look exactly as the designer intended.
                </p>
                <h4 data-aos="fade-up">
                  More information on the history of origami:
                </h4>
                <div data-aos="fade-up">
                  David Mitchell:
                  <a
                    href="https://www.origamiheaven.com/historyindex.htm"
                    target="_blank"
                    rel="noreferrer"
                   
                  >
                    The Public Paperfolding History Project –
                  </a>
                </div>
                <div data-aos="fade-up">
                  K’s Origami (Hatori Koshiro):
                  <a
                    href="https://origami.ousaan.com/library/historye.html"
                    
                  >
                    History of Origami
                  </a>
                </div>
                <div data-aos="fade-up">
                  Origami Resource Center (Diana Lee):
                  <a
                    href="https://origami.ousaan.com/library/historye.html"
                    
                  >
                    History of Origami
                  </a>
                </div>
                <div data-aos="fade-up">
                  David Lister:
                  <a
                    href="https://www.britishorigami.org/"
                    
                  >
                    History of Paperfolding: a German Perspective
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.britishorigami.org/"
                    
                  >
                    Old European Origami
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="container">
                  <div className="content-psychology" data-aos="zoom-in-left">
                    <img
                      src={hatgiay}
                      alt="content-psychology"
                      loading="lazy"
                      className="img-fluid"
                    />

                    <h2 className="a-therapy">Origami in Therapy</h2>
                  </div>
                  <span data-aos="fade-up">
                    Origami is the Japanese art of paper folding. Created piece
                    are often made from a single sheet of paper that has been
                    folded without any cutting involved. More involved pieces
                    may be assembled from more than one piece. A related art
                    form, kirigami, involves both folded and cut paper. I have
                    always been fascinated by origami-it amazes me the multitude
                    of thỉngs that can be created from folding a single piece of
                    paper. It was not until another psychotherapist gave a
                    training at my clinic, however, that I even thought about
                    incorporating it in to therapy. Art therapy often encourages
                    art methods that allow for individual, creative expression.
                    In contrast, origami involves carefully following a set
                    pattern in order to create the chosen object. I have found,
                    however, that the process of creating a piece of origami can
                    be very beneficial in therapy.
                  </span>
                  <h6 data-aos="fade-up">
                    How can origami be used in therapy ?
                  </h6>
                  <h6 data-aos="fade-up">1. Building attention and focus:</h6>
                  <div data-aos="fade-up">
                    Origami can be a great activity to help children with ADHD
                    to build attention because it requires focus and
                    concentration to be successful. In addition, you must follow
                    the steps as they are written and constantly evaluate your
                    work, which are important skills for children to learn. I
                    have found that even the most distractible kids can be
                    engaged in origami and are motivated to successfully
                    complete their piece.
                  </div>
                  <h6 data-aos="fade-up">2. Building frustration tolerance:</h6>
                  <div data-aos="fade-up">
                    There is no doubt that origami can be frustrating at times.
                    This makes it a perfect activity to help children build
                    their ability to stick with something, even when it is
                    difficult. At times, I have prompted a frustrated child to
                    stop, take a few deep breaths, try again, and ask for help
                    if needed. ! will then talk with the child about how they
                    can do the same thing when struggling with something else,
                    like homework, instead of just giving up or getting angry.
                    As a therapist, you can also be a good model of this. If you
                    are having difficulty with an origami step, you can
                    demonstrate calm perseverance as you work together to figure
                    it out.
                  </div>
                  <h6 data-aos="fade-up">
                    3. Practicing positive self-statements:
                  </h6>
                  <div data-aos="fade-up">
                    l often help kids to notice their self-talk as they approach
                    a difficult project or poïnt out negative comments they
                    make. We can then talk about how these thoughts may be
                    unhelpful and how they can practice more positive
                    statements-replacing “I can't” with “I can do this.”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-12">
              <h2
                className="a-develope-history"
                data-aos="fade-up-right"
              >
                Development history of ORGM
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6" data-aos="fade-up">
              <div>
                <img
                  src={tetholiday}
                  alt="Tet holiday"
                  srcset=""
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 " data-aos="fade-down">
              <div className="ms-5">
                <div className="a-develope">
                  <span>Since 2009</span>
                  <h1>15</h1>
                  <h3>
                    <span>years</span>
                  </h3>
                </div>
                <span>
                  ORGM's predecessor was initiated by a group of "youth
                  volunteers" working with the purpose of supporting the care
                  and protection of street children by creating conditions and
                  opportunities for children to meet their basic needs.
                </span>
                <ul>
                  <li>
                    {" "}
                    Children leave this at-risk street environment to live in a
                    safe environment.
                  </li>
                  <li>
                    Children receive counseling to return home and reintegrate
                    into family and society.
                  </li>
                </ul>
                <span>
                  The Huynh Van Nghe street child care program was born in such
                  a context.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-xl">
        <h2 className="board-manager" data-aos="fade-up">
          Board Of Manager
        </h2>
        <div className="row">
          <div className="col-12 col-md-4" data-aos="fade-up">
            <div className="container-relative">
            <img src={BDG1} alt="" srcset="" className="image" />
              <div className="overlay">
                <div className="text">
                  Full name: Mr Singh Aayush. <br />
                  Year of birth: 1981. <br />
                  Place of birth: India <br />
                  He is a finance manager for <br /> company ORGM
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4" data-aos="fade-down">
            <div className="container-relative">
            <img
                src={BDG2}
                alt=""
                srcset=""
                className="image"
                loading="lazy"
              />
              <div className="overlay">
                <div className="text">
                  Full name: Mr Singh Dhairya. <br />
                  Year of birth: 1979. <br />
                  Place of birth: India <br />
                  He is a technology manager for <br /> company ORGM
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4" data-aos="fade-up">
            <div className="container-relative">
            <img
                src={BDG3}
                alt=""
                srcset=""
                className="image"
                loading="lazy"
              />
              <div className="overlay">
                <div className="text">
                  Full name: Ms Kau Aaryahi. <br />
                  Year of birth: 1978. <br />
                  Place of birth: India <br />
                  He is a director of strantegy for <br /> company ORGM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content_About;
