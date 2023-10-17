export const TYPE_CONSTANTS = {
  MESSAGE: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    IMG_DONE: 'done',
  },
};

export const HTTP_STATUS_CONSTANTS = {
  OK: 200,
  ERROR_CODE_401: 401,
  SERVER_ERROR: 'E0',
  ERROR: 400,
};

export const LENGTH_CONSTANTS = {
  DEFAULT_PAGE: 1,
  DEFAULT_TOTAL: 0,
  DEFAULT_TEXTAREA_ROWS: 4,
  MAX_LENGTH_INPUT: 256,
  DEFAULT_PAGE_SIZE: 10,
  MAX_LENGTH_DESCRIPTION: 320,
  DEFAULT_PAGE_SIZE_OPTIONS: ['10', '20', '50'],
};

export const DEFAULT_SEARCH_PARAMS = {
  limit: 10,
  page: 1,
};
export const PAGE_SIZE_OPTIONS = ['10', '20', '50'];
export const PAGE_SIZE_DEFAULT = 10;

export const DEFAULT_SEARCH_DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_TIME_FORMAT = 'dd-MM-yyyy hh:mm:ss';
export const DATE_FORMAT = 'dd-MM-yyyy';
export const TIME_FORMAT = 'hh:mm:ss';

export const ALL_OPTIONS = 'all';

export type SORT_PARAMS = {
  sort?: {
    [x: string]: 'desc' | 'asc' | undefined;
  };
};

export const MAX_INTEGER_PRICE = 9;

export const ROUTE_URL = {
  HOME: '/',
  LOGIN: '/login',
};

export const TAB = 'tab';
export const CREATE = 'create';

export const DEFAULT_PAGE = ROUTE_URL.HOME;
