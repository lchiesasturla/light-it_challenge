enum ArrowDirection {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

interface IArrow {
  direction: ArrowDirection;
  className: string;
}

export {
  ArrowDirection
}

export type {
  IArrow
}