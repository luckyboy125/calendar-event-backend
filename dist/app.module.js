"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const calendarevent_schema_1 = require("./schemas/calendarevent.schema");
const calendarevent_controller_1 = require("./controllers/calendarevent.controller");
const calendarevent_service_1 = require("./services/calendarevent.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/alicia_test_db'),
            mongoose_1.MongooseModule.forFeature([
                { name: calendarevent_schema_1.CalendarEvent.name, schema: calendarevent_schema_1.CalendarEventSchema },
            ]),
        ],
        controllers: [app_controller_1.AppController, calendarevent_controller_1.CalendarEventController],
        providers: [app_service_1.AppService, calendarevent_service_1.CalendarEventService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map