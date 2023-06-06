/**
 * Unknown Prop Warning - https://reactjs.org/warnings/unknown-prop.html
 */

/**
 * @param customProps Custom props that shouldn't be passed forward (React warnings as unknown prop).
 */
export const shouldForwardProp =
  <TCustomProps extends Record<string, unknown>>(customProps: ReadonlyArray<keyof TCustomProps>) =>
  (prop: string): boolean =>
    !customProps.includes(prop);
