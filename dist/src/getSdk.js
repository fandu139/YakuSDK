"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var graphql_1 = require("graphql");
var graphql_tag_1 = require("graphql-tag");
/** conflict action */
var Conflict_Action;
(function (Conflict_Action) {
    /** ignore the insert on this row */
    Conflict_Action["Ignore"] = "ignore";
    /** update the row with the given values */
    Conflict_Action["Update"] = "update";
})(Conflict_Action = exports.Conflict_Action || (exports.Conflict_Action = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in the ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in the ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in the ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in the descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in the descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in the descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By = exports.Order_By || (exports.Order_By = {}));
/** unique or primary key constraints on table "users" */
var Users_Constraint;
(function (Users_Constraint) {
    /** unique or primary key constraint */
    Users_Constraint["UsersPkey"] = "users_pkey";
})(Users_Constraint = exports.Users_Constraint || (exports.Users_Constraint = {}));
/** select columns of table "users" */
var Users_Select_Column;
(function (Users_Select_Column) {
    /** column name */
    Users_Select_Column["Id"] = "id";
    /** column name */
    Users_Select_Column["Name"] = "name";
    /** column name */
    Users_Select_Column["Rocket"] = "rocket";
    /** column name */
    Users_Select_Column["Timestamp"] = "timestamp";
    /** column name */
    Users_Select_Column["Twitter"] = "twitter";
})(Users_Select_Column = exports.Users_Select_Column || (exports.Users_Select_Column = {}));
/** update columns of table "users" */
var Users_Update_Column;
(function (Users_Update_Column) {
    /** column name */
    Users_Update_Column["Id"] = "id";
    /** column name */
    Users_Update_Column["Name"] = "name";
    /** column name */
    Users_Update_Column["Rocket"] = "rocket";
    /** column name */
    Users_Update_Column["Timestamp"] = "timestamp";
    /** column name */
    Users_Update_Column["Twitter"] = "twitter";
})(Users_Update_Column = exports.Users_Update_Column || (exports.Users_Update_Column = {}));
exports.Insert_UsersDocument = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation insert_users {\n  insert_users(objects: {name: \"Azkia Aisyah Lakuana\", rocket: \"child\"}) {\n    returning {\n      id\n      name\n      rocket\n      timestamp\n      twitter\n    }\n  }\n}\n    "], ["\n    mutation insert_users {\n  insert_users(objects: {name: \"Azkia Aisyah Lakuana\", rocket: \"child\"}) {\n    returning {\n      id\n      name\n      rocket\n      timestamp\n      twitter\n    }\n  }\n}\n    "])));
exports.LaunchesPastDocument = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query launchesPast {\n  launchesPast(limit: 1) {\n    mission_name\n    launch_date_local\n    launch_site {\n      site_name_long\n    }\n    links {\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n      first_stage {\n        cores {\n          flight\n          core {\n            reuse_count\n            status\n          }\n        }\n      }\n      second_stage {\n        payloads {\n          payload_type\n          payload_mass_kg\n          payload_mass_lbs\n        }\n      }\n    }\n    ships {\n      name\n      home_port\n      image\n    }\n  }\n}\n    "], ["\n    query launchesPast {\n  launchesPast(limit: 1) {\n    mission_name\n    launch_date_local\n    launch_site {\n      site_name_long\n    }\n    links {\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n      first_stage {\n        cores {\n          flight\n          core {\n            reuse_count\n            status\n          }\n        }\n      }\n      second_stage {\n        payloads {\n          payload_type\n          payload_mass_kg\n          payload_mass_lbs\n        }\n      }\n    }\n    ships {\n      name\n      home_port\n      image\n    }\n  }\n}\n    "])));
exports.Update_UsersDocument = graphql_tag_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation update_users {\n  update_users(where: {name: {_eq: \"Azkia Fandu Aisyah Lakuana\"}, rocket: {_eq: \"child\"}}, _set: {name: \"Azkia Fandu Aisyah Lakuana\"}) {\n    returning {\n      id\n      name\n      rocket\n      timestamp\n      twitter\n    }\n  }\n}\n    "], ["\n    mutation update_users {\n  update_users(where: {name: {_eq: \"Azkia Fandu Aisyah Lakuana\"}, rocket: {_eq: \"child\"}}, _set: {name: \"Azkia Fandu Aisyah Lakuana\"}) {\n    returning {\n      id\n      name\n      rocket\n      timestamp\n      twitter\n    }\n  }\n}\n    "])));
function getSdk(client) {
    return {
        insert_users: function (variables) {
            return client.request(graphql_1.print(exports.Insert_UsersDocument), variables);
        },
        launchesPast: function (variables) {
            return client.request(graphql_1.print(exports.LaunchesPastDocument), variables);
        },
        update_users: function (variables) {
            return client.request(graphql_1.print(exports.Update_UsersDocument), variables);
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2, templateObject_3;
