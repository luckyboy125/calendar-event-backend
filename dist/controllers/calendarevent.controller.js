"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventController = void 0;
const common_1 = require("@nestjs/common");
const calendarevent_schema_1 = require("../schemas/calendarevent.schema");
const calendarevent_service_1 = require("../services/calendarevent.service");
let CalendarEventController = class CalendarEventController {
    constructor(calendarEventService) {
        this.calendarEventService = calendarEventService;
    }
    async createBook(response, calendar) {
        const newCalendarEvent = await this.calendarEventService.create(calendar);
        return response.status(common_1.HttpStatus.CREATED).json(newCalendarEvent);
    }
    async fetchAll(response) {
        const calendar = await this.calendarEventService.readAll();
        return response.status(common_1.HttpStatus.OK).json(calendar);
    }
    async findById(response, id) {
        const calendarEvent = await this.calendarEventService.readById(id);
        return response.status(common_1.HttpStatus.OK).json(calendarEvent);
    }
    async update(response, id, calendarEvent) {
        const updatedCalendarEvent = await this.calendarEventService.update(id, calendarEvent);
        return response.status(common_1.HttpStatus.OK).json(updatedCalendarEvent);
    }
    async delete(response, id) {
        const deletedCalendarEvent = await this.calendarEventService.delete(id);
        return response.status(common_1.HttpStatus.OK).json(deletedCalendarEvent);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, calendarevent_schema_1.CalendarEvent]),
    __metadata("design:returntype", Promise)
], CalendarEventController.prototype, "createBook", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalendarEventController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarEventController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, calendarevent_schema_1.CalendarEvent]),
    __metadata("design:returntype", Promise)
], CalendarEventController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CalendarEventController.prototype, "delete", null);
CalendarEventController = __decorate([
    (0, common_1.Controller)('calendar'),
    __metadata("design:paramtypes", [calendarevent_service_1.CalendarEventService])
], CalendarEventController);
exports.CalendarEventController = CalendarEventController;
//# sourceMappingURL=calendarevent.controller.js.map