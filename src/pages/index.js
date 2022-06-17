import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainHeading from '../components/MainHeading.js';
import ImageSlider from '../components/ImageSlider.js';

import special1 from '../images/special/special1.jpg';
import special2 from '../images/special/special2.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="home-page">
      <MainHeading 
        text="Welcome to Burleson Nails & Spa, where customer experience comes first."
      />

      <ImageSlider/>

      <div className="row pattern-bg" id="specials-div">
        <div>
          <img src={special1} alt="Special 1" />
        </div>
        <div>
          <img src={special2} alt="Special 2" />
        </div>
      </div>

      <div className="row" id="info-div">
        <div>
          <h3>Phone Number</h3>
          <a href="tel:6822555420">682-255-5420</a>
        </div>
        <div>
          <h3>Business Hours</h3>
          <table>
            <tbody>
              <tr>
                <td>Mon, Wed - Sat: </td>
                <td>10am - 7pm</td>
              </tr>
              <tr>
                <td>Sunday: </td>
                <td>12pm - 5pm</td>
              </tr>
              <tr>
                <td>Tue: </td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="map-div">
        <h3>Business Location</h3>
        <h4 id="address-text">251 SW Wilshire Blvd #116, Burleson, TX 76028</h4>
        <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.8471048709785!2d-97.3295033708132!3d32.542477429357106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e69a26e343cb9%3A0x7d99fa024febd25d!2sBurleson%20Nails%20Spa!5e0!3m2!1sen!2sus!4v1579463163108!5m2!1sen!2sus" allowFullScreen=""></iframe>
      </div>
      
    </section>
  </Layout>
)

export default IndexPage
