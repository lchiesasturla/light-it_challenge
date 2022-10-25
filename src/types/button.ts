enum ChevronDirection {
  Top = 'rotate-90',
  Right = 'rotate-180',
  Bottom = 'rotate-270',
  Left = '',
}

enum ChevronPosition {
  Left = 'left',
  Right = 'right',
}

interface IChevronOptions {
  chevronClassName ?: string;
  position ?: ChevronPosition;
  direction ?: ChevronDirection;
}

type ButtonType = "button" | "submit" | "reset" | undefined;

export {
  ChevronDirection,
  ChevronPosition
}

export type {
  IChevronOptions,
  ButtonType
}