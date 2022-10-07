import React, { useEffect, useState } from 'react';
import "../App.css";
export default function PrimarySearchAppBar() {
    const [textSearch, setTextSearch] = useState()
    const [scroll, setScroll] = useState()
    useEffect(() => {
        const heightScroll = window.scrollY
        const handleScroll = () => {
            setScroll(heightScroll);
            if (heightScroll > 96) {
                document.getElementById("header").classList.add("headroom--not-top", "headroom--unpinned");
                document.getElementById("header").classList.remove("headroom--pinned", "headroom--top");
            } else {
                document.getElementById("header").classList.remove("headroom--not-top", "headroom--unpinned");
                document.getElementById("header").classList.add("headroom--pinned", "headroom--top");
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scroll])
    const onMouseOver = (id1, id2) => {
        document.getElementById(id1)?.classList.add("active");
        document.getElementById("top-header")?.classList.add("header-active");
        if (id2) {
            document.getElementById(id2).style.display = "block";
            document.getElementById(id2).style.transition = "all 0.3s ease-in";
        }
    }
    const onMouseOut = (id1, id2) => {
        document.getElementById(id1)?.classList.remove("active");
        document.getElementById("top-header")?.classList.remove("header-active");
        if (id2) {
            document.getElementById(id2).style.display = "none";
            document.getElementById(id2).style.transition = "0% 0.25s ease-out";
        }
    }
    const vi = {
        header_placeholder_search: 'Search by keyword…',
        header_search: 'Search by keyword…',
        header_giaiPhap: 'Solution Finder',
        header_tinTuc: 'News Resources',
        header_lienHe: 'Contact Us',
    }
    return (
        <div id="top-header">
            <div className="header-default header headroom headroom--not-bottom headroom--top headroom--pinned" id="header">
                <div className="utility-header">
                    <div class="search-form-wrapper">
                        <form role="search" method="get" class="search-form" action="https://www.sml.com">
                            <label for="site-search-keyword" class="search-form-label screen-reader-text">{vi.header_search}</label>
                            <input id="site-search-keyword" type="search" class="search-form-field"
                                placeholder={vi.header_placeholder_search}
                                value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />
                            <button type="submit" class="search-submit" aria-label="Search"></button>
                        </form>
                    </div>
                    <ul className="utility-menu">
                        <li className="menu-item "><a
                            href="https://www.sml.com/solution-finder/">{vi.header_giaiPhap}</a></li>
                        <li className="menu-item "><a
                            href="https://www.sml.com/news-resources/">{vi.header_tinTuc}</a></li>
                        <li className="menu-item "><a
                            href="https://www.sml.com/contact-us/">{vi.header_lienHe}</a></li>
                    </ul>
                </div>
                <div className="header-inner-container">
                    <div className="main-header-logo">
                        <a href='https://www.youtube.com/'>
                            <img src='https://www.sml.com/wp-content/uploads/2021/11/sml-group-logo.svg' alt=''>
                            </img>
                        </a>
                    </div>
                    <div className="menus">
                        <nav className="main-nav" role="navigation">
                            <div className="main-menu-wrapper">
                                <ul onMouseOver={() => onMouseOver("", "")} onMouseOut={() => onMouseOut("", "")} className="main-menu group">
                                    <li onMouseOver={() => onMouseOver("menu-1", "")} onMouseOut={() => onMouseOut("menu-1", "")} id="menu-1" className="menu-item menu-item-top-level meganav menu-item-has-children doubletap" role="menuitem" aria-haspopup="true">
                                        <a className="menu-item-link" href="https://www.sml.com/how-we-help/">Products Solutions</a>
                                        <button className="sub-menu-toggle" />
                                        <ul className="sub-menu sub-menu-level-1" role='menu' aria-hidden='true'>
                                            <li className="go-back mobile-only">Back</li>
                                            <ul className="meganav-children">
                                                <li className="menu-item menu-item-level-2 menu-item-has-children" role="menuitem"
                                                    aria-haspopup="true">
                                                    <a className="menu-item-link" href="https://www.sml.com/item-level-rfid/">
                                                        <span className="menu-icon">
                                                            <img src="https://www.sml.com/wp-content/uploads/2021/11/Icons_Dark_Item_Level_RFID.svg" alt="#" title="menu-title" />
                                                        </span>
                                                        Item-level RFID
                                                    </a>
                                                    <button className="sub-menu-toggle"></button>
                                                    <ul className="sub-menu sub-menu-level-2" role='menu' aria-hidden='true'>
                                                        <li className="menu-item menu-item-level-3 menu-item-has-children"
                                                            role="menuitem" aria-haspopup="true"><a className="menu-item-link"
                                                                href="https://www.sml.com/rfid-tags/">Inspire™ RFID Tags</a><button className="sub-menu-toggle"
                                                                ></button>
                                                            <ul className="sub-menu sub-menu-level-3" role='menu' aria-hidden='true'>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link" href="https://www.sml.com/products/rfid-inlay/">RFID Inlay</a>
                                                                </li>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link"
                                                                    href="https://www.sml.com/products/rfid-labels-and-packaging/">Inspire™ RFID Labels and
                                                                    Packaging</a></li>

                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-level-3 menu-item-has-children"
                                                            role="menuitem" aria-haspopup="true"><a className="menu-item-link"
                                                                href="https://www.sml.com/rfid-software/">Clarity<sup>®</sup> Software</a><button
                                                                    className="sub-menu-toggle"></button>
                                                            <ul className="sub-menu sub-menu-level-3" role='menu' aria-hidden='true'>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link"
                                                                    href="https://www.sml.com/item-level-rfid-factories/">Factories</a></li>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link"
                                                                    href="https://www.sml.com/item-level-rfid-distribution-centers/">Distribution
                                                                    Centers</a></li>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link" href="https://www.sml.com/item-level-rfid-stores/">Stores</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                            className="menu-item-link" href="https://www.sml.com/rfid-professional-services/">RFID
                                                            Professional Services</a></li>

                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-level-2 menu-item-has-children" role="menuitem"
                                                    aria-haspopup="true"><a className="menu-item-link"
                                                        href="https://www.sml.com/brand-identification/">
                                                        <span className="menu-icon">
                                                            <img src="https://www.sml.com/wp-content/uploads/2021/11/Icons_Dark_Brand_Identification.svg" alt="#" title="menu-title" />
                                                        </span>
                                                        Brand Identification
                                                    </a>
                                                    <button className="sub-menu-toggle"></button>
                                                    <ul className="sub-menu sub-menu-level-2" role='menu' aria-hidden='true'>
                                                        <li className="menu-item menu-item-level-3 menu-item-has-children"
                                                            role="menuitem" aria-haspopup="true"><a className="menu-item-link"
                                                                href="https://www.sml.com/labels-accessories/">Inspire™ Labels Accessories</a><button
                                                                    className="sub-menu-toggle"></button>
                                                            <ul className="sub-menu sub-menu-level-3" role='menu' aria-hidden='true'>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link" href="https://www.sml.com/products/care-labels/">Care Labels</a>
                                                                </li>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link" href="https://www.sml.com/products/dynamic-qr-labels/">Dynamic QR
                                                                    Labels</a></li>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link"
                                                                    href="https://www.sml.com/products/hangtags-price-tickets/">Hangtags Price
                                                                    Tickets</a></li>
                                                                <li className="anchor-tag menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link"
                                                                    href="https://www.sml.com/solution-finder/#labels-accessories">View All</a></li>

                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-level-3 menu-item-has-children"
                                                            role="menuitem" aria-haspopup="true"><a className="menu-item-link"
                                                                href="https://www.sml.com/packaging/">Inspire™ Packaging</a><button className="sub-menu-toggle"
                                                                ></button>
                                                            <ul className="sub-menu sub-menu-level-3" role='menu' aria-hidden='true'>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link" href="https://www.sml.com/products/poly-bags/">Poly Bags</a></li>
                                                                <li className="menu-item menu-item-level-4" role="menuitem"><a
                                                                    className="menu-item-link"
                                                                    href="https://www.sml.com/products/structural-packaging/">Structural Packaging</a></li>

                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-level-2 menu-item-has-children" role="menuitem" aria-haspopup="true">
                                                    <a className="menu-item-link" href="https://www.sml.com/printing-encoding/">
                                                        <span className="menu-icon">
                                                            <img src="https://www.sml.com/wp-content/uploads/2021/11/Icons_Dark_Icon_Printing_Encoding.svg" alt="#" title="menu-title" />
                                                        </span>
                                                        Printing Encoding
                                                    </a>
                                                    <button className="sub-menu-toggle"></button>
                                                    <ul className="sub-menu sub-menu-level-2" role='menu' aria-hidden='true'>
                                                        <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                            className="menu-item-link" href="https://www.sml.com/in-plant-printing/">In-Plant Printing</a>
                                                        </li>
                                                        <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                            className="menu-item-link" href="https://www.sml.com/rfid-handheld-encoding/">RFID Handheld
                                                            Encoding</a></li>
                                                        <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                            className="menu-item-link" href="https://www.sml.com/service-bureau/">Service Bureau</a></li>

                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-level-2" role="menuitem">
                                                    <a className="menu-item-link" href="https://www.sml.com/e-platform-data-management-system/">
                                                        <span className="menu-icon">
                                                            <img
                                                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                                                                alt="#" title="menu-title"
                                                                data-lazy-src="https://www.sml.com/wp-content/uploads/2021/11/Icons_Dark_Icon_E_Platform.svg" />
                                                        </span>
                                                        E-Platform Data Management System
                                                    </a>
                                                </li>
                                            </ul>
                                            <li className="menu-item menu-item-level-2 main-menu-cta menu-item-has-children doubletap">
                                                <div data-bg="https://www.sml.com/wp-content/uploads/2021/10/eop-cta.svg"
                                                    className="menu-cta rocket-lazyload" style={{ backgroundColor: '#22292e' }}>
                                                    <div className="menu-cta-content">
                                                        <div className="menu-cta-title">Discover New Ways to Connect Products to People.</div>
                                                        <div className="wp-block-buttons">
                                                            <div className="wp-block-button is-style-cta-primary-small"><a
                                                                href="https://www.sml.com/request-information/" target=""
                                                                className="wp-block-button__link">Talk Transformation </a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li onMouseOver={() => onMouseOver("menu-2", "menuitem-2")} onMouseOut={() => onMouseOut("menu-2", "menuitem-2")} id="menu-2" className="menu-item menu-item-top-level menu-item-has-children doubletap" role="menuitem"
                                        aria-haspopup="true"><a className="menu-item-link"
                                            href="https://www.sml.com/industries/">Industries</a><button className="sub-menu-toggle"
                                            ></button>
                                        <ul id="menuitem-2" className="sub-menu sub-menu-level-1" role='menu' aria-hidden='true'>
                                            <li className="go-back mobile-only">Back</li>
                                            <li className="menu-item menu-item-level-2 menu-item-has-children" role="menuitem"
                                                aria-haspopup="true"><a className="menu-item-link"
                                                    href="https://www.sml.com/industries/retail/">Retail</a><button className="sub-menu-toggle"
                                                    ></button>
                                                <ul className="sub-menu sub-menu-level-2" role='menu' aria-hidden='true'>
                                                    <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                        className="menu-item-link" href="https://www.sml.com/industries/apparel-footwear/">Apparel &#038;
                                                        Footwear</a></li>
                                                    <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                        className="menu-item-link" href="https://www.sml.com/industries/home-goods/">Home Goods</a></li>
                                                    <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                        className="menu-item-link" href="https://www.sml.com/industries/electronIcs/">ElectronIcs</a></li>
                                                    <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                        className="menu-item-link" href="https://www.sml.com/industries/eyewear-accessories/">Eyewear
                                                        Accessories</a></li>
                                                    <li className="menu-item menu-item-level-3" role="menuitem"><a
                                                        className="menu-item-link" href="https://www.sml.com/industries/fragrance-cosmetics/">Fragrance
                                                        Cosmetics</a></li>

                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/industries/food/">Food</a></li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/industries/pharmaceutical/">Pharmaceutical</a></li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/industries/aviation/">Aviation</a></li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/industries/agriculture/">Agriculture</a></li>

                                        </ul>
                                    </li>
                                    <li onMouseOver={() => onMouseOver("menu-3", "")} onMouseOut={() => onMouseOut("menu-3", "")} id="menu-3" className="menu-item menu-item-top-level doubletap" role="menuitem"><a className="menu-item-link"
                                        href="https://www.sml.com/sustainability/">Sustainability</a></li>
                                    <li onMouseOver={() => onMouseOver("menu-4", "menuitem-4")} onMouseOut={() => onMouseOut("menu-4", "menuitem-4")} id="menu-4" className="menu-item menu-item-top-level menu-item-has-children doubletap" role="menuitem"
                                        aria-haspopup="true"><a className="menu-item-link" href="https://www.sml.com/about-us/">About</a><button
                                            className="sub-menu-toggle"></button>
                                        <ul id="menuitem-4" className="sub-menu sub-menu-level-1" role='menu' aria-hidden='true'>
                                            <li className="go-back mobile-only">Back</li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/about-us/leadership/">Leadership</a></li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/locations">Locations</a></li>
                                            <li className="menu-item menu-item-level-2" role="menuitem"><a className="menu-item-link"
                                                href="https://www.sml.com/about-us/careers/">Careers</a></li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <ul className="secondary-menu">
                            <li className="menu-item "><a
                                href="https://www.sml.com/request-information/">Request Info</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}