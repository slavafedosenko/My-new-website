import React from "react";
import { useOverrides } from "@quarkly/components";
import NavLink from "./NavLink";
const defaultProps = {
	"quarkly-title": "NavLinkNew",
	"children": "Home",
	"color": "#ffffff"
};
const overrides = {};

const NavLinkNew = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <NavLink {...rest}>
		{children}
	</NavLink>;
};

Object.assign(NavLinkNew, { ...NavLink,
	defaultProps,
	overrides
});
export default NavLinkNew;