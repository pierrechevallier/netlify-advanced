const statistics_analysis = {
    "quant-quant": {
        descriptive: {
            method: {
                univariate: ["Correlation coeficient"],
                multivariate: ["Pincipal component analysis (PCA)"]
            },
            visualisation: {content: ["Scatterplot"]}
        },
        inferential: {
            hypothesis: {content: [
                "Pearson correlation",
                "Spearman correlation"
            ]},
            modelisation: {content: [
                "Linear regression",
                "Tikhonov regularization (ridge regression)",
                "Ordinary least square (OLS)",
                "ANCOVA",
                "GLM",
                "ANOVA"
            ]}
        }
    },
    "quant-binary": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "quant-non-binary": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "binary-quant": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "binary-binary": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "binary-non-binary": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "non-binary-quant": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "non-binary-binary": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
    "non-binary-non-binary": {
        descriptive: {method: {
                univariate: ["Correlation coeficient"],
                multivariate: [""]
            },
            visualisation: {content: [""]}},
        inferential: {hypothesis: {content: [""]}, modelisation: {content: [""]}}
    },
};

module.exports = statistics_analysis;