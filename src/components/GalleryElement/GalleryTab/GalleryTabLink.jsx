import React, { useState } from "react";
import { GALLERY_MENU_TAB_BUTTON_NAMES } from "../../../constants/magic-string";
import Activities from "./Activities";
import Pools from "./Pools";
import Restaurants from "./Restaurants";
import Reviews from "./Reviews";
import Spaa from "./Spaa";
import Space from "./Space";

const GalleryTabLink = () => {
    const [actionTab, setActionTab] = useState(
        GALLERY_MENU_TAB_BUTTON_NAMES.SPACES
      );

    const tabChangeHandler = (tabName) => {
        console.log(tabName)
        setActionTab(tabName);
    };
      
      
    return (
        <>
            <div id="niiceeTab">
                 <nav className="niiceeTabBtn">
                    <button
                        id="defaultOpen"
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPACES && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.SPACES
                        )}
                    >
                        spaces
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES
                        )}
                    >
                        activities
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.POOLS && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.POOLS
                        )}
                    >
                        pools
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS
                        )}
                    >
                        restaurants
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPA && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.SPA
                        )}
                    >
                        spaa
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.REVIEWS && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.REVIEWS
                        )}
                    >
                        Reviews
                    </button>

                 </nav>

                <div className="niiceeTabContent">
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPACES && <Space />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES && <Activities />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.POOLS && <Pools />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS && <Restaurants />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPA && <Spaa />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.REVIEWS && <Reviews />}
                </div>
            </div>    
        </>
    );
};

export default GalleryTabLink;