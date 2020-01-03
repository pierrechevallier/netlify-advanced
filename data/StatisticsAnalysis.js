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
                univariate: ["Class based: mean, median, standard deviation"],
                multivariate: []
            },
            visualisation: {content: ["Box-plot"]}},
        inferential: {
            hypothesis: {content: ["Student test"]},
            modelisation: {content: ["General linear model (ANOVA, ANCOVA)"]}}
    },
    "quant-non-binary": {
        descriptive: {method: {
                univariate: ["Class based: mean, median, standard deviation"],
                multivariate: []
            },
            visualisation: {content: ["Box-plot"]}},
        inferential: {
            hypothesis: {content: ["ANOVA"]},
            modelisation: {content: ["General linear model (ANOVA, ANCOVA)"]}
        }
    },
    "binary-quant": {
        descriptive: {method: {
                univariate: ["Class based: mean, median, standard deviation"],
                multivariate: []
            },
            visualisation: {content: ["Box-plot"]}},
        inferential: {
            hypothesis: {content: ["Student test"]},
            modelisation: {content: [
                "Logistic regression",
                "Decision trees",
                "Linear discriminant analysis",
                "Neural network",
                "Genetic algorithms"
            ]}
        }
    },
    "binary-binary": {
        descriptive: {method: {
                univariate: ["Contingency table (cross tabulation)", "Frequency table"],
                multivariate: []
            },
            visualisation: {content: ["Histogram", "Mosaic plot"]}},
        inferential: {
            hypothesis: {content: ["Pearson's Chi-square test"]},
            modelisation: {content: [
                "Logistic regression",
                "Decision trees",
                "Linear discriminant analysis",
                "Neural network",
                "Genetic algorithms",
                "Probit model"
            ]}}
    },
    "binary-non-binary": {
        descriptive: {method: {
            univariate: ["Contingency table (cross tabulation)", "Frequency table"],
            multivariate: []
        },
        visualisation: {content: ["Histogram", "Mosaic plot"]}},
    inferential: {
        hypothesis: {content: ["Pearson's Chi-square test"]},
        modelisation: {content: [
            "Logistic regression",
            "Decision trees",
            "Linear discriminant analysis",
            "Neural network",
            "Genetic algorithms",
            "Probit model"
        ]}}
    },
    "non-binary-quant": {
        descriptive: {method: {
                univariate: ["Class based: mean, median, standard deviation"],
                multivariate: []
            },
            visualisation: {content: ["Box-plot"]}},
        inferential: {
            hypothesis: {content: ["ANOVA"]},
            modelisation: {content: [
                "Multinomial logistic regression",
                "Ordered logistic regression"
            ]}
        }
    },
    "non-binary-binary": {
        descriptive: {method: {
                univariate: ["Contingency table (cross tabulation)", "Frequency table"],
                multivariate: []
            },
            visualisation: {content: ["Histogram", "Mosaic plot"]}
        },
        inferential: {
            hypothesis: {content: ["Pearson's Chi-square test"]},
            modelisation: {content: [
                "Multinomial logistic regression",
                "Ordered logistic regression"
            ]}
        }
    },
    "non-binary-non-binary": {
        descriptive: {method: {
                univariate: ["Contingency table (cross tabulation)", "Frequency table"],
                multivariate: []
            },
            visualisation: {content: ["Histogram", "Mosaic plot"]}
        },
        inferential: {
            hypothesis: {content: ["Pearson's Chi-square test"]},
            modelisation: {content: [
                "Multinomial logistic regression",
                "Ordered logistic regression"
            ]}
        }
    },
};

module.exports = statistics_analysis;