import { CompanyModel } from "./CompanyModel";
import { ClaimModel } from "./ClaimModel";
import { MenuModel } from "./MenuModel";

export class ProfileModel {
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    fullName: string;
    companyId: number;

    adminRoles: string[];
    claims: ClaimModel[];
    companies: CompanyModel[];

    menu: MenuModel[];
}
