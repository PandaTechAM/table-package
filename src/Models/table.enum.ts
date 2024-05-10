export enum StructureConfig {
  Main = 'Main',
  Freezed = 'Freezed',
}

export enum CheckedItems {
  SELECTED_ALL = 'Select all',
  SELECTED_VISIBLE = 'Selected visible rows',
  NONE = 'None',
}

export type inputSize = 'small' | 'medium'

export enum filterTypesUiHelper {
  'Equal' = '=',
  'NotEqual' = '!=',
  'Contains' = 'Contains',
  'NotContaining' = 'Not Contains',
  'StartsWith' = 'Starts with',
  'EndsWith' = 'Ends with',
  'Between' = 'Between',
  'GreaterThan' = '>',
  'GreaterThanOrEqual' = '>=',
  'LessThan' = '<',
  'LessThanOrEqual' = '<=',
  'In' = 'In',
}
