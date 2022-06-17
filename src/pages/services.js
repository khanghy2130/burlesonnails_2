import React from "react"

import Layout from "../components/layout";
import MainHeading from '../components/MainHeading.js';
import SEO from "../components/seo";


// list of categories > each contains list of services > each service is [name, price]
// shortcut: all price strings start with $ sign
const servicesData = [
	{
		categoryName: "Manicure",
		services: [
			["Classic", null],
			["Green Tea", null],
			["Lavender", null],
			["Milk & Honey", null],
			["Gel Manicure", null],
			["French Gel", null],
			["Kid Manicure", null],
			["Kid Gel Color", null]
		],
	},
	{
		categoryName: "Pedicure",
		services: [
			["Classic Hot Tower", null],
			["Peppermint Hot Stone", null],
			["Mandarin Paraffin", null],
			["Luxury (hot stones & paraffin)", null],
			["Green Tea-Mint", null],
			["Lavender-Mint", null],
			["Milk & Honey", null],
			["Kid Pedicure", null],
			["(Extra $15 gel color or $20 French gel for Pedicure)", null]
		],
	},
	{
		categoryName: "Waxing",
		services: [
			["Lip", null],
			["Eyebrow", null],
			["Chin", null],
			["Full Face", null],
			["Half Arms", null],
			["Full Arms", null],
			["Under Arms", null],
			["Half Legs", null],
			["Full Legs", null],
			["Back", null]
		],
	},
	{
		categoryName: "Acrylic",
		services: [
			["Full Set Regular", null],
			["Full Set Gel", null],
			["Full Set White Tip", null],
			["Pink & White", null],
			["Ombre Full Set", null],
			["Dipping Powder", null],
			["French Dipping", null],
			["Fill-in Regular", null],
			["Fill-in Gel", null],
			["Fill-in Pink & White", null],
			["Fill-in Pink Only", null],
			["Fill-in Ombre", null]
		],
	},
	{
		categoryName: "Additional Services",
		services: [
			["Regular Polish Hands/Toes", null],
			["Regular French Hands/Toes", null],
			["Gel Polish Change Hands/Toes", null],
			["Acrylic Take off and Re-do", null],
			["French, American, Color Tip Gel", null],
			["Nail Design", null],
			["Nail Repair", null],
			["Nails Take off", null],
			["Kid Regular Polish Hands or Toes", null],
			["Long Nails", null]
		],
	}
];

function toggleExpand(e) {
	// recusively get to the .category-section element
	let section = e.target;
	while (!section.classList.contains("category-section")){
		// if not clicking on tab element
		if (section.classList.contains("table-container")){
			return;
		}

		section = section.parentNode;
	}
	section.classList.toggle("closed");
}

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <section id="services-page">
		<MainHeading 
			text="We offer quality services."
		/>

		<div id="services-container">
			{servicesData.map((category, categoryIndex) => {
				return (
				<div className="category-section closed"
				onClick={toggleExpand}
				key={categoryIndex}>
					<div className="category-tab">
						<h3>{category.categoryName}</h3>
						<div className="circle-plus">
							<div className="circle">
								<div className="horizontal"></div>
								<div className="vertical"></div>
							</div>
						</div>
					</div>
					<div className="table-container">
						<table>
							<tbody>
								
								{category.services.map((service, serviceIndex) => {
									let serviceName = service[0];
									let price = service[1];
									if (price) price = "$" + price; // plug $ sign if not null

									return (
										<tr key={serviceIndex}>
											<td>{serviceName}</td>
											<td>{price}</td>
										</tr>
									)
								})}

							</tbody>
						</table>
					</div>
				</div>
				)
			})}
		</div>
	</section>
  </Layout>
)

export default ServicesPage
