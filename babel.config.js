module.exports = {
    env: {
        production: {
            presets: [
                ["@babel/preset-env", { modules: false }],
                "@babel/preset-react"
            ]
        },
        development: {
            presets: [
                ["@babel/preset-env", { modules: false }],
                "@babel/preset-react"
            ]
        }
    }
};