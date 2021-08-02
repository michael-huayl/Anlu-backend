"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const workshop_controller_1 = require("./workshop.controller");
const workshop_service_1 = require("./workshop.service");
const workshop_schema_1 = require("../schemas/workshop.schema");
let WorkshopModule = class WorkshopModule {
};
WorkshopModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Workshop', schema: workshop_schema_1.WorkshopSchema },
                { name: 'Subscriber', schema: workshop_schema_1.SubscriberSchema },
            ]),
        ],
        controllers: [workshop_controller_1.WorkshopController],
        providers: [workshop_service_1.WorkshopService],
    })
], WorkshopModule);
exports.WorkshopModule = WorkshopModule;
//# sourceMappingURL=workshop.module.js.map