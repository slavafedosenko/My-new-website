import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0px 10px 0px 10px",
	"children": "About",
	"padding": "5px",
	"quarkly-title": "NavLinkYo",
	"background": "rgba(0, 0, 0, 0)",
	"color": "#000000",
	"font": "600 18px sans-serif",
	"text-decoration-line": "initial",
	"href": "google.com"
};
const overrides = {};

const NavLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(NavLink, { ...Link,
	defaultProps,
	overrides
});
export default NavLink;