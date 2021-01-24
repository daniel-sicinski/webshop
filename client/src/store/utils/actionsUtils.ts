type IStringMap = {
  [key: string]: (...args: any[]) => any;
};

export type IActionUnion<A extends IStringMap> = ReturnType<A[keyof A]>;

export const makeAction = <T>(type: T) => () => ({
  type,
});

export const makeActionWithPayload = <T, P>(type: T) => (payload: P) => ({
  type,
  payload,
});
