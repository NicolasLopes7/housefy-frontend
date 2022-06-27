import { PropsWithChildren, ReactElement } from 'react';

type MaybeProps = PropsWithChildren<{
  render: unknown;
  FallbackComponent?: ReactElement;
}>;

export const Maybe: React.FC<MaybeProps> = ({
  render,
  FallbackComponent,
  ...props
}) => {
  if (render) return <>{props.children}</>;

  return <>{FallbackComponent ?? null}</>;
};
