import React from "react";
import theme from "theme";
import { Theme, Image, Box, Text, Strong, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, SocialMedia, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box quarkly-title="wrap">
			<Box quarkly-title="nav" position="relative" lg-padding="0px 24px 0px 24px">
				<Box
					quarkly-title="container"
					max-width="1100px"
					margin="0px auto 0px auto"
					padding="15px 0px 15px 0px"
					display="flex"
					align-items="stretch"
					flex-direction="row"
					justify-content="space-between"
				>
					<Image width="64px" height="64px" src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" object-fit="cover" />
					<Box display="flex" align-items="center" justify-content="center">
						<Components.NavLink>
							Home
						</Components.NavLink>
						<Components.NavLink>
							Page
						</Components.NavLink>
						<Components.NavLink>
							About
						</Components.NavLink>
						<Components.NavLink>
							Blog
						</Components.NavLink>
					</Box>
				</Box>
			</Box>
			<Box as="main" quarkly-title="main" padding="0px 0px 50px 0px">
				<Section padding="100px 0 100px 0" lg-padding="100px 0 100px 0">
					<Override slot="SectionContent" max-width="1100px" />
					<Stack>
						{"    "}
						<StackItem width="50%" display="flex">
							<Box>
								<Text font="--headline1">
									Hi, I use Quarkly!
								</Text>
								<Text font="normal 300 20px/2 --fontFamily-sans" letter-spacing="1px">
									Let's test it hard! We'll se what's possible with this awesome tool! And let's just add a little bit more text here...
								</Text>
								<Button
									background="#ff9671"
									color="#000000"
									hover-background="#ffc7b5"
									transition="background 0.3s ease 0s"
									padding="12px 24px 12px 24px"
									border-radius="4px"
									disabled={false}
								>
									<Strong>
										Click me now
									</Strong>
								</Button>
								<SocialMedia twitter="https://twitter.com/quarklyapp" telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ" margin="30px 0px 0px 0px" justify-content="start">
									<Override slot="link" border-color="#000000" background="--color-dark" />
									<Override slot="icon" color="--lightPink" />
								</SocialMedia>
							</Box>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem width="50%" display="flex">
							<Image width="100%" height="auto" src="https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000" transition="all 2s --transitionTimingFunction-easeOut 0s" />
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Section>
			</Box>
		</Box>
	</Theme>;
});