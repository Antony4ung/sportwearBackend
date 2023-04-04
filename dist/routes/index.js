"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRouter = exports.orderRouter = exports.userRouter = exports.productRouter = void 0;
const product_1 = __importDefault(require("./product"));
exports.productRouter = product_1.default;
const user_1 = __importDefault(require("./user"));
exports.userRouter = user_1.default;
const orders_1 = __importDefault(require("./orders"));
exports.orderRouter = orders_1.default;
const dashborad_1 = __importDefault(require("./dashborad"));
exports.dashboardRouter = dashborad_1.default;
