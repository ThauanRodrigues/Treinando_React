type Props = {
  nome: string;
};

export default function BtnCategory({ nome }: Props) {
  return <div className="dsc-category">{nome}</div>;
}
