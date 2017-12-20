// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Assets = require("Assets");
var Colors = require("../../../../config/Colors.bs.js");
var Routines = require("../../../../config/Routines.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var RoutineFacet = require("./RoutineFacet/RoutineFacet.bs.js");
var Header = require("./styled/Header");
var IntensityButton = require("./IntensityButton/IntensityButton.bs.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var Container = require("./styled/Container");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var CoverImage = require("./styled/CoverImage");
var LevelLabel = require("./styled/LevelLabel");
var ImageGradient = require("./styled/ImageGradient");
var WorkoutCardStartButton = require("./StartButton/WorkoutCardStartButton.bs.js");
var RoutineContainer = require("./styled/RoutineContainer");
var AsyncStorage$BsReactNative = require("bs-react-native/src/asyncStorage.js");

function make(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Header.default, {}, children);
}

var Header$1 = /* module */ [/* make */ make$1];

function make$2(children) {
  return ReasonReact.wrapJsForReason(RoutineContainer.default, {}, children);
}

var RoutineContainer$1 = /* module */ [/* make */ make$2];

function make$3(children) {
  return ReasonReact.wrapJsForReason(LevelLabel.default, {}, children);
}

var LevelLabel$1 = /* module */ [/* make */ make$3];

function make$4(source, resizeMode, children) {
  return ReasonReact.wrapJsForReason(
    CoverImage.default,
    {
      source: Js_null_undefined.from_opt(source),
      resizeMode: Js_null_undefined.from_opt(resizeMode),
    },
    children
  );
}

var CoverImage$1 = /* module */ [/* make */ make$4];

function make$5(colors, children) {
  return ReasonReact.wrapJsForReason(
    ImageGradient.default,
    {
      colors: colors,
    },
    children
  );
}

var ImageGradient$1 = /* module */ [/* make */ make$5];

var Styled = /* module */ [
  /* Container */ Container$1,
  /* Header */ Header$1,
  /* RoutineContainer */ RoutineContainer$1,
  /* LevelLabel */ LevelLabel$1,
  /* CoverImage */ CoverImage$1,
  /* ImageGradient */ ImageGradient$1,
];

function persist(state) {
  var stateAsJson = JSON.stringify(
    Json_encode.object_(
      /* :: */ [/* tuple */ ["level", state[/* level */ 0]], /* [] */ 0]
    )
  );
  AsyncStorage$BsReactNative.setItem(
    "workout",
    stateAsJson,
    /* Some */ [
      function(e) {
        if (e) {
          console.log(e[0]);
          return /* () */ 0;
        } else {
          return /* () */ 0;
        }
      },
    ],
    /* () */ 0
  );
  return /* () */ 0;
}

function hydrate(self) {
  AsyncStorage$BsReactNative.getItem("workout", /* None */ 0, /* () */ 0).then(
    function(json) {
      var tmp;
      if (json) {
        var parsedJson = JSON.parse(json[0]);
        var state = /* record */ [
          /* level */ Json_decode.field("level", Json_decode.$$int, parsedJson),
        ];
        Curry._2(
          self[/* reduce */ 1],
          function() {
            return /* Rehydrate */ [state];
          },
          /* () */ 0
        );
        tmp = /* () */ 0;
      } else {
        tmp = /* () */ 0;
      }
      return Promise.resolve(tmp);
    }
  );
  return /* NoUpdate */ 0;
}

var component = ReasonReact.reducerComponent("WorkoutCard");

function make$6(navigation, _) {
  var newrecord = component.slice();
  newrecord[/* didMount */ 4] = hydrate;
  newrecord[/* didUpdate */ 5] = function(param) {
    return persist(param[/* newSelf */ 1][/* state */ 2]);
  };
  newrecord[/* render */ 9] = function(self) {
    var match = self[/* state */ 2][/* level */ 0];
    var tmp;
    if (match > 4 || match < 0) {
      tmp = Assets.Illustrations.workoutLevel1;
    } else {
      switch (match) {
        case 0:
          tmp = Assets.Illustrations.workoutLevel1;
          break;
        case 1:
          tmp = Assets.Illustrations.workoutLevel2;
          break;
        case 2:
          tmp = Assets.Illustrations.workoutLevel3;
          break;
        case 3:
          tmp = Assets.Illustrations.workoutLevel4;
          break;
        case 4:
          tmp = Assets.Illustrations.workoutLevel5;
          break;
      }
    }
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$1(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$4(/* Some */ [tmp], /* Some */ ["cover"], /* array */ [])
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$5(
                    /* array */ ["rgba(0,0,0,0)", Colors.spotiBlack],
                    /* array */ []
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$3(
                    /* array */ [
                      "level " +
                        Pervasives.string_of_int(
                          (self[/* state */ 2][/* level */ 0] + 1) | 0
                        ),
                    ]
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  IntensityButton.make(
                    Curry._1(self[/* reduce */ 1], function() {
                      return /* DecrementLevel */ 1;
                    }),
                    "decrement",
                    +(self[/* state */ 2][/* level */ 0] === 0),
                    /* array */ []
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  IntensityButton.make(
                    Curry._1(self[/* reduce */ 1], function() {
                      return /* IncrementLevel */ 0;
                    }),
                    "increment",
                    +(self[/* state */ 2][/* level */ 0] === 4),
                    /* array */ []
                  )
                ),
              ]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$2(
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
                        RoutineFacet.make(
                          "push-ups",
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* pushUps */ 0][/* sets */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* pushUps */ 0][/* reps */ 1],
                          ],
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "sit-ups",
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* sitUps */ 1][/* sets */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* sitUps */ 1][/* reps */ 1],
                          ],
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "squats",
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* squats */ 2][/* sets */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* squats */ 2][/* reps */ 1],
                          ],
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "run",
                          /* None */ 0,
                          /* None */ 0,
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* run */ 3][/* distance */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* run */ 3][/* units */ 1],
                          ],
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                    ]
                  )
                ),
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
                        RoutineFacet.make(
                          "rest",
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* rest */ 4][/* units */ 1],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* rest */ 4][/* amount */ 0],
                          ],
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "transition",
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* transition */ 5][/* units */ 1],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              self[/* state */ 2][/* level */ 0]
                            )[/* transition */ 5][/* amount */ 0],
                          ],
                          /* array */ []
                        )
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
                  WorkoutCardStartButton.make(
                    function() {
                      return navigation.navigate("Workout", {
                        level: self[/* state */ 2][/* level */ 0],
                      });
                    },
                    /* array */ []
                  )
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [/* level */ 0];
  };
  newrecord[/* reducer */ 12] = function(action, state) {
    if (typeof action === "number") {
      if (action !== 0) {
        return /* Update */ Block.__(0, [
          /* record */ [/* level */ (state[/* level */ 0] - 1) | 0],
        ]);
      } else {
        return /* Update */ Block.__(0, [
          /* record */ [/* level */ (state[/* level */ 0] + 1) | 0],
        ]);
      }
    } else {
      return /* Update */ Block.__(0, [action[0]]);
    }
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make$6(jsProps.navigation, /* array */ []);
});

exports.Styled = Styled;
exports.persist = persist;
exports.hydrate = hydrate;
exports.component = component;
exports.make = make$6;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
