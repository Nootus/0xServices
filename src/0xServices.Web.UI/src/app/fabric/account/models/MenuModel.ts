export class MenuModel {
    pageId: number;
    menuText: string;
    parentPageId: number;
    groupMenuInd: boolean;
    displayOrder: number;
    url: string;
    iconCss: string;

    items: Array<MenuModel>;
}
