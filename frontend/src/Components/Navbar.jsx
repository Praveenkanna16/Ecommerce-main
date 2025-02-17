import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#0A0A2A]"> {/* Updated color to match background theme */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end h-16"> {/* Aligned everything to the right */}
                    {/* Hamburger Menu Button (visible on mobile) */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="hidden md:flex md:items-center md:justify-end w-full"> {/* Aligned links to the right */}
                        <ul className="flex space-x-6">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-md transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-md transition-colors duration-200"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/productpage"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-md transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-md transition-colors duration-200"
                                    }
                                >
                                    My Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/create-product"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-md transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-md transition-colors duration-200"
                                    }
                                >
                                    Add Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-md transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-md transition-colors duration-200"
                                    }
                                >
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right"> {/* Aligned mobile menu to the right */}
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-white font-semibold px-3 py-2 rounded-md text-base transition-colors duration-200"
                                        : "block text-gray-200 hover:text-white px-3 py-2 rounded-md text-base transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/my-products"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-white font-semibold px-3 py-2 rounded-md text-base transition-colors duration-200"
                                        : "block text-gray-200 hover:text-white px-3 py-2 rounded-md text-base transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                My Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create-product"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-white font-semibold px-3 py-2 rounded-md text-base transition-colors duration-200"
                                        : "block text-gray-200 hover:text-white px-3 py-2 rounded-md text-base transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Add Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-white font-semibold px-3 py-2 rounded-md text-base transition-colors duration-200"
                                        : "block text-gray-200 hover:text-white px-3 py-2 rounded-md text-base transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
