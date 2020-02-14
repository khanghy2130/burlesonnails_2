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
			["Classic", "15"],
			["Green Tea", "25"],
			["Lavender", "25"],
			["Milk & Honey", "25"],
			["Gel Manicure", "30"],
			["French Gel", "35"],
			["Kid Manicure", "10"],
			["Kid Gel Color", "20"]
		],
	},
	{
		categoryName: "Pedicure",
		services: [
			["Classic Hot Tower", "25"],
			["Peppermint Hot Stone", "30"],
			["Mandarin Paraffin", "30"],
			["Luxury (hot stones & paraffin)", "37"],
			["Green Tea-Mint", "42"],
			["Lavender-Mint", "42"],
			["Milk & Honey", "50"],
			["Kid Pedicure", "17"],
			["(Extra $15 gel color or $20 French gel for Pedicure)", null]
		],
	},
	{
		categoryName: "Waxing",
		services: [
			["Lip", "5"],
			["Eyebrow", "8"],
			["Chin", "7 & up"],
			["Full Face", "30 & up"],
			["Half Arms", "20"],
			["Full Arms", "35 & up"],
			["Under Arms", "15 & up"],
			["Half Legs", "30"],
			["Full Legs", "50 & up"],
			["Back", "40 & up"]
		],
	},
	{
		categoryName: "Acrylic",
		services: [
			["Full Set Regular", "25"],
			["Full Set Gel", "37"],
			["Full Set White Tip", "25"],
			["Pink & White", "40"],
			["Ombre Full Set", "40"],
			["Dipping Powder", "35"],
			["French Dipping", "40"],
			["Fill-in Regular", "15"],
			["Fill-in Gel", "30"],
			["Fill-in Pink & White", "35"],
			["Fill-in Pink Only", "25"],
			["Fill-in Ombre", "30"]
		],
	},
	{
		categoryName: "Additional Services",
		services: [
			["Regular Polish Hands/Toes", "8/$10"],
			["Regular French Hands/Toes", "10/$12"],
			["Gel Polish Change Hands/Toes", "20/$22"],
			["Acrylic Take off and Re-do", "5"],
			["French, American, Color Tip Gel", "5 extra"],
			["Nail Design", "3"],
			["Nail Repair", "3"],
			["Nails Take off", "10"],
			["Kid Regular Polish Hands or Toes", "5"],
			["Long Nails", "5 extra"]
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
