import isObject from 'lodash/isObject';

import Sandbox from '../sandbox';
import { HeadGoverness } from '../governesses';

export const isGoverness = (obj) =>
  isObject(obj) && obj instanceof HeadGoverness;

export const isSandbox = (obj) =>
  isObject(obj) && obj instanceof Sandbox;
