/**
 * Utility function that prevents styling props from being passed down and create invalid attribute (React warning as unknown prop).
 * @param customProps Custom props that shouldn't be passed forward.
 * @link Unknown Prop Warning - https://reactjs.org/warnings/unknown-prop.html
 */
export const shouldForwardProp =
  <TCustomProps extends Record<string, unknown>>(customProps: ReadonlyArray<keyof TCustomProps>) =>
  (prop: string): boolean =>
    !customProps.includes(prop);
