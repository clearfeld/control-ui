type ComponentProp = {
    propName: string;
    description: string;
    type?: string;
    defaultValue?: string | null;
};

const makeComponentProp = (
  propName: string,
  description: string,
  type: string,
  defaultValue: string | null = null,
): ComponentProp => ({
  propName,
  description,
  type,
  defaultValue,
});

export type { ComponentProp };
export { makeComponentProp };