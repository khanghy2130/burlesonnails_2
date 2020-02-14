import React from "react"

import Layout from "../components/layout"
import MainHeading from '../components/MainHeading.js'
import SEO from "../components/seo"

const IMAGES_COUNT = 24;

function imageOnClick(e){
	e.target.classList.toggle("viewing");
}

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <section id="gallery-page">
		<MainHeading 
			text="Explore the gallery!"
		/>

		<div id="images-container">
			{[...Array(IMAGES_COUNT)].map((image, index) => (
				<div key={index} className="image-item">
					<div>
						<img
						src={`/gallery/img${index}.jpg`}
						onClick={imageOnClick}
						alt={`Item ${index}`} />
					</div>
				</div>
			))}
		</div>

	</section>
  </Layout>
)

export default GalleryPage
