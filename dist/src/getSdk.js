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
exports.Insert_UsersDocument = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation insert_users($name: String, $rocket: String) {\n    insert_users(objects: {name: $name, rocket: $rocket}, on_conflict: {constraint: users_pkey, update_columns: id}) {\n      returning {\n        id\n        name\n        timestamp\n        rocket\n        twitter\n      }\n      affected_rows\n    }\n  }"], ["\n  mutation insert_users($name: String, $rocket: String) {\n    insert_users(objects: {name: $name, rocket: $rocket}, on_conflict: {constraint: users_pkey, update_columns: id}) {\n      returning {\n        id\n        name\n        timestamp\n        rocket\n        twitter\n      }\n      affected_rows\n    }\n  }"])));
exports.UsersDocument = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query users($limit: Int, $nameEq: String) {\n    users(limit: $limit, where: {name: {_eq: $nameEq}}) {\n      rocket\n      timestamp\n      twitter\n      id\n      name\n    }\n  }"], ["\n  query users($limit: Int, $nameEq: String) {\n    users(limit: $limit, where: {name: {_eq: $nameEq}}) {\n      rocket\n      timestamp\n      twitter\n      id\n      name\n    }\n  }"])));
function getSdk(client) {
    return {
        insert_users: function (variables) {
            return client.request(graphql_1.print(exports.Insert_UsersDocument), variables);
        },
        users: function (variables) {
            return client.request(graphql_1.print(exports.UsersDocument), variables);
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2;
