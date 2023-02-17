import React from "react";
import styled from "styled-components";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./StyledSwtich";

export default function Switch() {
    return (
        <div>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </div>
    );
};

