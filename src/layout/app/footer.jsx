"use client";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

function Footer() {
    const footerList = [
        {
            id: 1,
            label: "Company",
            list: [
                { label: "Calibrated Layouts" },
                { label: "Credit & Memo Terms" },
                { label: "Web Mail" },
                { label: "Contact us" },
            ],
        },
        {
            id: 2,
            label: "PRODUCT",
            list: [
                { label: "Why-Lab" },
                { label: "Methods Of Growing" },
                { label: "Myths & Facts" },
                { label: "The 4Cs" },
            ],
        },
    ];

    return (
        <div className="relative py-8 lg:py-10 bg-[#adafa7] px-10 cursor-pointer">
            <div className="relative grid grid-cols-2 lg:grid-cols-4 mb-6">
                {footerList.map((section) => (
                    <div key={section.id}>
                        <h3 className="font-semibold text-lg mb-3 text-white">{section.label}</h3>
                        <ul className="space-y-2">
                            {section.list.map((item, index) => (
                                <li key={index} className="cursor-pointer text-white text-md hover:underline">
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <h3 className="font-semibold text-lg lg:text-lg text-white lg:mt-0 mt-6 mb-3">Contact Number</h3>
                    <p className="text-xl text-white">+123 12345678</p>
                    <h3 className="font-semibold text-lg lg:text-lg text-white mt-6 mb-3">Mail us at</h3>
                    <div className="flex items-center border border-white rounded-lg px-3 py-2 w-full max-w-xs">
                        <FaEnvelope className="text-white mr-2" size={24} />
                        <input
                            placeholder="Enter your email"
                            type="text"
                            className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg lg:text-lg text-white lg:mt-0 mt-6 mb-3">Get Social</h3>
                    <div className="flex items-center gap-1">
                        <FaFacebook className="text-white cursor-pointer transition" size={24} />
                        <FaInstagram className="text-white cursor-pointer transition" size={24} />
                        <span className="text-white xl:text-xl md:text-md sm:text-sm text-xs cursor-pointer hover:underline">diamondatelierinc</span>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center">
                <p className="text-white text-md">&copy; 2025 Diamond Atelier. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
