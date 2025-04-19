"use client";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const footerList = [
        {
            id: 1,
            label: "CONTACT US",
            list: [
                { label: "Toll free", description: "+1 (123) 4567 8901" },
                { label: "Write to us at", description: "diamondatelierusa@gmail.com" },
            ],
        },
        {
            id: 2,
            label: "CHAT WITH US",
            list: [
                { description: "Just send us your questions or concerns by starting a new case and we will give you the help you need.", button: "START HERE" },
            ],
        },
        {
            id: 3,
            label: "ADDRESS",
            list: [
                { description: "38 West 48th street, 5th floor, New York, NY 10036" },
                {
                    description: "diamondatelier.inc",
                    icons: [
                        <FaFacebook key="facebook" />,
                        <FaInstagram key="instagram" />,
                        <FaLinkedinIn key="linkedin" />,
                    ],
                },
            ],
        },
    ];

    return (
        <footer className="relative py-8 xl:py-10 bg-white px-10 cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center xl:text-left">
                {footerList.map((section) => (
                    <div key={section.id}>
                        <h3 className="font-semibold text-lg mb-3 text-black text-center font-montserrat">{section.label}</h3>
                        <ul className="space-y-2">
                            {section.list.map((item, index) => (
                                <li key={index} className="text-black text-md text-center">
                                    {item.label && <span className="font-medium text-[#777678] font-montserrat">{item.label}</span>}
                                    {item.description && <p className="text-black mt-2 font-montserrat">{item.description}</p>}
                                    {item.button && (
                                        <button className="mt-3 px-4 py-2 bg-[#2e2e2e] text-white text-sm font-medium font-montserrat">
                                            {item.button}
                                        </button>
                                    )}
                                    {item.icons && (
                                        <div className="flex justify-center space-x-3 mt-2">
                                            {item.icons.map((icon) => icon)}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 font-montserrat">
                <p className="text-black text-md">&copy; 2025 Diamond Atelier. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
