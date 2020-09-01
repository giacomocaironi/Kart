/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import * as CopyPlugin from "copy-webpack-plugin"
import IgnoreEmitPlugin from "ignore-emit-webpack-plugin"
import ImageminPlugin from "imagemin-webpack-plugin"
import MiniCssExtractPlugin = require("mini-css-extract-plugin")
import * as path from "path"
import { minify as minjs } from "terser"
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin"
import { Configuration } from "webpack"
import * as AssetsManifestPlugin from "webpack-assets-manifest"

/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */

/**
 * Webpack base configuration
 *
 * @param args - Command-line arguments
 *
 * @return Webpack configuration
 */
function config(args: Configuration): Configuration {
  const assets = {}
  return {
    mode: args.mode,

    /* Loaders */
    module: {
      rules: [

        /* TypeScript */
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                experimentalWatchApi: true,
                transpileOnly: true,
                compilerOptions: {
                  importHelpers: true,
                  module: "esnext"
                }
              }
            }
          ],
          exclude: /\/node_modules\//
        },

        /* SASS stylesheets */
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  require("autoprefixer")(),
                  require("postcss-inline-svg")({
                    paths: [
                      path.resolve(__dirname, "node_modules")
                    ],
                    encode: false
                  }),
                  require("postcss-svgo")({
                    plugins: [
                      { removeDimensions: true },
                      { removeViewBox: false }
                    ],
                    encode: false
                  })
                ],
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                sassOptions: {
                  includePaths: [
                    "node_modules/modularscale-sass/stylesheets",
                    "node_modules/material-design-color",
                    "node_modules/material-shadows"
                  ]
                },
                sourceMap: true
              }
            }
          ]
        },

        /* Search */
        {
          test: require.resolve("lunr"),
          loader: "expose-loader",
          options: {
            exposes: ["lunr"]
          }
        }
      ]
    },

    /* Module resolver */
    resolve: {
      modules: [
        __dirname,
        path.resolve(__dirname, "node_modules")
      ],
      extensions: [".ts", ".tsx", ".js", ".json"],
      plugins: [
        new TsconfigPathsPlugin()
      ]
    },

    /* Plugins */
    plugins: [
      new IgnoreEmitPlugin(/\/templates\/.*?\.js/),
      new AssetsManifestPlugin({
        output: "static/manifest.json",
        assets
      })
    ],

    /* Source maps */
    devtool: args.mode === "production" ? "source-map" : "inline-source-map",

    /* Filter false positives and omit verbosity */
    stats: {
      entrypoints: false,
      excludeAssets: [
        /\/(images|lunr)\//,
        /\.(html|py|yml)$/
      ],
      warningsFilter: [
        /export '.[^']+' was not found in/
      ]
    }
  }
}

/* ----------------------------------------------------------------------------
 * Configuration
 * ------------------------------------------------------------------------- */

/**
 * Webpack configuration
 *
 * @param env - Webpack environment arguments
 * @param args - Command-line arguments
 *
 * @return Webpack configurations
 */
export default (_env: never, args: Configuration): Configuration[] => {
  const hash = args.mode === "production" ? ".[chunkhash].min" : ""
  const base = config(args)
  return [

    /* Application */
    {
      ...base,
      entry: {
        "static/javascripts/bundle":    "static/javascripts",
        "static/stylesheets/main":      "static/stylesheets/main.scss",
        "static/stylesheets/overrides": "static/stylesheets/overrides.scss",
        "static/stylesheets/palette":   "static/stylesheets/palette.scss"
      },
      output: {
        path: path.resolve(__dirname, "_site"),
        filename: `[name]${hash}.js`,
        hashDigestLength: 8,
        libraryTarget: "window"
      },

      /* Plugins */
      plugins: [
        ...base.plugins,

        /* Stylesheets */
        new MiniCssExtractPlugin({
          filename: `[name]${hash}.css`
        }),

        /* Improve performance by skipping dependencies in watch mode */
        ...args.watch ? [] : [
          // /* Search stemmers and segmenters */
          new CopyPlugin({
            patterns: [
              { to: "static/javascripts/lunr", from: "min/*.js" },
              {
                to: "static/javascripts/lunr/tinyseg.min.js",
                from: "tinyseg.js",
                transform: (content: Buffer) => minjs(`${content}`).code!
              }
            ].map(pattern => ({
              context: "node_modules/lunr-languages",
              ...pattern
            }))
          }),
        ],

        /* Minify SVGs */
        new ImageminPlugin({
          svgo: {
            plugins: [
              { removeDimensions: true },
              { removeViewBox: false }
            ]
          }
        })
      ],

      /* Optimizations */
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "static/javascripts/vendor",
              chunks: "all"
            }
          }
        }
      }
    },

    /* Search worker */
    {
      ...base,
      entry: {
        "static/javascripts/worker/search":
          "static/javascripts/integrations/search/worker/main"
      },
      output: {
        path: path.resolve(__dirname, "_site"),
        filename: `[name]${hash}.js`,
        hashDigestLength: 8,
        libraryTarget: "var"
      }
    }
  ]
}
