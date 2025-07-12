import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#222] text-gray-300 text-sm px-6 py-8 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border-b border-gray-700 pb-6">
                {/* About */}
                <div>
                    <h3 className="font-semibold mb-2">ABOUT</h3>
                    <ul className="space-y-1">
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>

                {/* Group Companies */}
                <div>
                    <h3 className="font-semibold mb-2">GROUP COMPANIES</h3>
                    <ul className="space-y-1">
                        <li>Myntra</li>
                        <li>Cleartrip</li>
                        <li>Shopsy</li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="font-semibold mb-2">HELP</h3>
                    <ul className="space-y-1">
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancellation & Returns</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Consumer Policy */}
                <div>
                    <h3 className="font-semibold mb-2">CONSUMER POLICY</h3>
                    <ul className="space-y-1">
                        <li>Cancellation & Returns</li>
                        <li>Terms Of Use</li>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                        <li>EPR Compliance</li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="font-semibold mb-2">Mail Us:</h3>
                    <p className="text-xs leading-relaxed">
                        PrimePick Internet Pvt. Ltd., Alpha Tower, Sector 63, Noida, Uttar Pradesh 201301, India
                    </p>
                    <h3 className="font-semibold mt-4 mb-1">Social:</h3>
                    <div className="flex space-x-3 text-xl">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-x-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <div className="flex flex-wrap items-center gap-4">
                    <p>Become a Seller</p>
                    <p>Advertise</p>
                    <p>Gift Cards</p>
                    <p>Help Center</p>
                    <p>© 2025 PrimePick.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src="https://img.icons8.com/color/36/000000/visa.png" alt="Visa" />
                    <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="Mastercard" />
                    <img src="https://img.icons8.com/color/36/000000/paypal.png" alt="Paypal" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
