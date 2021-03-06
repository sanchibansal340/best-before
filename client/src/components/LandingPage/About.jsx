import React from 'react';
import '../../assets/styles/main.scss';

function About() {
    return (
        <main className="About container pb-5" style={{ marginTop: '70px' }}>
            <h4 className="text-primary">
                About Us
            </h4>
            <article>
                <p className="fs-md">
                    As our lives have become increasingly fast-paced, we tend 
                    to forget small things like expiration dates of medicines. 
                    <br />
                    But items like medicines can be required on urgent basis 
                    and expired medicines can be an inconvenience. 
                </p>

                <section className="ps-3">
                    <h5 className="text-primary">
                        How does Best Before help?
                    </h5>
                    <ul className="fs-md">
                        <li>
                            Add items with their name and expiry date.
                        </li>
                        <li>
                            Get reminders about expired items on WhatsApp or Text Message.
                        </li>
                        <li>
                            Search for items already added.
                        </li>
                    </ul>
                </section>
                
            </article>
        </main>
    )
}

export default About
