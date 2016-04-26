import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "radial-gradient(#E6DADA, #274046)"
    },
    "profile": {
        "background": "radial-gradient(#e6dada, #fff)"
    },
    "work": {
        "background": "radial-gradient(#e6dada, #fff)"
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