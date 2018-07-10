import React, { Component } from 'react';
//material-ui Components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
//core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
//styles
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";
class NavigationBar extends Component {

	render() {
		const {classes} = this.props;
		return (
			<div className = {classes.section}>
				<div id="navbar" className = {classes.navbar}>
				<Header
              brand="Mike Lee"
              color="dark"
							fixed
              rightLinks={
                <List className={classes.list}>
									<ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      About Me
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      Projects
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      Blog Posts
                    </Button>
                  </ListItem>
									<ListItem className={classes.listItem}>
										<Button
											color="transparent"
											className={
												classes.navLink + " " + classes.socialIconsButton
											}
										>
											Contact Me!
										</Button>
									</ListItem>
									<ListItem className={classes.listItem}>
                    <Button
											href="https://www.instagram.com/real.mikelee/?hl=en"
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " fab fa-instagram"
                        }
                      />
                    </Button>
                  </ListItem>
									<ListItem className={classes.listItem}>
                    <Button
											href="https://twitter.com/real_mikelee"
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " fab fa-twitter"
                        }
                      />
                    </Button>
                  </ListItem>
									<ListItem className={classes.listItem}>
                    <Button
											href="https://www.linkedin.com/in/mlee2017/"
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " fab fa-linkedin"
                        }
                      />
                    </Button>
                  </ListItem>

								</List>
              }
            />
					</div>
			</div>
		);
	}
}

export default withStyles(navbarsStyle)(NavigationBar);
