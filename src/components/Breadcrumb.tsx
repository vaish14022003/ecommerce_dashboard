

import React from 'react';
import { Link } from 'react-router-dom';





//Defines the shape of an object:--
interface BreadcrumbItem {
    label: string;
    path?: string; // path is optional for the last item
}

//Defines the shape of props:--
interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <div className="max-w-6xl mx-auto px-6 pt-4 text-sm text-[#1A4D2E]">
            <nav className="flex gap-2 items-center">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <React.Fragment key={index}>
                            {isLast ? (
                                // Last item: Just a span, not a link
                                <span className="font-medium text-gray-500 truncate max-w-[150px]">
                                    {item.label}
                                </span>
                            ) : (
                                // Other items: A clickable link
                                <Link
                                    to={item.path || '#'}
                                    className="hover:underline hover:text-[#FF9F29]"
                                >
                                    {item.label}
                                </Link>
                            )}
                            {/* Add a separator if it's not the last item */}
                            {!isLast && <span>/</span>}
                        </React.Fragment>
                    );
                })}
            </nav>
        </div>
    );
};

export default Breadcrumb;