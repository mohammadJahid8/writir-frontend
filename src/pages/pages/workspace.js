import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import Brand from "../../components/brands/Brand.jsx";
import brandweld from "../../assets/brandweld.png";
import computirIcon from "../../assets/computir-icon.png";
import SocialMediaButton from "../../components/buttons/SocialMediaButton.jsx";

function PagesWorkSpace() {
    const context = useContext(AppSettings);
    // eslint-disable-next-line
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        context.setAppHeaderNone(true);
        context.setAppSidebarNone(true);
        context.setAppContentClass("p-0");
        context.setAppContentFullHeight(true);
        context.setAppFooter(false);
        return function cleanUp() {
            context.setAppHeaderNone(false);
            context.setAppSidebarNone(false);
            context.setAppContentClass("");
            context.setAppContentFullHeight(false);
        };

        // eslint-disable-next-line
    }, []);


    if (redirect) {
        return <Navigate to="/" />;
    }
    return (
        <div className="register gap-5">
            <div className="register-content w-50">
                <form>
                    <Brand />
                    <h1 className="fs-4 mt-2">Switch Workspace</h1>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                        Easy to swap, switch and rotate workspaces. Choose below.
                    </p>
                    <SocialMediaButton
                        label="Brandweld"
                        imageSrc={brandweld}
                    />
                    <SocialMediaButton
                        label="Computir"
                        imageSrc={computirIcon}
                    />
                    <hr />

                    <div className="text-muted text-center" style={{ fontSize: "12px" }}>
                        Want to add a new Workspace?? <Link style={{ color: "#7434DB" }} to="/workspace/create-workspace">Create one here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PagesWorkSpace;
