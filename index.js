var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define("constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Seasons = exports.FIRSTSeason = exports.Programs = exports.FIRSTProgram = void 0;
    var FIRSTProgram;
    (function (FIRSTProgram) {
        FIRSTProgram["FLL_CHALLENGE"] = "FLL_CHALLENGE";
        FIRSTProgram["FLL_EXPLORE"] = "FLL_EXPLORE";
        FIRSTProgram["FLL_DISCOVER"] = "FLL_DISCOVER";
        FIRSTProgram["FTC"] = "FIRST_TECH_CHALLENGE";
        FIRSTProgram["FRC"] = "FIRST_ROBOTICS_COMPETITION";
    })(FIRSTProgram = exports.FIRSTProgram || (exports.FIRSTProgram = {}));
    exports.Programs = [
        FIRSTProgram.FLL_DISCOVER,
        FIRSTProgram.FLL_EXPLORE,
        FIRSTProgram.FLL_CHALLENGE,
        FIRSTProgram.FTC,
        FIRSTProgram.FRC,
    ];
    var FIRSTSeason;
    (function (FIRSTSeason) {
        FIRSTSeason[FIRSTSeason["FirstLaunch"] = 20192020] = "FirstLaunch";
        FIRSTSeason[FIRSTSeason["PlayMakers"] = 20202021] = "PlayMakers";
        FIRSTSeason[FIRSTSeason["FirstForward"] = 20212022] = "FirstForward";
        FIRSTSeason[FIRSTSeason["Energize"] = 20222023] = "Energize";
    })(FIRSTSeason = exports.FIRSTSeason || (exports.FIRSTSeason = {}));
    exports.Seasons = [
        FIRSTSeason.FirstLaunch,
        FIRSTSeason.PlayMakers,
        FIRSTSeason.FirstForward,
        FIRSTSeason.Energize,
    ];
});
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("firebase.links", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // type Links = {[key:string]: string};
    const firebaseLinks = {
        cc_m00: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm00.jpg?alt=media&token=dc5d50dc-c85b-4495-994e-3f74458f619b",
        cc_m01: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm01.png?alt=media&token=dc4b6232-6970-46e9-9364-10816c2097a5",
        cc_m02: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm02.png?alt=media&token=b007bf24-926e-4d81-b2ef-a612a58e8fbd",
        cc_m03: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm03.png?alt=media&token=ca2fa0d3-ad21-4d5f-b041-2a72326f0ebe",
        cc_m04: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm04.png?alt=media&token=8ef370eb-6f47-49c3-a308-83a075548073",
        cc_m05: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm05.png?alt=media&token=fc3215bc-39e7-4c32-88b5-06c224a253dc",
        cc_m06: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm06.png?alt=media&token=a818d0a7-7148-4cc9-9268-5bce69c9922a",
        cc_m07: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm07.png?alt=media&token=4b8fa910-62ee-421b-a020-58dcdf205f53",
        cc_m08: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm08.png?alt=media&token=1554eea7-74e1-4879-aa90-fdfd930b04df",
        cc_m09: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm09.png?alt=media&token=201b301f-6341-4f7d-b14a-57d7cd42658b",
        cc_m10: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm10.png?alt=media&token=0925aeec-7a81-4d81-8687-dae3090a9e69",
        cc_m11: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm11.png?alt=media&token=ca0e31aa-59c1-44a2-a9fb-7d3ad054c6bc",
        cc_m12: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm12.png?alt=media&token=1c012593-9319-429e-90ee-74b4e94ce09d",
        cc_m13: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm13.png?alt=media&token=1d0e6e11-14e8-40f5-b997-56d4492252a5",
        cc_m14: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm14.png?alt=media&token=20359260-8ca0-44e2-a46e-59488bd75370",
        cc_m15: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm15.png?alt=media&token=ca209ac4-bef5-414a-9721-9bab2cd1a747",
        cc_m16: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm16.png?alt=media&token=4708b8d0-0938-49f5-832c-809f8fe659d1",
        cc_m17: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm17.png?alt=media&token=4dde3cd5-bc1e-4136-8ca4-1b802f087978",
        sp_m00: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m00.png?alt=media&token=4254e65f-d66a-4998-b726-7f89df87906e",
        sp_m01: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m01.png?alt=media&token=a9169044-0132-4fc0-b1f7-058762a6497c",
        sp_m02: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m02.png?alt=media&token=a552b42d-76bf-4ec5-8b04-212918c22afa",
        sp_m03: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m03.png?alt=media&token=0efe49d5-d805-4398-8d51-eabaa484dfb9",
        sp_m04: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m04.png?alt=media&token=7de9ca07-0753-46d6-9ca7-0a1ae4cc42e4",
        sp_m05: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m05.png?alt=media&token=83832d7c-e8ee-48be-8b13-5355e62b1e1d",
        sp_m06: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m06.png?alt=media&token=b1a2e181-27b8-4a32-b02e-d4f06e962fb9",
        sp_m07: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m07.png?alt=media&token=2fc0ea8c-21fe-4240-a529-be07723bf856",
        sp_m08: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m08.png?alt=media&token=33822a80-e6e5-4617-982c-77a3c7f5d56a",
        sp_m09: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m09.png?alt=media&token=2fd20819-aaa8-4ae7-8ea8-b8668073240c",
        sp_m10: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m10.png?alt=media&token=d9276d54-bd59-4b76-adf5-3bf59431ffd7",
        sp_m11: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m11.png?alt=media&token=aad0c88e-eea8-4e36-94e9-e749072d1e32",
        sp_m12: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m12.png?alt=media&token=3768995e-3f45-4a23-b1e8-ff0d95068b52",
        sp_m13: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m13.png?alt=media&token=a353074f-42cd-4e6c-9e45-648042c1cee0",
        sp_m14: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m14.png?alt=media&token=aafa081f-eb6b-4107-b6d6-03732e0cf60d",
        sp_m15: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m15.png?alt=media&token=49236090-5ad9-415c-8c77-e40c66194595",
        sp_m16: "https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m16.png?alt=media&token=3b6b59d3-c93a-4f03-852d-ac8b66216320",
    };
    exports.default = firebaseLinks;
});
define("games/CargoConnect", ["require", "exports", "firebase.links", "constants"], function (require, exports, firebase_links_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    firebase_links_1 = __importDefault(firebase_links_1);
    const NUM_CONTAINERS = 8;
    const NUM_CIRCLES = 6;
    const questions = [
        {
            id: "m00a",
            label: "Does all your equipment fit in the small inspection area?",
            labelShort: "Inspection?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m01a",
            label: "Is the innovation project large enough (2+ white LEGO pieces and 4+ LEGO studs long)?",
            labelShort: "Valid?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m01b",
            label: "Is any part of the innovation Project touching the CARGO CONNECT℠ circle?",
            labelShort: "Touching circle?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m02a",
            label: "Is the hinged container completely closed?",
            labelShort: "Closed?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m02b",
            label: "How many container pieces are inside the hinged container?",
            labelShort: "Pieces?",
            options: ["0", "1-5", "6"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m03a",
            label: "Has the cargo plane been prepared for unloading so that the cargo door rests completely down, touching its black frame?",
            labelShort: "Door down?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m03b",
            label: "Has the cargo plane been unloaded so that the container is completely separate from the plane?",
            labelShort: "Separate?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m04a",
            label: "Has the truck reached its destination, completely past its blue end line, on the mat?",
            labelShort: "Truck?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m04b",
            label: "Has the airplane reached its destination, completely past its blue end line?",
            labelShort: "Plane?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m05a",
            label: "Has the engine been switched from diesel to electric so that the yellow bar rests all the way down/south?",
            labelShort: "Switched?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m06a",
            label: "Has the robot parked over the blue accident-avoidance line?",
            labelShort: "Blue line?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m06b",
            label: "The yellow panel is knocked down?",
            labelShort: "Yellow panel?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m06c",
            label: "The black panel is knocked down?",
            labelShort: "Black panel?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m07a",
            labelShort: "Raised?",
            label: "Is the container no longer touching the cargo ship's east deck?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m07b",
            labelShort: "East?",
            label: "Is the container completely east of the cargo ship's east deck?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m08a",
            labelShort: "Your package?",
            label: "Is the food package seperated from your helicopter?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m08b",
            labelShort: "Other package?",
            label: "Is the food package seperated from the other field's helicopter?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m08c",
            labelShort: "Package delivered?",
            label: "Is the food package from the other field completely in your CARGO CONNECT℠ circle?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m09a",
            labelShort: "Track repaired?",
            label: "Is the train track repaired so that it rests completely down/west?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m09b",
            labelShort: "Train arrived?",
            label: "Has the train reached its destination, latched at the end of the tracks?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m10a",
            labelShort: "Only orange?",
            label: "Is the light orange container the only container remaining completely in the blue sorting area box?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m11a",
            labelShort: "Package delivered?",
            label: "Has the package been delivered to its destination?",
            options: ["No", "Partly", "Completely"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m12a",
            labelShort: "Turbine?",
            label: "Is the turbine blade touching only the blue holder and...?",
            options: ["No", "The mat", "Nothing else"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m12b",
            labelShort: "Chicken?",
            label: "Is the chicken statue upright with its base in its circle?",
            options: ["No", "Partly", "Completely"],
            defaultValue: "Completely",
            type: "categorical",
        },
        {
            id: "m13a",
            labelShort: "Trucks latched?",
            label: "Are both trucks latched together completely outside of home?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m13b",
            labelShort: "Latched to bridge?",
            label: "Is a truck latched to the bridge?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m14a",
            labelShort: "Bridge?",
            label: "How many bridge decks have been lowered and rest on their center support?",
            options: ["0", "1", "2"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m15a",
            labelShort: "Trucks?",
            label: "Containers on and touching only the Platooning Trucks, and completely outside Home?",
            min: 0,
            max: NUM_CONTAINERS,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m15b",
            labelShort: "Train?",
            label: "Containers on and touching only the Train?",
            min: 0,
            max: NUM_CONTAINERS,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m15c",
            labelShort: "Cargo ship?",
            label: "Containers on and touching only the Cargo Ship's West Deck?",
            min: 0,
            max: NUM_CONTAINERS,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m16a",
            labelShort: "Partly in?",
            label: "Containers partly in any circle?",
            min: 0,
            max: NUM_CONTAINERS,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m16b",
            labelShort: "Completely in?",
            label: "Containers completely in any circle?",
            min: 0,
            max: NUM_CONTAINERS,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m16c",
            labelShort: "Blue?",
            label: "Is the blue (not hinged) container completely in the blue circle?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m16d",
            labelShort: "Green?",
            label: "Is the lime green container completely in the lime green circle?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m16e",
            labelShort: "Circles?",
            label: "How many circles contain at least one container completely in them?",
            min: 0,
            max: NUM_CIRCLES,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m17a",
            labelShort: "Precision?",
            label: "How many Precision Tokens are left on the field?",
            options: ["0", "1", "2", "3", "4", "5", "6"],
            defaultValue: "6",
            type: "categorical",
        },
        {
            id: "gp",
            labelShort: "GP",
            label: "Gracious Professionalism® displayed at the robot game table?",
            options: ["2 - Developing", "3 - Accomplished", "4 - Exceeds"],
            defaultValue: "3 - Accomplished",
            type: "categorical",
        },
    ];
    const missions = [
        {
            prefix: "m00",
            title: "M00 - Equipment Inspection Bonus",
            image: firebase_links_1.default.cc_m00,
        },
        {
            prefix: "m01",
            title: "M01 - Innovation Project Model",
            image: firebase_links_1.default.cc_m01,
        },
        {
            prefix: "m02",
            title: "M02 - Unused Capacity",
            image: firebase_links_1.default.cc_m02,
        },
        {
            prefix: "m03",
            title: "M03 - Unload Cargo Plane",
            image: firebase_links_1.default.cc_m03,
        },
        {
            prefix: "m04",
            title: "M04 - Transportation Journey",
            image: firebase_links_1.default.cc_m04,
        },
        {
            prefix: "m05",
            title: "M05 - Switch Engine",
            image: firebase_links_1.default.cc_m05,
        },
        {
            prefix: "m06",
            title: "M06 - Accident Avoidance",
            image: firebase_links_1.default.cc_m06,
        },
        {
            prefix: "m07",
            title: "M07 - Unload Cargo Ship",
            image: firebase_links_1.default.cc_m07,
        },
        {
            prefix: "m08",
            title: "M08 - Air Drop",
            image: firebase_links_1.default.cc_m08,
        },
        {
            prefix: "m09",
            title: "M09 - Train Tracks",
            image: firebase_links_1.default.cc_m09,
        },
        {
            prefix: "m10",
            title: "M10 - Sorting Center",
            image: firebase_links_1.default.cc_m10,
        },
        {
            prefix: "m11",
            title: "M11 - Home Delivery",
            image: firebase_links_1.default.cc_m11,
        },
        {
            prefix: "m12",
            title: "M12 - Large Delivery",
            image: firebase_links_1.default.cc_m12,
        },
        {
            prefix: "m13",
            title: "M13 - Platooning Trucks",
            image: firebase_links_1.default.cc_m13,
        },
        {
            prefix: "m14",
            title: "M14 - Bridge",
            image: firebase_links_1.default.cc_m14,
        },
        {
            prefix: "m15",
            title: "M15 - Load Cargo",
            image: firebase_links_1.default.cc_m15,
        },
        {
            prefix: "m16",
            title: "M16 - Cargo Connect℠",
            image: firebase_links_1.default.cc_m16,
        },
        {
            prefix: "m17",
            title: "M17 - Precision Tokens",
            image: firebase_links_1.default.cc_m17,
        },
        {
            prefix: "gp",
            title: "Gracious Professionalism®",
        },
    ];
    const answer = (res, q) => {
        var _a;
        try {
            return (_a = res.find((r) => r.id === q)) === null || _a === void 0 ? void 0 : _a.answer;
        }
        catch (e) {
            return "";
        }
    };
    const nAnswer = (res, q) => {
        var _a;
        try {
            const a = (_a = res.find((r) => r.id === q)) === null || _a === void 0 ? void 0 : _a.answer;
            if (a)
                return Number(a);
            else
                return 0;
        }
        catch (e) {
            return 0;
        }
    };
    const validate = (R) => {
        let errors = [];
        let emptyQs = [];
        // If any answer is empty, invalid.
        const empties = R.map((r) => r.answer === "").reduce((t, c) => (t = t + (c ? 1 : 0)), 0);
        R.forEach((r) => {
            if (r.answer === "")
                emptyQs.push(r.id);
        });
        if (empties > 0)
            errors.push({
                id: emptyQs.join(","),
                message: `${empties} unanswered questions!`,
            });
        // Cargo ship container
        if (answer(R, "m07a") === "No" && answer(R, "m07b") === "Yes") {
            errors.push({
                id: "m07a,m07b",
                message: "The container cannot be touching the cargo ship's east deck if it is completely east of it.",
            });
        }
        // Helicopter food package
        if (answer(R, "m08c") === "Yes" && answer(R, "m08b") === "No") {
            errors.push({
                id: "m08c,m08b",
                message: "The food package cannot react the circle without separating from the helicopter.",
            });
        }
        // Container Count:
        const m10a = answer(R, "m10a") === "Yes" ? 1 : 0; // One container lives in M10 if this is "yes"
        const m15a = nAnswer(R, "m15a");
        const m15b = nAnswer(R, "m15b");
        const m15c = nAnswer(R, "m15c");
        const m16a = nAnswer(R, "m16a");
        const m16b = nAnswer(R, "m16b");
        const m16c = answer(R, "m16c") === "Yes";
        const m16d = answer(R, "m16d") === "Yes";
        const m16e = nAnswer(R, "m16e"); // number of circles
        // Total number of mutually exclusive containers:
        // Note: m15a is exclusive with m15b and m15c
        if (m10a + m15a + m15b + m15c > NUM_CONTAINERS)
            errors.push({
                id: [
                    m10a ? "m10a" : "",
                    m15a ? "m15a" : "",
                    m15b ? "m15b" : "",
                    m15c ? "m15c" : "",
                ].join(","),
                message: `Too many containers have been used - there are only ${NUM_CONTAINERS}!`,
            });
        // but: m15a is not exclusive with m16
        // m16a and m16b cannot both be true
        if (m10a + m16a + m16b + m15c > NUM_CONTAINERS)
            errors.push({
                id: [
                    m10a ? "m10a" : "",
                    m16a ? "m16a" : "",
                    m16b ? "m16b" : "",
                    m15c ? "m15c" : "",
                ].join(","),
                message: `Too many containers have been used - there are only ${NUM_CONTAINERS}!`,
            });
        // Containers in circles
        if (m16e > 0 && m16b === 0)
            errors.push({
                id: "m16b,m16e",
                message: "If any circles have containers completely in them, then there must be containers completely in circles",
            });
        if (m16e === 0 && m16b > 0)
            errors.push({
                id: "m16b,m16e",
                message: "If there are containers completely in circles, then there must be circles with at least one container in them",
            });
        if (m16b === 0 && m16c)
            errors.push({
                id: "m16b,m16c",
                message: "If the blue container is in completely in the blue circle, then there is a container completely in a circle",
            });
        if (m16b === 0 && m16d)
            errors.push({
                id: "m16b,m16d",
                message: "If the green container is in completely in the green circle, then there is a container completely in a circle",
            });
        if (m16b === 1 && m16c && m16d)
            errors.push({
                id: "m16b,m16d,m16c",
                message: "Your count for containers seems incorrect",
            });
        return errors;
    };
    // Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
    // TODO fully check that this is correct
    const score = (R) => {
        let _score = 0;
        // M00
        if (answer(R, "m00a") === "Yes")
            _score += 20;
        // M01
        if (answer(R, "m01a") === "Yes" && answer(R, "m01b") === "Yes")
            _score += 20;
        // M02
        if (answer(R, "m02a") === "Yes") {
            if (answer(R, "m02b") === "1-5")
                _score += 20;
            if (answer(R, "m02b") === "6")
                _score += 30;
        }
        // M03
        if (answer(R, "m03a") === "Yes")
            _score += 20;
        if (answer(R, "m03b") === "Yes")
            _score += 10;
        // M04
        const m4a = answer(R, "m04a") === "Yes";
        const m4b = answer(R, "m04b") === "Yes";
        if (m4a)
            _score += 10;
        if (m4b)
            _score += 10;
        if (m4a && m4b)
            _score += 10;
        // M05
        if (answer(R, "m05a") === "Yes")
            _score += 20;
        // M06
        if (answer(R, "m06c") === "No" && answer(R, "m06a") === "Yes") {
            _score += answer(R, "m06b") === "Yes" ? 30 : 20;
        }
        // M07
        if (answer(R, "m07a") === "Yes")
            _score += 20;
        if (answer(R, "m07b") === "Yes")
            _score += 10;
        // M08
        const m08a = answer(R, "m08a") === "Yes";
        const m08b = answer(R, "m08b") === "Yes";
        const m08c = answer(R, "m08c") === "Yes";
        if (m08a)
            _score += 20;
        if (m08a && m08b)
            _score += 10;
        if (m08b && m08c)
            _score += 10;
        // M09
        if (answer(R, "m09a") === "Yes")
            _score += 20;
        if (answer(R, "m09b") === "Yes")
            _score += 20;
        // M10
        if (answer(R, "m10a") === "Yes")
            _score += 20;
        // M11
        const m11a = answer(R, "m11a");
        if (m11a === "Partly")
            _score += 20;
        if (m11a === "Completely")
            _score += 30;
        // M12
        const m12a = answer(R, "m12a");
        const m12b = answer(R, "m12b");
        if (m12a === "The mat")
            _score += 20;
        if (m12a === "Nothing else")
            _score += 30;
        if (m12b === "Partly")
            _score += 5;
        if (m12b === "Completely")
            _score += 10;
        // M13
        const m13a = answer(R, "m13a") === "Yes";
        const m13b = answer(R, "m13b") === "Yes";
        if (m13a)
            _score += 10;
        if (m13b)
            _score += 10;
        if (m13a && m13b)
            _score += 10;
        // M14
        _score += nAnswer(R, "m14a") * 10;
        // M15
        _score += Math.min(nAnswer(R, "m15a") * 10, 20);
        _score += Math.min(nAnswer(R, "m15b") * 20, 40);
        _score += Math.min(nAnswer(R, "m15c") * 30, 60);
        // M16
        _score += nAnswer(R, "m16a") * 5;
        _score += nAnswer(R, "m16b") * 10;
        if (answer(R, "m16c") === "Yes")
            _score += 20;
        if (answer(R, "m16d") === "Yes")
            _score += 20;
        _score += nAnswer(R, "m16e") * 10;
        // M17
        switch (answer(R, "m17a")) {
            case "6":
                _score += 50;
                break;
            case "5":
                _score += 50;
                break;
            case "4":
                _score += 35;
                break;
            case "3":
                _score += 25;
                break;
            case "2":
                _score += 15;
                break;
            case "1":
                _score += 10;
                break;
            default:
                _score += 0;
        }
        return _score;
    };
    const CargoConnect = {
        name: "Cargo Connect",
        program: constants_1.FIRSTProgram.FLL_CHALLENGE,
        season: constants_1.FIRSTSeason.FirstForward,
        scores: questions,
        missions,
        answer,
        score,
        validate,
    };
    exports.default = CargoConnect;
});
define("games/CityShaper", ["require", "exports", "constants"], function (require, exports, constants_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const questions = [
        {
            id: "advg",
            labelShort: "TODO",
            label: "Your Robot and Equipment fit in the Small Inspection Area:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m01a",
            labelShort: "TODO",
            label: "The Robot is Supported by the Bridge:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m01b",
            labelShort: "TODO",
            label: "Number of Flags that are clearly raised any distance, only by the Robot:",
            options: ["0", "1", "2"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m02a",
            labelShort: "TODO",
            label: "The Hooked Blue Unit is clearly lowered any distance from the Guide Hole:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m02b",
            labelShort: "TODO",
            label: "The Hooked Blue Unit is Independent and Supported by another Blue Unit:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m02c",
            labelShort: "TODO",
            label: "AND Level 1 is Completely in the Blue Circle:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m03a",
            labelShort: "TODO",
            label: "The Inspection Drone is Supported by the axle on the Bridge:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m04a",
            labelShort: "TODO",
            label: "The Bat is Supported by the branch on the Tree:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m05a",
            labelShort: "TODO",
            label: "Number of Units Independent and Supported by the Tree's Large Branches:",
            min: 0,
            max: 17,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m05b",
            labelShort: "TODO",
            label: "Number of Units Independent and Supported by the Tree's Small Branches:",
            min: 0,
            max: 17,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m06a",
            labelShort: "TODO",
            label: "The Traffic Jam is lifted, its moving part is Independent, and it is Supported only by its hinges:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m07a",
            labelShort: "TODO",
            label: "The Swing is Released:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m08a",
            labelShort: "TODO",
            label: "The Elevator's moving parts are Independent and Supported only by its hinges, in the following position:",
            options: ["neither", "blue_car_down", "balanced"],
            defaultValue: "neither",
            type: "categorical",
        },
        {
            id: "m09a",
            labelShort: "TODO",
            label: "The Test Building is Independent and Supported only by the blue beams:",
            options: ["no", "yes"],
            defaultValue: "yes",
            type: "categorical",
        },
        {
            id: "m09b",
            labelShort: "TODO",
            label: "Number of blue beams knocked out at least half way:",
            options: ["0", "1", "2", "3", "4", "5", "6"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m10a",
            labelShort: "TODO",
            label: "The Steel Structure is standing, and is Independent and Supported only by its hinges:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m11a",
            labelShort: "TODO",
            label: "The Structure is bigger than a Blue Building Unit and built from the team's white LEGO bricks:",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m11b",
            labelShort: "TODO",
            label: "The Structure is in any Circle:",
            options: ["no", "partly", "completely"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m12a",
            labelShort: "TODO",
            label: "Number of Circles with a color-matching Unit, flat down on the Mat, and Completely in Circle:",
            options: ["0", "1", "2", "3"],
            defaultValue: "1",
            type: "categorical",
        },
        {
            id: "m12b",
            labelShort: "TODO",
            label: "Sum of height Levels of Independent Stacks at least partly in any Circle:",
            min: 0,
            max: 29,
            defaultValue: 1,
            type: "numeric",
        },
        {
            id: "m13a",
            labelShort: "TODO",
            label: "Number of Upgrades that are Independent and Supported only by a Stack which is at least partly in a Circle:",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m14a",
            labelShort: "TODO",
            label: "Number of Precision Tokens left on the field:",
            options: ["0", "1", "2", "3", "4", "5", "6"],
            defaultValue: "6",
            type: "categorical",
        },
        {
            id: "m15a",
            labelShort: "TODO",
            label: "Gracious Professionalism displayed at the Robot Game table:",
            options: ["0 Developing", "10 Accomplished", "20 Exceeds"],
            defaultValue: "0 Developing",
            type: "categorical",
        },
    ];
    const missions = [
        { prefix: "advg", title: "Advantage" },
        { prefix: "m01", title: "M01 - Elevated Places" },
        { prefix: "m02", title: "M02 - Crane" },
        { prefix: "m03", title: "M03 - Inspection Drone" },
        { prefix: "m04", title: "M04 - Design for Wildlife" },
        { prefix: "m05", title: "M05 - Treehouse" },
        { prefix: "m06", title: "M06 - Traffic Jam" },
        { prefix: "m07", title: "M07 - Swing" },
        { prefix: "m08", title: "M08 - Elevator" },
        { prefix: "m09", title: "M09 - Safety Factor" },
        { prefix: "m10", title: "M10 - Steel Construction" },
        { prefix: "m11", title: "M11 - Innovative Architecture" },
        { prefix: "m12", title: "M12 - Design & Build" },
        { prefix: "m13", title: "M13 - Sustainability Upgrades" },
        { prefix: "m14", title: "M14 - Precision" },
        { prefix: "m15", title: "M15 - Gracious Professionalism®" },
    ];
    const answer = (res, q) => {
        var _a;
        try {
            return (_a = res.find((r) => r.id === q)) === null || _a === void 0 ? void 0 : _a.answer;
        }
        catch (e) {
            return "";
        }
    };
    const validate = (R) => {
        let errors = [];
        let emptyQs = [];
        // If any answer is empty, invalid.
        const empties = R.map((r) => r.answer === "").reduce((t, c) => (t = t + (c ? 1 : 0)), 0);
        R.forEach((r) => {
            if (r.answer === "")
                emptyQs.push(r.id);
        });
        if (empties > 0)
            errors.push({
                id: emptyQs.join(","),
                message: `${empties} unanswered questions!`,
            });
        // Score 1: Flag points only score if bridge points do
        if (answer(R, "m01a") !== "yes" && Number(answer(R, "m01b")) !== 0)
            errors.push({
                id: "m01a,m01b",
                message: "Score 1 - bridge points must be scored for flags to count",
            });
        // Score 5: conditionally independent building units
        if (Number(answer(R, "m05a")) + Number(answer(R, "m05b")) > 17)
            errors.push({
                id: "m05a,m05b",
                message: "Score 5 - Too many Units are being counted",
            });
        // Score 12: The number of height levels is at minimum as many as the number of colour matching circles.
        if (Number(answer(R, "m12b")) < Number(answer(R, "m12a")))
            errors.push({
                id: "m12a,m12b",
                message: "Score 12 - Circles cannot be colour matched without corresponding height values",
            });
        return errors;
    };
    // TODO fully check that this is correct
    const score = (R) => {
        var _a;
        console.log(R);
        let _score = 0;
        const adv = ((_a = R.find((r) => r.id === "advg")) === null || _a === void 0 ? void 0 : _a.answer) === "yes" ? 5 : 0;
        // Score 1
        let pre = _score;
        if (answer(R, "m01a") === "yes")
            _score += 20;
        _score += Number(answer(R, "m01b")) * 15;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 2
        pre = _score;
        _score += answer(R, "m02a") === "yes" ? 20 : 0;
        _score += answer(R, "m02b") === "yes" ? 15 : 0;
        _score += answer(R, "m02c") === "yes" ? 15 : 0;
        if (_score > pre)
            _score += adv * 2; // Not sure why M2 is special but sure
        console.log(_score);
        // Score 3
        pre = _score;
        _score += answer(R, "m03a") === "yes" ? 10 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 4
        pre = _score;
        _score += answer(R, "m04a") === "yes" ? 10 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 5
        pre = _score;
        _score += Number(answer(R, "m05a")) * 10 + Number(answer(R, "m05b")) * 15;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 6
        pre = _score;
        _score += answer(R, "m06a") === "yes" ? 10 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 7
        pre = _score;
        _score += answer(R, "m07a") === "yes" ? 20 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 8
        pre = _score;
        const A8 = answer(R, "m08a");
        _score += A8 === "blue_car_down" ? 15 : A8 === "balanced" ? 20 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 9
        pre = _score;
        _score += answer(R, "m09a") === "yes" ? Number(answer(R, "m09b")) * 10 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 10
        pre = _score;
        _score += answer(R, "m10a") === "yes" ? 20 : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 11
        pre = _score;
        const A11a = answer(R, "m11a");
        const A11b = answer(R, "m11b");
        _score +=
            A11a === "yes"
                ? A11b === "partly"
                    ? 10
                    : A11b === "completely"
                        ? 15
                        : 0
                : 0;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 12
        pre = _score;
        _score += Number(answer(R, "m12a")) * 10 + Number(answer(R, "m12b")) * 5;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 13
        pre = _score;
        _score += Number(answer(R, "m13a")) * 10;
        if (_score > pre)
            _score += adv;
        console.log(_score);
        // Score 14
        switch (Number(answer(R, "m14a"))) {
            case 6:
                _score += 60;
                break;
            case 5:
                _score += 45;
                break;
            case 4:
                _score += 30;
                break;
            case 3:
                _score += 20;
                break;
            case 2:
                _score += 10;
                break;
            case 1:
                _score += 5;
                break;
            default:
                break;
        }
        // Score 15
        const a = answer(R, "m15a");
        if (a && typeof a === "string")
            _score += Number(a.split(" ")[0]);
        if (_score > pre)
            _score += adv;
        console.log(_score);
        return _score;
    };
    const CityShaper = {
        name: "City Shaper",
        program: constants_2.FIRSTProgram.FLL_CHALLENGE,
        season: constants_2.FIRSTSeason.FirstLaunch,
        scores: questions,
        missions,
        answer,
        score,
        validate,
    };
    exports.default = CityShaper;
});
define("games/RePlay", ["require", "exports", "constants"], function (require, exports, constants_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const questions = [
        {
            id: "advg",
            labelShort: "TODO",
            label: "Your Robot and Equipment fit in the Small Inspection Area",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m01a",
            labelShort: "TODO",
            label: "The innovation project is large enough (2+ white LEGO pieces and 4+ LEGO studs long)",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m01b",
            labelShort: "TODO",
            label: "Part of the innovation Project is touching",
            options: ["none", "rePLAY_logo", "bench_gray_area"],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m02a",
            labelShort: "TODO",
            label: "The bottom of the pointer is on",
            options: ["none", "magenta", "yellow", "blue"],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m03a",
            labelShort: "TODO",
            label: "Number of slide figures off the slide",
            options: ["0", "1", "2"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m03b",
            labelShort: "TODO",
            label: "A slide figure is completely in home",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m03c",
            labelShort: "TODO",
            label: "A slide figure is held completely off the mat by the heavy tire and touching nothing else",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m04a",
            labelShort: "TODO",
            label: "The bench is down flat",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m04b",
            labelShort: "TODO",
            label: "Number of hopscotch spaces with cubes touching the mat inside them",
            options: ["0", "1", "2", "3", "4"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m04c",
            labelShort: "TODO",
            label: "The backrest is completely out of both of its holes",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m05a",
            labelShort: "TODO",
            label: "A cube is in the crate",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m05b",
            labelShort: "TODO",
            label: "On which white stopper does the crate rest",
            options: ["none", "middle", "top"],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m06a",
            labelShort: "TODO",
            label: "The robot passes completely through the pull-up bar's upright frame at any time",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m06b",
            labelShort: "TODO",
            label: "The pull-up bar holds 100% of the robot up off the mat at the end of the match",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m07a",
            labelShort: "TODO",
            label: "The robot's controller is dancing over the dance floor at the end of the match",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m08a",
            labelShort: "TODO",
            label: "Both share models have sent only one cube anywhere onto the opposing field and those cubes color-match each other",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m08b",
            labelShort: "TODO",
            label: "Number of cubes in the frame or target",
            min: 0,
            max: 17,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m08c",
            labelShort: "TODO",
            label: "At least one yellow cube is completely in the target",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m08d",
            labelShort: "TODO",
            label: "Any equipment is in the frame (even partly)",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m09a",
            labelShort: "TODO",
            label: "Tires white side up and resting on the mat",
            options: ["none", "blue", "black", "both"],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m09b",
            labelShort: "TODO",
            label: "Tires completely in the large target circle",
            options: ["none", "blue", "black", "both"],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m09c",
            labelShort: "TODO",
            label: "The heavy (black tread) tire crossed the flip line (even partly) at any time",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m10a",
            labelShort: "TODO",
            label: "The cell phone is white side up and resting only on the mat",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m11a",
            labelShort: "TODO",
            label: "The robot spun the rollers so the pointer points to",
            options: [
                "none",
                "gray",
                "red",
                "orange",
                "yellow",
                "light_green",
                "dark_green",
            ],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m12a",
            labelShort: "TODO",
            label: "The free wheel is completely outside the large circle",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m12b",
            labelShort: "TODO",
            label: "The free wheel is completely in the small circle",
            options: ["no", "yes"],
            defaultValue: "no",
            type: "categorical",
        },
        {
            id: "m13a",
            labelShort: "TODO",
            label: "The stopper is under the lever and the lever setting is",
            options: ["none", "blue", "magenta", "yellow"],
            defaultValue: "none",
            type: "categorical",
        },
        {
            id: "m14a",
            labelShort: "TODO",
            label: "Number of health units touching either the RePLAY logo or the gray area around the bench",
            min: 0,
            max: 8,
            defaultValue: 0,
            type: "numeric",
        },
        {
            id: "m14b",
            labelShort: "TODO",
            label: "Number of health units looped over a pull-up bar post and touching no equipment (max of 4)",
            options: ["0", "1", "2", "3", "4"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m15a",
            labelShort: "TODO",
            label: "Number of precision tokens left on the field",
            options: ["0", "1", "2", "3", "4", "5", "6"],
            defaultValue: "6",
            type: "categorical",
        },
    ];
    const missions = [
        { prefix: "advg", title: "Equipment Inspection Bonus" },
        { prefix: "m01", title: "M01 - Innovation Project" },
        { prefix: "m02", title: "M02 - Step Counter" },
        { prefix: "m03", title: "M03 - Slide" },
        { prefix: "m04", title: "M04 - Bench" },
        { prefix: "m05", title: "M05 - Basketball" },
        { prefix: "m06", title: "M06 - Pull-up Bar" },
        { prefix: "m07", title: "M07 - Robot Dance" },
        { prefix: "m08", title: "M08 - Boccia" },
        { prefix: "m09", title: "M09 - Tire Flip" },
        { prefix: "m10", title: "M10 - Cell Phone" },
        { prefix: "m11", title: "M11 - Treadmill" },
        { prefix: "m12", title: "M12 - Row Machine" },
        { prefix: "m13", title: "M13 - Weight Machine" },
        { prefix: "m14", title: "M14 - Health Units" },
        { prefix: "m15", title: "M15 - Precision" },
    ];
    const answer = (res, q) => {
        var _a;
        try {
            return (_a = res.find((r) => r.id === q)) === null || _a === void 0 ? void 0 : _a.answer;
        }
        catch (e) {
            return "";
        }
    };
    const validate = (R) => {
        let errors = [];
        let emptyQs = [];
        // If any answer is empty, invalid.
        const empties = R.map((r) => r.answer === "").reduce((t, c) => (t = t + (c ? 1 : 0)), 0);
        R.forEach((r) => {
            if (r.answer === "")
                emptyQs.push(r.id);
        });
        if (empties > 0)
            errors.push({
                id: emptyQs.join(","),
                message: `${empties} unanswered questions!`,
            });
        // Mission 1: Flag points only score if bridge points do
        if (answer(R, "m01a") !== "yes" && answer(R, "m01b") === "yes")
            errors.push({
                id: "m01a,m01b",
                message: "Mission 1 - innovation project must be built and valid to score",
            });
        // Mission 3: conditionally independent slide units
        if (answer(R, "m03a") === "0" && answer(R, "m03b") === "yes")
            errors.push({
                id: "m03a,m03b",
                message: "Mission 3 - Slide figures can't be on the slide and in base",
            });
        if (answer(R, "m03a") === "0" && answer(R, "m03c") === "yes")
            errors.push({
                id: "m03a,m03c",
                message: "Mission 3 - Slide figures can't be on the slide and on the wheel",
            });
        if (answer(R, "m03a") === "1" &&
            answer(R, "m03b") === "yes" &&
            answer(R, "m03c") === "yes")
            errors.push({
                id: "m03a,m03b,m03c",
                message: "Mission 3 - Slide figures can't be everywhere at once",
            });
        // Mission 8: Cubes in the target
        if (Number(answer(R, "m08b")) < 0)
            errors.push({
                id: "m08b",
                message: "Mission 8 - Negative number of cubes in the target",
            });
        if (Number(answer(R, "m08b")) > 17)
            errors.push({
                id: "m08b",
                message: "Mission 8 - Too many cubes in target",
            });
        if (answer(R, "m08c") === "yes" && Number(answer(R, "m08b")) === 0)
            errors.push({
                id: "m08b,m08c",
                message: "Mission 8 - A yellow cube can't be in the target if there are no cubes in the target",
            });
        //   Mission 12: Tire can't be in both places.
        if (answer(R, "m12a") === "no" && answer(R, "m12b") === "yes")
            errors.push({
                id: "m12a,m12b",
                message: "Mission 12 - the tire can't be in two places at once",
            });
        // Mission 14: Health units
        if (Number(answer(R, "m14b")) < 0)
            errors.push({
                id: "m14b",
                message: "Mission 14 - Negative number of health units",
            });
        if (Number(answer(R, "m14b")) > 8)
            errors.push({
                id: "m14b",
                message: "Mission 14 - Too many health units",
            });
        console.log(errors);
        return errors;
    };
    // TODO fully check that this is correct
    const score = (R) => {
        var _a;
        console.log(R);
        let _score = answer(R, "advg") === "yes" ? 25 : 0;
        // Mission 1
        if (answer(R, "m01b") === "rePLAY_logo")
            _score += 20;
        if (answer(R, "m01b") === "bench_gray_area")
            _score += 20;
        // Mission 2
        _score += answer(R, "m02a") === "magenta" ? 10 : 0;
        _score += answer(R, "m02a") === "yellow" ? 15 : 0;
        _score += answer(R, "m02a") === "blue" ? 20 : 0;
        // Mission 3
        _score += answer(R, "m03a") === "1" ? 5 : 0;
        _score += answer(R, "m03a") === "2" ? 20 : 0;
        _score += answer(R, "m03b") === "yes" ? 10 : 0;
        _score += answer(R, "m03c") === "yes" ? 20 : 0;
        // Mission 4
        _score += answer(R, "m04a") === "yes" ? 10 : 0;
        _score += Number(answer(R, "m04b")) * 10;
        _score += answer(R, "m04c") === "yes" ? 15 : 0;
        // Mission 5
        _score += answer(R, "m05a") === "yes" ? 15 : 0;
        _score += answer(R, "m05b") === "middle" ? 15 : 0;
        _score += answer(R, "m05b") === "top" ? 25 : 0;
        // Mission 6
        _score += answer(R, "m06a") === "yes" ? 15 : 0;
        _score += answer(R, "m06b") === "yes" ? 30 : 0;
        // Mission 7
        _score += answer(R, "m07a") === "yes" ? 20 : 0;
        // Mission 8
        if (answer(R, "m08d") !== "yes") {
            _score += answer(R, "m08a") === "yes" ? 25 : 0;
            _score += Math.max(Math.min(Number(answer(R, "m08b")), 17), 0) * 5;
            _score += answer(R, "m08c") === "yes" ? 10 : 0;
        }
        // Mission 9
        if (answer(R, "m09c") === "yes") {
            _score += answer(R, "m09a") === "blue" ? 10 : 0;
            _score += answer(R, "m09a") === "black" ? 0 : 0;
            _score += answer(R, "m09a") === "both" ? 10 : 0;
            if (["blue", "both"].includes((_a = `${answer(R, "m09a")}`) !== null && _a !== void 0 ? _a : "")) {
                _score += answer(R, "m09b") === "blue" ? 5 : 0;
                _score += answer(R, "m09b") === "both" ? 5 : 0;
            }
        }
        else {
            _score += answer(R, "m09a") === "blue" ? 10 : 0;
            _score += answer(R, "m09a") === "black" ? 15 : 0;
            _score += answer(R, "m09a") === "both" ? 25 : 0;
            if (["blue", "both"].includes(`${answer(R, "m09a")}`)) {
                _score += answer(R, "m09b") === "blue" ? 5 : 0;
                _score += answer(R, "m09b") === "both" ? 5 : 0;
            }
            if (["black", "both"].includes(`${answer(R, "m09a")}`)) {
                _score += answer(R, "m09b") === "black" ? 5 : 0;
                _score += answer(R, "m09b") === "both" ? 5 : 0;
            }
        }
        // Mission 10
        _score += answer(R, "m10a") === "yes" ? 15 : 0;
        // Mission 11
        switch (answer(R, "m11a")) {
            case "gray":
                _score += 5;
                break;
            case "red":
                _score += 10;
                break;
            case "orange":
                _score += 15;
                break;
            case "yellow":
                _score += 20;
                break;
            case "light_green":
                _score += 25;
                break;
            case "dark_green":
                _score += 30;
                break;
            default:
                _score += 0;
        }
        // Mission 12
        _score += answer(R, "m12a") === "yes" ? 15 : 0;
        _score += answer(R, "m12b") === "yes" ? 15 : 0;
        // Mission 13
        _score += answer(R, "m13a") === "blue" ? 10 : 0;
        _score += answer(R, "m13a") === "magenta" ? 15 : 0;
        _score += answer(R, "m13a") === "yellow" ? 20 : 0;
        // Mission 14
        _score += Math.max(0, Math.min(Number(answer(R, "m14a")), 8)) * 5;
        _score += Number(answer(R, "m14b")) * 10;
        // Mission 15
        switch (Number(answer(R, "m15a"))) {
            case 6:
                _score += 60;
                break;
            case 5:
                _score += 45;
                break;
            case 4:
                _score += 30;
                break;
            case 3:
                _score += 20;
                break;
            case 2:
                _score += 10;
                break;
            case 1:
                _score += 5;
                break;
            default:
                break;
        }
        console.log(_score);
        return _score;
    };
    const RePlay = {
        name: "RePlay",
        program: constants_3.FIRSTProgram.FLL_CHALLENGE,
        season: constants_3.FIRSTSeason.PlayMakers,
        scores: questions,
        missions,
        answer,
        score,
        validate,
    };
    exports.default = RePlay;
});
define("games/SuperPowered", ["require", "exports", "constants", "firebase.links"], function (require, exports, constants_4, firebase_links_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    firebase_links_2 = __importDefault(firebase_links_2);
    const NUM_ENERGY = 12;
    const questions = [
        {
            id: "m00a",
            label: "If your robot and all your equipment fit completely in one launch area and are under a height limit of 12 inches",
            labelShort: "Inspection?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m01a",
            label: "Is your Innovation Project model at least partly in the hydrogen plant target area?",
            labelShort: "In the area?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m02a",
            label: "Number of fuel units in the fuel truck?",
            labelShort: "Fuel in truck?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m02b",
            label: "Is at least one fuel unit in the truck and the truck is at least partly over the fueling station target?",
            labelShort: "Loaded and partly in target?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m03a",
            label: "How many energy units are completely in the energy storage bin?",
            labelShort: "Energy in bin?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m03b",
            label: "Is the energy unit completely removed from the energy storage tray?",
            labelShort: "Removed from tray?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m04a",
            label: "How many energy units have been completely removed from their starting circle?",
            labelShort: "# Removed?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m05a",
            label: "Is your field's orange connector completely raised?",
            labelShort: "Raised?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m05b",
            label: "Are both teams' orange connectors completely raised?",
            labelShort: "Both?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m06a",
            label: "Is the hybrid car no longer touching the ramp?",
            labelShort: "Car not touching?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m06b",
            label: "Is the hybrid unit in the hybrid car?",
            labelShort: "Hybrid unit?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m07a",
            label: "How many energy units are no longer touching the wind turbine?",
            labelShort: "# removed?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m08a",
            label: "Is the television completely raised?",
            labelShort: "Raised?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m08b",
            label: "Is an energy unit completely in the green television slot?",
            labelShort: "Energy unit?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m09a",
            label: "Is the dinosaur toy completely in the left home area?",
            labelShort: "Completely left?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m09b",
            label: "Is the dinosaur toy lid completely closed containing...?",
            labelShort: "Closed with...?",
            options: ["No", "Energy", "Rechargeable battery"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m10a",
            label: "How many energy units are no longer touching the power plant?",
            labelShort: "# removed?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m11a",
            label: "Is the energy unit no longer touching the hydroelectric dam?",
            labelShort: "Energy removed?",
            options: ["No", "Yes"],
            defaultValue: "No",
            type: "categorical",
        },
        {
            id: "m12a",
            label: "How many looped water units are completely in the water reservoir, touching the mat?",
            labelShort: "Water touching?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m12b",
            label: "How many hooks are holding a looped water unit?",
            labelShort: "Hooks?",
            options: ["0", "1", "2"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m13a",
            label: "How many energy units are completely in the hydrogen plant target area?",
            labelShort: "# Energy?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m14a",
            label: "How many energy units are partly in the slot or in the red hopper?",
            labelShort: "# Energy?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m15a",
            label: "How many energy units are completely in the rechargeable battery target area?",
            labelShort: "# Energy?",
            options: ["0", "1", "2", "3"],
            defaultValue: "0",
            type: "categorical",
        },
        {
            id: "m16a",
            labelShort: "Precision?",
            label: "How many Precision Tokens are left on the field?",
            options: ["0", "1", "2", "3", "4", "5", "6"],
            defaultValue: "6",
            type: "categorical",
        },
        {
            id: "gp",
            labelShort: "GP",
            label: "Gracious Professionalism® displayed at the robot game table?",
            options: ["2 - Developing", "3 - Accomplished", "4 - Exceeds"],
            defaultValue: "3 - Accomplished",
            type: "categorical",
        },
    ];
    const missions = [
        {
            prefix: "m00",
            title: "M00 - Equipment Inspection Bonus",
            image: firebase_links_2.default.sp_m00,
        },
        {
            prefix: "m01",
            title: "M01 - Innovation Project Model",
            image: firebase_links_2.default.sp_m01,
        },
        {
            prefix: "m02",
            title: "M02 - Oil Platform",
            image: firebase_links_2.default.sp_m02,
        },
        {
            prefix: "m03",
            title: "M03 - Energy Storage",
            image: firebase_links_2.default.sp_m03,
        },
        {
            prefix: "m04",
            title: "M04 - Solar Farm",
            image: firebase_links_2.default.sp_m04,
        },
        {
            prefix: "m05",
            title: "M05 - Smart Grid",
            image: firebase_links_2.default.sp_m05,
        },
        {
            prefix: "m06",
            title: "M06 - Hybrid Car",
            image: firebase_links_2.default.sp_m06,
        },
        {
            prefix: "m07",
            title: "M07 - Wind Turbine",
            image: firebase_links_2.default.sp_m07,
        },
        {
            prefix: "m08",
            title: "M08 - Watch Television",
            image: firebase_links_2.default.sp_m08,
        },
        {
            prefix: "m09",
            title: "M09 - Dinosaur Toy",
            image: firebase_links_2.default.sp_m09,
        },
        {
            prefix: "m10",
            title: "M10 - Power Plant",
            image: firebase_links_2.default.sp_m10,
        },
        {
            prefix: "m11",
            title: "M11 - Hydroelectric Dam",
            image: firebase_links_2.default.sp_m11,
        },
        {
            prefix: "m12",
            title: "M12 - Water Reservoir",
            image: firebase_links_2.default.sp_m12,
        },
        {
            prefix: "m13",
            title: "M13 - Power-To-X",
            image: firebase_links_2.default.sp_m13,
        },
        {
            prefix: "m14",
            title: "M14 - Toy Factory",
            image: firebase_links_2.default.sp_m14,
        },
        {
            prefix: "m15",
            title: "M15 - Rechargeable battery",
            image: firebase_links_2.default.sp_m15,
        },
        {
            prefix: "m16",
            title: "M16 - Precision Tokens",
            image: firebase_links_2.default.sp_m16,
        },
        {
            prefix: "gp",
            title: "Gracious Professionalism®",
        },
    ];
    const answer = (res, q) => {
        var _a;
        try {
            return (_a = res.find((r) => r.id === q)) === null || _a === void 0 ? void 0 : _a.answer;
        }
        catch (e) {
            return "";
        }
    };
    const nAnswer = (res, q) => {
        var _a;
        try {
            const a = (_a = res.find((r) => r.id === q)) === null || _a === void 0 ? void 0 : _a.answer;
            if (a)
                return Number(a);
            else
                return 0;
        }
        catch (e) {
            return 0;
        }
    };
    const validate = (R) => {
        let errors = [];
        let emptyQs = [];
        // If any answer is empty, invalid.
        const empties = R.map((r) => r.answer === "").reduce((t, c) => (t = t + (c ? 1 : 0)), 0);
        R.forEach((r) => {
            if (r.answer === "")
                emptyQs.push(r.id);
        });
        if (empties > 0)
            errors.push({
                id: emptyQs.join(","),
                message: `${empties} unanswered questions!`,
            });
        // Fuel truck
        if (answer(R, "m02a") === "0" && answer(R, "m02b") === "Yes")
            errors.push({
                id: "m02a,m02b",
                message: "The fuel truck cannot contain fuel if there is no fuel in the fuel truck.",
            });
        // Energy units
        const m03a = nAnswer(R, "m03a");
        const m03b = answer(R, "m03b") === "No" ? 1 : 0; // One energy unit lives in M03 if this is "no"
        const m04a = 3 - nAnswer(R, "m04a"); // If they haven't been removed, they are not available
        const m07a = 3 - nAnswer(R, "m07a"); // If they haven't been removed, they are not available
        const m08b = answer(R, "m08b") === "Yes" ? 1 : 0;
        const m09b = answer(R, "m09b") === "Energy" && answer(R, "m09a") === "Yes" ? 1 : 0;
        const m10a = 3 - nAnswer(R, "m10a");
        const m11a = answer(R, "m11a") === "No" ? 1 : 0;
        const m13a = nAnswer(R, "m13a");
        const m14a = nAnswer(R, "m14a");
        const m15a = nAnswer(R, "m15a");
        // Total number of mutually exclusive containers:
        // Note: m15a is exclusive with m15b and m15c
        if (m03a + m03b + m04a + m07a + m08b + m09b + m10a + m11a + m13a + m14a + m15a >
            NUM_ENERGY)
            errors.push({
                id: [
                    m03a ? "m03a" : "",
                    m03b ? "m03b" : "",
                    m04a ? "m04a" : "",
                    m07a ? "m07a" : "",
                    m08b ? "m08b" : "",
                    m09b ? "m09b" : "",
                    m10a ? "m10a" : "",
                    m11a ? "m11a" : "",
                    m13a ? "m13a" : "",
                    m14a ? "m14a" : "",
                    m15a ? "m15a" : "",
                ].join(","),
                message: `Too many energy units have been used - there are only ${NUM_ENERGY}!`,
            });
        // Water units
        const m12a = nAnswer(R, "m12a");
        const m12b = nAnswer(R, "m12b");
        if (m12a + m12b > 3)
            errors.push({
                id: "m12a,m12b",
                message: "Looped water units cannot be touching the ground and hanging on the hooks.",
            });
        return errors;
    };
    // Todo - it would be nice to reorganize Game and Score (or something) so that the "answer" function is properly typed.
    // TODO fully check that this is correct
    const score = (R) => {
        let _score = 0;
        // M00
        if (answer(R, "m00a") === "Yes")
            _score += 20;
        // M01
        if (answer(R, "m01a") === "Yes")
            _score += 10;
        // M02
        _score += nAnswer(R, "m02a") * 5;
        if (answer(R, "m02b") === "Yes")
            _score += 10;
        // M03
        _score += nAnswer(R, "m03a") * 10;
        if (answer(R, "m03b") === "Yes")
            _score += 5;
        // M04
        const m04a = nAnswer(R, "m04a");
        _score += m04a * 5;
        if (m04a === 3)
            _score += 5;
        // M05
        if (answer(R, "m05a") === "Yes")
            _score += 20;
        if (answer(R, "m05b") === "Yes")
            _score += 10;
        // M06
        if (answer(R, "m06a") === "Yes")
            _score += 10;
        if (answer(R, "m06b") === "Yes")
            _score += 10;
        // M07
        _score += nAnswer(R, "m07a") * 10;
        // M08
        if (answer(R, "m08a") === "Yes")
            _score += 10;
        if (answer(R, "m08b") === "Yes")
            _score += 10;
        // M09
        if (answer(R, "m09a") === "Yes")
            _score += 10;
        const m09b = answer(R, "m09b");
        if (m09b === "Energy")
            _score += 10;
        else if (m09b === "Rechargeable battery")
            _score += 20;
        // M10
        const m10a = nAnswer(R, "m10a");
        _score += m10a * 5;
        if (m10a === 3)
            _score += 10;
        // M11
        if (answer(R, "m11a") === "Yes")
            _score += 20;
        // M12
        _score += nAnswer(R, "m12a") * 5;
        _score += nAnswer(R, "m12b") * 10;
        // M13
        _score += nAnswer(R, "m13a") * 5;
        // M14
        _score += nAnswer(R, "m14a") * 5;
        if (answer(R, "m14b") === "Yes")
            _score += 10;
        // M15
        _score += nAnswer(R, "m15a") * 5;
        // M16
        switch (answer(R, "m16a")) {
            case "6":
                _score += 50;
                break;
            case "5":
                _score += 50;
                break;
            case "4":
                _score += 35;
                break;
            case "3":
                _score += 25;
                break;
            case "2":
                _score += 15;
                break;
            case "1":
                _score += 10;
                break;
            default:
                _score += 0;
        }
        return _score;
    };
    const SuperPowered = {
        name: "SuperPowered",
        program: constants_4.FIRSTProgram.FLL_CHALLENGE,
        season: constants_4.FIRSTSeason.Energize,
        scores: questions,
        missions,
        answer,
        score,
        validate,
    };
    exports.default = SuperPowered;
});
define("extras", ["require", "exports", "games/CargoConnect", "games/CityShaper", "games/RePlay", "games/SuperPowered"], function (require, exports, CargoConnect_1, CityShaper_1, RePlay_1, SuperPowered_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Games = exports.GIsCategoricalScore = exports.GIsNumericScore = void 0;
    CargoConnect_1 = __importDefault(CargoConnect_1);
    CityShaper_1 = __importDefault(CityShaper_1);
    RePlay_1 = __importDefault(RePlay_1);
    SuperPowered_1 = __importDefault(SuperPowered_1);
    const GIsNumericScore = (m) => m.type === "numeric";
    exports.GIsNumericScore = GIsNumericScore;
    const GIsCategoricalScore = (m) => m.type === "categorical";
    exports.GIsCategoricalScore = GIsCategoricalScore;
    exports.Games = [SuperPowered_1.default, CargoConnect_1.default, RePlay_1.default, CityShaper_1.default];
});
define("index", ["require", "exports", "games/CargoConnect", "games/CityShaper", "games/RePlay", "games/SuperPowered", "extras", "constants"], function (require, exports, CargoConnect_2, CityShaper_2, RePlay_2, SuperPowered_2, Extras, Constants) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CargoConnect_2 = __importDefault(CargoConnect_2);
    CityShaper_2 = __importDefault(CityShaper_2);
    RePlay_2 = __importDefault(RePlay_2);
    SuperPowered_2 = __importDefault(SuperPowered_2);
    Extras = __importStar(Extras);
    Constants = __importStar(Constants);
    module.exports = Object.assign(Object.assign({ CargoConnect: CargoConnect_2.default,
        CityShaper: CityShaper_2.default,
        RePlay: RePlay_2.default,
        SuperPowered: SuperPowered_2.default }, Extras), Constants);
});
