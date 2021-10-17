import React from 'react';
import Slide from 'react-reveal/Slide';
import schedule from '../../assets/images/schedule.png';
import '../../assets/styles/main.scss';

function Home() {
    return (
        <main className="Home container-fluid">
           <section className="row">
               {/* Left col */}
               <figure className="col-lg-6 bg-secondary ps-5 mt-lg-7">
                <figcaption className="mx-auto">
                    <h4 className="fs-2 text-primary">
                        Keep Track
                    </h4>
                    <Slide bottom>
                        <h4>
                            of the expired goods 
                            <br />
                            in your house
                        </h4>
                    </Slide>
                </figcaption>
                    <img src={schedule} 
                        className="img-fluid"
                        width="405"
                        alt="Calendar and man keeping track" />
               </figure>
               
               {/* Right col */}
               <aside className="d-flex col-lg-6 py-3 bg-primary align-items-center">
                <section className="d-grid gap-4 col-7 mx-auto">
                    <Slide bottom>
                        <a href="/login" role="button" className="btn btn-lg btn-second">
                            Log In
                        </a>
                        <a href="/signup" role="button" className="btn btn-lg btn-second">
                            Sign Up
                        </a>
                    </Slide>
                </section>
               </aside>
            </section> 
        </main>
    )
}

export default Home
