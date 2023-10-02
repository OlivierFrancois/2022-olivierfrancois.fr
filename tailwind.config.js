module.exports = {
    mode: "jit",
    content: [
        './templates/**/*.html.twig',
        './templates/*.html.twig',
    ],
    theme: {
        extend: {
            colors : {
                theme: {
                    primary: '#175773'
                }
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