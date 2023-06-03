export interface DashboardNavLink {
  _id: string;
  id: string;
  title: string;
  link: string;
  parent: string;
  icon: string;
  hasChild: boolean;
  childs: [DashboardNavLink] | [];
}
export type DashboardNavLinkList = [DashboardNavLink] | [];
