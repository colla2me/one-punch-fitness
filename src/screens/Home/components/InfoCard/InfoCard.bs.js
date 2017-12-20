// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Assets = require("Assets");
var Colors = require("../../../../config/Colors.bs.js");
var PopupMenu = require("./PopupMenu/PopupMenu.bs.js");
var Js_boolean = require("bs-platform/lib/js/js_boolean.js");
var NPMBindings = require("../../../../config/NPMBindings.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Title = require("./styled/Title");
var OverflowButton = require("./OverflowButton/OverflowButton.bs.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var Container = require("./styled/Container");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var CoverImage = require("./styled/CoverImage");
var Description = require("./styled/Description");
var ImageGradient = require("./styled/ImageGradient");
var ButtonTouchable = require("./styled/ButtonTouchable");
var TouchableOpacity$BsReactNative = require("bs-react-native/src/components/touchableOpacity.js");

function make(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Description.default, {}, children);
}

var Description$1 = /* module */ [/* make */ make$1];

function make$2(source, resizeMode, children) {
  return ReasonReact.wrapJsForReason(
    CoverImage.default,
    {
      source: Js_null_undefined.from_opt(source),
      resizeMode: Js_null_undefined.from_opt(resizeMode),
    },
    children
  );
}

var CoverImage$1 = /* module */ [/* make */ make$2];

function make$3(colors, children) {
  return ReasonReact.wrapJsForReason(
    ImageGradient.default,
    {
      colors: colors,
    },
    children
  );
}

var ImageGradient$1 = /* module */ [/* make */ make$3];

function make$4(children) {
  return ReasonReact.wrapJsForReason(Title.default, {}, children);
}

var Title$1 = /* module */ [/* make */ make$4];

function make$5(onPress, activeOpacity, disabled, children) {
  return ReasonReact.wrapJsForReason(
    ButtonTouchable.default,
    {
      onPress: onPress,
      activeOpacity: activeOpacity,
      disabled: Js_boolean.to_js_boolean(disabled),
    },
    children
  );
}

var ButtonTouchable$1 = /* module */ [/* make */ make$5];

var Styled = /* module */ [
  /* Container */ Container$1,
  /* Description */ Description$1,
  /* CoverImage */ CoverImage$1,
  /* ImageGradient */ ImageGradient$1,
  /* Title */ Title$1,
  /* ButtonTouchable */ ButtonTouchable$1,
];

function setPopupAnimatedViewRef(theRef, param) {
  param[/* state */ 2][/* popupAnimatedViewRef */ 1][0] =
    theRef == null ? /* None */ 0 : [theRef];
  return /* () */ 0;
}

var component = ReasonReact.reducerComponent("InfoCard");

function make$6(navigation, title, description, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function(self) {
    var match = self[/* state */ 2][/* menuOpen */ 0];
    var match$1 = self[/* state */ 2][/* menuOpen */ 0];
    var match$2 = self[/* state */ 2][/* menuOpen */ 0];
    var match$3 = self[/* state */ 2][/* menuOpen */ 0];
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      TouchableOpacity$BsReactNative.make(
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* Some */ [
          match !== 0
            ? function() {
                var match =
                  self[/* state */ 2][/* popupAnimatedViewRef */ 1][0];
                if (match) {
                  var r = match[0];
                  r.slideOutRight(80).then(function() {
                    return Promise.resolve(
                      (Curry._2(
                        self[/* reduce */ 1],
                        function() {
                          return /* ToggleMenu */ 0;
                        },
                        /* () */ 0
                      ),
                      r.slideInDown(150))
                    );
                  });
                  return /* () */ 0;
                } else {
                  return /* () */ 0;
                }
              }
            : function() {
                return navigation.navigate("Info", {});
              },
        ],
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* Some */ [match$1 !== 0 ? 1 : 0.9],
        /* None */ 0,
        /* None */ 0
      )(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  View$BsReactNative.make(
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0
                  )(
                    /* array */ [
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        make$2(
                          /* Some */ [Assets.Illustrations.theSecretSauce],
                          /* Some */ ["cover"],
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        make$3(
                          /* array */ ["rgba(0,0,0,0)", Colors.spotiBlack],
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        make$5(
                          function() {
                            var match =
                              self[/* state */ 2][/* popupAnimatedViewRef */ 1][0];
                            if (match) {
                              var r = match[0];
                              r.slideOutUp(150).then(function() {
                                return Promise.resolve(
                                  (Curry._2(
                                    self[/* reduce */ 1],
                                    function() {
                                      return /* ToggleMenu */ 0;
                                    },
                                    /* () */ 0
                                  ),
                                  r.slideInRight(150))
                                );
                              });
                              return /* () */ 0;
                            } else {
                              return /* () */ 0;
                            }
                          },
                          match$2 !== 0 ? 1 : 0.8,
                          self[/* state */ 2][/* menuOpen */ 0],
                          /* array */ [
                            ReasonReact.element(
                              /* None */ 0,
                              /* Some */ [
                                Curry._1(
                                  self[/* handle */ 0],
                                  setPopupAnimatedViewRef
                                ),
                              ],
                              Curry._2(
                                NPMBindings
                                  .RNAnimatable[/* View */ 0][/* make */ 0],
                                "ease-out",
                                /* array */ [
                                  match$3 !== 0
                                    ? ReasonReact.element(
                                        /* None */ 0,
                                        /* None */ 0,
                                        PopupMenu.make(
                                          /* array */ [
                                            {
                                              title: "archive card",
                                              onPress: function() {
                                                console.log(
                                                  "deleting this infocard"
                                                );
                                                return /* () */ 0;
                                              },
                                            },
                                          ],
                                          /* array */ []
                                        )
                                      )
                                    : ReasonReact.element(
                                        /* None */ 0,
                                        /* None */ 0,
                                        OverflowButton.make(/* array */ [])
                                      ),
                                ]
                              )
                            ),
                          ]
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        make$4(/* array */ [title])
                      ),
                    ]
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$1(/* array */ [description])
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [
      /* menuOpen : false */ 0,
      /* popupAnimatedViewRef */ [/* None */ 0],
    ];
  };
  newrecord[/* reducer */ 12] = function(_, state) {
    return /* Update */ Block.__(0, [
      /* record */ [
        /* menuOpen */ 1 - state[/* menuOpen */ 0],
        /* popupAnimatedViewRef */ state[/* popupAnimatedViewRef */ 1],
      ],
    ]);
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make$6(
    jsProps.navigation,
    jsProps.title,
    jsProps.description,
    /* array */ []
  );
});

exports.Styled = Styled;
exports.setPopupAnimatedViewRef = setPopupAnimatedViewRef;
exports.component = component;
exports.make = make$6;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
