import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "linear-gradient(#485563 , #29323c)"
    },
    "profile": {
        "background": "rgba(255,255,255,0.79)",
        "boxShadow": "0 0 12px rgba(0,0,0,0.08)"
    },
    "work": {
        "background": "rgba(255,255,255,0.79)",
        "boxShadow": "0 0 12px rgba(0,0,0,0.08)"
    },
    "profileImage": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "role": {
        "color": "#777b79"
    },
    "fa": {
        "marginRight": 5,
        "top": 4
    },
    "li": {
        "listStyle": "none"
    },
    "skills-list": {
        "fontSize": 18
    },
    "skills": {
        "marginBottom": 30
    },
    "github": {
        "width": "100%"
    },
    "reponame": {
        "fontWeight": "bold"
    },
    "tags": {
        "marginRight": "1%"
    },
    "a": {
        "textDecoration": "none"
    },
    "a:hover": {
        "textDecoration": "none"
    },
    "p": {
        "fontSize": 15
    },
    "fa-github": {
        "color": "black"
    },
    "fa-linkedin-square": {
        "color": "black"
    }
});