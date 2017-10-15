module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/prefer-stateless-function": 0,  
        "react/jsx-filename-extension": 0,      
    },
    "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
        "mocha":   true
    },   
};