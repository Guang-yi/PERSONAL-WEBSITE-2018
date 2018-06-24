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
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-instagram"
                        }
                      />{" "}
                      Instagram
                    </Button>
                  </ListItem>
									<ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-twitter"
                        }
                      />{" "}
                      Twitter
                    </Button>
                  </ListItem>
									<ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-linkedin"
                        }
                      />{" "}
                      LinkedIn
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
