export interface DashboardNavLink {
  _id: string;
  id: string;
  title: string;
  link: string;
  parent: string;
  icon: string;
}
export type DashboardNavLinkList = [DashboardNavLink] | [];
