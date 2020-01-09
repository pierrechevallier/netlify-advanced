import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

/**
 * #UserInfo
 * Functionnal component to display the informations about the user
 */
const UserInfo = (props) => {
	const { userTwitter } = props.config;
	const { expanded } = props;
	return <Follow username={userTwitter} options={{ count: expanded ? true : "none" }}/>
};

export default UserInfo;
