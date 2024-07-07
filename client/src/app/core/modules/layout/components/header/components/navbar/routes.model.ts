type BaseRoute = {
  label: string;
  desc?: string;
  type: 'single' | 'multi' | 'subroute';
  path: string;
};

type SingularRoute = BaseRoute & {
  type: 'single';
};

type MultiRouteRoot = BaseRoute & {
  type: 'multi';
  subPaths: SubRoute[];
  uiOpen: boolean;
};

type SubRoute = BaseRoute & {
  type: 'subroute';
};

export type AppRoute = SingularRoute | MultiRouteRoot | SubRoute;
