/* eslint-disable no-template-curly-in-string */
// Configuration for your app

module.exports = function() {
  return {
    boot: ["i18n", "axios", "vuelidate", "gateway", "timeago"],
    css: ["app.styl", "~flag-icon-css/css/flag-icon.min.css"],
    extras: [
      "material-icons"
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      vueRouterMode: "history",
      extendWebpack() {
      },
      chainWebpack(chain) {
        chain.module
          .rule("images")
          .use("url-loader")
          .tap(options => {
            options.name = "img/[path][name].[ext]";
            return options;
          });
      }
    },
    devServer: {
      open: true
    },
    framework: {
      components: [
        "QLayout",
        "QHeader",
        "QFooter",
        "QDrawer",
        "QPageContainer",
        "QPage",
        "QToolbar",
        "QToolbarTitle",
        "QTooltip",
        "QField",
        "QInput",
        "QRadio",
        "QOptionGroup",
        "QBtn",
        "QBtnToggle",
        "QIcon",
        "QTabs",
        "QTab",
        "QRouteTab",
        "QBtnDropdown",
        "QMenu",
        "QDialog",
        "QStep",
        "QStepper",
        "QStepperNavigation",
        "QSpinner",
        "QList",
        "QItemLabel",
        "QItem",
        "QSeparator",
        "QItemSection",
        "QSelect",
        "QToggle",
        "QPageSticky",
        "QExpansionItem",
        "QCheckbox",
        "QInnerLoading",
        "QInfiniteScroll",
        "QDate",
        "QTime",
        "QScrollArea"
      ],
      directives: ["Ripple"],
      plugins: ["Notify", "Loading", "LocalStorage", "Dialog"]
    },
    animations: [],
    pwa: {
      manifest: {
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#837EB3",
        icons: [
          {
            src: "statics/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "statics/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "statics/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "statics/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "statics/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    cordova: {
    },
    electron: {
      bundler: "builder",
      extendWebpack() {
      },
      packager: {
        extraResource: ["bin"]
      },
      builder: {
        appId: "com.lunify.electron-wallet",
        productName: "Lunify GUI Wallet",
        copyright: "Copyright © 2025 Lunify Project",
        afterSign: "build/notarize.js",
        artifactName: "lunify-gui-wallet-${version}-${os}.${ext}",
        publish: "github",

        linux: {
          target: ["AppImage", "deb"],
          icon: "src-electron/icons/icon_512x512.png",
          category: "Finance"
        },

        mac: {
          target: ["dmg", "zip"],
          icon: "src-electron/icons/icon.icns",
          category: "public.app-category.finance",
          hardenedRuntime: true,
          gatekeeperAssess: false,
          entitlements: "build/entitlements.mac.plist",
          entitlementsInherit: "build/entitlements.mac.plist"
        },

        dmg: {
          sign: false
        },

        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },

        files: ["!build/*.js", "!.env", "!dev-app-update.yml"],

        extraResources: ["bin"]
      }
    }
  };
};
