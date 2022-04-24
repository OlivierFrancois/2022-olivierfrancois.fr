module.exports = {
    mode: "jit",
    content: [
        './templates/**/*.html.twig',
        './templates/*.html.twig',
    ],
    theme: {
        extend: {
            colors : {
                primary: '#08afab',
                primarylight: '#26ccb0',
                secondary: '#92268e',
                dark: '#2a2a2a',
                lightgrey: '#bfbfbf',
                smoothwhite: '#f1f1f1',
            },
            transitionProperty: {
                fweight: "font-weight"
            },
            fontFamily: {
                acme: ["Acme"]
            }
        }
    },
    variants: {
        extend: {
            fontSize: ['hover'],
            fontWeight: ['hover'],
            ringWidth: ['hover'],
        }
    },
    plugins: []
}