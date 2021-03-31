export const classNameGenerator = (className: string | undefined): string => {
  return className ? ` ${className}` : "";
};
