import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "./Navbar";

storiesOf("Navbar", module)
    .add("Default", () => <Navbar
        type="default"
        label="default"
    />)
    .add("Primary", () => <Navbar
        type="primary"
        label="primary"
    />)