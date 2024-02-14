import { Link, LinkProps } from "expo-router";

type Props = {
  title?: string;
} & LinkProps<string>;

export function LinkButton({ title = "Voltar ao cardápio", ...rest }: Props) {
  return (
    <Link className="text-slate-300 text-base text-center font-body" {...rest}>
      {title}
    </Link>
  );
}
